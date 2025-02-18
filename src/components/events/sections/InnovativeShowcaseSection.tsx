
import { ShowcaseCard } from "@/components/events/ShowcaseCard";
import { ArrowRight } from "lucide-react";
import { RefObject } from "react";

interface InnovativeShowcaseSectionProps {
  scrollRef: RefObject<HTMLDivElement>;
  showArrow: boolean;
  onScroll: () => void;
}

export const InnovativeShowcaseSection = ({
  scrollRef,
  showArrow,
  onScroll
}: InnovativeShowcaseSectionProps) => {
  return (
    <section className="relative">
      <h2 className="text-3xl font-medium mb-6 text-gray-900">Innovative Showcase</h2>
      <div 
        ref={scrollRef}
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
