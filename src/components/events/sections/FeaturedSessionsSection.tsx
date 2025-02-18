
import { EventCard } from "@/components/events/EventCard";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { RefObject } from "react";

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

  return (
    <section className="mb-12 relative">
      <h2 className="text-3xl font-medium mb-6 text-gray-900">Featured Sessions</h2>
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory"
      >
        <EventCard
          type="Public Session"
          title="Opening Ceremony"
          time="09:00AM - 10:30AM"
          location="Grand Hall"
          startsIn="Starts in 2 hours"
          typeStyle="public"
          onClick={() => navigate("/events/opening-ceremony")}
        />
        <EventCard
          type="Restricted Access"
          title="Tech Policy Roundtable"
          time="11:30 AM"
          location="Executive Room"
          accessRequired="Delegate Access Required"
          typeStyle="restricted"
          onClick={() => navigate("/events/tech-policy")}
        />
        <EventCard
          type="Public Session"
          title="AI in Athletics"
          time="02:00 PM"
          location="Innovation Hub"
          startsIn="Starts in 5 hours"
          typeStyle="public"
          onClick={() => navigate("/events/ai-governance")}
        />
        <EventCard
          type="Public Session"
          title="Future of Digital Policy"
          time="04:30 PM"
          location="Main Theatre"
          startsIn="Starts in 8 hours"
          typeStyle="public"
          onClick={() => navigate("/events/digital-policy")}
        />
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
