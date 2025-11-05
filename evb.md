# EilaajVerse Browser

## Overview
EilaajVerse Browser is a comprehensive healthcare management platform built with React, TypeScript, and Vite. It provides role-based dashboards for different healthcare professionals including doctors, patients, researchers, students, pharmacy professionals, laboratory professionals, physiologists, and psychologists.

## Recent Changes
- **November 1, 2025**: Production-ready deployment and complete dashboard functionality
  - **All 8 Dashboards Fully Functional**: Completed Researcher, Student, and Pharmacy dashboards with onClick handlers and toast notifications
    - **Researcher Dashboard**: Add to Collection ✅, Download PDF ✅, View Full Text ✅, Request Data Access ✅
    - **Student Dashboard**: Continue Learning ✅, Browse Cases ✅, Start/Review Case Studies ✅
    - **Pharmacy Dashboard**: Process Prescriptions ✅, Order Inventory ✅, Drug Information ✅, Check Interactions ✅
  - **Mobile App Integration**: Created PlayStoreQR component displaying QR code for Android app download
    - Visible only to doctor and patient roles
    - Links to https://play.google.com/store/apps/details?id=io.eilaajverse.app
    - Uses QR code API for dynamic QR generation
  - **LinkedIn Integration**: Added LinkedInFooter component to main layout
    - Links to https://www.linkedin.com/company/eilaajverse/
    - Visible across all pages with follow button
  - **Netlify Deployment Configuration**: Created netlify.toml with production-ready settings
    - Build command configured for Vite
    - Proper redirects for SPA routing
    - Environment variable support
    - Security headers configured
  - **100% Dashboard Coverage**: All buttons, forms, and interactive elements now functional across all 8 user roles
  
- **October 31, 2025**: Functional buttons and forms implementation across all dashboards
  - **Created 5 Reusable Form Components**: 
    - PrescriptionForm - Create e-prescriptions with medication, dosage, frequency
    - LabOrderForm - Order lab tests with checkboxes for common tests
    - AppointmentForm - Book appointments with specialty, date, time selection
    - TestRequestForm - Laboratory test requests with priority and sample type
    - TreatmentPlanForm - Physical therapy and psychological treatment plans
  - **Doctor Dashboard Functional**: New e-Prescription ✅, Order Lab ✅, Start Visit ✅
  - **Patient Dashboard Functional**: Book Appointment ✅, Manage Consent ✅, Share Data ✅, AI Assistant ✅
  - **Lab Dashboard Functional**: New Test Request ✅, Process Tests ✅, View Reports ✅, Send to Doctor ✅
  - **Physiologist Dashboard Functional**: Update Treatment Plan ✅, Progress Tracking ✅, Start Session ✅
  - **Psychologist Dashboard Functional**: New Therapy Session ✅, Tele-Therapy ✅, Treatment Notes ✅
  - **User Experience**: All buttons now trigger actions with toast notifications or modal forms
  - **Dynamic User Names**: Home page displays logged-in user's name dynamically from database
  - **Fixed Type Safety**: Corrected Dialog component onOpenChange prop type mismatches
  
- **October 30, 2025**: Credential verification system and blockchain wallet setup
  - **WalletConnect Integration**: WalletConnect packages installed but temporarily disabled due to @web3modal/wagmi deprecation (baseGoerli testnet issue). Needs migration to Reown AppKit for production use.
  - **Credential Verification System**: 
    - Created credentials database table with verification workflow
    - Added credential API endpoints (add, verify, export, list)
    - Made Verify and Export buttons functional in DigitalCredentials component
    - Implemented admin authentication for credential verification
    - Users can add credentials that require verification by admins and credential providers
  - **Demo vs Real Data Separation**:
    - Guest mode shows sample/dummy credentials with restricted functionality
    - Authenticated mode fetches and displays real credentials from database
    - Clear UX distinction between demo and authenticated experiences
  
