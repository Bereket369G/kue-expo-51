
import { ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/schedule/BottomNav";

const Certificate = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-medium">Your Certificate</h1>
      </header>

      {/* Timer Circle */}
      <div className="px-6 py-8 flex justify-center">
        <div className="w-72 h-72 rounded-full bg-[#9b87f5] flex flex-col items-center justify-center text-center p-8 shadow-lg">
          <span className="text-5xl font-bold mb-4">8:22:28</span>
          <span className="text-lg mb-1">Hours : Minutes</span>
          <span className="text-base opacity-80">Until Your Certificate Unlocks</span>
        </div>
      </div>

      {/* Steps Section */}
      <div className="px-6 py-4">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-medium mb-6">Steps to Unlock</h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#2E7D32]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-lg">Attend 3 Keynotes</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-lg">Visit 5 Exhibits</span>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Preview */}
      <div className="px-6 py-4">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-[#9b87f5] mb-6">
          <div className="text-center space-y-4">
            <h3 className="text-[#C25B3F] text-2xl font-medium">Innovation & Policy</h3>
            <h4 className="text-[#C25B3F] text-2xl font-medium">Leadership Award</h4>
            <p className="text-xl text-gray-600">John Anderson</p>
            <p className="text-gray-500">March 15, 2025</p>
          </div>
        </div>

        <Button 
          className="w-full bg-[#9b87f5] hover:bg-[#8b77e5] text-white h-14 rounded-full flex items-center justify-center gap-2"
        >
          <Download className="w-5 h-5" />
          PDF
        </Button>
      </div>

      <BottomNav />
    </div>
  );
};

export default Certificate;
