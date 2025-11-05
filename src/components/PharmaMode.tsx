import { 
  Pill, 
  ClipboardCheck, 
  AlertTriangle, 
  Package, 
  TrendingDown,
  Search,
  CheckCircle2,
  Clock,
  User,
  ShieldAlert,
  FileText,
  BarChart3,
  Boxes,
  Trophy,
  Star,
  Shield
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { toast } from "sonner";

export function PharmaMode() {
  const pendingPrescriptions = [
    {
      id: "RX-2847",
      patient: "Sarah Johnson",
      medication: "Lisinopril 10mg",
      quantity: "30 tablets",
      prescriber: "Dr. Williams",
      status: "pending",
      priority: "normal",
      time: "15 min ago",
    },
    {
      id: "RX-2846",
      patient: "Michael Chen",
      medication: "Metformin 500mg",
      quantity: "90 tablets",
      prescriber: "Dr. Anderson",
      status: "in-progress",
      priority: "normal",
      time: "32 min ago",
    },
    {
      id: "RX-2845",
      patient: "Emma Davis",
      medication: "Albuterol Inhaler",
      quantity: "1 inhaler",
      prescriber: "Dr. Martinez",
      status: "pending",
      priority: "urgent",
      time: "45 min ago",
    },
  ];

  const drugInteractions = [
    {
      patient: "Robert Smith",
      drugs: ["Warfarin", "Aspirin"],
      severity: "high",
      action: "Consult prescriber",
    },
    {
      patient: "Lisa Anderson",
      drugs: ["Lisinopril", "Potassium"],
      severity: "medium",
      action: "Monitor levels",
    },
  ];

  const inventoryAlerts = [
    { medication: "Amoxicillin 500mg", stock: 45, reorderPoint: 100, status: "low" },
    { medication: "Metformin 1000mg", stock: 28, reorderPoint: 50, status: "critical" },
    { medication: "Atorvastatin 20mg", stock: 156, reorderPoint: 100, status: "good" },
  ];

  const recentActivity = [
    { action: "Dispensed RX-2840", patient: "John Doe", time: "1 hour ago" },
    { action: "Verified insurance", patient: "Jane Smith", time: "2 hours ago" },
    { action: "Counseled patient", patient: "Mike Johnson", time: "3 hours ago" },
  ];

  return (
    <div className="h-full flex">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-8 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Pill className="w-10 h-10" />
                <h1 className="text-white" style={{ fontSize: '32px', fontWeight: 600 }}>
                  Pharmacy Workstation
                </h1>
              </div>
              {/* Safety Badge */}
              <div className="bg-white/20 backdrop-blur rounded-xl px-4 py-2 flex items-center gap-3">
                <div>
                  <p style={{ fontSize: '10px' }} className="text-white/80">Safety Score</p>
                  <p style={{ fontSize: '16px', fontWeight: 600 }}>100%</p>
                </div>
                <Shield className="w-6 h-6 text-yellow-300" />
              </div>
            </div>
            <p className="text-white/90 mb-6" style={{ fontSize: '16px' }}>
              You have 8 pending prescriptions and 2 drug interaction alerts
            </p>
            <div className="flex gap-3">
              <Button className="bg-white text-emerald-600 hover:bg-white/90 rounded-xl">
                <ClipboardCheck className="w-4 h-4 mr-2" />
                Prescription Queue
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-xl">
                <Package className="w-4 h-4 mr-2" />
                Inventory
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-xl">
                <BarChart3 className="w-4 h-4 mr-2" />
                Reports
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="p-8 bg-[#FAFAFA]">
          <div className="max-w-6xl mx-auto grid grid-cols-4 gap-4">
            <Card className="p-4 rounded-2xl border-[rgba(0,0,0,0.1)] bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 600 }} className="text-[#008080]">8</div>
                  <div style={{ fontSize: '12px' }} className="text-[#717182]">Pending Rx</div>
                </div>
                <ClipboardCheck className="w-8 h-8 text-[#008080]" />
              </div>
            </Card>
            <Card className="p-4 rounded-2xl border-[rgba(0,0,0,0.1)] bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 600 }} className="text-[#3B82F6]">24</div>
                  <div style={{ fontSize: '12px' }} className="text-[#717182]">Filled Today</div>
                </div>
                <CheckCircle2 className="w-8 h-8 text-[#3B82F6]" />
              </div>
            </Card>
            <Card className="p-4 rounded-2xl border-[rgba(0,0,0,0.1)] bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 600 }} className="text-red-600">2</div>
                  <div style={{ fontSize: '12px' }} className="text-[#717182]">Interactions</div>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
            </Card>
            <Card className="p-4 rounded-2xl border-[rgba(0,0,0,0.1)] bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 600 }} className="text-orange-600">3</div>
                  <div style={{ fontSize: '12px' }} className="text-[#717182]">Low Stock</div>
                </div>
                <TrendingDown className="w-8 h-8 text-orange-600" />
              </div>
            </Card>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-8">
          <div className="max-w-6xl mx-auto">
            {/* Drug Interaction Alerts */}
            {drugInteractions.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <h2 className="text-red-900">Drug Interaction Alerts</h2>
                </div>
                <div className="space-y-3">
                  {drugInteractions.map((interaction, idx) => (
                    <Card key={idx} className="p-5 rounded-2xl border-red-200 bg-red-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                          <ShieldAlert className="w-6 h-6 text-red-600" />
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span style={{ fontWeight: 500 }}>Patient: {interaction.patient}</span>
                              <Badge className={`rounded-full border-0 ${
                                interaction.severity === "high" 
                                  ? "bg-red-600 text-white" 
                                  : "bg-orange-500 text-white"
                              }`}>
                                {interaction.severity} severity
                              </Badge>
                            </div>
                            <p style={{ fontSize: '13px' }} className="text-red-800">
                              Interaction: {interaction.drugs.join(" + ")}
                            </p>
                          </div>
                        </div>
                        <Button className="bg-red-600 hover:bg-red-700 text-white rounded-xl">
                          {interaction.action}
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Prescription Queue */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2>Prescription Queue</h2>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Search by patient or Rx#..." 
                    className="w-64 rounded-xl"
                  />
                  <Button variant="outline" className="rounded-xl">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                {pendingPrescriptions.map((rx) => (
                  <Card key={rx.id} className="p-5 rounded-2xl border-[rgba(0,0,0,0.1)] hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className={`w-12 h-12 rounded-xl ${
                          rx.priority === "urgent" 
                            ? "bg-gradient-to-br from-red-500 to-red-600" 
                            : "bg-gradient-to-br from-[#008080] to-[#00C897]"
                        } flex items-center justify-center`}>
                          <Pill className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span style={{ fontWeight: 500 }} className="font-mono text-[#008080]">
                              {rx.id}
                            </span>
                            <Badge variant="outline" className="rounded-full">
                              {rx.status}
                            </Badge>
                            {rx.priority === "urgent" && (
                              <Badge className="bg-red-100 text-red-700 border-0 rounded-full">
                                Urgent
                              </Badge>
                            )}
                          </div>
                          <div className="grid grid-cols-4 gap-4 text-[#717182]" style={{ fontSize: '13px' }}>
                            <div>
                              <User className="w-3 h-3 inline mr-1" />
                              {rx.patient}
                            </div>
                            <div>
                              <Pill className="w-3 h-3 inline mr-1" />
                              {rx.medication}
                            </div>
                            <div>
                              <Package className="w-3 h-3 inline mr-1" />
                              {rx.quantity}
                            </div>
                            <div>
                              <Clock className="w-3 h-3 inline mr-1" />
                              {rx.time}
                            </div>
                          </div>
                          <p style={{ fontSize: '12px' }} className="text-[#717182] mt-1">
                            Prescribed by: {rx.prescriber}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          onClick={() => toast.info("Reviewing prescription", {
                            description: `${prescription.id} - ${prescription.medication}`
                          })}
                          variant="outline" 
                          className="rounded-xl" 
                          style={{ fontSize: '13px' }}
                        >
                          Review
                        </Button>
                        <Button 
                          onClick={() => toast.success("Processing prescription", {
                            description: `${prescription.medication} for ${prescription.patient}`
                          })}
                          className="bg-[#008080] hover:bg-[#008080]/90 text-white rounded-xl"
                        >
                          Process
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Inventory Alerts */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2>Inventory Status</h2>
                <Button variant="outline" className="rounded-xl">
                  <Boxes className="w-4 h-4 mr-2" />
                  Manage Inventory
                </Button>
              </div>
              <div className="space-y-3">
                {inventoryAlerts.map((item, idx) => (
                  <Card key={idx} className={`p-4 rounded-2xl ${
                    item.status === "critical" 
                      ? "border-red-200 bg-red-50" 
                      : item.status === "low"
                      ? "border-orange-200 bg-orange-50"
                      : "border-[rgba(0,0,0,0.1)] bg-white"
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div style={{ fontWeight: 500 }} className="mb-1">{item.medication}</div>
                        <div className="flex items-center gap-4 text-[#717182]" style={{ fontSize: '13px' }}>
                          <span>Current stock: <span style={{ fontWeight: 500 }} className={
                            item.status === "critical" ? "text-red-700" : 
                            item.status === "low" ? "text-orange-700" : "text-green-700"
                          }>{item.stock}</span></span>
                          <span>•</span>
                          <span>Reorder point: {item.reorderPoint}</span>
                        </div>
                      </div>
                      {item.status !== "good" && (
                        <Button 
                          onClick={() => toast.success("Order placed", {
                            description: `Ordering ${item.medication}`
                          })}
                          className={`rounded-xl ${
                            item.status === "critical" 
                              ? "bg-red-600 hover:bg-red-700" 
                              : "bg-orange-500 hover:bg-orange-600"
                          } text-white`}
                        >
                          Order Now
                        </Button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 border-l bg-white flex flex-col">
        {/* Quick Tools */}
        <div className="p-6 border-b">
          <h3 className="mb-4">Quick Tools</h3>
          <div className="space-y-2">
            <Button 
              onClick={() => toast.info("Drug Information Database", {
                description: "Opening comprehensive drug database"
              })}
              className="w-full justify-start bg-gradient-to-r from-[#008080] to-[#00C897] hover:opacity-90 text-white rounded-2xl h-auto py-3"
            >
              <Search className="w-4 h-4 mr-3" />
              <div className="text-left">
                <div style={{ fontSize: '13px', fontWeight: 500 }}>Drug Information</div>
              </div>
            </Button>
            <Button 
              onClick={() => toast.warning("Drug Interaction Checker", {
                description: "Analyzing potential drug interactions"
              })}
              className="w-full justify-start bg-gradient-to-r from-[#3B82F6] to-blue-600 hover:opacity-90 text-white rounded-2xl h-auto py-3"
            >
              <ShieldAlert className="w-4 h-4 mr-3" />
              <div className="text-left">
                <div style={{ fontSize: '13px', fontWeight: 500 }}>Check Interactions</div>
              </div>
            </Button>
            <Button 
              onClick={() => toast.info("Patient Counseling Guide", {
                description: "Opening counseling resources"
              })}
              variant="outline" 
              className="w-full justify-start rounded-2xl h-auto py-3"
            >
              <User className="w-4 h-4 mr-3" />
              <div className="text-left">
                <div style={{ fontSize: '13px', fontWeight: 500 }}>Patient Counseling</div>
              </div>
            </Button>
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
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00C897] to-[#008080] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p style={{ fontSize: '13px', fontWeight: 500 }} className="mb-1">
                      {activity.action}
                    </p>
                    <p style={{ fontSize: '12px' }} className="text-[#717182]">
                      {activity.patient}
                    </p>
                    <p style={{ fontSize: '11px' }} className="text-[#717182]">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Today's Summary */}
        <div className="p-4 border-t">
          <h3 className="mb-3">Today's Summary</h3>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4 space-y-2">
            <div className="flex justify-between" style={{ fontSize: '13px' }}>
              <span className="text-[#717182]">Prescriptions Filled:</span>
              <span style={{ fontWeight: 500 }}>24</span>
            </div>
            <div className="flex justify-between" style={{ fontSize: '13px' }}>
              <span className="text-[#717182]">Consultations:</span>
              <span style={{ fontWeight: 500 }}>8</span>
            </div>
            <div className="flex justify-between" style={{ fontSize: '13px' }}>
              <span className="text-[#717182]">Revenue:</span>
              <span style={{ fontWeight: 500 }} className="text-[#00C897]">$2,847</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
