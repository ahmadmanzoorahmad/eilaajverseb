import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Shield, Mail, Lock, User, Eye, EyeOff, Stethoscope } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import logo from "../assets/logo.png";

interface SignupProps {
  onSignup: (name: string, email: string, password: string, role: string, userId?: number) => void;
  onSwitchToLogin: () => void;
  onSkipToExplore: () => void;
}

export function Signup({ onSignup, onSwitchToLogin, onSkipToExplore }: SignupProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (!role) {
      alert("Please select a role");
      return;
    }
    if ((role === "doctor" || role === "researcher" || role === "student" || role === "pharma" || role === "lab" || role === "physiologist" || role === "psychologist") && !specialization) {
      alert("Please select a specialization/field");
      return;
    }
    const fullName = `${firstName} ${lastName}`.trim();
    
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email,
          password,
          role
        }),
      });

      const data = await response.json();

      if (response.ok) {
        onSignup(fullName, email, password, role, data.user.id);
      } else {
        alert(data.error || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Failed to connect to server. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3B82F6] via-[#00C897] to-[#008080] p-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <button 
            onClick={onSkipToExplore}
            className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 hover:scale-105 transition-transform cursor-pointer shadow-2xl"
            title="Skip to Explore"
          >
            <img src={logo} alt="EilaajVerse Logo" className="w-full h-full object-cover" />
          </button>
          <h1 className="text-white mb-2" style={{ fontSize: '36px', fontWeight: 700 }}>
            EilaajVerse Browser
          </h1>
          <p className="text-white/90" style={{ fontSize: '16px' }}>
            Learn, Explore, Connect, and Heal
          </p>
        </div>

        {/* Signup Card */}
        <Card className="p-8 rounded-3xl backdrop-blur-lg bg-white/95 border-0 shadow-2xl">
          <div className="mb-6">
            <h2 className="mb-2">Create Account</h2>
            <p className="text-[#717182]" style={{ fontSize: '14px' }}>
              Join the healthcare revolution with blockchain-secured identity
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="firstName" className="mb-2 block">First Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717182]" />
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="pl-11 h-12 rounded-xl bg-[#FAFAFA] border-[rgba(0,0,0,0.1)]"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="lastName" className="mb-2 block">Last Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717182]" />
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="pl-11 h-12 rounded-xl bg-[#FAFAFA] border-[rgba(0,0,0,0.1)]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="mb-2 block">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717182]" />
                <Input
                  id="email"
                  type="email"
                  placeholder="user@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11 h-12 rounded-xl bg-[#FAFAFA] border-[rgba(0,0,0,0.1)]"
                  required
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <Label htmlFor="role" className="mb-2 block">Select Your Role</Label>
              <div className="relative">
                <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717182] z-10" />
                <Select value={role} onValueChange={(value) => { setRole(value); setSpecialization(""); }}>
                  <SelectTrigger className="pl-11 h-12 rounded-xl bg-[#FAFAFA] border-[rgba(0,0,0,0.1)]">
                    <SelectValue placeholder="Choose your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="patient">Patient</SelectItem>
                    <SelectItem value="doctor">Doctor</SelectItem>
                    <SelectItem value="researcher">Researcher</SelectItem>
                    <SelectItem value="student">Medical Student</SelectItem>
                    <SelectItem value="pharma">Pharmacy Professional</SelectItem>
                    <SelectItem value="lab">Lab Professional</SelectItem>
                    <SelectItem value="physiologist">Physiologist</SelectItem>
                    <SelectItem value="psychologist">Psychologist</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Doctor Specialization */}
            {role === "doctor" && (
              <div>
                <Label htmlFor="specialization" className="mb-2 block">Medical Specialization</Label>
                <div className="relative">
                  <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717182] z-10" />
                  <Select value={specialization} onValueChange={setSpecialization}>
                    <SelectTrigger className="pl-11 h-12 rounded-xl bg-[#FAFAFA] border-[rgba(0,0,0,0.1)]">
                      <SelectValue placeholder="Choose your specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="neurology">Neurology</SelectItem>
                      <SelectItem value="pediatrics">Pediatrics</SelectItem>
                      <SelectItem value="orthopedics">Orthopedics</SelectItem>
                      <SelectItem value="dermatology">Dermatology</SelectItem>
                      <SelectItem value="psychiatry">Psychiatry</SelectItem>
                      <SelectItem value="oncology">Oncology</SelectItem>
                      <SelectItem value="radiology">Radiology</SelectItem>
                      <SelectItem value="surgery">General Surgery</SelectItem>
                      <SelectItem value="internal-medicine">Internal Medicine</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Researcher Field */}
            {role === "researcher" && (
              <div>
                <Label htmlFor="specialization" className="mb-2 block">Research Field</Label>
                <div className="relative">
                  <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717182] z-10" />
                  <Select value={specialization} onValueChange={setSpecialization}>
                    <SelectTrigger className="pl-11 h-12 rounded-xl bg-[#FAFAFA] border-[rgba(0,0,0,0.1)]">
                      <SelectValue placeholder="Choose your field" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="molecular-biology">Molecular Biology</SelectItem>
                      <SelectItem value="genetics">Genetics</SelectItem>
                      <SelectItem value="immunology">Immunology</SelectItem>
                      <SelectItem value="pharmacology">Pharmacology</SelectItem>
                      <SelectItem value="clinical-trials">Clinical Trials</SelectItem>
                      <SelectItem value="biotechnology">Biotechnology</SelectItem>
                      <SelectItem value="epidemiology">Epidemiology</SelectItem>
                      <SelectItem value="neuroscience">Neuroscience</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Student Course */}
            {role === "student" && (
              <div>
                <Label htmlFor="specialization" className="mb-2 block">Course of Study</Label>
                <div className="relative">
                  <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717182] z-10" />
                  <Select value={specialization} onValueChange={setSpecialization}>
                    <SelectTrigger className="pl-11 h-12 rounded-xl bg-[#FAFAFA] border-[rgba(0,0,0,0.1)]">
                      <SelectValue placeholder="Choose your course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mbbs">MBBS (Bachelor of Medicine)</SelectItem>
                      <SelectItem value="md">MD (Doctor of Medicine)</SelectItem>
                      <SelectItem value="nursing">Nursing</SelectItem>
                      <SelectItem value="pharmacy">Pharmacy</SelectItem>
                      <SelectItem value="physiotherapy">Physiotherapy</SelectItem>
                      <SelectItem value="medical-lab">Medical Laboratory Science</SelectItem>
                      <SelectItem value="radiology-tech">Radiology Technology</SelectItem>
                      <SelectItem value="public-health">Public Health</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Pharmacy Type */}
            {role === "pharma" && (
              <div>
                <Label htmlFor="specialization" className="mb-2 block">Pharmacy Type</Label>
                <div className="relative">
                  <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717182] z-10" />
                  <Select value={specialization} onValueChange={setSpecialization}>
                    <SelectTrigger className="pl-11 h-12 rounded-xl bg-[#FAFAFA] border-[rgba(0,0,0,0.1)]">
                      <SelectValue placeholder="Choose pharmacy type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="retail">Retail Pharmacy</SelectItem>
                      <SelectItem value="hospital">Hospital Pharmacy</SelectItem>
                      <SelectItem value="clinical">Clinical Pharmacy</SelectItem>
                      <SelectItem value="industrial">Industrial Pharmacy</SelectItem>
                      <SelectItem value="compounding">Compounding Pharmacy</SelectItem>
                      <SelectItem value="regulatory">Regulatory Affairs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Lab Type */}
            {role === "lab" && (
              <div>
                <Label htmlFor="specialization" className="mb-2 block">Laboratory Type</Label>
                <div className="relative">
                  <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717182] z-10" />
                  <Select value={specialization} onValueChange={setSpecialization}>
                    <SelectTrigger className="pl-11 h-12 rounded-xl bg-[#FAFAFA] border-[rgba(0,0,0,0.1)]">
                      <SelectValue placeholder="Choose lab type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="diagnostic">Diagnostic Laboratory</SelectItem>
                      <SelectItem value="pathology">Pathology Lab</SelectItem>
                      <SelectItem value="microbiology">Microbiology Lab</SelectItem>
                      <SelectItem value="blood-bank">Blood Bank</SelectItem>
                      <SelectItem value="molecular">Molecular Diagnostics</SelectItem>
                      <SelectItem value="imaging">Imaging Center</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Physiologist Specialization */}
            {role === "physiologist" && (
              <div>
                <Label htmlFor="specialization" className="mb-2 block">Physiologist Specialization</Label>
                <div className="relative">
                  <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717182] z-10" />
                  <Select value={specialization} onValueChange={setSpecialization}>
                    <SelectTrigger className="pl-11 h-12 rounded-xl bg-[#FAFAFA] border-[rgba(0,0,0,0.1)]">
                      <SelectValue placeholder="Choose your specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sports">Sports Physiology</SelectItem>
                      <SelectItem value="clinical">Clinical Physiology</SelectItem>
                      <SelectItem value="exercise">Exercise Physiology</SelectItem>
                      <SelectItem value="cardiovascular">Cardiovascular Physiology</SelectItem>
                      <SelectItem value="respiratory">Respiratory Physiology</SelectItem>
                      <SelectItem value="neurophysiology">Neurophysiology</SelectItem>
                      <SelectItem value="musculoskeletal">Musculoskeletal Physiology</SelectItem>
                      <SelectItem value="rehabilitation">Rehabilitation Physiology</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Psychologist Specialization */}
            {role === "psychologist" && (
              <div>
                <Label htmlFor="specialization" className="mb-2 block">Psychology Specialization</Label>
                <div className="relative">
                  <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717182] z-10" />
                  <Select value={specialization} onValueChange={setSpecialization}>
                    <SelectTrigger className="pl-11 h-12 rounded-xl bg-[#FAFAFA] border-[rgba(0,0,0,0.1)]">
                      <SelectValue placeholder="Choose your specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clinical">Clinical Psychology</SelectItem>
                      <SelectItem value="counseling">Counseling Psychology</SelectItem>
                      <SelectItem value="forensic">Forensic Psychology</SelectItem>
                      <SelectItem value="neuropsychology">Neuropsychology</SelectItem>
                      <SelectItem value="child">Child & Adolescent Psychology</SelectItem>
                      <SelectItem value="health">Health Psychology</SelectItem>
                      <SelectItem value="organizational">Organizational Psychology</SelectItem>
                      <SelectItem value="educational">Educational Psychology</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Password */}
            <div>
              <Label htmlFor="password" className="mb-2 block">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717182]" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-11 pr-11 h-12 rounded-xl bg-[#FAFAFA] border-[rgba(0,0,0,0.1)]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#717182] hover:text-[#030213]"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <Label htmlFor="confirmPassword" className="mb-2 block">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717182]" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-11 pr-11 h-12 rounded-xl bg-[#FAFAFA] border-[rgba(0,0,0,0.1)]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#717182] hover:text-[#030213]"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#008080] hover:opacity-90 text-white mt-6"
            >
              Create Account
            </Button>

            {/* Skip & Explore Button */}
            <Button
              type="button"
              onClick={onSkipToExplore}
              variant="outline"
              className="w-full h-12 rounded-xl border-2 border-[#3B82F6]/30 text-[#3B82F6] hover:bg-[#3B82F6]/5 hover:border-[#3B82F6]"
            >
              Skip & Explore as Guest
            </Button>

            {/* Login Link */}
            <div className="text-center pt-4">
              <span className="text-[#717182]" style={{ fontSize: '14px' }}>
                Already have an account?{" "}
              </span>
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="text-[#3B82F6] hover:underline"
                style={{ fontSize: '14px', fontWeight: 500 }}
              >
                Sign in
              </button>
            </div>
          </form>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6">
          <div className="flex items-center justify-center gap-2 text-white/70" style={{ fontSize: '12px' }}>
            <Shield className="w-3 h-3" />
            <span>Your data is secured with blockchain technology</span>
          </div>
        </div>
      </div>
    </div>
  );
}
