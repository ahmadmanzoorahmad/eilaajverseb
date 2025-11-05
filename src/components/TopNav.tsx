import { Search, Shield, ChevronDown, Bell, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import logo from "../assets/logo.png";

interface TopNavProps {
  userRole: "doctor" | "patient" | "researcher" | "student" | "pharma" | "lab" | "physiologist" | "psychologist";
  userName: string;
  isGuest: boolean;
  onRoleChange: (role: "doctor" | "patient" | "researcher" | "student" | "pharma" | "lab" | "physiologist" | "psychologist") => void;
  onNotificationClick: () => void;
  onLogout?: () => void;
  onLogoClick?: () => void;
}

export function TopNav({ userRole, userName, isGuest, onRoleChange, onNotificationClick, onLogout, onLogoClick }: TopNavProps) {
  return (
    <div className="h-16 border-b bg-white px-6 flex items-center justify-between shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <button 
          onClick={onLogoClick}
          className="w-10 h-10 rounded-full overflow-hidden hover:opacity-80 transition-opacity cursor-pointer"
          title="Go to Home"
        >
          <img src={logo} alt="EilaajVerse Logo" className="w-full h-full object-cover" />
        </button>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[#030213]" style={{ fontWeight: 600, fontSize: '18px' }}>EilaajVerse Browser</span>
            <Badge className="bg-[#3B82F6] text-white border-0 rounded-full px-2 py-0.5" style={{ fontSize: '11px' }}>
              Web3
            </Badge>
          </div>
          <div style={{ fontSize: '11px' }} className="text-[#717182]">Learn, Explore, Connect, and Heal</div>
        </div>
      </div>

      {/* Global Search */}
      <div className="flex-1 max-w-2xl mx-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#717182]" />
          <input
            type="text"
            placeholder="Search patients, records, research, medications..."
            className="w-full h-11 pl-12 pr-4 bg-[#FAFAFA] border border-[rgba(0,0,0,0.1)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00C897]/30"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Verified Identity Badge */}
        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-[#00C897]/20">
          <Shield className="w-4 h-4 text-[#00C897]" />
          <div>
            <div style={{ fontSize: '11px' }} className="text-[#717182]">Verified DID</div>
            <div style={{ fontSize: '13px', fontWeight: 500 }} className="text-[#008080]">
              {userRole === "doctor" ? "Dr. " : ""}{userName}
            </div>
          </div>
          <Badge className="bg-[#00C897] text-white border-0 ml-1" style={{ fontSize: '10px' }}>VC</Badge>
        </div>

        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-xl hover:bg-[#FAFAFA]"
          onClick={onNotificationClick}
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#3B82F6] rounded-full"></span>
        </Button>

        {/* Profile Menu */}
        <div className="flex items-center gap-3 pl-3 border-l">
          <Avatar className="w-9 h-9">
            <AvatarFallback className="bg-gradient-to-br from-[#3B82F6] to-[#008080] text-white">
              {userName.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          {isGuest ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-2 hover:bg-gray-100 rounded-lg transition-colors outline-none">
                <span style={{ fontSize: '14px', fontWeight: 500 }}>
                  {userRole === "doctor" && "Doctor Mode"}
                  {userRole === "patient" && "Patient Mode"}
                  {userRole === "researcher" && "Researcher Mode"}
                  {userRole === "student" && "Student Mode"}
                  {userRole === "pharma" && "Pharmacy Mode"}
                  {userRole === "lab" && "Laboratory Mode"}
                  {userRole === "physiologist" && "Physiologist Mode"}
                  {userRole === "psychologist" && "Psychologist Mode"}
                </span>
                <ChevronDown className="w-4 h-4 text-[#717182]" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={() => onRoleChange("patient")}>
                  Patient
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onRoleChange("doctor")}>
                  Doctor
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onRoleChange("researcher")}>
                  Researcher
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onRoleChange("student")}>
                  Medical Student
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onRoleChange("pharma")}>
                  Pharmacy Professional
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onRoleChange("lab")}>
                  Lab Professional
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onRoleChange("physiologist")}>
                  Physiologist
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onRoleChange("psychologist")}>
                  Psychologist
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-1 px-2">
              <span style={{ fontSize: '14px', fontWeight: 500 }}>
                {userRole === "doctor" && "Doctor Mode"}
                {userRole === "patient" && "Patient Mode"}
                {userRole === "researcher" && "Researcher Mode"}
                {userRole === "student" && "Student Mode"}
                {userRole === "pharma" && "Pharmacy Mode"}
                {userRole === "lab" && "Laboratory Mode"}
                {userRole === "physiologist" && "Physiologist Mode"}
                {userRole === "psychologist" && "Psychologist Mode"}
              </span>
            </div>
          )}
        </div>

        {/* Logout Button */}
        {onLogout && (
          <Button
            variant="ghost"
            size="icon"
            className="ml-2 rounded-xl hover:bg-red-50 hover:text-red-600"
            onClick={onLogout}
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </Button>
        )}
      </div>
    </div>
  );
}
