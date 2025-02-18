
import { ArrowLeft, Bell, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EventDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1A1F7C] text-white">
      {/* Header */}
      <header className="relative h-16 flex items-center justify-between px-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-4">
          <ShieldCheck className="w-6 h-6" />
          <Bell className="w-6 h-6" />
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[240px] flex flex-col justify-end p-6">
        <h1 className="text-4xl font-bold mb-4">
          Global Leadership & Innovation Summit 2025
        </h1>
        <p className="text-xl opacity-90">
          Bridging Policy and Innovation for a Sustainable Future
        </p>
      </div>

      {/* Content Section */}
      <div className="bg-white text-black rounded-t-[32px] min-h-[500px] p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          PARTNERSHIP SECTION
        </h2>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#E3F2FD] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#1A1F7C]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-sm text-center">Add to Schedule</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#E8F5E9] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#2E7D32]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="text-sm text-center">Speakers</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#FFF3E0] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#E65100]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-sm text-center">Venue</span>
          </div>
        </div>

        {/* Description Section */}
        <div className="space-y-4 text-gray-600">
          <p>
            Join us for an extraordinary gathering of global leaders, innovators, and changemakers at the Global Leadership & Innovation Summit 2025. This premier event brings together the brightest minds from government, industry, and academia to shape the future of sustainable development and technological advancement.
          </p>
          <p>
            Through engaging panel discussions, keynote speeches, and interactive workshops, participants will explore cutting-edge solutions to today's most pressing challenges while fostering meaningful partnerships for tomorrow's opportunities.
          </p>
          <p>
            Don't miss this unique opportunity to be part of a transformative dialogue that will influence policy-making and innovation strategies for years to come.
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
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
    </div>
  );
};

export default EventDetails;
