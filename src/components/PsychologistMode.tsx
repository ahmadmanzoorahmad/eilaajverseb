import { useState } from "react";
import { 
  User, 
  Shield, 
  Brain, 
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
  Target,
  MessageCircle
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import { Progress } from "./ui/progress";
import { TreatmentPlanForm } from "./TreatmentPlanForm";
import { toast } from "sonner";

export function PsychologistMode() {
  const [treatmentPlanFormOpen, setTreatmentPlanFormOpen] = useState(false);
  const patient = {
    name: "Sarah Thompson",
    did: "did:sol:9HyQr...zTg6k",
    age: 34,
    gender: "Female",
    condition: "Anxiety Disorder & Work-related Stress",
    sessionCount: 12,
    lastVisit: "Oct 29, 2025",
  };

  const assessmentData = [
    { type: "PHQ-9 (Depression)", score: "8/27", date: "Oct 29, 2025", status: "improving", interpretation: "Mild" },
    { type: "GAD-7 (Anxiety)", score: "12/21", date: "Oct 29, 2025", status: "improving", interpretation: "Moderate" },
    { type: "DASS-21 Stress", score: "16/42", date: "Oct 27, 2025", status: "stable", interpretation: "Moderate" },
    { type: "Sleep Quality (PSQI)", score: "9/21", date: "Oct 26, 2025", status: "attention", interpretation: "Poor" },
  ];

  const treatmentResources = [
    {
      title: "Cognitive Behavioral Therapy for Anxiety Disorders",
      source: "Journal of Clinical Psychology",
      date: "2024",
      credibility: 96,
      type: "Evidence-Based Treatment",
    },
    {
      title: "Mindfulness-Based Stress Reduction: Clinical Applications",
      source: "American Psychological Association",
      date: "2025",
      credibility: 94,
      type: "Clinical Guideline",
    },
    {
      title: "Workplace Stress Management & Resilience Building",
      source: "Journal of Occupational Psychology",
      date: "2024",
      credibility: 91,
      type: "Intervention Study",
    },
  ];

  const consentLog = [
    { action: "Patient consent verified", time: "10:15 AM", txHash: "0x7d9a...3f2c" },
    { action: "Session notes encrypted", time: "10:18 AM", txHash: "0x8e4b...9a1d" },
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
          <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-purple-600" />
                <span style={{ fontSize: '12px', fontWeight: 600 }} className="text-purple-900">Level 18</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-purple-500 fill-purple-500" />
                <span style={{ fontSize: '11px' }} className="text-purple-700">4650 XP</span>
              </div>
            </div>
            <Progress value={82} className="h-1.5" />
          </div>

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#030213]">Patient Profile</h2>
            <Badge className="bg-[#00C897] text-white border-0">Verified</Badge>
          </div>
          
          {/* Patient Identity */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
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
          <div className="bg-purple-50 rounded-xl p-3 mb-4">
            <div style={{ fontSize: '12px' }} className="text-purple-900 mb-1 opacity-70">Primary Presentation</div>
            <div style={{ fontWeight: 500 }} className="text-purple-900">{patient.condition}</div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#FAFAFA] rounded-xl p-2.5 text-center">
              <div style={{ fontSize: '12px' }} className="text-[#717182]">Sessions</div>
              <div style={{ fontWeight: 600 }} className="text-[#008080]">{patient.sessionCount}</div>
            </div>
            <div className="bg-[#FAFAFA] rounded-xl p-2.5 text-center">
              <div style={{ fontSize: '12px' }} className="text-[#717182]">Last Visit</div>
              <div style={{ fontSize: '11px', fontWeight: 500 }}>Oct 29</div>
            </div>
          </div>
        </div>

        {/* Assessment Data */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-[#008080]" />
              <span style={{ fontWeight: 500 }}>Psychological Assessments</span>
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
                  <div className="flex items-center justify-between mb-1">
                    <div style={{ fontWeight: 600 }} className="text-[#008080]">
                      {assessment.score}
                    </div>
                    <span style={{ fontSize: '11px' }} className="text-[#717182]">
                      {assessment.interpretation}
                    </span>
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
            Update Treatment Notes
          </Button>
          <div className="grid grid-cols-2 gap-2">
            <Button 
              onClick={() => toast.success("New therapy session initiated", {
                description: "Creating session for patient"
              })}
              variant="outline" 
              className="rounded-xl"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              New Session
            </Button>
            <Button 
              onClick={() => toast.success("Starting tele-therapy session", {
                description: `Connecting to ${patient.name}...`
              })}
              variant="outline" 
              className="rounded-xl"
            >
              <Video className="w-4 h-4 mr-2" />
              Tele-Therapy
            </Button>
          </div>
        </div>
      </div>

      {/* Right Panel - Evidence-Based Resources */}
      <div className="flex-1 flex flex-col">
        <div className="p-6 border-b bg-white">
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-5 h-5 text-[#008080]" />
            <h2>Psychology Research & Evidence-Based Practice</h2>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search therapeutic interventions, assessment tools, clinical research..."
              className="w-full h-11 px-4 bg-[#FAFAFA] border border-[rgba(0,0,0,0.1)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00C897]/30"
              defaultValue="anxiety disorder treatment protocols"
            />
          </div>
        </div>

        <ScrollArea className="flex-1 p-6">
          <div className="space-y-4 max-w-4xl">
            {treatmentResources.map((result, idx) => (
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
                  Evidence-based therapeutic approaches and interventions for managing anxiety disorders and stress-related conditions in clinical settings...
                </p>
              </Card>
            ))}
          </div>
        </ScrollArea>

        {/* Audit Log Bar */}
        <div className="border-t bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#008080]" />
              <span style={{ fontSize: '13px', fontWeight: 500 }} className="text-[#008080]">
                Blockchain Audit Log (HIPAA Compliant)
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
        planType="psychological"
      />
    </div>
  );
}
