import { Award, Trophy, Star, Target, Zap, Crown, Shield, CheckCircle2 } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

type UserRole = "doctor" | "patient" | "researcher" | "student" | "pharma" | "lab" | "physiologist" | "psychologist";

interface AchievementsProps {
  userRole: UserRole;
}

export function Achievements({ userRole }: AchievementsProps) {
  const roleAchievements: Record<UserRole, any> = {
    doctor: {
      level: 12,
      xp: 2450,
      nextLevelXp: 3000,
      badges: [
        { name: "Patient Champion", icon: Trophy, earned: true, color: "text-yellow-500" },
        { name: "Early Adopter", icon: Star, earned: true, color: "text-blue-500" },
        { name: "500 Consultations", icon: Award, earned: true, color: "text-purple-500" },
        { name: "Tele-Health Master", icon: Target, earned: false, color: "text-gray-400" },
      ],
      recentAchievements: [
        "Completed 100 tele-visits",
        "Received 5-star rating from 50 patients",
        "Published medical insights",
      ],
    },
    patient: {
      level: 5,
      xp: 820,
      nextLevelXp: 1000,
      badges: [
        { name: "Health Tracker", icon: Trophy, earned: true, color: "text-green-500" },
        { name: "Consent Guardian", icon: Shield, earned: true, color: "text-blue-500" },
        { name: "Wellness Warrior", icon: Star, earned: false, color: "text-gray-400" },
        { name: "Data Sharer", icon: Award, earned: true, color: "text-purple-500" },
      ],
      recentAchievements: [
        "Logged health data for 30 days",
        "Granted 5 consent permissions",
        "Completed health assessment",
      ],
    },
    researcher: {
      level: 15,
      xp: 3200,
      nextLevelXp: 4000,
      badges: [
        { name: "Research Pioneer", icon: Crown, earned: true, color: "text-yellow-500" },
        { name: "10 Publications", icon: Trophy, earned: true, color: "text-purple-500" },
        { name: "Citation Leader", icon: Star, earned: true, color: "text-blue-500" },
        { name: "Peer Reviewer", icon: Award, earned: true, color: "text-green-500" },
      ],
      recentAchievements: [
        "Published 15 research papers",
        "Received 500+ citations",
        "Reviewed 25 papers",
      ],
    },
    student: {
      level: 8,
      xp: 1650,
      nextLevelXp: 2000,
      badges: [
        { name: "Quick Learner", icon: Zap, earned: true, color: "text-yellow-500" },
        { name: "Case Master", icon: Trophy, earned: true, color: "text-blue-500" },
        { name: "Perfect Score", icon: Star, earned: false, color: "text-gray-400" },
        { name: "Study Streak", icon: Target, earned: true, color: "text-green-500" },
      ],
      recentAchievements: [
        "Completed 50 case studies",
        "Maintained 7-day study streak",
        "Scored 90%+ on 10 quizzes",
      ],
    },
    pharma: {
      level: 10,
      xp: 2100,
      nextLevelXp: 2500,
      badges: [
        { name: "Safety Champion", icon: Shield, earned: true, color: "text-blue-500" },
        { name: "1000 Prescriptions", icon: Trophy, earned: true, color: "text-purple-500" },
        { name: "Zero Errors", icon: Star, earned: true, color: "text-yellow-500" },
        { name: "Inventory Expert", icon: Award, earned: false, color: "text-gray-400" },
      ],
      recentAchievements: [
        "Processed 1000 prescriptions",
        "Maintained zero error rate",
        "Optimized inventory system",
      ],
    },
    lab: {
      level: 9,
      xp: 1890,
      nextLevelXp: 2200,
      badges: [
        { name: "Accuracy Master", icon: Target, earned: true, color: "text-green-500" },
        { name: "Speed Runner", icon: Zap, earned: true, color: "text-yellow-500" },
        { name: "QC Champion", icon: Shield, earned: true, color: "text-blue-500" },
        { name: "5000 Tests", icon: Trophy, earned: false, color: "text-gray-400" },
      ],
      recentAchievements: [
        "Processed 3000+ tests",
        "Maintained 99.9% accuracy",
        "Passed all QC checks",
      ],
    },
    physiologist: {
      level: 15,
      xp: 3820,
      nextLevelXp: 5000,
      badges: [
        { name: "Rehabilitation Expert", icon: Trophy, earned: true, color: "text-yellow-500" },
        { name: "Patient Recovery", icon: Star, earned: true, color: "text-green-500" },
        { name: "Assessment Master", icon: Award, earned: true, color: "text-blue-500" },
        { name: "Research Contributor", icon: Crown, earned: false, color: "text-gray-400" },
      ],
      recentAchievements: [
        "Completed 500+ patient assessments",
        "Achieved 95% patient improvement rate",
        "Developed 3 custom treatment protocols",
      ],
    },
    psychologist: {
      level: 18,
      xp: 4650,
      nextLevelXp: 6000,
      badges: [
        { name: "Mental Health Champion", icon: Trophy, earned: true, color: "text-purple-500" },
        { name: "Therapeutic Excellence", icon: Star, earned: true, color: "text-pink-500" },
        { name: "Crisis Intervention", icon: Shield, earned: true, color: "text-blue-500" },
        { name: "1000 Sessions", icon: Crown, earned: true, color: "text-yellow-500" },
      ],
      recentAchievements: [
        "Conducted 1000+ therapy sessions",
        "98% client satisfaction rating",
        "Published 5 clinical case studies",
      ],
    },
  };

  const data = roleAchievements[userRole];
  const progressPercentage = (data.xp / data.nextLevelXp) * 100;

  return (
    <div className="h-full overflow-auto bg-[#FAFAFA] p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="mb-2">Achievements & Rewards</h1>
          <p className="text-[#717182]" style={{ fontSize: '14px' }}>
            Track your progress and earn badges for your contributions
          </p>
        </div>

      {/* Level & XP Card */}
      <Card className="p-6 border-0 shadow-sm bg-gradient-to-br from-[#3B82F6]/10 to-[#00C897]/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#00C897] flex items-center justify-center">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="mb-1">Level {data.level}</h3>
              <p className="text-[#717182]" style={{ fontSize: '13px' }}>
                {data.xp} / {data.nextLevelXp} XP
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[#717182] mb-1" style={{ fontSize: '12px' }}>Next Level</p>
            <p style={{ fontSize: '20px', fontWeight: 600 }} className="text-[#008080]">
              {data.nextLevelXp - data.xp} XP
            </p>
          </div>
        </div>
        <Progress value={progressPercentage} className="h-3" />
      </Card>

      {/* Badges Grid */}
      <div>
        <h3 className="mb-4">Your Badges</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <Card 
                key={badge.name} 
                className={`p-4 border-0 shadow-sm text-center transition-all ${
                  badge.earned ? 'bg-white hover:shadow-md' : 'bg-gray-50 opacity-60'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl ${
                  badge.earned ? 'bg-gradient-to-br from-yellow-50 to-orange-50' : 'bg-gray-100'
                } flex items-center justify-center mx-auto mb-3`}>
                  <Icon className={`w-6 h-6 ${badge.color}`} />
                </div>
                <p style={{ fontSize: '13px', fontWeight: 500 }} className="text-[#030213] mb-1">
                  {badge.name}
                </p>
                {badge.earned && (
                  <Badge className="bg-[#00C897]/10 text-[#00C897] border-0" style={{ fontSize: '10px' }}>
                    Earned
                  </Badge>
                )}
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Achievements */}
      <div>
        <h3 className="mb-4">Recent Achievements</h3>
        <Card className="p-4 border-0 shadow-sm">
          <div className="space-y-3">
            {data.recentAchievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-[#FAFAFA] rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-[#00C897] flex-shrink-0" />
                <span style={{ fontSize: '14px' }} className="text-[#030213]">{achievement}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
      </div>
    </div>
  );
}
