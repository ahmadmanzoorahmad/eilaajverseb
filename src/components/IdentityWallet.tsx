import { 
  Shield, 
  QrCode, 
  Eye, 
  Trash2, 
  FileText, 
  Award,
  CreditCard,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

export function IdentityWallet() {
  const credentials = [
    {
      id: 1,
      type: "Patient Identity",
      title: "EilaajVerse Patient ID",
      issuer: "EilaajVerse Network",
      issuerDID: "did:sol:issuer...abc123",
      issuedDate: "Jan 15, 2024",
      expiryDate: "Jan 15, 2026",
      status: "active",
      icon: Shield,
      color: "from-[#008080] to-[#00C897]",
    },
    {
      id: 2,
      type: "Medical License",
      title: "Medical Doctor License - California",
      issuer: "California Medical Board",
      issuerDID: "did:sol:ca-med...def456",
      issuedDate: "Mar 10, 2020",
      expiryDate: "Mar 10, 2026",
      status: "active",
      icon: Award,
      color: "from-[#3B82F6] to-blue-600",
    },
    {
      id: 3,
      type: "Insurance",
      title: "Health Insurance Membership",
      issuer: "BlueCross BlueShield",
      issuerDID: "did:sol:bcbs...ghi789",
      issuedDate: "Jan 1, 2025",
      expiryDate: "Dec 31, 2025",
      status: "active",
      icon: CreditCard,
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="h-full overflow-auto bg-[#FAFAFA]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#008080] to-[#00C897] p-8 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-8 h-8" />
            <h1 className="text-white" style={{ fontSize: '28px', fontWeight: 600 }}>
              Identity Wallet
            </h1>
          </div>
          <p className="text-white/90" style={{ fontSize: '15px' }}>
            Your verifiable credentials secured by blockchain technology
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card className="p-6 rounded-2xl border-[rgba(0,0,0,0.1)] bg-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C897] to-[#008080] flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 600 }} className="text-[#008080]">
                  {credentials.length}
                </div>
                <div style={{ fontSize: '13px' }} className="text-[#717182]">
                  Active Credentials
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 rounded-2xl border-[rgba(0,0,0,0.1)] bg-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6] to-blue-600 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 600 }} className="text-[#3B82F6]">
                  12
                </div>
                <div style={{ fontSize: '13px' }} className="text-[#717182]">
                  Verifications
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 rounded-2xl border-[rgba(0,0,0,0.1)] bg-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 600 }} className="text-purple-600">
                  5
                </div>
                <div style={{ fontSize: '13px' }} className="text-[#717182]">
                  Presentations
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Credentials Grid */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2>Verifiable Credentials</h2>
            <Button variant="outline" className="rounded-xl">
              <Shield className="w-4 h-4 mr-2" />
              Request New VC
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {credentials.map((credential) => {
            const Icon = credential.icon;
            return (
              <Card key={credential.id} className="overflow-hidden rounded-3xl border-[rgba(0,0,0,0.1)] bg-white hover:shadow-lg transition-shadow">
                <div className={`h-2 bg-gradient-to-r ${credential.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${credential.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Main Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <Badge variant="outline" className="mb-2 rounded-full">
                            {credential.type}
                          </Badge>
                          <h3 className="mb-2">{credential.title}</h3>
                          <div className="space-y-1 text-[#717182]" style={{ fontSize: '13px' }}>
                            <div className="flex items-center gap-2">
                              <span>Issued by:</span>
                              <span style={{ fontWeight: 500 }} className="text-[#030213]">
                                {credential.issuer}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Shield className="w-3 h-3" />
                              <span className="font-mono text-[#008080]" style={{ fontSize: '11px' }}>
                                {credential.issuerDID}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Badge className="bg-[#00C897] text-white border-0 rounded-full">
                          {credential.status}
                        </Badge>
                      </div>

                      <Separator className="my-4" />

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <div style={{ fontSize: '11px' }} className="text-[#717182] mb-1">
                            Issued Date
                          </div>
                          <div style={{ fontSize: '13px', fontWeight: 500 }}>
                            {credential.issuedDate}
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: '11px' }} className="text-[#717182] mb-1">
                            Expiry Date
                          </div>
                          <div style={{ fontSize: '13px', fontWeight: 500 }}>
                            {credential.expiryDate}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="rounded-xl">
                          <QrCode className="w-3 h-3 mr-2" />
                          Share QR
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-xl">
                          <Eye className="w-3 h-3 mr-2" />
                          Present VC
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-xl">
                          <FileText className="w-3 h-3 mr-2" />
                          View Audit Log
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-xl text-red-600 hover:bg-red-50">
                          <Trash2 className="w-3 h-3 mr-2" />
                          Revoke
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* DID Info */}
        <Card className="mt-8 p-6 rounded-2xl border-[rgba(0,0,0,0.1)] bg-gradient-to-br from-blue-50 to-teal-50">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#008080] to-[#00C897] flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div style={{ fontWeight: 500 }} className="mb-1">Your Decentralized Identifier (DID)</div>
              <div className="font-mono text-[#008080] mb-3" style={{ fontSize: '14px' }}>
                did:sol:5FHneW6tcGfJkRrKriPa3u7HD54W3z3hPPKxQqGh
              </div>
              <p style={{ fontSize: '13px' }} className="text-[#717182] mb-3">
                This is your unique, self-sovereign identity on the Solana blockchain. You have complete control over your credentials and data.
              </p>
              <Button variant="outline" size="sm" className="rounded-xl">
                <ExternalLink className="w-3 h-3 mr-2" />
                View on Blockchain Explorer
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