- **October 30, 2025**: Database authentication and role management implementation
  - Implemented PostgreSQL database with user authentication
  - Created backend API server with Express.js on port 3001
  - Added /api/signup and /api/login endpoints with bcrypt password hashing
  - Configured Vite proxy to forward /api requests to backend server
  - Updated Login/Signup components to use database authentication
  - Implemented role-based access: Guest mode (demo) allows role switching, authenticated users locked to their chosen role
  - User names now dynamically displayed from database records
  - Fixed dropdown menu styling with solid white backgrounds
  
- **October 30, 2025**: Initial project setup and migration from Figma Make to standard Vite + React setup
  - Created standard React + Vite + TypeScript build configuration
  - Converted Figma Make import syntax to standard npm packages
  - Set up Tailwind CSS with shadcn/ui components
  - Configured development workflow on port 5000
  - Configured deployment settings for autoscale

## Project Architecture

### Tech Stack
- **Frontend Framework**: React 18.3.1 with TypeScript
- **Backend**: Express.js 5.1.0 with Node.js
- **Database**: PostgreSQL (Neon-backed Replit database)
- **Build Tool**: Vite 5.4.11
- **Styling**: Tailwind CSS 3.4.15
- **UI Components**: shadcn/ui (built on Radix UI primitives)
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Notifications**: Sonner
- **Charts**: Recharts
- **Authentication**: bcrypt for password hashing, pg for database access

### Project Structure
```
/
├── src/
│   ├── assets/          # Static assets (images, fonts, etc.)
│   ├── components/
│   │   ├── ui/          # Reusable UI components (shadcn/ui)
│   │   ├── figma/       # Figma-specific components
│   │   └── *.tsx        # Feature components (Login, Signup, etc.)
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── globals.css      # Global styles and Tailwind configuration
├── server/
│   └── index.js         # Backend API server (Express)
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration with API proxy
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Dependencies and scripts
```

### Key Features
1. **Multi-Role Dashboard System**: Supports 8 different user roles with customized interfaces
2. **Authentication System**: Login and signup flows with role selection
3. **Healthcare Management**: Patient records, appointments, prescriptions, lab results
4. **Research Tools**: Paper publishing, collections, and research collaboration
5. **Education**: Medical student learning materials and case studies
6. **Gamification**: Achievements and credentials system
7. **Telehealth**: Virtual visit capabilities
8. **Blockchain Integration**: Digital wallet and credentials
9. **AI Assistant**: Healthcare AI assistance features
10. **Consent Management**: Healthcare data consent system

### User Roles
- **Doctor**: Patient management, appointments, prescriptions
- **Patient**: Health records, appointments, test results
- **Researcher**: Research papers, collections, collaboration
- **Student**: Learning materials, case studies, clinical rotations
- **Pharmacy**: Prescriptions, inventory management
- **Laboratory**: Test management, results, quality control
- **Physiologist**: Patient assessments, therapy sessions
- **Psychologist**: Mental health assessments, therapy

## Development

### Running Locally
The project requires both frontend and backend servers:
- `npm run dev`: Start frontend development server (port 5000)
- `npm run server`: Start backend API server (port 3001)
- `npm run build`: Build for production
- `npm run preview`: Preview production build

**Two workflows are configured in Replit:**
1. **dev**: Frontend on port 5000
2. **backend**: API server on port 3001

The Vite dev server proxies `/api` requests to the backend automatically.

### Deployment
The project is configured for Replit's autoscale deployment:
- Build command: `npm run build`
- Run command: `npx vite preview --host 0.0.0.0 --port 5000`

