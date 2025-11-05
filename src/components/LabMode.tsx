import { useState } from "react";
import { FlaskConical, TestTube, Beaker, Activity, Clock, AlertCircle, CheckCircle, TrendingUp, Trophy, Target } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { TestRequestForm } from "./TestRequestForm";
import { toast } from "sonner";

export function LabMode() {
  const [testRequestFormOpen, setTestRequestFormOpen] = useState(false);
  const pendingTests = [
    { id: "T-001", patient: "Sarah Johnson", test: "Complete Blood Count", priority: "High", time: "30 mins ago" },
    { id: "T-002", patient: "Michael Chen", test: "Lipid Panel", priority: "Normal", time: "1 hour ago" },
    { id: "T-003", patient: "Emma Davis", test: "Blood Glucose", priority: "Urgent", time: "45 mins ago" },
  ];

  const recentResults = [
    { id: "R-089", patient: "David Wilson", test: "Liver Function Test", status: "Completed", time: "2 hours ago" },
    { id: "R-088", patient: "Lisa Anderson", test: "Thyroid Panel", status: "Completed", time: "3 hours ago" },
    { id: "R-087", patient: "Robert Martinez", test: "Hemoglobin A1C", status: "Completed", time: "4 hours ago" },
  ];

  const stats = [
    { label: "Pending Tests", value: "24", icon: Clock, color: "text-[#3B82F6]", bg: "bg-blue-50" },
    { label: "Completed Today", value: "156", icon: CheckCircle, color: "text-[#00C897]", bg: "bg-emerald-50" },
    { label: "Critical Results", value: "3", icon: AlertCircle, color: "text-red-500", bg: "bg-red-50" },
    { label: "Avg. TAT", value: "2.4h", icon: TrendingUp, color: "text-[#008080]", bg: "bg-teal-50" },
  ];

  return (
    <div className="h-full overflow-auto bg-[#FAFAFA] p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2">Laboratory Dashboard</h1>
            <p className="text-[#717182]" style={{ fontSize: '14px' }}>
              Manage tests, view results, and track laboratory operations
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Gamification Mini Badge */}
            <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-100 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-teal-600" />
              <div>
                <p style={{ fontSize: '10px' }} className="text-[#717182]">Accuracy</p>
                <p style={{ fontSize: '14px', fontWeight: 600 }} className="text-teal-600">99.9%</p>
              </div>
            </div>
            <Button 
              onClick={() => setTestRequestFormOpen(true)}
              className="bg-gradient-to-r from-[#008080] to-[#00C897] text-white hover:opacity-90"
            >
              <FlaskConical className="w-4 h-4 mr-2" />
              New Test Request
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 border-0 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#717182] mb-2" style={{ fontSize: '13px' }}>{stat.label}</p>
                  <p className="text-[#030213]" style={{ fontSize: '28px', fontWeight: 600 }}>{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pending Tests */}
          <Card className="border-0 shadow-sm">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TestTube className="w-5 h-5 text-[#008080]" />
                  <h3>Pending Tests</h3>
                </div>
                <Badge className="bg-[#3B82F6] text-white border-0">
                  {pendingTests.length}
                </Badge>
              </div>
            </div>
            <div className="p-4 space-y-3">
              {pendingTests.map((test) => (
                <div key={test.id} className="p-4 bg-[#FAFAFA] rounded-2xl hover:bg-white transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span style={{ fontSize: '14px', fontWeight: 500 }}>{test.patient}</span>
                        <Badge 
                          className={`border-0 ${
                            test.priority === 'Urgent' ? 'bg-red-100 text-red-700' :
                            test.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                            'bg-gray-100 text-gray-700'
                          }`}
                          style={{ fontSize: '11px' }}
                        >
                          {test.priority}
                        </Badge>
                      </div>
                      <p className="text-[#717182]" style={{ fontSize: '13px' }}>{test.test}</p>
                    </div>
                    <span className="text-[#717182]" style={{ fontSize: '12px' }}>{test.time}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button 
                      onClick={() => toast.success(`Processing test ${test.id}`, {
                        description: `${test.test} for ${test.patient}`
                      })}
                      size="sm" 
                      className="bg-[#00C897] text-white hover:bg-[#00C897]/90"
                    >
                      Process
                    </Button>
                    <Button 
                      onClick={() => toast.info("Test Details", {
                        description: `Viewing details for ${test.test}`
                      })}
                      size="sm" 
                      variant="outline"
                    >
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Results */}
          <Card className="border-0 shadow-sm">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#00C897]" />
                  <h3>Recent Results</h3>
                </div>
              </div>
            </div>
            <div className="p-4 space-y-3">
              {recentResults.map((result) => (
                <div key={result.id} className="p-4 bg-[#FAFAFA] rounded-2xl hover:bg-white transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span style={{ fontSize: '14px', fontWeight: 500 }}>{result.patient}</span>
                        <Badge className="bg-[#00C897]/10 text-[#00C897] border-0" style={{ fontSize: '11px' }}>
                          {result.status}
                        </Badge>
                      </div>
                      <p className="text-[#717182]" style={{ fontSize: '13px' }}>{result.test}</p>
                    </div>
                    <span className="text-[#717182]" style={{ fontSize: '12px' }}>{result.time}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button 
                      onClick={() => toast.success("Report opened", {
                        description: `Viewing report for ${result.test}`
                      })}
                      size="sm" 
                      className="bg-[#3B82F6] text-white hover:bg-[#3B82F6]/90"
                    >
                      View Report
                    </Button>
                    <Button 
                      onClick={() => toast.success("Report sent", {
                        description: `${result.test} results sent to doctor`
                      })}
                      size="sm" 
                      variant="outline"
                    >
                      Send to Doctor
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Equipment & Quality Control */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="border-0 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center">
                <Beaker className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3>Equipment Status</h3>
                <p className="text-[#717182]" style={{ fontSize: '12px' }}>All systems operational</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span style={{ fontSize: '13px' }}>Hematology Analyzer</span>
                <Badge className="bg-[#00C897]/10 text-[#00C897] border-0" style={{ fontSize: '11px' }}>Active</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ fontSize: '13px' }}>Chemistry Analyzer</span>
                <Badge className="bg-[#00C897]/10 text-[#00C897] border-0" style={{ fontSize: '11px' }}>Active</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ fontSize: '13px' }}>PCR Machine</span>
                <Badge className="bg-yellow-100 text-yellow-700 border-0" style={{ fontSize: '11px' }}>Calibration Due</Badge>
              </div>
            </div>
          </Card>

          <Card className="border-0 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center">
                <Activity className="w-6 h-6 text-[#008080]" />
              </div>
              <div>
                <h3>Quality Control</h3>
                <p className="text-[#717182]" style={{ fontSize: '12px' }}>Today's QC Status</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span style={{ fontSize: '13px' }}>Morning QC</span>
                <Badge className="bg-[#00C897]/10 text-[#00C897] border-0" style={{ fontSize: '11px' }}>Passed</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ fontSize: '13px' }}>Afternoon QC</span>
                <Badge className="bg-[#00C897]/10 text-[#00C897] border-0" style={{ fontSize: '11px' }}>Passed</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ fontSize: '13px' }}>Evening QC</span>
                <Badge className="bg-gray-100 text-gray-600 border-0" style={{ fontSize: '11px' }}>Pending</Badge>
              </div>
            </div>
          </Card>

          <Card className="border-0 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                <FlaskConical className="w-6 h-6 text-[#3B82F6]" />
              </div>
              <div>
                <h3>Reagent Inventory</h3>
                <p className="text-[#717182]" style={{ fontSize: '12px' }}>Stock levels</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span style={{ fontSize: '13px' }}>CBC Reagents</span>
                <Badge className="bg-[#00C897]/10 text-[#00C897] border-0" style={{ fontSize: '11px' }}>Sufficient</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ fontSize: '13px' }}>Chemistry Panel</span>
                <Badge className="bg-yellow-100 text-yellow-700 border-0" style={{ fontSize: '11px' }}>Low Stock</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ fontSize: '13px' }}>Culture Media</span>
                <Badge className="bg-[#00C897]/10 text-[#00C897] border-0" style={{ fontSize: '11px' }}>Sufficient</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      <TestRequestForm 
        open={testRequestFormOpen} 
        onClose={() => setTestRequestFormOpen(false)}
      />
    </div>
  );
}
