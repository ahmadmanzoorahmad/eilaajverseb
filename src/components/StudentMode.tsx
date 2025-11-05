import { 
  GraduationCap, 
  BookOpen, 
  Stethoscope, 
  Brain, 
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  PlayCircle,
  FileText,
  Users,
  TrendingUp,
  Trophy,
  Star,
  Zap
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { toast } from "sonner";

export function StudentMode() {
  const currentCourses = [
    {
      title: "Clinical Pharmacology",
      progress: 68,
      module: "Module 4: Cardiovascular Drugs",
      nextClass: "Tomorrow, 9:00 AM",
      color: "from-[#008080] to-[#00C897]",
    },
    {
      title: "Internal Medicine",
      progress: 45,
      module: "Module 2: Respiratory System",
      nextClass: "Today, 2:00 PM",
      color: "from-[#3B82F6] to-blue-600",
    },
    {
      title: "Diagnostic Imaging",
      progress: 82,
      module: "Module 6: MRI Interpretation",
      nextClass: "Friday, 10:00 AM",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const casStudies = [
    {
      id: 1,
      title: "67-year-old Male with Chest Pain",
      category: "Cardiology",
      difficulty: "Intermediate",
      completed: false,
    },
    {
      id: 2,
      title: "32-year-old Female with Acute Abdomen",
      category: "Emergency Medicine",
      difficulty: "Advanced",
      completed: true,
    },
    {
      id: 3,
      title: "45-year-old with Type 2 Diabetes Management",
      category: "Endocrinology",
      difficulty: "Beginner",
      completed: false,
    },
  ];

  const recentActivity = [
    { action: "Completed quiz: Cardiac Arrhythmias", score: "92%", time: "2 hours ago" },
    { action: "Reviewed case study: Pneumonia", score: "Completed", time: "1 day ago" },
    { action: "Attended virtual lecture: ECG Basics", score: "Attended", time: "2 days ago" },
  ];

  const upcomingRotations = [
    { dept: "Emergency Department", start: "Nov 1, 2025", duration: "4 weeks" },
    { dept: "Internal Medicine", start: "Dec 1, 2025", duration: "6 weeks" },
  ];

  return (
    <div className="h-full flex">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header Banner */}
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-10 h-10" />
                <h1 className="text-white" style={{ fontSize: '32px', fontWeight: 600 }}>
                  Student Learning Portal
                </h1>
              </div>
              {/* Gamification Quick Stats */}
              <div className="flex gap-4">
                <div className="bg-white/20 backdrop-blur rounded-xl px-4 py-2">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-300" />
                    <div>
                      <p style={{ fontSize: '10px' }} className="text-white/80">Level</p>
                      <p style={{ fontSize: '16px', fontWeight: 600 }}>8</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl px-4 py-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-300" />
                    <div>
                      <p style={{ fontSize: '10px' }} className="text-white/80">Streak</p>
                      <p style={{ fontSize: '16px', fontWeight: 600 }}>7 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-white/90 mb-6" style={{ fontSize: '16px' }}>
              Continue your medical education journey with AI-powered learning tools
            </p>
            <div className="flex gap-3">
              <Button className="bg-white text-purple-600 hover:bg-white/90 rounded-xl">
                <PlayCircle className="w-4 h-4 mr-2" />
                Resume Learning
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-xl">
                <Calendar className="w-4 h-4 mr-2" />
                View Schedule
              </Button>
            </div>
          </div>
        </div>

        {/* Current Courses */}
        <div className="p-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-6">Current Courses</h2>
            <div className="grid grid-cols-3 gap-6 mb-8">
              {currentCourses.map((course, idx) => (
                <Card key={idx} className="p-6 rounded-2xl border-[rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow">
                  <div className={`h-2 rounded-full bg-gradient-to-r ${course.color} mb-4`}></div>
                  <h3 className="mb-3">{course.title}</h3>
                  <p style={{ fontSize: '13px' }} className="text-[#717182] mb-4">
                    {course.module}
                  </p>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2" style={{ fontSize: '12px' }}>
                      <span className="text-[#717182]">Progress</span>
                      <span style={{ fontWeight: 500 }}>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  <div className="flex items-center gap-2 text-[#717182] mb-4" style={{ fontSize: '12px' }}>
                    <Clock className="w-3 h-3" />
                    <span>Next class: {course.nextClass}</span>
                  </div>
                  <Button 
                    onClick={() => toast.success("Continuing course", {
                      description: `Resuming ${course.title}`
                    })}
                    className="w-full rounded-xl" 
                    variant="outline"
                  >
                    Continue Learning
                  </Button>
                </Card>
              ))}
            </div>

            {/* Case Studies */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2>Interactive Case Studies</h2>
                <Button 
                  onClick={() => toast.info("Loading case library", {
                    description: "Viewing all available case studies"
                  })}
                  variant="outline" 
                  className="rounded-xl"
                >
                  Browse All Cases
                </Button>
              </div>
              <div className="space-y-4">
                {casStudies.map((caseStudy) => (
                  <Card key={caseStudy.id} className="p-5 rounded-2xl border-[rgba(0,0,0,0.1)] hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6] to-blue-600 flex items-center justify-center">
                          <Stethoscope className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 style={{ fontSize: '15px' }}>{caseStudy.title}</h3>
                            {caseStudy.completed && (
                              <CheckCircle2 className="w-4 h-4 text-[#00C897]" />
                            )}
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="rounded-full">
                              {caseStudy.category}
                            </Badge>
                            <Badge 
                              className={`rounded-full border-0 ${
                                caseStudy.difficulty === "Beginner" 
                                  ? "bg-green-100 text-green-700" 
                                  : caseStudy.difficulty === "Intermediate"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {caseStudy.difficulty}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Button 
                        onClick={() => toast.success(caseStudy.completed ? "Reviewing case study" : "Starting case study", {
                          description: caseStudy.title
                        })}
                        className={`rounded-xl text-white ${caseStudy.completed ? "bg-gray-400" : "bg-[#3B82F6] hover:bg-[#3B82F6]/90"}`}
                      >
                        {caseStudy.completed ? "Review" : "Start Case"}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Clinical Rotations */}
            <div>
              <h2 className="mb-6">Upcoming Clinical Rotations</h2>
              <div className="grid grid-cols-2 gap-4">
                {upcomingRotations.map((rotation, idx) => (
                  <Card key={idx} className="p-5 rounded-2xl border-[rgba(0,0,0,0.1)] bg-gradient-to-br from-teal-50 to-blue-50">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-5 h-5 text-[#008080]" />
                      <h3 style={{ fontSize: '15px' }}>{rotation.dept}</h3>
                    </div>
                    <div className="space-y-2 text-[#717182]" style={{ fontSize: '13px' }}>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>Starts: {rotation.start}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>Duration: {rotation.duration}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-96 border-l bg-white flex flex-col">
        {/* Performance Stats */}
        <div className="p-6 border-b">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#008080]" />
            <h3>Your Performance</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-[#00C897]/10 to-[#008080]/10 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span style={{ fontSize: '13px' }} className="text-[#717182]">Overall Average</span>
                <Award className="w-4 h-4 text-[#008080]" />
              </div>
              <div style={{ fontSize: '28px', fontWeight: 600 }} className="text-[#008080]">
                87.5%
              </div>
              <p style={{ fontSize: '11px' }} className="text-[#717182] mt-1">
                Top 15% of your class
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#FAFAFA] rounded-xl p-3 text-center">
                <div style={{ fontSize: '20px', fontWeight: 600 }} className="text-[#3B82F6]">24</div>
                <div style={{ fontSize: '11px' }} className="text-[#717182]">Cases Completed</div>
              </div>
              <div className="bg-[#FAFAFA] rounded-xl p-3 text-center">
                <div style={{ fontSize: '20px', fontWeight: 600 }} className="text-purple-600">12</div>
                <div style={{ fontSize: '11px' }} className="text-[#717182]">Certificates</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="p-4 border-b">
            <h3>Recent Activity</h3>
          </div>
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3B82F6] to-blue-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p style={{ fontSize: '13px', fontWeight: 500 }} className="mb-1">
                      {activity.action}
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-emerald-100 text-emerald-700 border-0" style={{ fontSize: '10px' }}>
                        {activity.score}
                      </Badge>
                      <span style={{ fontSize: '11px' }} className="text-[#717182]">
                        {activity.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Study Resources */}
        <div className="p-4 border-t">
          <h3 className="mb-3">Quick Resources</h3>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start rounded-xl" style={{ fontSize: '13px' }}>
              <BookOpen className="w-4 h-4 mr-2" />
              Medical Library
            </Button>
            <Button variant="outline" className="w-full justify-start rounded-xl" style={{ fontSize: '13px' }}>
              <Brain className="w-4 h-4 mr-2" />
              AI Study Assistant
            </Button>
            <Button variant="outline" className="w-full justify-start rounded-xl" style={{ fontSize: '13px' }}>
              <FileText className="w-4 h-4 mr-2" />
              Study Guides
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
