import { 
  Home, 
  LayoutDashboard, 
  MessageSquare, 
  FileText, 
  Search, 
  Wallet, 
  Shield, 
  Settings,
  Activity,
  Video,
  GraduationCap,
  BookOpen,
  Pill,
  ClipboardCheck,
  Package,
  Newspaper,
  Upload,
  TestTube,
  FlaskConical,
  Award,
  FileCheck
} from "lucide-react";
import { cn } from "./ui/utils";

type UserRole = "doctor" | "patient" | "researcher" | "student" | "pharma" | "lab" | "physiologist" | "psychologist";

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
  userRole: UserRole;
}

export function Sidebar({ activeView, onViewChange, userRole }: SidebarProps) {
  const getMenuItems = () => {
    const common = [
      { id: "home", label: "Home", icon: Home },
      { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
      { id: "news", label: "Latest News", icon: Newspaper },
      { id: "ai-assistant", label: "AI Assistant", icon: MessageSquare },
    ];

    const roleSpecific: Record<UserRole, Array<{ id: string; label: string; icon: any }>> = {
      doctor: [
        { id: "patients", label: "Patients", icon: Activity },
        { id: "tele-visit", label: "Tele-Visit", icon: Video },
      ],
      patient: [
        { id: "records", label: "My Records", icon: FileText },
        { id: "consent", label: "Consent Manager", icon: Shield },
      ],
      researcher: [
        { id: "research", label: "Research", icon: Search },
        { id: "collections", label: "Collections", icon: FileText },
        { id: "publish-paper", label: "Publish Paper", icon: Upload },
      ],
      student: [
        { id: "courses", label: "My Courses", icon: GraduationCap },
        { id: "learning", label: "Learning Path", icon: BookOpen },
      ],
      pharma: [
        { id: "prescriptions", label: "Prescriptions", icon: Pill },
        { id: "inventory", label: "Inventory", icon: Package },
      ],
      lab: [
        { id: "tests", label: "Test Requests", icon: TestTube },
        { id: "results", label: "Lab Results", icon: FlaskConical },
      ],
      physiologist: [
        { id: "patient-care", label: "Patient Care", icon: Activity },
        { id: "assessments", label: "Assessments", icon: ClipboardCheck },
      ],
      psychologist: [
        { id: "patient-care", label: "Patient Care", icon: Activity },
        { id: "therapy-sessions", label: "Therapy Sessions", icon: Video },
      ],
    };

    const bottom = [
      { id: "achievements", label: "Achievements", icon: Award },
      { id: "credentials", label: "Credentials", icon: FileCheck },
      { id: "wallet", label: "Identity Wallet", icon: Wallet },
      { id: "settings", label: "Settings", icon: Settings },
    ];

    return [...common, ...roleSpecific[userRole], ...bottom];
  };

  const menuItems = getMenuItems();

  return (
    <div className="w-64 h-full bg-white border-r flex flex-col shadow-sm">
      {/* Menu Items */}
      <div className="flex-1 px-3 py-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
                activeView === item.id
                  ? "bg-gradient-to-r from-[#008080]/10 to-[#00C897]/10 text-[#008080]"
                  : "text-[#717182] hover:bg-[#FAFAFA]"
              )}
            >
              <Icon className="w-5 h-5" />
              <span style={{ fontSize: '14px', fontWeight: activeView === item.id ? 500 : 400 }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom Info */}
      <div className="p-4 border-t">
        <div className="bg-gradient-to-br from-[#3B82F6]/10 to-[#008080]/10 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-4 h-4 text-[#008080]" />
            <span style={{ fontSize: '12px', fontWeight: 500 }} className="text-[#008080]">
              Multi-Chain Status
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span style={{ fontSize: '11px' }} className="text-[#717182]">Solana</span>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-[#00C897] rounded-full animate-pulse"></div>
                <span style={{ fontSize: '10px' }} className="text-[#00C897]">Live</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span style={{ fontSize: '11px' }} className="text-[#717182]">VANAR</span>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-[#00C897] rounded-full animate-pulse"></div>
                <span style={{ fontSize: '10px' }} className="text-[#00C897]">Live</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span style={{ fontSize: '11px' }} className="text-[#717182]">Algorand</span>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-[#00C897] rounded-full animate-pulse"></div>
                <span style={{ fontSize: '10px' }} className="text-[#00C897]">Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
