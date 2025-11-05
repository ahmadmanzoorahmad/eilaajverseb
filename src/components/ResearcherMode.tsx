import { 
  Search, 
  Filter, 
  Star, 
  BookMarked, 
  Download, 
  ExternalLink,
  TrendingUp,
  Calendar,
  Database,
  Lock,
  Trophy,
  Award,
  Crown
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { Checkbox } from "./ui/checkbox";
import { Progress } from "./ui/progress";
import { toast } from "sonner";

export function ResearcherMode() {
  const researchResults = [
    {
      title: "Efficacy of mRNA Vaccines in Immunocompromised Patients: A Systematic Review",
      authors: "Chen M., Williams R., et al.",
      journal: "The Lancet Infectious Diseases",
      date: "2025",
      type: "Systematic Review",
      credibility: 96,
      citations: 342,
      subjects: 12847,
    },
    {
      title: "Machine Learning Models for Early Detection of Sepsis in ICU",
      authors: "Kumar A., Thompson J., et al.",
      journal: "Nature Medicine",
      date: "2024",
      type: "Original Research",
      credibility: 94,
      citations: 198,
      subjects: 5632,
    },
    {
      title: "Long-term Cardiovascular Outcomes of SGLT2 Inhibitors: 10-Year Follow-up",
      authors: "Martinez L., Anderson K., et al.",
      journal: "NEJM",
      date: "2024",
      type: "RCT",
      credibility: 93,
      citations: 521,
      subjects: 8945,
    },
    {
      title: "Impact of Telemedicine on Rural Healthcare Access Post-Pandemic",
      authors: "Lee S., Brown T., et al.",
      journal: "JAMA Health Forum",
      date: "2024",
      type: "Cohort Study",
      credibility: 88,
      citations: 156,
      subjects: 23456,
    },
  ];

  const collections = [
    { name: "Cardiovascular Research", count: 47, updated: "2 days ago" },
    { name: "AI in Diagnostics", count: 32, updated: "1 week ago" },
    { name: "Vaccine Studies", count: 28, updated: "3 days ago" },
  ];

  return (
    <div className="h-full flex">
      {/* Main Research Area */}
      <div className="flex-1 flex flex-col">
        {/* Search & Filters */}
        <div className="p-6 border-b bg-white">
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-5 h-5 text-[#008080]" />
            <h2>Evidence Workspace</h2>
          </div>
          
          <div className="flex gap-3 mb-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search clinical trials, publications, meta-analyses..."
                className="w-full h-11 px-4 bg-[#FAFAFA] border border-[rgba(0,0,0,0.1)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00C897]/30"
                defaultValue="cardiovascular outcomes"
              />
            </div>
            <Button variant="outline" className="rounded-xl">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Filter Pills */}
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="rounded-full px-3 py-1">
              Source: All
            </Badge>
            <Badge variant="outline" className="rounded-full px-3 py-1">
              Date: Last 5 years
            </Badge>
            <Badge variant="outline" className="rounded-full px-3 py-1">
              Type: RCT + Meta-Analysis
            </Badge>
            <Badge variant="outline" className="rounded-full px-3 py-1">
              Min Credibility: 85%
            </Badge>
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-auto">
          <ScrollArea className="h-full p-6">
            <div className="max-w-5xl space-y-4">
              {/* Gamification Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                      <Crown className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span style={{ fontSize: '14px', fontWeight: 600 }}>Level 15 - Research Pioneer</span>
                        <Trophy className="w-4 h-4 text-yellow-500" />
                      </div>
                      <Progress value={80} className="h-2 w-48" />
                    </div>
                  </div>
                  <div className="text-right">
                    <p style={{ fontSize: '12px' }} className="text-[#717182]">Citations</p>
                    <p style={{ fontSize: '20px', fontWeight: 600 }} className="text-purple-600">500+</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <p className="text-[#717182]" style={{ fontSize: '14px' }}>
                  Found 1,247 results • Sorted by relevance
                </p>
                <Button variant="ghost" size="sm" className="rounded-xl" style={{ fontSize: '13px' }}>
                  Export Results
                </Button>
              </div>

              {researchResults.map((result, idx) => (
                <Card key={idx} className="p-6 rounded-2xl hover:shadow-lg transition-all border-[rgba(0,0,0,0.1)]">
                  <div className="flex gap-4">
                    <Checkbox className="mt-1" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="rounded-full">
                              {result.type}
                            </Badge>
                            <Badge className="bg-gradient-to-r from-[#00C897] to-[#008080] text-white border-0 rounded-full">
                              {result.credibility}% Credible
                            </Badge>
                            <Badge variant="outline" className="rounded-full">
                              {result.citations} citations
                            </Badge>
                          </div>
                          <h3 className="text-[#030213] mb-2">{result.title}</h3>
                          <p style={{ fontSize: '13px' }} className="text-[#717182] mb-2">
                            {result.authors}
                          </p>
                          <div className="flex items-center gap-4 text-[#717182]" style={{ fontSize: '13px' }}>
                            <span style={{ fontWeight: 500 }} className="text-[#008080]">{result.journal}</span>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {result.date}
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Database className="w-3 h-3" />
                              {result.subjects.toLocaleString()} subjects
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          onClick={() => toast.success("Added to collection", {
                            description: `"${result.title}" saved to your research collection`
                          })}
                          variant="outline" 
                          size="sm" 
                          className="rounded-xl"
                        >
                          <BookMarked className="w-3 h-3 mr-2" />
                          Add to Collection
                        </Button>
                        <Button 
                          onClick={() => toast.success("Downloading PDF", {
                            description: `${result.title}`
                          })}
                          variant="outline" 
                          size="sm" 
                          className="rounded-xl"
                        >
                          <Download className="w-3 h-3 mr-2" />
                          Download PDF
                        </Button>
                        <Button 
                          onClick={() => toast.info("Opening full text", {
                            description: "Redirecting to journal website"
                          })}
                          variant="outline" 
                          size="sm" 
                          className="rounded-xl"
                        >
                          <ExternalLink className="w-3 h-3 mr-2" />
                          View Full Text
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Dataset Access Banner */}
        <div className="border-t bg-gradient-to-r from-purple-50 to-blue-50 p-4">
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-[#3B82F6]" />
              <div>
                <p style={{ fontWeight: 500 }} className="text-[#030213]">
                  Access De-identified Patient Dataset
                </p>
                <p style={{ fontSize: '12px' }} className="text-[#717182]">
                  Request access to anonymized clinical data from consenting patients
                </p>
              </div>
            </div>
            <Button 
              onClick={() => toast.success("Access request submitted", {
                description: "You will be notified when access is granted"
              })}
              className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white rounded-xl"
            >
              <Lock className="w-4 h-4 mr-2" />
              Request Access
            </Button>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Collections */}
      <div className="w-80 border-l bg-white flex flex-col">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between mb-4">
            <h3>My Collections</h3>
            <Button variant="ghost" size="sm" className="rounded-xl">
              New
            </Button>
          </div>
          <p style={{ fontSize: '12px' }} className="text-[#717182]">
            Organize and save research articles
          </p>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-3">
            {collections.map((collection, idx) => (
              <Card key={idx} className="p-4 rounded-2xl hover:shadow-md transition-shadow cursor-pointer border-[rgba(0,0,0,0.1)]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#008080] flex items-center justify-center flex-shrink-0">
                    <BookMarked className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div style={{ fontWeight: 500 }} className="mb-1 truncate">
                      {collection.name}
                    </div>
                    <div style={{ fontSize: '12px' }} className="text-[#717182]">
                      {collection.count} articles
                    </div>
                    <div style={{ fontSize: '11px' }} className="text-[#717182] mt-1">
                      Updated {collection.updated}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>

        {/* Trending Topics */}
        <div className="border-t p-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-[#008080]" />
            <span style={{ fontSize: '13px', fontWeight: 500 }}>Trending Topics</span>
          </div>
          <div className="space-y-2">
            {["AI in Radiology", "Obesity Treatments", "Microbiome Research"].map((topic, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 rounded-lg hover:bg-[#FAFAFA] cursor-pointer">
                <span style={{ fontSize: '12px' }}>{topic}</span>
                <Badge variant="outline" className="rounded-full" style={{ fontSize: '10px' }}>
                  +{12 + idx * 3}%
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
