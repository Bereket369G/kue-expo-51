
import { ArrowLeft, Fingerprint } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DigitalID = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#7E57C2] text-white">
      <header className="relative h-16 flex items-center justify-between px-6">
        <button onClick={() => navigate(-1)} className="p-2">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-4">
          <Fingerprint className="w-6 h-6" />
        </div>
      </header>

      <div className="relative h-[240px] flex flex-col justify-end p-6 bg-gradient-to-b from-[#7E57C2]/50 to-[#7E57C2]">
        <h1 className="text-4xl font-bold mb-4">Digital ID System</h1>
        <p className="text-xl opacity-90">Security Innovation</p>
      </div>

      <div className="bg-white text-black rounded-t-[32px] min-h-[500px] p-6">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#EDE7F6] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#7E57C2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm text-center">11:30 AM</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#EDE7F6] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#7E57C2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-sm text-center">Security Hub</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#EDE7F6] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#7E57C2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-sm text-center">Restricted Access</span>
          </div>
        </div>

        <div className="space-y-4 text-gray-600">
          <p>
            Discover the latest in blockchain-based identity management for sports events. Learn how digital ID systems are revolutionizing event access, athlete verification, and fan engagement.
          </p>
          <p>
            Hands-on demonstrations of secure digital ticketing and credential verification systems using blockchain technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalID;
