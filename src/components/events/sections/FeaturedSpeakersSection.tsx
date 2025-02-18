
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
            image="/lovable-uploads/photo-1581092795360-fd1ca04f0952.jpg"
            name="Haile Gebrselassie"
            title="Long-distance Running Legend"
            role="Keynote Speaker"
          />
        </div>
        <div className="flex-none w-[calc(100%-3rem)] snap-start">
          <SpeakerCard
            image="/lovable-uploads/photo-1581091226825-a6a2a5aee158.jpg"
            name="Tirunesh Dibaba"
            title="Triple Olympic Champion"
            role="Guest Speaker"
          />
        </div>
        <div className="flex-none w-[calc(100%-3rem)] snap-start">
          <SpeakerCard
            image="/lovable-uploads/photo-1526374965328-7f61d4dc18c5.jpg"
            name="Abebe Bikila"
            title="Olympic Marathon Pioneer"
            role="Panel Moderator"
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
