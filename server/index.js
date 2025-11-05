import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import pg from 'pg';

const { Pool } = pg;
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    
    if (!name || !email || !password || !role) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userCheck.rows.length > 0) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role',
      [name, email, hashedPassword, role]
    );

    res.status(201).json({
      success: true,
      user: result.rows[0]
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Server error during signup' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = result.rows[0];
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error during login' });
  }
});

app.get('/api/credentials/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const result = await pool.query(
      'SELECT * FROM credentials WHERE user_id = $1 ORDER BY created_at DESC',
      [userId]
    );
    
    res.json({
      success: true,
      credentials: result.rows
    });
  } catch (error) {
    console.error('Get credentials error:', error);
    res.status(500).json({ error: 'Server error fetching credentials' });
  }
});

app.post('/api/credentials', async (req, res) => {
  try {
    const { userId, credentialType, credentialName, issuer, issueDate, expiryDate, credentialData } = req.body;
    
    if (!userId || !credentialType || !credentialName || !issuer || !issueDate) {
      return res.status(400).json({ error: 'Required fields missing' });
    }

    const result = await pool.query(
      `INSERT INTO credentials (user_id, credential_type, credential_name, issuer, issue_date, expiry_date, credential_data, verification_status) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [userId, credentialType, credentialName, issuer, issueDate, expiryDate || null, JSON.stringify(credentialData || {}), 'pending']
    );

    res.status(201).json({
      success: true,
      credential: result.rows[0]
    });
  } catch (error) {
    console.error('Add credential error:', error);
    res.status(500).json({ error: 'Server error adding credential' });
  }
});

app.put('/api/credentials/:id/verify', async (req, res) => {
  try {
    const { id } = req.params;
    const { verifiedBy, status, userId } = req.body;
    
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: Authentication required' });
    }
    
    const userCheck = await pool.query('SELECT is_admin FROM users WHERE id = $1', [userId]);
    if (userCheck.rows.length === 0 || !userCheck.rows[0].is_admin) {
      return res.status(403).json({ error: 'Unauthorized: Admin access required to verify credentials' });
    }
    
    const result = await pool.query(
      `UPDATE credentials 
       SET verification_status = $1, verified_by = $2, verified_at = CURRENT_TIMESTAMP, updated_at = CURRENT_TIMESTAMP
       WHERE id = $3 RETURNING *`,
      [status || 'verified', verifiedBy, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Credential not found' });
    }

    res.json({
      success: true,
      credential: result.rows[0]
    });
  } catch (error) {
    console.error('Verify credential error:', error);
    res.status(500).json({ error: 'Server error verifying credential' });
  }
});

app.get('/api/credentials/:id/export', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await pool.query('SELECT * FROM credentials WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Credential not found' });
    }

    const credential = result.rows[0];
    
    const exportData = {
      id: credential.id,
      type: credential.credential_type,
      name: credential.credential_name,
      issuer: credential.issuer,
      issueDate: credential.issue_date,
      expiryDate: credential.expiry_date,
      verificationStatus: credential.verification_status,
      verifiedBy: credential.verified_by,
      verifiedAt: credential.verified_at,
      data: credential.credential_data
    };

    res.json({
      success: true,
      credential: exportData
    });
  } catch (error) {
    console.error('Export credential error:', error);
    res.status(500).json({ error: 'Server error exporting credential' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend API server running on port ${PORT}`);
});
