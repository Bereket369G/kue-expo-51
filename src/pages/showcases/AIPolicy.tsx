
import { ArrowLeft, Binary } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AIPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#6A1B9A] text-white">
      <header className="relative h-16 flex items-center justify-between px-6">
        <button onClick={() => navigate(-1)} className="p-2">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-4">
          <Binary className="w-6 h-6" />
        </div>
      </header>

      <div className="relative h-[240px] flex flex-col justify-end p-6 bg-gradient-to-b from-[#6A1B9A]/50 to-[#6A1B9A]">
        <h1 className="text-4xl font-bold mb-4">AI Policy Framework</h1>
        <p className="text-xl opacity-90">Next-gen governance</p>
      </div>

      <div className="bg-white text-black rounded-t-[32px] min-h-[500px] p-6">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#F3E5F5] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#6A1B9A]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm text-center">02:30 PM</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#F3E5F5] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#6A1B9A]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-sm text-center">Tech Center</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#F3E5F5] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#6A1B9A]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm text-center">Limited Access</span>
          </div>
        </div>

        <div className="space-y-4 text-gray-600">
          <p>
            Explore cutting-edge AI governance frameworks designed specifically for sports technology. Learn about ethical considerations, data privacy, and regulatory compliance in AI-powered sports analytics.
          </p>
          <p>
            Expert panels and workshops on implementing AI policies that protect athletes while fostering innovation in sports technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIPolicy;
