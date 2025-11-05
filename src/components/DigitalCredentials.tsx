import { Shield, Award, FileCheck, Download, Share2, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useState, useEffect } from "react";
import { toast } from "sonner";

type UserRole = "doctor" | "patient" | "researcher" | "student" | "pharma" | "lab" | "physiologist" | "psychologist";

interface DigitalCredentialsProps {
  userRole: UserRole;
  userName: string;
  userId?: number;
  isGuest?: boolean;
}

export function DigitalCredentials({ userRole, userName, userId, isGuest = false }: DigitalCredentialsProps) {
  const [realCredentials, setRealCredentials] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isGuest && userId) {
      fetchCredentials();
    }
  }, [userId, isGuest]);

  const fetchCredentials = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/credentials/${userId}`);
      const data = await response.json();
      if (data.success) {
        setRealCredentials(data.credentials);
      }
    } catch (error) {
      console.error('Error fetching credentials:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (credId: number, credName: string) => {
    if (!userId) {
      toast.error('You must be logged in to verify credentials');
      return;
    }
    
    try {
      toast.info(`Submitting verification request for "${credName}"...`);
      
      const response = await fetch(`/api/credentials/${credId}/verify`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          verifiedBy: 'Admin', 
          status: 'pending_verification'
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success(`Verification request submitted for "${credName}". Awaiting admin and credential provider approval.`);
        fetchCredentials();
      } else {
        toast.error(data.error || 'Failed to submit verification request');
      }
    } catch (error) {
      toast.error('Failed to submit verification request');
    }
  };

  const handleExport = async (credId: number, credName: string) => {
    try {
      const response = await fetch(`/api/credentials/${credId}/export`);
      const data = await response.json();
      
      if (data.success) {
        const blob = new Blob([JSON.stringify(data.credential, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `credential-${credName.replace(/\s+/g, '-').toLowerCase()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        toast.success('Credential exported successfully!');
      } else {
        toast.error('Failed to export credential');
      }
    } catch (error) {
      toast.error('Failed to export credential');
    }
  };

  const roleCredentials: Record<UserRole, any> = {
    doctor: [
      { 
        name: "Medical License", 
        issuer: "Medical Board", 
        issued: "2020-05-15",
        chain: "Solana",
        verified: true,
        type: "Professional License"
      },
      { 
        name: "Cardiology Specialist", 
        issuer: "American College of Cardiology", 
        issued: "2021-08-20",
        chain: "VANAR",
        verified: true,
        type: "Certification"
      },
      { 
        name: "Tele-Medicine Certified", 
        issuer: "EilaajVerse", 
        issued: "2024-01-10",
        chain: "Algorand",
        verified: true,
        type: "Training Certificate"
      },
    ],
    patient: [
      { 
        name: "Health Records Owner", 
        issuer: "EilaajVerse", 
        issued: "2024-01-05",
        chain: "Solana",
        verified: true,
        type: "Identity Credential"
      },
      { 
        name: "Consent Manager", 
        issuer: "EilaajVerse", 
        issued: "2024-02-15",
        chain: "VANAR",
        verified: true,
        type: "Authorization"
      },
    ],
    researcher: [
      { 
        name: "PhD - Molecular Biology", 
        issuer: "Stanford University", 
        issued: "2019-06-01",
        chain: "Solana",
        verified: true,
        type: "Academic Degree"
      },
      { 
        name: "Research Ethics Certified", 
        issuer: "NIH", 
        issued: "2023-03-10",
        chain: "Algorand",
        verified: true,
        type: "Ethics Certification"
      },
      { 
        name: "Peer Reviewer", 
        issuer: "Nature Medicine", 
        issued: "2023-09-20",
        chain: "VANAR",
        verified: true,
        type: "Professional Role"
      },
    ],
    student: [
      { 
        name: "Medical Student ID", 
        issuer: "Johns Hopkins University", 
        issued: "2022-09-01",
        chain: "Solana",
        verified: true,
        type: "Student ID"
      },
      { 
        name: "Clinical Rotation Certified", 
        issuer: "Johns Hopkins Hospital", 
        issued: "2024-01-15",
        chain: "VANAR",
        verified: true,
        type: "Training Certificate"
      },
    ],
    pharma: [
      { 
        name: "Pharmacist License", 
        issuer: "State Board of Pharmacy", 
        issued: "2018-07-01",
        chain: "Solana",
        verified: true,
        type: "Professional License"
      },
      { 
        name: "Compounding Specialist", 
        issuer: "PCCA", 
        issued: "2020-11-05",
        chain: "Algorand",
        verified: true,
        type: "Certification"
      },
      { 
        name: "Medication Safety Certified", 
        issuer: "ISMP", 
        issued: "2023-04-12",
        chain: "VANAR",
        verified: true,
        type: "Safety Certification"
      },
    ],
    lab: [
      { 
        name: "Medical Lab Technologist", 
        issuer: "ASCP", 
        issued: "2019-03-15",
        chain: "Solana",
        verified: true,
        type: "Professional License"
      },
      { 
        name: "Molecular Diagnostics Certified", 
        issuer: "AMT", 
        issued: "2021-06-20",
        chain: "VANAR",
        verified: true,
        type: "Certification"
      },
      { 
        name: "Quality Control Specialist", 
        issuer: "CAP", 
        issued: "2023-02-10",
        chain: "Algorand",
        verified: true,
        type: "QC Certification"
      },
    ],
    physiologist: [
      { 
        name: "Physiologist License", 
        issuer: "Board of Physiology", 
        issued: "2018-04-15",
        chain: "Solana",
        verified: true,
        type: "Professional License"
      },
      { 
        name: "Sports Physiology Specialist", 
        issuer: "American College of Sports Medicine", 
        issued: "2020-09-10",
        chain: "VANAR",
        verified: true,
        type: "Certification"
      },
      { 
        name: "Rehabilitation Certified", 
        issuer: "International Society of Physical and Rehabilitation Medicine", 
        issued: "2023-05-20",
        chain: "Algorand",
        verified: true,
        type: "Specialty Certification"
      },
    ],
    psychologist: [
      { 
        name: "Licensed Clinical Psychologist", 
        issuer: "State Psychology Board", 
        issued: "2017-06-01",
        chain: "Solana",
        verified: true,
        type: "Professional License"
      },
      { 
        name: "PhD - Clinical Psychology", 
        issuer: "University of California", 
        issued: "2016-05-15",
        chain: "VANAR",
        verified: true,
        type: "Academic Degree"
      },
      { 
        name: "Cognitive Behavioral Therapy Certified", 
        issuer: "Beck Institute", 
        issued: "2019-11-10",
        chain: "Algorand",
        verified: true,
        type: "Therapy Certification"
      },
      { 
        name: "HIPAA Compliance Certified", 
        issuer: "EilaajVerse", 
        issued: "2024-03-01",
        chain: "Solana",
        verified: true,
        type: "Compliance Certificate"
      },
    ],
  };

  const demoCredentials = roleCredentials[userRole];
  const credentials = isGuest ? demoCredentials : realCredentials.map(c => ({
    id: c.id,
    name: c.credential_name,
    issuer: c.issuer,
    issued: c.issue_date,
    chain: c.credential_data?.chain || 'Solana',
    verified: c.verification_status === 'verified',
    type: c.credential_type
  }));
  
  const hasNoRealCredentials = !isGuest && realCredentials.length === 0;

  const getChainColor = (chain: string) => {
    switch (chain) {
      case "Solana": return "bg-purple-100 text-purple-700";
      case "VANAR": return "bg-blue-100 text-blue-700";
      case "Algorand": return "bg-teal-100 text-teal-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="h-full overflow-auto bg-[#FAFAFA] p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2">Digital Credentials</h1>
            <p className="text-[#717182]" style={{ fontSize: '14px' }}>
              Your blockchain-verified certificates and credentials
            </p>
          </div>
          <Button className="bg-gradient-to-r from-[#008080] to-[#00C897] text-white hover:opacity-90">
            <Share2 className="w-4 h-4 mr-2" />
            Share Credentials
          </Button>
        </div>

        {/* Identity Card */}
        <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-[#3B82F6] to-[#008080] text-white">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-white/80 mb-1" style={{ fontSize: '12px' }}>VERIFIED IDENTITY</p>
              <h2 className="text-white mb-2">{userName}</h2>
              <div className="flex items-center gap-2">
                <Badge className="bg-white/20 text-white border-0">
                  {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
                </Badge>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  <span style={{ fontSize: '12px' }}>Verified</span>
                </div>
              </div>
            </div>
            <Shield className="w-16 h-16 text-white/30" />
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
            <div>
              <p className="text-white/70 mb-1" style={{ fontSize: '11px' }}>DID</p>
              <p style={{ fontSize: '12px', fontFamily: 'monospace' }}>did:sol:8Kx...9zP</p>
            </div>
            <div>
              <p className="text-white/70 mb-1" style={{ fontSize: '11px' }}>Multi-Chain</p>
              <p style={{ fontSize: '12px' }}>3 Networks</p>
            </div>
            <div>
              <p className="text-white/70 mb-1" style={{ fontSize: '11px' }}>Credentials</p>
              <p style={{ fontSize: '12px' }}>{credentials.length} Active</p>
            </div>
          </div>
        </Card>

        {/* Credentials List */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="solana">Solana</TabsTrigger>
            <TabsTrigger value="vanar">VANAR</TabsTrigger>
            <TabsTrigger value="algorand">Algorand</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3 mt-4">
            {credentials.map((cred, index) => (
              <Card key={index} className="p-5 border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6]/10 to-[#00C897]/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-[#008080]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 style={{ fontSize: '16px' }}>{cred.name}</h3>
                        {cred.verified && (
                          <CheckCircle className="w-4 h-4 text-[#00C897]" />
                        )}
                      </div>
                      <p className="text-[#717182] mb-3" style={{ fontSize: '13px' }}>
                        Issued by {cred.issuer} • {new Date(cred.issued).toLocaleDateString()}
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge className={`${getChainColor(cred.chain)} border-0`} style={{ fontSize: '11px' }}>
                          {cred.chain}
                        </Badge>
                        <Badge className="bg-gray-100 text-gray-700 border-0" style={{ fontSize: '11px' }}>
                          {cred.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {!isGuest && cred.id && (
                      <>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="h-8"
                          onClick={() => handleVerify(cred.id, cred.name)}
                        >
                          <FileCheck className="w-3 h-3 mr-1" />
                          Verify
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="h-8"
                          onClick={() => handleExport(cred.id, cred.name)}
                        >
                          <Download className="w-3 h-3 mr-1" />
                          Export
                        </Button>
                      </>
                    )}
                    {isGuest && (
                      <>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="h-8"
                          onClick={() => toast.info('Please sign up or login to verify credentials')}
                        >
                          <FileCheck className="w-3 h-3 mr-1" />
                          Verify
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="h-8"
                          onClick={() => toast.info('Please sign up or login to export credentials')}
                        >
                          <Download className="w-3 h-3 mr-1" />
                          Export
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="solana" className="space-y-3 mt-4">
            {credentials.filter(c => c.chain === "Solana").map((cred, index) => (
              <Card key={index} className="p-5 border-0 shadow-sm">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-purple-600" />
                  <div>
                    <h3 style={{ fontSize: '16px' }}>{cred.name}</h3>
                    <p className="text-[#717182]" style={{ fontSize: '13px' }}>{cred.issuer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="vanar" className="space-y-3 mt-4">
            {credentials.filter(c => c.chain === "VANAR").map((cred, index) => (
              <Card key={index} className="p-5 border-0 shadow-sm">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 style={{ fontSize: '16px' }}>{cred.name}</h3>
                    <p className="text-[#717182]" style={{ fontSize: '13px' }}>{cred.issuer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="algorand" className="space-y-3 mt-4">
            {credentials.filter(c => c.chain === "Algorand").map((cred, index) => (
              <Card key={index} className="p-5 border-0 shadow-sm">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-teal-600" />
                  <div>
                    <h3 style={{ fontSize: '16px' }}>{cred.name}</h3>
                    <p className="text-[#717182]" style={{ fontSize: '13px' }}>{cred.issuer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Blockchain Networks */}
        <Card className="p-6 border-0 shadow-sm">
          <h3 className="mb-4">Connected Networks</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
              <div className="flex items-center justify-between mb-2">
                <span style={{ fontSize: '14px', fontWeight: 500 }}>Solana</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-[#717182]" style={{ fontSize: '12px' }}>
                {credentials.filter(c => c.chain === "Solana").length} credentials
              </p>
            </div>
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
              <div className="flex items-center justify-between mb-2">
                <span style={{ fontSize: '14px', fontWeight: 500 }}>VANAR</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-[#717182]" style={{ fontSize: '12px' }}>
                {credentials.filter(c => c.chain === "VANAR").length} credentials
              </p>
            </div>
            <div className="p-4 rounded-xl bg-teal-50 border border-teal-100">
              <div className="flex items-center justify-between mb-2">
                <span style={{ fontSize: '14px', fontWeight: 500 }}>Algorand</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-[#717182]" style={{ fontSize: '12px' }}>
                {credentials.filter(c => c.chain === "Algorand").length} credentials
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
