
import { ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/schedule/BottomNav";

const Certificate = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <header className="px-6 py-3 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="p-1.5"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-medium">Your Certificate</h1>
      </header>

      {/* Timer Circle */}
      <div className="px-6 py-4 flex justify-center">
        <div className="w-60 h-60 rounded-full bg-[#9b87f5] flex flex-col items-center justify-center text-center p-6 shadow-lg">
          <span className="text-4xl font-bold mb-2">8:22:28</span>
          <span className="text-base mb-1">Hours : Minutes</span>
          <span className="text-sm opacity-80">Until Your Certificate Unlocks</span>
        </div>
      </div>

      {/* Steps Section */}
      <div className="px-6 py-2">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h2 className="text-xl font-medium mb-4">Steps to Unlock</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                <svg className="w-4 h-4 text-[#2E7D32]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-base">Attend 3 Keynotes</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-base">Visit 5 Exhibits</span>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Preview */}
      <div className="px-6 py-2">
        <div className="bg-white rounded-xl shadow-sm p-4 border border-[#9b87f5] mb-4">
          <div className="text-center space-y-2">
            <h3 className="text-[#C25B3F] text-xl font-medium">Innovation & Policy</h3>
            <h4 className="text-[#C25B3F] text-xl font-medium">Leadership Award</h4>
            <p className="text-lg text-gray-600">John Anderson</p>
            <p className="text-sm text-gray-500">March 15, 2025</p>
          </div>
        </div>

        <Button 
          className="w-full bg-[#9b87f5] hover:bg-[#8b77e5] text-white h-12 rounded-full flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          PDF
        </Button>
      </div>

      <BottomNav />
    </div>
  );
};

export default Certificate;
