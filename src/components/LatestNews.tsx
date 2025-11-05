import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { 
  Newspaper, 
  TrendingUp, 
  Clock, 
  Bookmark,
  Share2,
  ExternalLink,
  Activity,
  Heart,
  Brain,
  Pill
} from "lucide-react";

export function LatestNews() {
  const featuredNews = {
    title: "Breakthrough in AI-Powered Cancer Detection Shows 95% Accuracy",
    category: "Oncology",
    source: "Medical AI Journal",
    date: "2 hours ago",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    excerpt: "Researchers have developed a new AI algorithm that can detect early-stage cancer with unprecedented accuracy, potentially revolutionizing screening procedures worldwide.",
    readTime: "5 min read",
  };

  const newsCategories = [
    { name: "All", active: true },
    { name: "Cardiology", active: false },
    { name: "Neurology", active: false },
    { name: "AI & Tech", active: false },
    { name: "Research", active: false },
  ];

  const newsList = [
    {
      title: "New Guidelines for Diabetes Management Released by WHO",
      category: "Endocrinology",
      source: "WHO Health Updates",
      date: "4 hours ago",
      icon: Activity,
      color: "from-[#3B82F6] to-blue-600",
      trending: true,
    },
    {
      title: "Revolutionary Heart Valve Replacement Procedure Shows Promise",
      category: "Cardiology",
      source: "Cardiac Research Today",
      date: "6 hours ago",
      icon: Heart,
      color: "from-red-500 to-pink-600",
      trending: true,
    },
    {
      title: "Mental Health Apps: New Study Shows Effectiveness in Anxiety Treatment",
      category: "Psychiatry",
      source: "Mental Health Journal",
      date: "8 hours ago",
      icon: Brain,
      color: "from-purple-500 to-purple-600",
      trending: false,
    },
    {
      title: "FDA Approves Groundbreaking Treatment for Rare Genetic Disorder",
      category: "Genetics",
      source: "FDA News",
      date: "10 hours ago",
      icon: Pill,
      color: "from-[#00C897] to-[#008080]",
      trending: true,
    },
    {
      title: "Telemedicine Adoption Reaches All-Time High in Rural Areas",
      category: "Digital Health",
      source: "Healthcare Innovation",
      date: "12 hours ago",
      icon: Activity,
      color: "from-orange-500 to-orange-600",
      trending: false,
    },
    {
      title: "Breakthrough in Alzheimer's Research: New Drug Shows Cognitive Improvement",
      category: "Neurology",
      source: "Neuroscience Today",
      date: "1 day ago",
      icon: Brain,
      color: "from-indigo-500 to-indigo-600",
      trending: true,
    },
  ];

  const trendingTopics = [
    { topic: "AI in Healthcare", count: 234 },
    { topic: "Cancer Research", count: 189 },
    { topic: "Mental Health", count: 156 },
    { topic: "Telemedicine", count: 142 },
    { topic: "Drug Development", count: 128 },
  ];

  return (
    <div className="h-full flex">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#008080] via-[#00C897] to-[#3B82F6] p-8 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Newspaper className="w-10 h-10" />
              <h1 className="text-white" style={{ fontSize: '32px', fontWeight: 600 }}>
                Latest Medical News
              </h1>
            </div>
            <p className="text-white/90 mb-6" style={{ fontSize: '16px' }}>
              Stay updated with the latest breakthroughs in healthcare and medical research
            </p>
            <div className="flex gap-2 flex-wrap">
              {newsCategories.map((cat, idx) => (
                <Button
                  key={idx}
                  variant={cat.active ? "default" : "outline"}
                  className={cat.active 
                    ? "bg-white text-[#008080] hover:bg-white/90 rounded-xl" 
                    : "border-white/30 text-white hover:bg-white/10 rounded-xl"
                  }
                  style={{ fontSize: '13px' }}
                >
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Article */}
        <div className="p-8 bg-[#FAFAFA]">
          <div className="max-w-6xl mx-auto">
            <Card className="rounded-3xl overflow-hidden border-[rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 bg-gray-200">
                  <img 
                    src={featuredNews.image} 
                    alt={featuredNews.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-600 text-white border-0 rounded-full">
                    Featured
                  </Badge>
                </div>
                <div className="p-8 flex flex-col justify-center bg-white">
                  <Badge className="bg-[#3B82F6] text-white border-0 rounded-full w-fit mb-3">
                    {featuredNews.category}
                  </Badge>
                  <h2 className="mb-4">{featuredNews.title}</h2>
                  <p className="text-[#717182] mb-4" style={{ fontSize: '14px' }}>
                    {featuredNews.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-[#717182] mb-6" style={{ fontSize: '12px' }}>
                    <span>{featuredNews.source}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{featuredNews.date}</span>
                    </div>
                    <span>•</span>
                    <span>{featuredNews.readTime}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button className="bg-gradient-to-r from-[#008080] to-[#00C897] hover:opacity-90 text-white rounded-xl">
                      Read Article
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline" className="rounded-xl">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="rounded-xl">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* News List */}
        <div className="p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2>Recent Updates</h2>
              <Button variant="outline" className="rounded-xl">
                View All News
              </Button>
            </div>
            <div className="space-y-4">
              {newsList.map((news, idx) => (
                <Card key={idx} className="p-6 rounded-2xl border-[rgba(0,0,0,0.1)] hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${news.color} flex items-center justify-center flex-shrink-0`}>
                      <news.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="outline" className="rounded-full">
                            {news.category}
                          </Badge>
                          {news.trending && (
                            <Badge className="bg-red-100 text-red-700 border-0 rounded-full">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              Trending
                            </Badge>
                          )}
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <Button variant="ghost" size="icon" className="rounded-xl h-8 w-8">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="rounded-xl h-8 w-8">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <h3 style={{ fontSize: '15px' }} className="mb-2">{news.title}</h3>
                      <div className="flex items-center gap-3 text-[#717182]" style={{ fontSize: '12px' }}>
                        <span>{news.source}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{news.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 border-l bg-white flex flex-col">
        {/* Trending Topics */}
        <div className="p-6 border-b">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#008080]" />
            <h3>Trending Topics</h3>
          </div>
          <div className="space-y-3">
            {trendingTopics.map((topic, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-[#FAFAFA] rounded-xl hover:bg-[#F5F5F5] transition-colors cursor-pointer">
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 500 }}>{topic.topic}</p>
                  <p className="text-[#717182]" style={{ fontSize: '11px' }}>
                    {topic.count} articles
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#008080] to-[#00C897] flex items-center justify-center">
                  <span className="text-white" style={{ fontSize: '11px', fontWeight: 600 }}>
                    #{idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Articles */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="p-4 border-b">
            <h3>Your Saved Articles</h3>
          </div>
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-3">
              <Card className="p-3 rounded-xl border-[rgba(0,0,0,0.1)] hover:shadow-sm transition-shadow cursor-pointer">
                <Badge className="bg-purple-100 text-purple-700 border-0 rounded-full mb-2" style={{ fontSize: '10px' }}>
                  Neurology
                </Badge>
                <p style={{ fontSize: '12px', fontWeight: 500 }} className="mb-1">
                  Brain-Computer Interfaces: The Future of Medicine
                </p>
                <p className="text-[#717182]" style={{ fontSize: '10px' }}>
                  Saved 2 days ago
                </p>
              </Card>
              <Card className="p-3 rounded-xl border-[rgba(0,0,0,0.1)] hover:shadow-sm transition-shadow cursor-pointer">
                <Badge className="bg-blue-100 text-blue-700 border-0 rounded-full mb-2" style={{ fontSize: '10px' }}>
                  Research
                </Badge>
                <p style={{ fontSize: '12px', fontWeight: 500 }} className="mb-1">
                  COVID-19 Long-Term Effects Study Results
                </p>
                <p className="text-[#717182]" style={{ fontSize: '10px' }}>
                  Saved 3 days ago
                </p>
              </Card>
              <Card className="p-3 rounded-xl border-[rgba(0,0,0,0.1)] hover:shadow-sm transition-shadow cursor-pointer">
                <Badge className="bg-green-100 text-green-700 border-0 rounded-full mb-2" style={{ fontSize: '10px' }}>
                  Technology
                </Badge>
                <p style={{ fontSize: '12px', fontWeight: 500 }} className="mb-1">
                  Blockchain in Healthcare: A Comprehensive Guide
                </p>
                <p className="text-[#717182]" style={{ fontSize: '10px' }}>
                  Saved 5 days ago
                </p>
              </Card>
            </div>
          </ScrollArea>
        </div>

        {/* Newsletter Signup */}
        <div className="p-4 border-t">
          <div className="bg-gradient-to-br from-[#3B82F6]/10 to-[#008080]/10 rounded-2xl p-4">
            <h3 className="mb-2" style={{ fontSize: '14px' }}>Stay Informed</h3>
            <p className="text-[#717182] mb-3" style={{ fontSize: '11px' }}>
              Get daily medical news digest
            </p>
            <Button className="w-full bg-gradient-to-r from-[#008080] to-[#00C897] hover:opacity-90 text-white rounded-xl" style={{ fontSize: '13px' }}>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
