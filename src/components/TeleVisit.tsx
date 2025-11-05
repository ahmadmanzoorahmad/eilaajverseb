import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Phone, 
  MessageSquare, 
  Upload, 
  Shield,
  Pill,
  TestTube,
  User,
  Settings,
  MoreVertical
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import { useState } from "react";

export function TeleVisit() {
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);

  const chatMessages = [
    { sender: "Dr. Williams", message: "I've reviewed your recent lab results.", time: "10:35 AM" },
    { sender: "You", message: "Thank you, doctor. What do they show?", time: "10:36 AM" },
  ];

  return (
    <div className="h-full flex flex-col bg-[#FAFAFA]">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#008080] to-[#00C897] flex items-center justify-center">
              <Video className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2>Tele-Visit Session</h2>
              <div className="flex items-center gap-2 text-[#717182]" style={{ fontSize: '13px' }}>
                <div className="w-2 h-2 bg-[#00C897] rounded-full animate-pulse"></div>
                <span>Active call - 12:34</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-emerald-100 text-emerald-700 border-0">
              End-to-End Encrypted
            </Badge>
            <Button variant="ghost" size="icon" className="rounded-xl">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Video Area */}
        <div className="flex-1 p-6 flex flex-col gap-4">
          {/* Doctor Video (Large) */}
          <Card className="flex-1 rounded-3xl overflow-hidden relative bg-gradient-to-br from-gray-800 to-gray-900 border-[rgba(0,0,0,0.1)]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#008080] flex items-center justify-center text-white mb-4 mx-auto">
                  <User className="w-12 h-12" />
                </div>
                <p className="text-white" style={{ fontSize: '18px', fontWeight: 500 }}>
                  Dr. Sarah Williams
                </p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Shield className="w-4 h-4 text-[#00C897]" />
                  <span className="text-white/70" style={{ fontSize: '13px' }}>
                    Verified Medical License
                  </span>
                </div>
              </div>
            </div>

            {/* Video Controls Overlay */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
              <Button
                size="icon"
                onClick={() => setVideoEnabled(!videoEnabled)}
                className={`w-12 h-12 rounded-2xl ${
                  videoEnabled 
                    ? "bg-white/20 hover:bg-white/30 backdrop-blur-sm" 
                    : "bg-red-500 hover:bg-red-600"
                }`}
              >
                {videoEnabled ? (
                  <Video className="w-5 h-5 text-white" />
                ) : (
                  <VideoOff className="w-5 h-5 text-white" />
                )}
              </Button>
              <Button
                size="icon"
                onClick={() => setAudioEnabled(!audioEnabled)}
                className={`w-12 h-12 rounded-2xl ${
                  audioEnabled 
                    ? "bg-white/20 hover:bg-white/30 backdrop-blur-sm" 
                    : "bg-red-500 hover:bg-red-600"
                }`}
              >
                {audioEnabled ? (
                  <Mic className="w-5 h-5 text-white" />
                ) : (
                  <MicOff className="w-5 h-5 text-white" />
                )}
              </Button>
              <Button
                size="icon"
                className="w-12 h-12 rounded-2xl bg-red-500 hover:bg-red-600"
              >
                <Phone className="w-5 h-5 text-white" />
              </Button>
            </div>
          </Card>

          {/* Patient Video (Small - Picture in Picture) */}
          <Card className="absolute bottom-10 right-10 w-64 h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-white shadow-lg">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#008080] to-[#00C897] flex items-center justify-center text-white mb-2 mx-auto">
                  <User className="w-8 h-8" />
                </div>
                <p className="text-white" style={{ fontSize: '14px', fontWeight: 500 }}>
                  You
                </p>
              </div>
            </div>
            <div className="absolute top-2 right-2">
              <Badge className="bg-[#00C897] text-white border-0" style={{ fontSize: '10px' }}>
                Verified
              </Badge>
            </div>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="w-96 border-l bg-white flex flex-col">
          <Tabs defaultValue="chat" className="flex-1 flex flex-col">
            <TabsList className="w-full rounded-none border-b bg-transparent p-0">
              <TabsTrigger value="chat" className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#008080]">
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat
              </TabsTrigger>
              <TabsTrigger value="tools" className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#008080]">
                <Pill className="w-4 h-4 mr-2" />
                Tools
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="flex-1 flex flex-col m-0 overflow-hidden">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {chatMessages.map((msg, idx) => (
                    <div key={idx} className={`${msg.sender === "You" ? "text-right" : ""}`}>
                      <div className={`inline-block max-w-[80%] p-3 rounded-2xl ${
                        msg.sender === "You"
                          ? "bg-gradient-to-r from-[#008080] to-[#00C897] text-white rounded-tr-none"
                          : "bg-[#FAFAFA] text-gray-800 rounded-tl-none"
                      }`}>
                        <p style={{ fontSize: '13px', fontWeight: 500 }} className="mb-1">
                          {msg.sender}
                        </p>
                        <p style={{ fontSize: '13px' }}>{msg.message}</p>
                      </div>
                      <p style={{ fontSize: '11px' }} className="text-[#717182] mt-1">
                        {msg.time}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 h-10 px-4 bg-[#FAFAFA] border border-[rgba(0,0,0,0.1)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00C897]/30"
                    style={{ fontSize: '13px' }}
                  />
                  <Button size="icon" className="bg-[#008080] hover:bg-[#008080]/90 rounded-xl">
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tools" className="flex-1 m-0 p-4 overflow-auto">
              <div className="space-y-3">
                <p style={{ fontSize: '13px', fontWeight: 500 }} className="text-[#717182] mb-4">
                  Clinical Tools
                </p>

                <Button className="w-full justify-start bg-gradient-to-r from-[#008080] to-[#00C897] hover:opacity-90 text-white rounded-2xl h-auto py-4">
                  <Pill className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div style={{ fontSize: '14px', fontWeight: 500 }}>Create e-Prescription</div>
                    <div style={{ fontSize: '11px' }} className="text-white/80">
                      Prescribe medication securely
                    </div>
                  </div>
                </Button>

                <Button className="w-full justify-start bg-gradient-to-r from-[#3B82F6] to-blue-600 hover:opacity-90 text-white rounded-2xl h-auto py-4">
                  <TestTube className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div style={{ fontSize: '14px', fontWeight: 500 }}>Order Lab Tests</div>
                    <div style={{ fontSize: '11px' }} className="text-white/80">
                      Request diagnostic tests
                    </div>
                  </div>
                </Button>

                <Button variant="outline" className="w-full justify-start rounded-2xl h-auto py-4">
                  <Upload className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div style={{ fontSize: '14px', fontWeight: 500 }}>Share Files</div>
                    <div style={{ fontSize: '11px' }} className="text-[#717182]">
                      Upload documents or images
                    </div>
                  </div>
                </Button>

                <div className="pt-4 border-t">
                  <p style={{ fontSize: '13px', fontWeight: 500 }} className="text-[#717182] mb-3">
                    Session Info
                  </p>
                  <div className="bg-[#FAFAFA] rounded-2xl p-4 space-y-2">
                    <div className="flex justify-between" style={{ fontSize: '12px' }}>
                      <span className="text-[#717182]">Duration:</span>
                      <span style={{ fontWeight: 500 }}>12:34</span>
                    </div>
                    <div className="flex justify-between" style={{ fontSize: '12px' }}>
                      <span className="text-[#717182]">Connection:</span>
                      <Badge className="bg-[#00C897] text-white border-0" style={{ fontSize: '10px' }}>
                        Excellent
                      </Badge>
                    </div>
                    <div className="flex justify-between" style={{ fontSize: '12px' }}>
                      <span className="text-[#717182]">Encryption:</span>
                      <span style={{ fontWeight: 500 }}>AES-256</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
