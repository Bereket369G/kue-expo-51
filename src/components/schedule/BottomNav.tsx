
import { useNavigate } from "react-router-dom";

export const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1A1F7C] text-white py-4">
      <div className="max-w-md mx-auto flex justify-around items-center">
        <button 
          onClick={() => navigate("/schedule")} 
          className="flex flex-col items-center gap-1"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm">Schedule</span>
        </button>
        <button 
          onClick={() => navigate("/events")}
          className="flex flex-col items-center gap-1"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2" />
          </svg>
          <span className="text-sm">All Events</span>
        </button>
        <button 
          onClick={() => navigate("/certificate")}
          className="flex flex-col items-center gap-1"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm">Certificate</span>
        </button>
      </div>
    </nav>
  );
};
