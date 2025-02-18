import { ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/schedule/BottomNav";
import { useEffect, useState } from "react";
const Certificate = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(30000);
  const [progress, setProgress] = useState(100);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    setProgress(timeLeft / 30000 * 100);
  }, [timeLeft]);
  const formatTime = (seconds: number) => {
    // Add 3 hours to convert to Ethiopian time
    const ethiopianSeconds = seconds + 3 * 3600;
    const hours = Math.floor(ethiopianSeconds / 3600);
    const minutes = Math.floor(ethiopianSeconds % 3600 / 60);
    const remainingSeconds = ethiopianSeconds % 60;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    return {
      time: `${displayHours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`,
      ampm
    };
  };
  const {
    time,
    ampm
  } = formatTime(timeLeft);
  return <div className="min-h-screen bg-white pb-20">
      <header className="px-6 py-3 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-1.5">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-medium">Your Certificate</h1>
      </header>

      <div className="px-6 py-4 flex justify-center">
        <div className="relative w-60 h-60">
          <svg className="w-60 h-60 transform -rotate-90">
            <circle cx="120" cy="120" r="112" className="stroke-[#e0d5ff] fill-none stroke-[8]" />
            <circle cx="120" cy="120" r="112" className="stroke-[#9b87f5] fill-none stroke-[8]" strokeDasharray={`${2 * Math.PI * 112}`} strokeDashoffset={`${2 * Math.PI * 112 * (1 - progress / 100)}`} style={{
            transition: 'stroke-dashoffset 1s ease-in-out'
          }} />
          </svg>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center bg-[#9b87f5] rounded-full shadow-lg">
            <span className="text-4xl font-bold mb-1 text-white">{time}</span>
            <span className="text-sm mb-1 text-white">{ampm}</span>
            <span className="mb-1 text-white text-xs">Hours : Minutes : Seconds</span>
            <span className="text-sm opacity-80 text-white">Until Your Certificate Unlocks</span>
          </div>
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
            <p className="text-sm text-gray-500">February 27, 2025</p>
          </div>
        </div>

        <Button className="w-full bg-[#9b87f5] hover:bg-[#8b77e5] text-white h-12 rounded-full flex items-center justify-center gap-2">
          <Download className="w-4 h-4" />
          PDF
        </Button>
      </div>

      <BottomNav />
    </div>;
};
export default Certificate;