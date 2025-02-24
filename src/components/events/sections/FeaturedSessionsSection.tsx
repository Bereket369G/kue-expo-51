
import { EventCard } from "@/components/events/EventCard";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { RefObject, useState } from "react";

interface FeaturedSessionsSectionProps {
  scrollRef: RefObject<HTMLDivElement>;
  showArrow: boolean;
  onScroll: () => void;
}

export const FeaturedSessionsSection = ({
  scrollRef,
  showArrow,
  onScroll
}: FeaturedSessionsSectionProps) => {
  const navigate = useNavigate();
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  const day1Sessions = [{
    type: "Public Session",
    title: "Opening Ceremony",
    time: "09:00AM - 10:30AM",
    location: "Grand Hall",
    startsIn: "Starts in 2 hours",
    route: "/events/opening-ceremony",
    typeStyle: "public" as const
  }, {
    type: "Restricted Access",
    title: "Tech Policy Roundtable",
    time: "11:30 AM",
    location: "Executive Room",
    accessRequired: "Delegate Access Required",
    route: "/events/tech-policy",
    typeStyle: "restricted" as const
  }, {
    type: "Public Session",
    title: "AI in Athletics",
    time: "02:00 PM",
    location: "Innovation Hub",
    startsIn: "Starts in 5 hours",
    route: "/events/ai-governance",
    typeStyle: "public" as const
  }, {
    type: "Public Session",
    title: "Future of Digital Policy",
    time: "04:30 PM",
    location: "Main Theatre",
    startsIn: "Starts in 8 hours",
    route: "/events/digital-policy",
    typeStyle: "public" as const
  }];

  const day2Sessions = [{
    type: "Public Session",
    title: "Innovation Summit",
    time: "09:30AM - 11:00AM",
    location: "Grand Hall",
    startsIn: "Starts in 1 hour",
    route: "/events/opening-ceremony",
    typeStyle: "public" as const
  }, {
    type: "Public Session",
    title: "Sports Technology Forum",
    time: "01:00 PM",
    location: "Innovation Hub",
    startsIn: "Starts in 4 hours",
    route: "/events/tech-policy",
    typeStyle: "public" as const
  }, {
    type: "Restricted Access",
    title: "Digital Leadership Meet",
    time: "03:30 PM",
    location: "Executive Suite",
    accessRequired: "VIP Access Required",
    route: "/events/ai-governance",
    typeStyle: "restricted" as const
  }, {
    type: "Public Session",
    title: "Closing Ceremony",
    time: "05:00 PM",
    location: "Main Theatre",
    startsIn: "Starts in 8 hours",
    route: "/events/digital-policy",
    typeStyle: "public" as const
  }];

  const currentSessions = activeDay === 'day1' ? day1Sessions : day2Sessions;

  return (
    <section className="mb-12 relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-medium text-gray-900">Featured Sessions</h2>
        <div className="relative p-1 w-48 bg-gray-800 mx-[38px] rounded-full">
          <div 
            className={`absolute top-1 transition-transform duration-200 ease-in-out ${
              activeDay === 'day1' ? 'translate-x-0' : 'translate-x-full'
            } w-24 h-8 bg-[#1A1F7C] rounded-full`}
          />
          <div className="relative flex">
            <button
              onClick={() => setActiveDay('day1')}
              className={`flex-1 h-8 text-sm font-medium transition-colors duration-200 z-10 ${
                activeDay === 'day1' ? 'text-white' : 'text-gray-600'
              }`}
            >
              Day 1
            </button>
            <button
              onClick={() => setActiveDay('day2')}
              className={`flex-1 h-8 text-sm font-medium transition-colors duration-200 z-10 ${
                activeDay === 'day2' ? 'text-white' : 'text-gray-600'
              }`}
            >
              Day 2
            </button>
          </div>
        </div>
      </div>
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory"
      >
        {currentSessions.map((session, index) => (
          <EventCard
            key={index}
            type={session.type}
            title={session.title}
            time={session.time}
            location={session.location}
            startsIn={session.startsIn}
            accessRequired={session.accessRequired}
            typeStyle={session.typeStyle}
            onClick={() => navigate(session.route)}
          />
        ))}
      </div>
      {showArrow && (
        <button
          onClick={onScroll}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#1A1F7C] rounded-full flex items-center justify-center text-white shadow-lg z-10 hover:bg-[#2A307C] transition-colors"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      )}
    </section>
  );
};
