import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
export const ScheduleHeader = () => <div className="sticky top-0 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <div className="flex items-center gap-3">
        <img alt="Global Innovation Summit Logo" className="h-6" src="/images/af728d60-9b9b-4775-84db-f99ada2abc0b.png" />
        <h1 className="text-[#1A1F7C] text-lg font-semibold">AI Intelligence In Education 2025</h1>
      </div>
      <Button variant="outline" className="text-[#1A1F7C] gap-2">
        <Download className="w-4 h-4" />
        Download PDF
      </Button>
    </div>
  </div>;