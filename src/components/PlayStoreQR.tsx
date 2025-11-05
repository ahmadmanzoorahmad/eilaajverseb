import { Card } from "./ui/card";
import { QrCode, Download } from "lucide-react";
import { Button } from "./ui/button";

interface PlayStoreQRProps {
  userRole?: string;
}

export function PlayStoreQR({ userRole }: PlayStoreQRProps) {
  if (userRole !== "doctor" && userRole !== "patient") {
    return null;
  }

  const playStoreUrl = "https://play.google.com/store/apps/details?id=io.eilaajverse.app";

  return (
    <Card className="p-4 border-[rgba(0,0,0,0.1)] rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Download className="w-5 h-5 text-[#008080]" />
            <h3 className="text-[#030213]" style={{ fontSize: '15px', fontWeight: 600 }}>
              Download Mobile App
            </h3>
          </div>
          <p className="text-[#717182] mb-3" style={{ fontSize: '13px' }}>
            Get the EilaajVerse mobile app for {userRole === "doctor" ? "doctors" : "patients"} on your Android device
          </p>
          <Button
            onClick={() => window.open(playStoreUrl, '_blank')}
            className="bg-[#008080] hover:bg-[#008080]/90 text-white rounded-xl"
            size="sm"
          >
            <Download className="w-4 h-4 mr-2" />
            Download from Play Store
          </Button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-24 h-24 bg-white rounded-xl p-2 shadow-sm flex items-center justify-center">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(playStoreUrl)}`}
              alt="Play Store QR Code"
              className="w-full h-full"
            />
          </div>
          <div className="flex items-center gap-1 text-[#717182]" style={{ fontSize: '10px' }}>
            <QrCode className="w-3 h-3" />
            <span>Scan to download</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
