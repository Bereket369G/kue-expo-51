import { ArrowLeft, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TechPolicy = () => {
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
        <h1 className="text-4xl font-bold mb-4">Tech Policy Roundtable</h1>
        <p className="text-xl opacity-90">
          Digital Innovation in Athletics
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
            <span className="text-sm text-center">11:30 AM</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#E8F5E9] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#2E7D32]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="text-sm text-center">Executive Room</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#FFF3E0] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#E65100]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="text-sm text-center">Restricted Access</span>
          </div>
        </div>

        <div className="space-y-4 text-gray-600">
          <p>
            A closed-door session discussing the integration of technology in athletics, featuring discussions on performance tracking, digital training solutions, and the future of sports technology.
          </p>
          <p>
            Limited to delegates and special invitees. Pre-registration required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechPolicy;