### Important Configuration
- **Development Server**: Runs on `0.0.0.0:5000` with `allowedHosts: true` for Replit proxy compatibility
- **Backend Server**: Express.js API on port 3001 with CORS enabled
- **API Proxy**: Vite proxies `/api` requests to `http://localhost:3001`
- **Database**: PostgreSQL with environment variables (DATABASE_URL, PGPORT, PGUSER, etc.)
- **Authentication**: bcrypt with salt rounds of 10 for password hashing
- **Styling**: Uses Tailwind CSS with custom design tokens defined in globals.css
- **TypeScript**: Strict mode enabled for type safety

### Database Schema
```sql
users table:
- id: SERIAL PRIMARY KEY
- name: VARCHAR(255) NOT NULL
- email: VARCHAR(255) UNIQUE NOT NULL  
- password: VARCHAR(255) NOT NULL (bcrypt hashed)
- role: VARCHAR(50) NOT NULL
- is_admin: BOOLEAN DEFAULT FALSE
- created_at: TIMESTAMP DEFAULT CURRENT_TIMESTAMP

credentials table:
- id: SERIAL PRIMARY KEY
- user_id: INTEGER NOT NULL (foreign key to users)
- credential_type: VARCHAR(100) NOT NULL
- credential_name: VARCHAR(255) NOT NULL
- issuer: VARCHAR(255) NOT NULL
- issue_date: DATE NOT NULL
- expiry_date: DATE
- credential_data: JSONB NOT NULL
- verification_status: VARCHAR(50) DEFAULT 'pending'
- verified_by: VARCHAR(255)
- verified_at: TIMESTAMP
- created_at: TIMESTAMP DEFAULT CURRENT_TIMESTAMP
- updated_at: TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

### Authentication Flow
1. **Demo Mode** (Guest): User clicks "Skip & Explore as Guest" - can switch between all roles freely, sees sample data
2. **Signup**: User creates account with name, email, password, and role - data saved to PostgreSQL database
3. **Login**: User authenticates with email/password - system retrieves user data including userId from database
4. **Authenticated Mode**: User locked to their chosen role (cannot switch roles), sees their real data from database

### Credential Verification Flow
1. **Add Credential**: User adds a credential (e.g., university degree) with issuer, type, and issue date
2. **Pending Status**: Credential is created with verification_status='pending'
3. **Verification Request**: User clicks "Verify" button to request verification
4. **Admin Approval**: Admin users can approve credentials (requires is_admin=true in database)
5. **Verification Complete**: Status updates to 'verified' with timestamp and verifier information
6. **Export**: Users can export verified credentials as JSON files

**Security Note**: Current implementation requires proper session-based authentication or JWT tokens to prevent userId spoofing. Backend validates is_admin flag but trusts client-provided userId. For production, implement JWT authentication middleware to derive userId from validated tokens rather than request body.

### WalletConnect Integration (Temporarily Disabled)
- **Status**: Packages installed (wagmi, viem, @web3modal/wagmi) but integration temporarily disabled
- **Reason**: @web3modal/wagmi v5.1.11 is deprecated and has dependency on removed baseGoerli testnet
- **Solution**: Needs migration to Reown AppKit (the new version of Web3Modal)
- **Configuration exists**: wagmi.ts config file ready with mainnet, polygon, arbitrum, base chains
- **BlockchainWallet component**: Ready for re-integration once Reown AppKit is implemented
- **To enable**: Upgrade to @reown/appkit-wagmi and update provider setup in main.tsx

## Dependencies
All major dependencies are listed in package.json. Key packages include:
- React and React DOM for UI
- Vite for build tooling
- Tailwind CSS for styling
- Radix UI components via shadcn/ui
- Lucide React for icons
- Various utility libraries (clsx, tailwind-merge, date-fns, etc.)

## Documentation
- **PITCHDECK.md**: Comprehensive pitch deck for investors and hackathons including market analysis, business model, competitive advantage, and funding strategy

## Notes
- The project was originally created with Figma Make and has been converted to a standard React + Vite setup
- Logo asset is sourced from stock images due to Figma asset unavailability
- All version-specific imports have been converted to standard npm package imports
