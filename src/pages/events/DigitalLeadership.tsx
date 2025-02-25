
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DigitalLeadership = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1A1F7C] text-white">
      <header className="relative h-16 flex items-center justify-between px-6">
        <button onClick={() => navigate(-1)} className="p-2">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-4">
          <ShieldCheck className="w-6 h-6" />
        </div>
      </header>

      <div className="relative h-[240px] flex flex-col justify-end p-6 bg-gradient-to-b from-[#1A1F7C]/50 to-[#1A1F7C]">
        <h1 className="text-4xl font-bold mb-4">Digital Leadership Meet</h1>
        <p className="text-xl opacity-90">
          Leading the Digital Transformation in Sports
        </p>
      </div>

      <div className="bg-white text-black rounded-t-[32px] min-h-[500px] p-6">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#E3F2FD] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#1A1F7C]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm text-center">03:30 PM</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#E8F5E9] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#2E7D32]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-sm text-center">Executive Suite</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#FFF3E0] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#E65100]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="text-sm text-center">VIP Access Required</span>
          </div>
        </div>

        <div className="space-y-4 text-gray-600">
          <p>
            An exclusive gathering of digital pioneers and sports industry leaders. Share insights, strategize future initiatives, and explore collaborative opportunities in the digital transformation of athletics.
          </p>
          <p>
            Exclusive networking opportunities and strategic planning sessions for digital innovation in sports administration and athlete development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalLeadership;
