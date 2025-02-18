
import { FeaturedSessionsSection } from "@/components/events/sections/FeaturedSessionsSection";
import { FeaturedSpeakersSection } from "@/components/events/sections/FeaturedSpeakersSection";
import { InnovativeShowcaseSection } from "@/components/events/sections/InnovativeShowcaseSection";
import { ScrollStyles } from "@/components/events/ScrollStyles";
import { BottomNav } from "@/components/schedule/BottomNav";
import { useRef, useState, useEffect } from "react";

const Events = () => {
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

        <FeaturedSessionsSection
          scrollRef={scrollRef}
          showArrow={showFeaturedArrow}
          onScroll={() => scrollRight(scrollRef)}
        />

        <FeaturedSpeakersSection
          scrollRef={speakersRef}
          showArrow={showSpeakersArrow}
          onScroll={() => scrollRight(speakersRef)}
        />

        <InnovativeShowcaseSection
          scrollRef={showcaseRef}
          showArrow={showShowcaseArrow}
          onScroll={() => scrollRight(showcaseRef)}
        />
      </div>

      <ScrollStyles />
      <BottomNav />
    </div>
  );
};

export default Events;
