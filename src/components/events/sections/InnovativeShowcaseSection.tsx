
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
            image="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2969&auto=format&fit=crop"
            type="Government-Backed"
            title="Green Energy"
            subtitle="Initiative"
            description="Sustainable power solutions"
            typeStyle="government"
          />
        </div>
        <div className="snap-start shrink-0 w-1/2">
          <ShowcaseCard
            image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2970&auto=format&fit=crop"
            type="Award-Winning"
            title="AI Policy Framework"
            subtitle="Next-gen governance"
            description="Advanced AI solutions"
            typeStyle="award"
          />
        </div>
        <div className="snap-start shrink-0 w-1/2">
          <ShowcaseCard
            image="https://images.unsplash.com/photo-1557425529-b1ae9c141e7d?q=80&w=2970&auto=format&fit=crop"
            type="Government-Backed"
            title="Smart Cities"
            subtitle="Urban Planning"
            description="Future-ready infrastructure"
            typeStyle="government"
          />
        </div>
        <div className="snap-start shrink-0 w-1/2">
          <ShowcaseCard
            image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2970&auto=format&fit=crop"
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
