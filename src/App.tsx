import { useState } from "react";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { TopNav } from "./components/TopNav";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./components/Home";
import { DoctorMode } from "./components/DoctorMode";
import { PatientMode } from "./components/PatientMode";
import { ResearcherMode } from "./components/ResearcherMode";
import { StudentMode } from "./components/StudentMode";
import { PharmaMode } from "./components/PharmaMode";
import { LabMode } from "./components/LabMode";
import { PhysiologistMode } from "./components/PhysiologistMode";
import { PsychologistMode } from "./components/PsychologistMode";
import { PublishPaper } from "./components/PublishPaper";
import { LatestNews } from "./components/LatestNews";
import { ConsentManager } from "./components/ConsentManager";
import { IdentityWallet } from "./components/IdentityWallet";
import { AIAssistant } from "./components/AIAssistant";
import { TeleVisit } from "./components/TeleVisit";
import { Achievements } from "./components/Achievements";
import { DigitalCredentials } from "./components/DigitalCredentials";
import { BlockchainWallet } from "./components/BlockchainWallet";
import { LinkedInFooter } from "./components/LinkedInFooter";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";

export type UserRole = "doctor" | "patient" | "researcher" | "student" | "pharma" | "lab" | "physiologist" | "psychologist";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [userName, setUserName] = useState("Kainat Gohar");
  const [userRole, setUserRole] = useState<UserRole>("researcher");
  const [user, setUser] = useState<any>(null);
  const [activeView, setActiveView] = useState("home");
  const [consentModalOpen, setConsentModalOpen] = useState(false);

  const handleLogin = (name: string, email: string, role: string, userId?: number) => {
    setUserName(name);
    setUserRole(role as UserRole);
    setUser({ id: userId, name, email, role });
    setIsAuthenticated(true);
    setIsGuest(false);
    toast.success("Welcome to EilaajVerse Browser!", {
      description: `Signed in as ${name}`,
    });
  };

  const handleSignup = (name: string, email: string, password: string, role: string, userId?: number) => {
    setUserName(name);
    setUserRole(role as any);
    setUser({ id: userId, name, email, role });
    setIsAuthenticated(true);
    setIsGuest(false);
    toast.success("Account created successfully!", {
      description: "Welcome to EilaajVerse Browser",
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsGuest(false);
    setActiveView("home");
    toast.info("Logged out successfully", {
      description: "Come back soon!",
    });
  };

  const handleSkipToExplore = () => {
    setUserName("Guest User");
    setUserRole("researcher");
    setIsAuthenticated(true);
    setIsGuest(true);
    toast.info("Welcome to Demo Mode!", {
      description: "You can switch between roles freely. Sign up to lock your role.",
    });
  };

  const handleRoleChange = (newRole: "doctor" | "patient" | "researcher" | "student" | "pharma" | "lab" | "physiologist" | "psychologist") => {
    setUserRole(newRole);
    setActiveView("dashboard");
    
    // Toast notification for role change
    const roleNames = {
      doctor: "Doctor",
      patient: "Patient",
      researcher: "Researcher",
      student: "Medical Student",
      pharma: "Pharmacy Professional",
      lab: "Laboratory Professional",
      physiologist: "Physiologist",
      psychologist: "Psychologist"
    };
    
    toast.success(`Switched to ${roleNames[newRole]} mode`, {
      description: `Now viewing ${roleNames[newRole]} dashboard`,
    });
  };

  // Show authentication screens if not logged in
  if (!isAuthenticated) {
    if (showSignup) {
      return <Signup onSignup={handleSignup} onSwitchToLogin={() => setShowSignup(false)} onSkipToExplore={handleSkipToExplore} />;
    }
    return <Login onLogin={handleLogin} onSwitchToSignup={() => setShowSignup(true)} onSkipToExplore={handleSkipToExplore} />;
  }

  const handleNotificationClick = () => {
    toast.info("You have 3 new notifications", {
      description: "2 consent requests and 1 lab result ready",
    });
  };

  const handleViewChange = (view: string) => {
    setActiveView(view);
    if (view === "consent") {
      setConsentModalOpen(true);
    }
  };

  const handleLogoClick = () => {
    setActiveView("home");
    toast.info("Navigated to Home", {
      description: "You are now viewing the home page",
    });
  };

  const renderContent = () => {
    switch (activeView) {
      case "home":
        return <Home userRole={userRole} onViewChange={handleViewChange} userName={userName} />;
      case "dashboard":
        if (userRole === "doctor") return <DoctorMode />;
        if (userRole === "patient") return <PatientMode />;
        if (userRole === "researcher") return <ResearcherMode />;
        if (userRole === "student") return <StudentMode />;
        if (userRole === "pharma") return <PharmaMode />;
        if (userRole === "lab") return <LabMode />;
        if (userRole === "physiologist") return <PhysiologistMode />;
        if (userRole === "psychologist") return <PsychologistMode />;
        return <Home userRole={userRole} onViewChange={handleViewChange} userName={userName} />;
      case "patients":
        return <DoctorMode />;
      case "patient-care":
        if (userRole === "physiologist") return <PhysiologistMode />;
        if (userRole === "psychologist") return <PsychologistMode />;
        return <DoctorMode />;
      case "records":
        return <PatientMode />;
      case "research":
      case "collections":
        return <ResearcherMode />;
      case "courses":
      case "learning":
        return <StudentMode />;
      case "prescriptions":
      case "inventory":
        return <PharmaMode />;
      case "tests":
      case "results":
        return <LabMode />;
      case "assessments":
      case "therapy-sessions":
        if (userRole === "physiologist") return <PhysiologistMode />;
        if (userRole === "psychologist") return <PsychologistMode />;
        return <Home userRole={userRole} onViewChange={handleViewChange} userName={userName} />;
      case "publish-paper":
        return <PublishPaper />;
      case "news":
        return <LatestNews />;
      case "wallet":
        return <BlockchainWallet />;
      case "achievements":
        return <Achievements userRole={userRole} />;
      case "credentials":
        return <DigitalCredentials userRole={userRole} userName={userName} userId={user?.id} isGuest={isGuest} />;
      case "ai-assistant":
        return <AIAssistant />;
      case "tele-visit":
        return <TeleVisit />;
      case "consent":
        return <PatientMode />;
      case "settings":
        return (
          <div className="h-full flex items-center justify-center bg-[#FAFAFA]">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#008080] to-[#00C897] flex items-center justify-center mx-auto mb-4">
                <span className="text-white" style={{ fontSize: '32px' }}>⚙️</span>
              </div>
              <h2 className="mb-2">Settings</h2>
              <p className="text-[#717182]" style={{ fontSize: '14px' }}>
                Configure your EilaajVerse Browser preferences
              </p>
            </div>
          </div>
        );
      default:
        return <Home userRole={userRole} onViewChange={handleViewChange} userName={userName} />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Navigation */}
      <TopNav
        userRole={userRole}
        userName={userName}
        isGuest={isGuest}
        onRoleChange={handleRoleChange}
        onNotificationClick={handleNotificationClick}
        onLogout={handleLogout}
        onLogoClick={handleLogoClick}
      />

      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          activeView={activeView}
          onViewChange={handleViewChange}
          userRole={userRole}
        />

        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          {renderContent()}
        </main>
      </div>

      {/* LinkedIn Footer */}
      <LinkedInFooter />

      {/* Consent Manager Modal */}
      <ConsentManager
        open={consentModalOpen}
        onClose={() => setConsentModalOpen(false)}
      />

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}
