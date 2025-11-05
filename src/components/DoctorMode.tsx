import { useState } from "react";
import { 
  User, 
  Shield, 
  AlertCircle, 
  Activity, 
  FileText, 
  Pill, 
  TestTube, 
  Video,
  Search,
  CheckCircle2,
  Clock,
  Trophy,
  Star,
  Zap
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import { Progress } from "./ui/progress";
import { PrescriptionForm } from "./PrescriptionForm";
import { LabOrderForm } from "./LabOrderForm";
import { PlayStoreQR } from "./PlayStoreQR";
import { toast } from "sonner";

export function DoctorMode() {
  const [prescriptionFormOpen, setPrescriptionFormOpen] = useState(false);
  const [labOrderFormOpen, setLabOrderFormOpen] = useState(false);
  const patient = {
    name: "Sarah Johnson",
    did: "did:sol:5FHneW...xQqGh",
    age: 34,
    gender: "Female",
    bloodType: "A+",
    allergies: ["Penicillin", "Latex"],
    lastVisit: "Oct 18, 2025",
  };

  const recentObservations = [
    { type: "Blood Pressure", value: "118/76 mmHg", date: "Oct 20, 2025", status: "normal" },
    { type: "Heart Rate", value: "72 bpm", date: "Oct 20, 2025", status: "normal" },
    { type: "Temperature", value: "98.4°F", date: "Oct 20, 2025", status: "normal" },
    { type: "Blood Glucose", value: "95 mg/dL", date: "Oct 18, 2025", status: "normal" },
  ];

  const evidenceResults = [
    {
      title: "Clinical Practice Guidelines for Hypertension Management",
      source: "American Heart Association",
      date: "2024",
      credibility: 95,
      type: "Guideline",
    },
    {
      title: "Meta-analysis: ACE Inhibitors vs ARBs in CKD",
      source: "NEJM",
      date: "2023",
      credibility: 92,
      type: "Meta-Analysis",
    },
    {
      title: "Long-term Effects of SGLT2 Inhibitors",
      source: "The Lancet",
      date: "2024",
      credibility: 88,
      type: "RCT",
    },
  ];

  const consentLog = [
    { action: "Patient consent granted", time: "10:45 AM", txHash: "0x7f3a...8bc2" },
    { action: "EHR access verified", time: "10:46 AM", txHash: "0x9a1c...4def" },
  ];

  return (
    <div className="flex h-full">
      {/* Left Panel - Patient Context */}
      <div className="w-96 border-r bg-white flex flex-col">
        <div className="p-6 border-b">
          {/* Play Store QR Code */}
          <div className="mb-4">
            <PlayStoreQR userRole="doctor" />
          </div>

          {/* Gamification Mini Bar */}
          <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-600" />
                <span style={{ fontSize: '12px', fontWeight: 600 }} className="text-yellow-900">Level 12</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span style={{ fontSize: '11px' }} className="text-yellow-700">2450 XP</span>
              </div>
            </div>
            <Progress value={81} className="h-1.5" />
          </div>

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#030213]">Patient Context</h2>
            <Badge className="bg-[#00C897] text-white border-0">Verified</Badge>
          </div>
          
          {/* Patient Identity */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#008080] flex items-center justify-center text-white">
              <User className="w-7 h-7" />
            </div>
            <div>
              <div style={{ fontWeight: 500 }}>{patient.name}</div>
              <div className="flex items-center gap-1 text-[#717182]" style={{ fontSize: '12px' }}>
                <Shield className="w-3 h-3" />
                <span className="font-mono">{patient.did}</span>
              </div>
            </div>
          </div>

          {/* Demographics */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#FAFAFA] rounded-xl p-2.5 text-center">
              <div style={{ fontSize: '12px' }} className="text-[#717182]">Age</div>
              <div style={{ fontWeight: 500 }}>{patient.age}</div>
            </div>
            <div className="bg-[#FAFAFA] rounded-xl p-2.5 text-center">
              <div style={{ fontSize: '12px' }} className="text-[#717182]">Gender</div>
              <div style={{ fontWeight: 500 }}>{patient.gender}</div>
            </div>
            <div className="bg-[#FAFAFA] rounded-xl p-2.5 text-center">
              <div style={{ fontSize: '12px' }} className="text-[#717182]">Blood</div>
              <div style={{ fontWeight: 500 }}>{patient.bloodType}</div>
            </div>
          </div>
        </div>

        {/* Allergies Alert */}
        <div className="p-6 border-b bg-red-50">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
            <div>
              <div style={{ fontWeight: 500 }} className="text-red-900 mb-1">Allergies</div>
              <div className="flex flex-wrap gap-2">
                {patient.allergies.map((allergy) => (
                  <Badge key={allergy} className="bg-red-100 text-red-800 border-red-200">
                    {allergy}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Observations */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#008080]" />
              <span style={{ fontWeight: 500 }}>Latest Observations</span>
            </div>
          </div>
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-3">
              {recentObservations.map((obs, idx) => (
                <div key={idx} className="bg-[#FAFAFA] rounded-xl p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span style={{ fontSize: '13px', fontWeight: 500 }}>{obs.type}</span>
                    <CheckCircle2 className="w-4 h-4 text-[#00C897]" />
                  </div>
                  <div style={{ fontWeight: 600 }} className="text-[#008080] mb-1">
                    {obs.value}
                  </div>
                  <div style={{ fontSize: '11px' }} className="text-[#717182]">{obs.date}</div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-t space-y-2">
          <Button 
            onClick={() => setPrescriptionFormOpen(true)}
            className="w-full bg-[#008080] hover:bg-[#008080]/90 text-white rounded-xl"
          >
            <Pill className="w-4 h-4 mr-2" />
            New e-Prescription
          </Button>
          <div className="grid grid-cols-2 gap-2">
            <Button 
              onClick={() => setLabOrderFormOpen(true)}
              variant="outline" 
              className="rounded-xl"
            >
              <TestTube className="w-4 h-4 mr-2" />
              Order Lab
            </Button>
            <Button 
              onClick={() => toast.success("Starting virtual visit", {
                description: `Connecting to ${patient.name}...`
              })}
              variant="outline" 
              className="rounded-xl"
            >
              <Video className="w-4 h-4 mr-2" />
              Start Visit
            </Button>
          </div>
        </div>
      </div>

      <PrescriptionForm 
        open={prescriptionFormOpen} 
        onClose={() => setPrescriptionFormOpen(false)}
        patientName={patient.name}
      />
      <LabOrderForm 
        open={labOrderFormOpen} 
        onClose={() => setLabOrderFormOpen(false)}
        patientName={patient.name}
      />

      {/* Right Panel - Evidence Search */}
      <div className="flex-1 flex flex-col">
        <div className="p-6 border-b bg-white">
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-5 h-5 text-[#008080]" />
            <h2>Clinical Evidence & Guidelines</h2>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search clinical guidelines, trials, meta-analyses..."
              className="w-full h-11 px-4 bg-[#FAFAFA] border border-[rgba(0,0,0,0.1)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00C897]/30"
              defaultValue="hypertension treatment guidelines"
            />
          </div>
        </div>

        <ScrollArea className="flex-1 p-6">
          <div className="space-y-4 max-w-4xl">
            {evidenceResults.map((result, idx) => (
              <Card key={idx} className="p-5 rounded-2xl hover:shadow-md transition-shadow cursor-pointer border-[rgba(0,0,0,0.1)]">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="rounded-full">
                        {result.type}
                      </Badge>
                      <Badge className="bg-gradient-to-r from-[#00C897] to-[#008080] text-white border-0 rounded-full">
                        {result.credibility}% Credible
                      </Badge>
                    </div>
                    <h3 className="text-[#030213] mb-1">{result.title}</h3>
                    <div style={{ fontSize: '13px' }} className="text-[#717182]">
                      {result.source} • {result.date}
                    </div>
                  </div>
                  <FileText className="w-5 h-5 text-[#717182]" />
                </div>
                <p style={{ fontSize: '14px' }} className="text-[#717182] line-clamp-2">
                  Evidence-based recommendations for diagnosis, treatment, and management of hypertension in adult patients...
                </p>
              </Card>
            ))}
          </div>
        </ScrollArea>

        {/* Audit Log Bar */}
        <div className="border-t bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#008080]" />
              <span style={{ fontSize: '13px', fontWeight: 500 }} className="text-[#008080]">
                Blockchain Audit Log
              </span>
            </div>
            <div className="flex items-center gap-4">
              {consentLog.map((log, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#717182]" style={{ fontSize: '12px' }}>
                  <Clock className="w-3 h-3" />
                  <span>{log.action}</span>
                  <span className="font-mono text-[#008080]">{log.txHash}</span>
                  <span>{log.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
