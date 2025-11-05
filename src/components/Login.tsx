import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Shield, Mail, Lock, Eye, EyeOff } from "lucide-react";
import logo from "../assets/logo.png";

interface LoginProps {
  onLogin: (name: string, email: string, role: string, userId?: number) => void;
  onSwitchToSignup: () => void;
  onSkipToExplore: () => void;
}

export function Login({ onLogin, onSwitchToSignup, onSkipToExplore }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        onLogin(data.user.name, data.user.email, data.user.role, data.user.id);
      } else {
        alert(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Failed to connect to server. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#008080] via-[#00C897] to-[#3B82F6] p-4">
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

        {/* Login Card */}
        <Card className="p-8 rounded-3xl backdrop-blur-lg bg-white/95 border-0 shadow-2xl">
          <div className="mb-6">
            <h2 className="mb-2">Welcome Back</h2>
            <p className="text-[#717182]" style={{ fontSize: '14px' }}>
              Sign in to access your healthcare dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
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

            {/* Password */}
            <div>
              <Label htmlFor="password" className="mb-2 block">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717182]" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-[#3B82F6] hover:underline"
                style={{ fontSize: '14px' }}
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 rounded-xl bg-gradient-to-r from-[#008080] to-[#00C897] hover:opacity-90 text-white"
            >
              Sign In
            </Button>

            {/* Skip & Explore Button */}
            <Button
              type="button"
              onClick={onSkipToExplore}
              variant="outline"
              className="w-full h-12 rounded-xl border-2 border-[#008080]/30 text-[#008080] hover:bg-[#008080]/5 hover:border-[#008080]"
            >
              Skip & Explore as Guest
            </Button>

            {/* Sign Up Link */}
            <div className="text-center pt-4">
              <span className="text-[#717182]" style={{ fontSize: '14px' }}>
                Don't have an account?{" "}
              </span>
              <button
                type="button"
                onClick={onSwitchToSignup}
                className="text-[#3B82F6] hover:underline"
                style={{ fontSize: '14px', fontWeight: 500 }}
              >
                Sign up
              </button>
            </div>
          </form>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6">
          <div className="flex items-center justify-center gap-2 text-white/70" style={{ fontSize: '12px' }}>
            <Shield className="w-3 h-3" />
            <span>Blockchain-secured digital identity</span>
          </div>
        </div>
      </div>
    </div>
  );
}
