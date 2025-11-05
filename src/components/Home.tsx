import { 
  Shield, 
  Activity, 
  Users, 
  FileText, 
  TrendingUp,
  Calendar,
  MessageSquare,
  Award,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  BookOpen,
  Pill,
  ClipboardCheck,
  Package,
  Upload,
  Newspaper,
  TestTube,
  FlaskConical,
  Clock
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

type UserRole = "doctor" | "patient" | "researcher" | "student" | "pharma" | "lab" | "physiologist" | "psychologist";

interface HomeProps {
  userRole: UserRole;
  onViewChange: (view: string) => void;
  userName: string;
}

export function Home({ userRole, onViewChange, userName }: HomeProps) {
  const getRolePrefix = (role: UserRole): string => {
    if (role === 'doctor' || role === 'lab' || role === 'physiologist' || role === 'psychologist') {
      return 'Dr. ';
    }
    return '';
  };
  const roleContent: Record<UserRole, any> = {
    doctor: {
      title: `Welcome back, ${getRolePrefix(userRole)}${userName}`,
      subtitle: "You have 12 patients scheduled today",
      stats: [
        { label: "Patients Today", value: "12", icon: Users, color: "from-[#008080] to-[#00C897]" },
        { label: "Pending Reviews", value: "8", icon: FileText, color: "from-[#3B82F6] to-blue-600" },
        { label: "Active Consents", value: "34", icon: Shield, color: "from-purple-500 to-purple-600" },
      ],
      quickActions: [
        { label: "View Patients", icon: Users, view: "patients" },
        { label: "Start Tele-Visit", icon: MessageSquare, view: "tele-visit" },
        { label: "Research Evidence", icon: FileText, view: "dashboard" },
      ],
    },
    patient: {
      title: `Welcome back, ${userName}`,
      subtitle: "Your health is looking good! 💙",
      stats: [
        { label: "Total Records", value: "24", icon: FileText, color: "from-[#008080] to-[#00C897]" },
        { label: "Active Consents", value: "3", icon: Shield, color: "from-[#3B82F6] to-blue-600" },
        { label: "Next Appointment", value: "3d", icon: Calendar, color: "from-purple-500 to-purple-600" },
      ],
      quickActions: [
        { label: "View Health Timeline", icon: Activity, view: "records" },
        { label: "AI Assistant", icon: MessageSquare, view: "ai-assistant" },
        { label: "Manage Consent", icon: Shield, view: "consent" },
      ],
    },
    researcher: {
      title: `Welcome back, ${userName}`,
      subtitle: "Explore the latest clinical research",
      stats: [
        { label: "Collections", value: "15", icon: FileText, color: "from-[#008080] to-[#00C897]" },
        { label: "Saved Papers", value: "107", icon: Award, color: "from-[#3B82F6] to-blue-600" },
        { label: "Citations", value: "234", icon: TrendingUp, color: "from-purple-500 to-purple-600" },
      ],
      quickActions: [
        { label: "Search Research", icon: FileText, view: "research" },
        { label: "Publish Paper", icon: Upload, view: "publish-paper" },
        { label: "Latest News", icon: Newspaper, view: "news" },
      ],
    },
    student: {
      title: `Welcome back, ${userName}`,
      subtitle: "Continue your medical education journey 📚",
      stats: [
        { label: "Active Courses", value: "3", icon: GraduationCap, color: "from-purple-600 to-blue-600" },
        { label: "Cases Completed", value: "24", icon: CheckCircle2, color: "from-[#3B82F6] to-blue-600" },
        { label: "Overall Average", value: "87%", icon: Award, color: "from-[#008080] to-[#00C897]" },
      ],
      quickActions: [
        { label: "Resume Learning", icon: BookOpen, view: "courses" },
        { label: "Case Studies", icon: Activity, view: "learning" },
        { label: "AI Study Assistant", icon: MessageSquare, view: "ai-assistant" },
      ],
    },
    pharma: {
      title: `Welcome back, ${userName}`,
      subtitle: "You have 8 pending prescriptions to process",
      stats: [
        { label: "Pending Rx", value: "8", icon: ClipboardCheck, color: "from-emerald-600 to-teal-600" },
        { label: "Filled Today", value: "24", icon: CheckCircle2, color: "from-[#3B82F6] to-blue-600" },
        { label: "Low Stock Items", value: "3", icon: Package, color: "from-orange-500 to-orange-600" },
      ],
      quickActions: [
        { label: "Prescription Queue", icon: Pill, view: "prescriptions" },
        { label: "Inventory Check", icon: Package, view: "inventory" },
        { label: "Drug Interactions", icon: Shield, view: "prescriptions" },
      ],
    },
    lab: {
      title: `Welcome back, ${getRolePrefix(userRole)}${userName}`,
      subtitle: "You have 24 pending test requests",
      stats: [
        { label: "Pending Tests", value: "24", icon: Clock, color: "from-[#3B82F6] to-blue-600" },
        { label: "Completed Today", value: "156", icon: CheckCircle2, color: "from-[#00C897] to-teal-600" },
        { label: "Critical Results", value: "3", icon: TestTube, color: "from-red-500 to-red-600" },
      ],
      quickActions: [
        { label: "Test Requests", icon: TestTube, view: "tests" },
        { label: "Lab Results", icon: FlaskConical, view: "results" },
        { label: "Quality Control", icon: Shield, view: "dashboard" },
      ],
    },
    physiologist: {
      title: `Welcome back, ${getRolePrefix(userRole)}${userName}`,
      subtitle: "You have 8 assessment sessions today",
      stats: [
        { label: "Sessions Today", value: "8", icon: Users, color: "from-yellow-600 to-orange-600" },
        { label: "Active Patients", value: "32", icon: Activity, color: "from-[#3B82F6] to-blue-600" },
        { label: "Assessments", value: "15", icon: ClipboardCheck, color: "from-[#00C897] to-teal-600" },
      ],
      quickActions: [
        { label: "Patient Care", icon: Users, view: "patient-care" },
        { label: "Physical Assessments", icon: Activity, view: "assessments" },
        { label: "Latest Research", icon: FileText, view: "news" },
      ],
    },
    psychologist: {
      title: `Welcome back, ${getRolePrefix(userRole)}${userName}`,
      subtitle: "You have 6 therapy sessions scheduled",
      stats: [
        { label: "Sessions Today", value: "6", icon: Users, color: "from-purple-600 to-pink-600" },
        { label: "Active Clients", value: "28", icon: Activity, color: "from-[#3B82F6] to-blue-600" },
        { label: "Treatment Plans", value: "18", icon: FileText, color: "from-[#00C897] to-teal-600" },
      ],
      quickActions: [
        { label: "Patient Care", icon: Users, view: "patient-care" },
        { label: "Therapy Sessions", icon: MessageSquare, view: "therapy-sessions" },
        { label: "Evidence-Based Tools", icon: FileText, view: "news" },
      ],
    },
  };

  const content = roleContent[userRole];

  const features = [
    {
      title: "Blockchain Identity",
      description: "Self-sovereign identity with DIDs and Verifiable Credentials on Solana",
      icon: Shield,
    },
    {
      title: "AI Medical Assistant",
      description: "Get instant health insights with our HIPAA-compliant AI advisor",
      icon: MessageSquare,
    },
    {
      title: "Consent Management",
      description: "You control who accesses your health data with blockchain-verified consent",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="h-full overflow-auto bg-[#FAFAFA]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#008080] to-[#00C897] p-12 text-white">
        <div className="max-w-6xl mx-auto">
          <Badge className="bg-white/20 text-white border-0 mb-4 backdrop-blur-sm">
            EilaajVerse Browser
          </Badge>
          <h1 className="text-white mb-3" style={{ fontSize: '36px', fontWeight: 600 }}>
            {content.title}
          </h1>
          <p className="text-white/90 mb-8" style={{ fontSize: '18px' }}>
            {content.subtitle}
          </p>

          {/* Quick Actions */}
          <div className="flex gap-3">
            {content.quickActions.map((action, idx) => {
              const Icon = action.icon;
              return (
                <Button
                  key={idx}
                  onClick={() => onViewChange(action.view)}
                  className="bg-white text-[#008080] hover:bg-white/90 rounded-xl"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {action.label}
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-6xl mx-auto px-12 -mt-8">
        <div className="grid grid-cols-3 gap-6 mb-12">
          {content.stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} className="p-6 rounded-2xl bg-white border-[rgba(0,0,0,0.1)] shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#717182]" />
                </div>
                <div style={{ fontSize: '32px', fontWeight: 600 }} className="mb-1">
                  {stat.value}
                </div>
                <div style={{ fontSize: '14px' }} className="text-[#717182]">
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="mb-6">Platform Features</h2>
          <div className="grid grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="p-6 rounded-2xl border-[rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#008080] to-[#00C897] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-2">{feature.title}</h3>
                  <p style={{ fontSize: '14px' }} className="text-[#717182]">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2>Recent Activity</h2>
            <Button variant="outline" className="rounded-xl">
              View All
            </Button>
          </div>
          <div className="space-y-3">
            {[
              { action: "Consent granted to Dr. Williams", time: "2 hours ago", status: "confirmed" },
              { action: "Lab results uploaded", time: "1 day ago", status: "confirmed" },
              { action: "Prescription created", time: "3 days ago", status: "confirmed" },
            ].map((activity, idx) => (
              <Card key={idx} className="p-4 rounded-2xl border-[rgba(0,0,0,0.1)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00C897] to-[#008080] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p style={{ fontWeight: 500 }}>{activity.action}</p>
                    <p style={{ fontSize: '13px' }} className="text-[#717182]">{activity.time}</p>
                  </div>
                </div>
                <Badge className="bg-emerald-100 text-emerald-700 border-0">
                  {activity.status}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
