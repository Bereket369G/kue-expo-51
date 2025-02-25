
import { ArrowLeft, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SmartCities = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0288D1] text-white">
      <header className="relative h-16 flex items-center justify-between px-6">
        <button onClick={() => navigate(-1)} className="p-2">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-4">
          <Building2 className="w-6 h-6" />
        </div>
      </header>

      <div className="relative h-[240px] flex flex-col justify-end p-6 bg-gradient-to-b from-[#0288D1]/50 to-[#0288D1]">
        <h1 className="text-4xl font-bold mb-4">Smart Cities Initiative</h1>
        <p className="text-xl opacity-90">Future-ready infrastructure</p>
      </div>

      <div className="bg-white text-black rounded-t-[32px] min-h-[500px] p-6">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#E1F5FE] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#0288D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm text-center">10:30 AM</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#E1F5FE] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#0288D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-sm text-center">Smart Arena</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#E1F5FE] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#0288D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm text-center">Public Access</span>
          </div>
        </div>

        <div className="space-y-4 text-gray-600">
          <p>
            Experience the future of urban sports infrastructure with smart city integration. From connected stadiums to intelligent transportation systems, discover how technology is reshaping the sporting experience.
          </p>
          <p>
            Live demonstrations of smart city technologies and their applications in sports venue management and crowd control.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmartCities;
