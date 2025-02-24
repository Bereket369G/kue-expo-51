
import { SpeakerCard } from "@/components/events/SpeakerCard";
import { ArrowRight } from "lucide-react";
import { RefObject } from "react";

interface FeaturedSpeakersSectionProps {
  scrollRef: RefObject<HTMLDivElement>;
  showArrow: boolean;
  onScroll: () => void;
}

export const FeaturedSpeakersSection = ({
  scrollRef,
  showArrow,
  onScroll
}: FeaturedSpeakersSectionProps) => {
  return (
    <section className="mb-12 relative">
      <h2 className="text-3xl font-medium mb-6 text-gray-900">Featured Speakers</h2>
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory"
      >
        <div className="flex-none w-[calc(100%-3rem)] snap-start">
          <SpeakerCard
            image="/lovable-uploads/ad4f4cc3-a63b-40ec-9bfc-438c718e6a50.png"
            name="Haile Gebrselassie"
            title="Long-distance Running Legend"
            role="Keynote Speaker"
            loading="lazy"
          />
        </div>
        <div className="flex-none w-[calc(100%-3rem)] snap-start">
          <SpeakerCard
            image="/lovable-uploads/38afb8f8-5bde-4933-8cf6-c2c7abb7c3c2.png"
            name="Tirunesh Dibaba"
            title="Triple Olympic Champion"
            role="Guest Speaker"
            loading="lazy"
          />
        </div>
        <div className="flex-none w-[calc(100%-3rem)] snap-start">
          <SpeakerCard
            image="/lovable-uploads/cef38671-6c14-470d-9c11-c84d6f95344f.png"
            name="Derartu Tulu"
            title="First Black African woman to win an Olympic gold medal"
            role="Panel Moderator"
            loading="lazy"
          />
        </div>
        <div className="flex-none w-[calc(100%-3rem)] snap-start">
          <SpeakerCard
            image="/lovable-uploads/4f3ee650-28c5-4aaa-acd2-60805cae3fd1.png"
            name="Dr. Solomon Dadi"
            title="Director of Digital Transformation"
            role="Technology Expert"
            loading="lazy"
          />
        </div>
        <div className="flex-none w-[calc(100%-3rem)] snap-start">
          <SpeakerCard
            image="/lovable-uploads/af728d60-9b9b-4775-84db-f99ada2abc0b.png"
            name="Dr. Bethlehem Alemu"
            title="Founder, soleRebels"
            role="Innovation Leader"
            loading="lazy"
          />
        </div>
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
