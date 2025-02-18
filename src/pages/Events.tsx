
import { EventCard } from "@/components/events/EventCard";
import { SpeakerCard } from "@/components/events/SpeakerCard";
import { ShowcaseCard } from "@/components/events/ShowcaseCard";
import { BottomNav } from "@/components/schedule/BottomNav";

const Events = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FB] pb-24">
      <div className="px-6 py-8">
        <h1 className="text-4xl font-bold mb-8">EVENTS</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-medium mb-6">Featured Sessions</h2>
          <EventCard
            type="Public Session"
            title="Opening Ceremony"
            time="09:00AM - 10:30AM"
            location="Grand Hall"
            startsIn="Starts in 2 hours"
            typeStyle="public"
            onClick={() => console.log("Navigate to event details")}
          />
          <EventCard
            type="Restricted Access"
            title="Tech Policy Roundtable"
            time="11:30 AM"
            location="Executive Room"
            accessRequired="Delegate Access Required"
            typeStyle="restricted"
            onClick={() => console.log("Navigate to event details")}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-medium mb-6">Featured Speakers</h2>
          <SpeakerCard
            image="/lovable-uploads/0ac720e3-5aee-45de-8866-44642f6feeff.png"
            name="H.E. Dr. John Doe"
            title="Minister of Tech Policy"
            role="Keynote Speaker"
            onClick={() => console.log("Navigate to speaker details")}
          />
        </section>

        <section>
          <h2 className="text-3xl font-medium mb-6">Innovative Showcase</h2>
          <div className="grid grid-cols-2 gap-4">
            <ShowcaseCard
              image="/lovable-uploads/0ac720e3-5aee-45de-8866-44642f6feeff.png"
              type="Government-Backed"
              title="Green Energy"
              subtitle="Initiative"
              description="Sustainable power solutions"
              typeStyle="government"
            />
            <ShowcaseCard
              image="/lovable-uploads/0ac720e3-5aee-45de-8866-44642f6feeff.png"
              type="Award-Winning"
              title="AI Policy Framework"
              subtitle="Next-gen governance"
              description="Advanced AI solutions"
              typeStyle="award"
            />
          </div>
        </section>
      </div>

      <BottomNav />
    </div>
  );
};

export default Events;
