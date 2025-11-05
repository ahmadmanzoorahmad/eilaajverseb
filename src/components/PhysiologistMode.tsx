import { useState } from "react";
import { 
  User, 
  Shield, 
  Activity, 
  FileText, 
  Heart,
  Video,
  Search,
  CheckCircle2,
  Clock,
  Trophy,
  Star,
  TrendingUp,
  Zap,
  Target
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import { Progress } from "./ui/progress";
import { TreatmentPlanForm } from "./TreatmentPlanForm";
import { toast } from "sonner";

export function PhysiologistMode() {
  const [treatmentPlanFormOpen, setTreatmentPlanFormOpen] = useState(false);
  const patient = {
    name: "Michael Anderson",
    did: "did:sol:8GxPq...yRf4z",
    age: 42,
    gender: "Male",
    condition: "Post-stroke rehabilitation",
    sessionCount: 18,
    lastVisit: "Oct 28, 2025",
  };

  const assessmentData = [
    { type: "Mobility Assessment", score: "78%", date: "Oct 28, 2025", status: "improving" },
    { type: "Strength Test", score: "6/10", date: "Oct 28, 2025", status: "stable" },
    { type: "Range of Motion", score: "85°", date: "Oct 28, 2025", status: "improving" },
    { type: "Balance Test", score: "7.5/10", date: "Oct 26, 2025", status: "improving" },
  ];

  const treatmentPlans = [
    {
      title: "Evidence-Based Physical Therapy for Stroke Recovery",
      source: "Journal of NeuroPhysical Therapy",
      date: "2024",
      credibility: 94,
      type: "Clinical Study",
    },
    {
      title: "Neuroplasticity and Motor Rehabilitation",
      source: "Physical Therapy International",
      date: "2024",
      credibility: 91,
      type: "Meta-Analysis",
    },
    {
      title: "Gait Training Protocols for Stroke Patients",
      source: "American Physical Therapy Association",
      date: "2025",
      credibility: 89,
      type: "Guideline",
    },
  ];

  const consentLog = [
    { action: "Patient consent verified", time: "9:30 AM", txHash: "0x3c8d...7a9e" },
    { action: "Treatment plan updated", time: "9:32 AM", txHash: "0x5b2f...1c4d" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "improving": return "text-[#00C897] bg-[#00C897]/10";
      case "stable": return "text-blue-600 bg-blue-50";
      case "attention": return "text-amber-600 bg-amber-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="flex h-full">
      {/* Left Panel - Patient Context */}
      <div className="w-96 border-r bg-white flex flex-col">
        <div className="p-6 border-b">
          {/* Gamification Mini Bar */}
          <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-600" />
                <span style={{ fontSize: '12px', fontWeight: 600 }} className="text-yellow-900">Level 15</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span style={{ fontSize: '11px' }} className="text-yellow-700">3820 XP</span>
              </div>
            </div>
            <Progress value={76} className="h-1.5" />
          </div>

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#030213]">Patient Profile</h2>
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
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-[#FAFAFA] rounded-xl p-2.5 text-center">
              <div style={{ fontSize: '12px' }} className="text-[#717182]">Age</div>
              <div style={{ fontWeight: 500 }}>{patient.age}</div>
            </div>
            <div className="bg-[#FAFAFA] rounded-xl p-2.5 text-center">
              <div style={{ fontSize: '12px' }} className="text-[#717182]">Gender</div>
              <div style={{ fontWeight: 500 }}>{patient.gender}</div>
            </div>
          </div>

          {/* Condition Info */}
          <div className="bg-blue-50 rounded-xl p-3 mb-4">
            <div style={{ fontSize: '12px' }} className="text-blue-900 mb-1 opacity-70">Primary Condition</div>
            <div style={{ fontWeight: 500 }} className="text-blue-900">{patient.condition}</div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#FAFAFA] rounded-xl p-2.5 text-center">
              <div style={{ fontSize: '12px' }} className="text-[#717182]">Sessions</div>
              <div style={{ fontWeight: 600 }} className="text-[#008080]">{patient.sessionCount}</div>
            </div>
            <div className="bg-[#FAFAFA] rounded-xl p-2.5 text-center">
              <div style={{ fontSize: '12px' }} className="text-[#717182]">Last Visit</div>
              <div style={{ fontSize: '11px', fontWeight: 500 }}>Oct 28</div>
            </div>
          </div>
        </div>

        {/* Assessment Data */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#008080]" />
              <span style={{ fontWeight: 500 }}>Recent Assessments</span>
            </div>
          </div>
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-3">
              {assessmentData.map((assessment, idx) => (
                <div key={idx} className="bg-[#FAFAFA] rounded-xl p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span style={{ fontSize: '13px', fontWeight: 500 }}>{assessment.type}</span>
                    <Badge className={getStatusColor(assessment.status)}>
                      {assessment.status}
                    </Badge>
                  </div>
                  <div style={{ fontWeight: 600 }} className="text-[#008080] mb-1">
                    {assessment.score}
                  </div>
                  <div style={{ fontSize: '11px' }} className="text-[#717182]">{assessment.date}</div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-t space-y-2">
          <Button 
            onClick={() => setTreatmentPlanFormOpen(true)}
            className="w-full bg-[#008080] hover:bg-[#008080]/90 text-white rounded-xl"
          >
            <FileText className="w-4 h-4 mr-2" />
            Update Treatment Plan
          </Button>
          <div className="grid grid-cols-2 gap-2">
            <Button 
              onClick={() => toast.info("Viewing patient progress", {
                description: "Loading progress reports and metrics"
              })}
              variant="outline" 
              className="rounded-xl"
            >
              <Heart className="w-4 h-4 mr-2" />
              Progress
            </Button>
            <Button 
              onClick={() => toast.success("Starting therapy session", {
                description: `Connecting to ${patient.name}...`
              })}
              variant="outline" 
              className="rounded-xl"
            >
              <Video className="w-4 h-4 mr-2" />
              Start Session
            </Button>
          </div>
        </div>
      </div>

      {/* Right Panel - Treatment Research */}
      <div className="flex-1 flex flex-col">
        <div className="p-6 border-b bg-white">
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-5 h-5 text-[#008080]" />
            <h2>Physical Therapy Research & Guidelines</h2>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search treatment protocols, rehabilitation techniques..."
              className="w-full h-11 px-4 bg-[#FAFAFA] border border-[rgba(0,0,0,0.1)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00C897]/30"
              defaultValue="stroke rehabilitation protocols"
            />
          </div>
        </div>

        <ScrollArea className="flex-1 p-6">
          <div className="space-y-4 max-w-4xl">
            {treatmentPlans.map((result, idx) => (
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
                  Evidence-based protocols for neurological rehabilitation and motor recovery in post-stroke patients...
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
      
      <TreatmentPlanForm 
        open={treatmentPlanFormOpen} 
        onClose={() => setTreatmentPlanFormOpen(false)}
        patientName={patient.name}
        planType="physical"
      />
    </div>
  );
}
