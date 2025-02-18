import { EventCard } from "@/components/events/EventCard";
import { SpeakerCard } from "@/components/events/SpeakerCard";
import { ShowcaseCard } from "@/components/events/ShowcaseCard";
import { BottomNav } from "@/components/schedule/BottomNav";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Events = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const speakersRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  const [showFeaturedArrow, setShowFeaturedArrow] = useState(true);
  const [showSpeakersArrow, setShowSpeakersArrow] = useState(true);
  const [showShowcaseArrow, setShowShowcaseArrow] = useState(true);

  const checkScrollPosition = (
    element: HTMLDivElement,
    setShowArrow: (show: boolean) => void
  ) => {
    const isAtEnd = 
      Math.abs(
        element.scrollWidth - element.clientWidth - element.scrollLeft
      ) < 10;
    setShowArrow(!isAtEnd);
  };

  useEffect(() => {
    const featuredElement = scrollRef.current;
    const speakersElement = speakersRef.current;
    const showcaseElement = showcaseRef.current;

    if (featuredElement) {
      checkScrollPosition(featuredElement, setShowFeaturedArrow);
      featuredElement.addEventListener('scroll', () => 
        checkScrollPosition(featuredElement, setShowFeaturedArrow)
      );
    }

    if (speakersElement) {
      checkScrollPosition(speakersElement, setShowSpeakersArrow);
      speakersElement.addEventListener('scroll', () => 
        checkScrollPosition(speakersElement, setShowSpeakersArrow)
      );
    }

    if (showcaseElement) {
      checkScrollPosition(showcaseElement, setShowShowcaseArrow);
      showcaseElement.addEventListener('scroll', () => 
        checkScrollPosition(showcaseElement, setShowShowcaseArrow)
      );
    }

    return () => {
      if (featuredElement) {
        featuredElement.removeEventListener('scroll', () => 
          checkScrollPosition(featuredElement, setShowFeaturedArrow)
        );
      }
      if (speakersElement) {
        speakersElement.removeEventListener('scroll', () => 
          checkScrollPosition(speakersElement, setShowSpeakersArrow)
        );
      }
      if (showcaseElement) {
        showcaseElement.removeEventListener('scroll', () => 
          checkScrollPosition(showcaseElement, setShowShowcaseArrow)
        );
      }
    };
  }, []);

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] pb-24">
      <div className="px-6 py-8">
        <h1 className="text-4xl font-bold mb-8 text-[#1A1F7C]">EVENTS</h1>

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
              title="AI in Governance"
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
              startsIn="Starts in 7 hours"
              typeStyle="public"
              onClick={() => navigate("/events/digital-policy")}
            />
          </div>
          {showFeaturedArrow && (
            <button
              onClick={() => scrollRight(scrollRef)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#1A1F7C] rounded-full flex items-center justify-center text-white shadow-lg z-10 hover:bg-[#2A307C] transition-colors"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          )}
        </section>

        <section className="mb-12 relative">
          <h2 className="text-3xl font-medium mb-6 text-gray-900">Featured Speakers</h2>
          <div 
            ref={speakersRef}
            className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory"
          >
            <div className="flex-none w-[calc(100%-3rem)] snap-start">
              <SpeakerCard
                image="/lovable-uploads/photo-1581092795360-fd1ca04f0952.jpg"
                name="H.E. Dr. John Doe"
                title="Minister of Tech Policy"
                role="Keynote Speaker"
              />
            </div>
            <div className="flex-none w-[calc(100%-3rem)] snap-start">
              <SpeakerCard
                image="/lovable-uploads/photo-1581091226825-a6a2a5aee158.jpg"
                name="Dr. Sarah Johnson"
                title="AI Ethics Researcher"
                role="Guest Speaker"
              />
            </div>
            <div className="flex-none w-[calc(100%-3rem)] snap-start">
              <SpeakerCard
                image="/lovable-uploads/photo-1526374965328-7f61d4dc18c5.jpg"
                name="Prof. Michael Chang"
                title="Digital Transformation Expert"
                role="Panel Moderator"
              />
            </div>
          </div>
          {showSpeakersArrow && (
            <button
              onClick={() => scrollRight(speakersRef)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#1A1F7C] rounded-full flex items-center justify-center text-white shadow-lg z-10 hover:bg-[#2A307C] transition-colors"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          )}
        </section>

        <section className="relative">
          <h2 className="text-3xl font-medium mb-6 text-gray-900">Innovative Showcase</h2>
          <div 
            ref={showcaseRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4"
          >
            <div className="snap-start shrink-0 w-1/2">
              <ShowcaseCard
                image="/lovable-uploads/0ac720e3-5aee-45de-8866-44642f6feeff.png"
                type="Government-Backed"
                title="Green Energy"
                subtitle="Initiative"
                description="Sustainable power solutions"
                typeStyle="government"
              />
            </div>
            <div className="snap-start shrink-0 w-1/2">
              <ShowcaseCard
                image="/lovable-uploads/0ac720e3-5aee-45de-8866-44642f6feeff.png"
                type="Award-Winning"
                title="AI Policy Framework"
                subtitle="Next-gen governance"
                description="Advanced AI solutions"
                typeStyle="award"
              />
            </div>
            <div className="snap-start shrink-0 w-1/2">
              <ShowcaseCard
                image="/lovable-uploads/0ac720e3-5aee-45de-8866-44642f6feeff.png"
                type="Government-Backed"
                title="Smart Cities"
                subtitle="Urban Planning"
                description="Future-ready infrastructure"
                typeStyle="government"
              />
            </div>
            <div className="snap-start shrink-0 w-1/2">
              <ShowcaseCard
                image="/lovable-uploads/0ac720e3-5aee-45de-8866-44642f6feeff.png"
                type="Award-Winning"
                title="Digital ID System"
                subtitle="Security Innovation"
                description="Blockchain-based identity"
                typeStyle="award"
              />
            </div>
          </div>
          {showShowcaseArrow && (
            <button
              onClick={() => scrollRight(showcaseRef)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#1A1F7C] rounded-full flex items-center justify-center text-white shadow-lg z-10 hover:bg-[#2A307C] transition-colors"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          )}
        </section>
      </div>

      <style>
        {`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          @keyframes floating {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-floating {
            animation: floating 3s ease-in-out infinite;
          }
        `}
      </style>

      <BottomNav />
    </div>
  );
};

export default Events;
