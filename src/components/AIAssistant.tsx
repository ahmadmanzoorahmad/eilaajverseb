import { MessageSquare, Send, AlertCircle, Share2, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { useState } from "react";

interface Message {
  id: number;
  type: "user" | "ai";
  content: string;
  timestamp: string;
}

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "ai",
      content: "Hello! I'm your AI Medical Advisor. I can help answer general health questions, explain medical terms, and provide educational information. How can I assist you today?",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      type: "user",
      content: "What does my recent cholesterol test result mean?",
      timestamp: "10:32 AM",
    },
    {
      id: 3,
      type: "ai",
      content: "Based on your recent lipid panel, your total cholesterol is 185 mg/dL, which is within the desirable range (below 200 mg/dL). Your LDL (\"bad\" cholesterol) is 110 mg/dL - optimal is below 100, so you're close! Your HDL (\"good\" cholesterol) is 58 mg/dL, which is good (above 40 for men, 50 for women is recommended). Overall, your results look healthy! 💙",
      timestamp: "10:32 AM",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        type: "ai",
        content: "I understand your question. As an AI assistant, I can provide general educational information, but please remember to discuss specific health concerns with your healthcare provider. How else can I help you today?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="h-full flex flex-col bg-[#FAFAFA]">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-violet-500 p-8 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h1 className="text-white" style={{ fontSize: '28px', fontWeight: 600 }}>
              AI Medical Assistant
            </h1>
          </div>
          <p className="text-white/90" style={{ fontSize: '15px' }}>
            Get instant answers to your health questions with AI-powered insights
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border-b border-amber-200 p-4">
        <div className="max-w-4xl mx-auto flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p style={{ fontSize: '13px', fontWeight: 500 }} className="text-amber-900 mb-1">
              Educational Use Only – Not Medical Advice
            </p>
            <p style={{ fontSize: '12px' }} className="text-amber-800">
              This AI assistant provides general health information for educational purposes. 
              Always consult your healthcare provider for medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="max-w-4xl mx-auto p-6 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-2xl ${message.type === "user" ? "ml-12" : "mr-12"}`}>
                  {message.type === "ai" && (
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 500 }} className="text-[#717182]">
                        AI Assistant
                      </span>
                      <span style={{ fontSize: '11px' }} className="text-[#717182]">
                        {message.timestamp}
                      </span>
                    </div>
                  )}
                  <div
                    className={`p-4 rounded-2xl ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-[#008080] to-[#00C897] text-white rounded-tr-none"
                        : "bg-gradient-to-r from-blue-50 to-violet-50 text-gray-800 rounded-tl-none border border-blue-100"
                    }`}
                  >
                    <p style={{ fontSize: '14px', lineHeight: '1.6' }}>{message.content}</p>
                  </div>
                  {message.type === "user" && (
                    <div className="flex items-center justify-end gap-2 mt-2">
                      <span style={{ fontSize: '11px' }} className="text-[#717182]">
                        {message.timestamp}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Suggested Actions */}
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge variant="outline" className="rounded-full px-3 py-1.5 cursor-pointer hover:bg-[#FAFAFA]">
                Explain my medication
              </Badge>
              <Badge variant="outline" className="rounded-full px-3 py-1.5 cursor-pointer hover:bg-[#FAFAFA]">
                What are normal vital signs?
              </Badge>
              <Badge variant="outline" className="rounded-full px-3 py-1.5 cursor-pointer hover:bg-[#FAFAFA]">
                Interpret lab results
              </Badge>
              <Badge variant="outline" className="rounded-full px-3 py-1.5 cursor-pointer hover:bg-[#FAFAFA]">
                Health tips
              </Badge>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Input Area */}
      <div className="border-t bg-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3 mb-3">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Ask a health question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="w-full h-12 pl-4 pr-12 bg-[#FAFAFA] border border-[rgba(0,0,0,0.1)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="absolute right-1 top-1 h-10 w-10 bg-gradient-to-br from-blue-500 to-violet-500 hover:opacity-90 rounded-xl"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p style={{ fontSize: '11px' }} className="text-[#717182]">
              AI responses are generated for informational purposes only
            </p>
            <Button variant="outline" size="sm" className="rounded-xl">
              <Share2 className="w-3 h-3 mr-2" />
              Send summary to doctor
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
