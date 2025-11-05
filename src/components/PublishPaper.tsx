import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { 
  FileText, 
  Upload, 
  Users, 
  Tag, 
  Calendar,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Award
} from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

export function PublishPaper() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const recentSubmissions = [
    {
      title: "AI-Driven Diagnosis in Cardiology: A Meta-Analysis",
      status: "Under Review",
      date: "Oct 20, 2025",
      reviewers: 3,
      citations: 0,
      statusColor: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Blockchain Applications in Medical Records Management",
      status: "Published",
      date: "Sep 15, 2025",
      reviewers: 5,
      citations: 12,
      statusColor: "bg-green-100 text-green-700",
    },
    {
      title: "Telemedicine Efficacy in Rural Healthcare",
      status: "Revision Required",
      date: "Oct 5, 2025",
      reviewers: 4,
      citations: 0,
      statusColor: "bg-orange-100 text-orange-700",
    },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="h-full flex">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#3B82F6] to-[#008080] p-8 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-10 h-10" />
              <h1 className="text-white" style={{ fontSize: '32px', fontWeight: 600 }}>
                Publish Your Research
              </h1>
            </div>
            <p className="text-white/90 mb-6" style={{ fontSize: '16px' }}>
              Share your findings with the global medical community
            </p>
            <div className="flex gap-3">
              <Button className="bg-white text-[#3B82F6] hover:bg-white/90 rounded-xl">
                <Upload className="w-4 h-4 mr-2" />
                Submit New Paper
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-xl">
                <FileText className="w-4 h-4 mr-2" />
                View Guidelines
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="p-8 bg-[#FAFAFA]">
          <div className="max-w-5xl mx-auto grid grid-cols-4 gap-4">
            <Card className="p-4 rounded-2xl border-[rgba(0,0,0,0.1)] bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 600 }} className="text-[#3B82F6]">3</div>
                  <div style={{ fontSize: '12px' }} className="text-[#717182]">Submissions</div>
                </div>
                <FileText className="w-8 h-8 text-[#3B82F6]" />
              </div>
            </Card>
            <Card className="p-4 rounded-2xl border-[rgba(0,0,0,0.1)] bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 600 }} className="text-[#00C897]">1</div>
                  <div style={{ fontSize: '12px' }} className="text-[#717182]">Published</div>
                </div>
                <CheckCircle2 className="w-8 h-8 text-[#00C897]" />
              </div>
            </Card>
            <Card className="p-4 rounded-2xl border-[rgba(0,0,0,0.1)] bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 600 }} className="text-[#008080]">12</div>
                  <div style={{ fontSize: '12px' }} className="text-[#717182]">Citations</div>
                </div>
                <TrendingUp className="w-8 h-8 text-[#008080]" />
              </div>
            </Card>
            <Card className="p-4 rounded-2xl border-[rgba(0,0,0,0.1)] bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 600 }} className="text-purple-600">8.5</div>
                  <div style={{ fontSize: '12px' }} className="text-[#717182]">Avg Rating</div>
                </div>
                <Award className="w-8 h-8 text-purple-600" />
              </div>
            </Card>
          </div>
        </div>

        {/* Submit Form */}
        <div className="p-8">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 rounded-2xl border-[rgba(0,0,0,0.1)] mb-8">
              <h2 className="mb-6">Submit New Research Paper</h2>
              <form className="space-y-6">
                {/* Paper Title */}
                <div>
                  <Label htmlFor="title" className="mb-2 block">Paper Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter your research paper title"
                    className="h-12 rounded-xl bg-[#FAFAFA] border-[rgba(0,0,0,0.1)]"
                  />
                </div>

                {/* Authors */}
                <div>
                  <Label htmlFor="authors" className="mb-2 block">Authors</Label>
                  <Input
                    id="authors"
                    placeholder="Kainat Gohar, John Doe, Jane Smith"
                    className="h-12 rounded-xl bg-[#FAFAFA] border-[rgba(0,0,0,0.1)]"
                  />
                </div>

                {/* Abstract */}
                <div>
                  <Label htmlFor="abstract" className="mb-2 block">Abstract</Label>
                  <Textarea
                    id="abstract"
                    placeholder="Provide a brief summary of your research (250-500 words)"
                    className="min-h-[150px] rounded-xl bg-[#FAFAFA] border-[rgba(0,0,0,0.1)]"
                  />
                </div>

                {/* Keywords */}
                <div>
                  <Label htmlFor="keywords" className="mb-2 block">Keywords</Label>
                  <Input
                    id="keywords"
                    placeholder="AI, Cardiology, Machine Learning, Diagnosis"
                    className="h-12 rounded-xl bg-[#FAFAFA] border-[rgba(0,0,0,0.1)]"
                  />
                  <p className="text-[#717182] mt-2" style={{ fontSize: '12px' }}>
                    Separate keywords with commas
                  </p>
                </div>

                {/* File Upload */}
                <div>
                  <Label className="mb-2 block">Upload Paper (PDF)</Label>
                  <div className="border-2 border-dashed border-[rgba(0,0,0,0.1)] rounded-2xl p-8 text-center bg-[#FAFAFA] hover:bg-[#F5F5F5] transition-colors cursor-pointer">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="w-12 h-12 text-[#717182] mx-auto mb-3" />
                      {selectedFile ? (
                        <div>
                          <p style={{ fontWeight: 500 }} className="mb-1">{selectedFile.name}</p>
                          <p className="text-[#717182]" style={{ fontSize: '12px' }}>
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p style={{ fontWeight: 500 }} className="mb-1">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-[#717182]" style={{ fontSize: '12px' }}>
                            PDF (max. 25MB)
                          </p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex gap-3 pt-4">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-[#3B82F6] to-[#008080] hover:opacity-90 text-white rounded-xl"
                  >
                    Submit for Review
                  </Button>
                  <Button type="button" variant="outline" className="rounded-xl">
                    Save Draft
                  </Button>
                </div>
              </form>
            </Card>

            {/* Recent Submissions */}
            <div>
              <h2 className="mb-6">Your Submissions</h2>
              <div className="space-y-4">
                {recentSubmissions.map((paper, idx) => (
                  <Card key={idx} className="p-6 rounded-2xl border-[rgba(0,0,0,0.1)] hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#008080] flex items-center justify-center flex-shrink-0">
                            <FileText className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 style={{ fontSize: '15px' }} className="mb-2">{paper.title}</h3>
                            <div className="flex items-center gap-3 flex-wrap">
                              <Badge className={`${paper.statusColor} border-0 rounded-full`}>
                                {paper.status}
                              </Badge>
                              <div className="flex items-center gap-1 text-[#717182]" style={{ fontSize: '12px' }}>
                                <Calendar className="w-3 h-3" />
                                <span>{paper.date}</span>
                              </div>
                              <div className="flex items-center gap-1 text-[#717182]" style={{ fontSize: '12px' }}>
                                <Users className="w-3 h-3" />
                                <span>{paper.reviewers} reviewers</span>
                              </div>
                              {paper.citations > 0 && (
                                <div className="flex items-center gap-1 text-[#717182]" style={{ fontSize: '12px' }}>
                                  <TrendingUp className="w-3 h-3" />
                                  <span>{paper.citations} citations</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="rounded-xl" style={{ fontSize: '13px' }}>
                        View Details
                      </Button>
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
        <div className="p-6 border-b">
          <h3 className="mb-4">Submission Guidelines</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#00C897] flex-shrink-0 mt-0.5" />
              <div>
                <p style={{ fontSize: '13px', fontWeight: 500 }} className="mb-1">
                  Original Research
                </p>
                <p className="text-[#717182]" style={{ fontSize: '11px' }}>
                  Submit only original, unpublished work
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#00C897] flex-shrink-0 mt-0.5" />
              <div>
                <p style={{ fontSize: '13px', fontWeight: 500 }} className="mb-1">
                  Peer Review
                </p>
                <p className="text-[#717182]" style={{ fontSize: '11px' }}>
                  All papers undergo rigorous review
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#00C897] flex-shrink-0 mt-0.5" />
              <div>
                <p style={{ fontSize: '13px', fontWeight: 500 }} className="mb-1">
                  Ethical Standards
                </p>
                <p className="text-[#717182]" style={{ fontSize: '11px' }}>
                  Must comply with research ethics
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="p-4 border-b">
            <h3>Publication Tips</h3>
          </div>
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="flex items-start gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                  <p style={{ fontSize: '13px', fontWeight: 500 }}>Clear Title</p>
                </div>
                <p className="text-[#717182]" style={{ fontSize: '11px' }}>
                  Use descriptive, concise titles that reflect your research
                </p>
              </div>
              <div className="bg-teal-50 rounded-xl p-4">
                <div className="flex items-start gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-[#008080] flex-shrink-0 mt-0.5" />
                  <p style={{ fontSize: '13px', fontWeight: 500 }}>Strong Abstract</p>
                </div>
                <p className="text-[#717182]" style={{ fontSize: '11px' }}>
                  Write a compelling abstract that summarizes key findings
                </p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4">
                <div className="flex items-start gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <p style={{ fontSize: '13px', fontWeight: 500 }}>Proper Citations</p>
                </div>
                <p className="text-[#717182]" style={{ fontSize: '11px' }}>
                  Include all relevant references in standard format
                </p>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
