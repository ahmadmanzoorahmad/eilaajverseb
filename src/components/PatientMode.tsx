import { useState } from "react";
import { 
  Calendar, 
  FileText, 
  Pill, 
  TestTube, 
  MessageSquare, 
  Share2, 
  Shield,
  Clock,
  CheckCircle2,
  Activity,
  Trophy,
  Star,
  Target
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { Progress } from "./ui/progress";
import { AppointmentForm } from "./AppointmentForm";
import { ConsentManager } from "./ConsentManager";
import { PlayStoreQR } from "./PlayStoreQR";
import { toast } from "sonner";

export function PatientMode() {
  const [appointmentFormOpen, setAppointmentFormOpen] = useState(false);
  const [consentManagerOpen, setConsentManagerOpen] = useState(false);
  const [aiQuestion, setAiQuestion] = useState("");
  const healthTimeline = [
    {
      date: "Oct 24, 2025",
      type: "lab",
      title: "Blood Work - Complete Metabolic Panel",
      status: "completed",
      provider: "Dr. Michael Chen",
    },
    {
      date: "Oct 20, 2025",
      type: "encounter",
      title: "Annual Physical Examination",
      status: "completed",
      provider: "Dr. Sarah Williams",
    },
    {
      date: "Oct 18, 2025",
      type: "prescription",
      title: "Prescription Refill - Lisinopril 10mg",
      status: "active",
      provider: "Dr. Sarah Williams",
    },
    {
      date: "Sep 15, 2025",
      type: "lab",
      title: "Lipid Panel",
      status: "completed",
      provider: "LabCorp",
    },
  ];

  const blockchainActivity = [
    { action: "Consent granted to Dr. Williams", time: "2 hours ago", status: "confirmed" },
    { action: "Lab results shared with portal", time: "1 day ago", status: "confirmed" },
    { action: "Updated emergency contact", time: "3 days ago", status: "confirmed" },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "lab": return <TestTube className="w-4 h-4" />;
      case "encounter": return <Activity className="w-4 h-4" />;
      case "prescription": return <Pill className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "lab": return "from-blue-500 to-blue-600";
      case "encounter": return "from-[#008080] to-[#00C897]";
      case "prescription": return "from-purple-500 to-purple-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="h-full flex">
      {/* Main Dashboard */}
      <div className="flex-1 overflow-auto">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-br from-[#008080] to-[#00C897] p-8 text-white">
          <div className="max-w-4xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-white mb-2" style={{ fontSize: '32px', fontWeight: 600 }}>
                  Welcome back, Sarah! 👋
                </h1>
                <p className="text-white/90" style={{ fontSize: '16px' }}>
                  Your health records are secure and under your control. You have 3 active consents and 2 new lab results.
                </p>
              </div>
              {/* Gamification Badge */}
              <div className="bg-white/20 backdrop-blur rounded-2xl p-4 min-w-[160px]">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-5 h-5 text-yellow-300" />
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>Level 5</span>
                </div>
                <Progress value={82} className="h-2 mb-2 bg-white/20" />
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: '11px' }} className="text-white/80">820 / 1000 XP</span>
                  <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Button 
                onClick={() => setAppointmentFormOpen(true)}
                className="bg-white text-[#008080] hover:bg-white/90 rounded-xl"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
              <Button 
                onClick={() => setConsentManagerOpen(true)}
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 rounded-xl"
              >
                <Shield className="w-4 h-4 mr-2" />
                Manage Consent
              </Button>
              <Button 
                onClick={() => {
                  toast.success("Data sharing initiated", {
                    description: "Select providers to share your health data with"
                  });
                }}
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 rounded-xl"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Data
              </Button>
            </div>
          </div>
        </div>

        {/* Play Store QR Code */}
        <div className="p-8 pb-4">
          <PlayStoreQR userRole="patient" />
        </div>

        {/* Health Timeline */}
        <div className="p-8 pt-4">
          <div className="max-w-4xl">
            <div className="flex items-center justify-between mb-6">
              <h2>Health Timeline</h2>
              <Button variant="outline" className="rounded-xl" style={{ fontSize: '13px' }}>
                View All Records
              </Button>
            </div>

            <div className="space-y-4">
              {healthTimeline.map((item, idx) => (
                <Card key={idx} className="p-5 rounded-2xl border-[rgba(0,0,0,0.1)] hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getTypeColor(item.type)} flex items-center justify-center text-white flex-shrink-0`}>
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 style={{ fontSize: '15px' }}>{item.title}</h3>
                        <Badge className={item.status === "active" ? "bg-[#00C897] text-white border-0" : "bg-gray-100 text-gray-700 border-0"}>
                          {item.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-[#717182]" style={{ fontSize: '13px' }}>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.date}
                        </div>
                        <div>Provider: {item.provider}</div>
                      </div>
                    </div>
                    <Button variant="ghost" className="rounded-xl" style={{ fontSize: '13px' }}>
                      View Details
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - AI + Blockchain Feed */}
      <div className="w-96 border-l bg-white flex flex-col">
        {/* AI Medical Advisor */}
        <div className="p-6 border-b">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-white" />
            </div>
            <h3>AI Medical Advisor</h3>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4">
            <p style={{ fontSize: '11px' }} className="text-amber-900">
              ⚠️ Educational use only – not medical advice
            </p>
          </div>

          <div className="space-y-3 mb-4">
            <div className="bg-gradient-to-r from-blue-50 to-violet-50 rounded-2xl rounded-tl-none p-3">
              <p style={{ fontSize: '13px' }} className="text-gray-700">
                Based on your recent lab results, your cholesterol levels are within normal range. Keep maintaining your current diet and exercise routine! 💙
              </p>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              value={aiQuestion}
              onChange={(e) => setAiQuestion(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && aiQuestion.trim()) {
                  toast.info("AI Advisor is processing your question...", {
                    description: aiQuestion
                  });
                  setAiQuestion("");
                }
              }}
              placeholder="Ask about your health..."
              className="w-full h-10 px-4 pr-10 bg-[#FAFAFA] border border-[rgba(0,0,0,0.1)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30"
              style={{ fontSize: '13px' }}
            />
            <Button 
              onClick={() => {
                if (aiQuestion.trim()) {
                  toast.info("AI Advisor is processing your question...", {
                    description: aiQuestion
                  });
                  setAiQuestion("");
                }
              }}
              size="sm" 
              className="absolute right-1 top-1 h-8 w-8 p-0 bg-gradient-to-br from-blue-500 to-violet-500 hover:opacity-90 rounded-lg"
            >
              <MessageSquare className="w-4 h-4" />
            </Button>
          </div>

          <Button 
            onClick={() => {
              toast.success("Summary sent to your doctor", {
                description: "Your doctor will review the AI conversation"
              });
            }}
            variant="outline" 
            className="w-full mt-3 rounded-xl" 
            style={{ fontSize: '12px' }}
          >
            <Share2 className="w-3 h-3 mr-2" />
            Send summary to doctor
          </Button>
        </div>

        {/* Blockchain Activity Feed */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#008080]" />
              <span style={{ fontWeight: 500 }}>Blockchain Activity</span>
            </div>
          </div>
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-3">
              {blockchainActivity.map((activity, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00C897] to-[#008080] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p style={{ fontSize: '13px', fontWeight: 500 }} className="mb-1">
                      {activity.action}
                    </p>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-[#717182]" />
                      <span style={{ fontSize: '11px' }} className="text-[#717182]">
                        {activity.time}
                      </span>
                      <Badge className="bg-emerald-100 text-emerald-700 border-0" style={{ fontSize: '10px' }}>
                        {activity.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Quick Stats */}
        <div className="p-4 border-t grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-[#3B82F6]/10 to-[#008080]/10 rounded-xl p-3 text-center">
            <div style={{ fontSize: '24px', fontWeight: 600 }} className="text-[#008080]">3</div>
            <div style={{ fontSize: '11px' }} className="text-[#717182]">Active Consents</div>
          </div>
          <div className="bg-gradient-to-br from-[#3B82F6]/10 to-[#008080]/10 rounded-xl p-3 text-center">
            <div style={{ fontSize: '24px', fontWeight: 600 }} className="text-[#008080]">24</div>
            <div style={{ fontSize: '11px' }} className="text-[#717182]">Total Records</div>
          </div>
        </div>
      </div>
      
      <AppointmentForm 
        open={appointmentFormOpen} 
        onClose={() => setAppointmentFormOpen(false)}
        userRole="patient"
      />
      <ConsentManager
        open={consentManagerOpen}
        onClose={() => setConsentManagerOpen(false)}
      />
    </div>
  );
}
