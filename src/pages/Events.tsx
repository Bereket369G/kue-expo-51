
import { EventCard } from "@/components/events/EventCard";
import { SpeakerCard } from "@/components/events/SpeakerCard";
import { ShowcaseCard } from "@/components/events/ShowcaseCard";
import { BottomNav } from "@/components/schedule/BottomNav";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

const Events = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const speakersRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] pb-24">
      <div className="px-6 py-8">
        <h1 className="text-4xl font-bold mb-8">EVENTS</h1>

        <section className="mb-12 relative">
          <h2 className="text-3xl font-medium mb-6">Featured Sessions</h2>
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar relative"
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
          <button
            onClick={() => scrollRight(scrollRef)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#1A1F7C] rounded-full flex items-center justify-center text-white shadow-lg z-10"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </section>

        <section className="mb-12 relative">
          <h2 className="text-3xl font-medium mb-6">Featured Speakers</h2>
          <div 
            ref={speakersRef}
            className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar relative"
          >
            <div className="flex-none w-[calc(100%-3rem)]">
              <SpeakerCard
                image="/lovable-uploads/0ac720e3-5aee-45de-8866-44642f6feeff.png"
                name="H.E. Dr. John Doe"
                title="Minister of Tech Policy"
                role="Keynote Speaker"
                onClick={() => navigate("/speakers/john-doe")}
              />
            </div>
            <div className="flex-none w-[calc(100%-3rem)]">
              <SpeakerCard
                image="/lovable-uploads/0ac720e3-5aee-45de-8866-44642f6feeff.png"
                name="Dr. Sarah Johnson"
                title="AI Ethics Researcher"
                role="Guest Speaker"
                onClick={() => navigate("/speakers/sarah-johnson")}
              />
            </div>
            <div className="flex-none w-[calc(100%-3rem)]">
              <SpeakerCard
                image="/lovable-uploads/0ac720e3-5aee-45de-8866-44642f6feeff.png"
                name="Prof. Michael Chang"
                title="Digital Transformation Expert"
                role="Panel Moderator"
                onClick={() => navigate("/speakers/michael-chang")}
              />
            </div>
          </div>
          <button
            onClick={() => scrollRight(speakersRef)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#1A1F7C] rounded-full flex items-center justify-center text-white shadow-lg z-10"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </section>

        <section className="relative">
          <h2 className="text-3xl font-medium mb-6">Innovative Showcase</h2>
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
          <button
            onClick={() => scrollRight(showcaseRef)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#1A1F7C] rounded-full flex items-center justify-center text-white shadow-lg z-10"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
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
