import { 
  Shield, 
  FileText, 
  Clock, 
  CheckCircle2, 
  XCircle,
  AlertCircle,
  Loader2
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Slider } from "./ui/slider";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import { useState } from "react";

interface ConsentManagerProps {
  open: boolean;
  onClose: () => void;
}

export function ConsentManager({ open, onClose }: ConsentManagerProps) {
  const [blockchainStatus, setBlockchainStatus] = useState<"idle" | "recording" | "confirmed">("idle");
  const [duration, setDuration] = useState([24]); // hours

  const records = [
    { id: 1, type: "Blood Work Results", date: "Oct 24, 2025", size: "2.4 MB", granted: true },
    { id: 2, type: "Physical Exam Notes", date: "Oct 20, 2025", size: "856 KB", granted: true },
    { id: 3, type: "Prescription History", date: "Oct 18, 2025", size: "124 KB", granted: false },
    { id: 4, type: "Imaging - X-Ray", date: "Sep 15, 2025", size: "8.2 MB", granted: false },
    { id: 5, type: "Cardiology Consult", date: "Aug 30, 2025", size: "1.1 MB", granted: true },
  ];

  const handleGrantConsent = () => {
    setBlockchainStatus("recording");
    setTimeout(() => {
      setBlockchainStatus("confirmed");
      setTimeout(() => {
        setBlockchainStatus("idle");
      }, 2000);
    }, 2000);
  };

  const getDurationText = (hours: number) => {
    if (hours < 24) return `${hours} hours`;
    return `${Math.round(hours / 24)} days`;
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 rounded-3xl overflow-hidden">
        <DialogHeader className="p-6 pb-4 bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#008080] to-[#00C897] flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <DialogTitle>Consent Manager</DialogTitle>
              <DialogDescription>
                Control who can access your health records
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="p-6 pt-2">
          {/* Recipient DID Verification */}
          <div className="mb-6">
            <label className="block mb-2">Grant Access To</label>
            <div className="flex items-center gap-3 p-4 bg-[#FAFAFA] rounded-2xl border border-[rgba(0,0,0,0.1)]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#008080] flex items-center justify-center text-white">
                SW
              </div>
              <div className="flex-1">
                <div style={{ fontWeight: 500 }}>Dr. Sarah Williams</div>
                <div className="flex items-center gap-2 text-[#717182]" style={{ fontSize: '12px' }}>
                  <Shield className="w-3 h-3" />
                  <span className="font-mono">did:sol:7Qa8N...pLm3</span>
                  <Badge className="bg-[#00C897] text-white border-0 ml-1" style={{ fontSize: '10px' }}>
                    Verified
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Duration Slider */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <label>Access Duration</label>
              <Badge variant="outline" className="rounded-full">
                {getDurationText(duration[0])}
              </Badge>
            </div>
            <Slider
              value={duration}
              onValueChange={setDuration}
              min={1}
              max={168}
              step={1}
              className="mb-2"
            />
            <div className="flex justify-between text-[#717182]" style={{ fontSize: '11px' }}>
              <span>1 hour</span>
              <span>7 days</span>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Records List */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <label>Select Records to Share</label>
              <Button variant="ghost" size="sm" style={{ fontSize: '12px' }}>
                Select All
              </Button>
            </div>
            <ScrollArea className="h-64 pr-4">
              <div className="space-y-2">
                {records.map((record) => (
                  <div
                    key={record.id}
                    className="flex items-center justify-between p-4 rounded-xl border border-[rgba(0,0,0,0.1)] hover:bg-[#FAFAFA] transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <FileText className="w-5 h-5 text-[#717182]" />
                      <div>
                        <div style={{ fontWeight: 500, fontSize: '14px' }}>{record.type}</div>
                        <div className="flex items-center gap-3 text-[#717182]" style={{ fontSize: '12px' }}>
                          <span>{record.date}</span>
                          <span>•</span>
                          <span>{record.size}</span>
                        </div>
                      </div>
                    </div>
                    <Switch defaultChecked={record.granted} />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Blockchain Status Banner */}
          {blockchainStatus !== "idle" && (
            <div className={`p-4 rounded-2xl mb-4 ${
              blockchainStatus === "recording" 
                ? "bg-blue-50 border border-blue-200" 
                : "bg-emerald-50 border border-emerald-200"
            }`}>
              <div className="flex items-center gap-3">
                {blockchainStatus === "recording" ? (
                  <>
                    <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
                    <div>
                      <p style={{ fontWeight: 500 }} className="text-blue-900">
                        Recording consent on Solana...
                      </p>
                      <p style={{ fontSize: '12px' }} className="text-blue-700">
                        Transaction hash: 0x9f2b...8a3c (pending confirmation)
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p style={{ fontWeight: 500 }} className="text-emerald-900">
                        Consent recorded successfully!
                      </p>
                      <p style={{ fontSize: '12px' }} className="text-emerald-700">
                        Transaction confirmed on blockchain
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handleGrantConsent}
              disabled={blockchainStatus !== "idle"}
              className="flex-1 bg-[#008080] hover:bg-[#008080]/90 text-white rounded-xl"
            >
              {blockchainStatus === "idle" ? (
                <>
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Grant Consent
                </>
              ) : blockchainStatus === "recording" ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Confirmed
                </>
              )}
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="rounded-xl"
            >
              Cancel
            </Button>
          </div>

          {/* Privacy Notice */}
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p style={{ fontSize: '11px' }} className="text-amber-900">
                Your consent is cryptographically signed and recorded on the Solana blockchain. 
                You can revoke access at any time.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
