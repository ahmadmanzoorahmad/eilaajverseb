import { Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function LinkedInFooter() {
  const linkedinUrl = "https://www.linkedin.com/company/eilaajverse/";

  return (
    <div className="border-t bg-gradient-to-r from-[#008080]/5 to-[#00C897]/5 py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#0077B5] flex items-center justify-center">
            <Linkedin className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-[#030213]" style={{ fontSize: '13px', fontWeight: 600 }}>
              Follow EilaajVerse on LinkedIn
            </div>
            <div className="text-[#717182]" style={{ fontSize: '11px' }}>
              Stay updated with our latest healthcare innovations
            </div>
          </div>
        </div>
        <Button
          onClick={() => window.open(linkedinUrl, '_blank')}
          className="bg-[#0077B5] hover:bg-[#0077B5]/90 text-white rounded-xl"
          size="sm"
        >
          <Linkedin className="w-4 h-4 mr-2" />
          Follow Us
        </Button>
      </div>
    </div>
  );
}
