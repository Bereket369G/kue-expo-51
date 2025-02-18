
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const EventDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      {/* Header */}
      <div className="relative h-[280px]">
        <img 
          src="/lovable-uploads/3f61dc32-6b23-4b89-af85-2ad33c439c0e.png"
          alt="Event banner"
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Content */}
      <div className="px-6 py-8">
        <span className="inline-block px-3 py-1 bg-[#E8F5E9] text-[#2E7D32] rounded-full text-sm mb-4">
          Public Session
        </span>

        <h1 className="text-3xl font-bold mb-4">Opening Ceremony</h1>

        <div className="space-y-6">
          {/* Time and Location */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#EEF3FF] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-[#1A1F7C]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">Time & Location</h3>
              <p className="text-gray-600">09:00 AM - 10:30 AM</p>
              <p className="text-gray-600">Grand Hall</p>
              <p className="text-[#1A1F7C] mt-2">Starts in 2 hours</p>
            </div>
          </div>

          {/* About */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#EEF3FF] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-[#1A1F7C]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">About</h3>
              <p className="text-gray-600 leading-relaxed">
                Join us for the grand opening ceremony of the Global Innovation Summit 2025. 
                Experience thought-provoking keynotes, network with industry leaders, and explore 
                the future of technology and innovation.
              </p>
            </div>
          </div>

          {/* Speakers */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#EEF3FF] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-[#1A1F7C]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-3">Speakers</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/lovable-uploads/0ac720e3-5aee-45de-8866-44642f6feeff.png"
                    alt="Speaker"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-medium">H.E. Dr. John Doe</p>
                    <p className="text-gray-600 text-sm">Minister of Tech Policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="fixed bottom-6 left-6 right-6 flex gap-4">
          <Button
            variant="outline"
            className="flex-1 h-14 text-[#1A1F7C] border-[#1A1F7C]"
          >
            Add to Calendar
          </Button>
          <Button
            className="flex-1 h-14 bg-[#1A1F7C] hover:bg-[#161963]"
          >
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
