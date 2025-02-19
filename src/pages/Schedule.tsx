
import { ScheduleHeader } from "@/components/schedule/ScheduleHeader";
import { ScheduleItem } from "@/components/schedule/ScheduleItem";
import { GuestCard } from "@/components/schedule/GuestCard";
import { BottomNav } from "@/components/schedule/BottomNav";

const Schedule = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <ScheduleHeader />
      
      <div className="container mx-auto max-w-4xl px-6 py-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Program Schedule</h2>
        
        <div className="space-y-4">
          <ScheduleItem
            time="09:00 AM"
            title="Opening Ceremony: Future of Innovation"
            location="Main Auditorium"
            type="keynote"
          />
          <ScheduleItem
            time="10:30 AM"
            title="Networking Break"
            location="Exhibition Hall"
            type="break"
          />
          <ScheduleItem
            time="11:00 AM"
            title="AI Governance Summit"
            location="Diplomatic Suite A"
            type="closed-door"
          />
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-6 py-8">
        <h2 className="text-3xl font-bold text-[#1A1F7C] mb-6">Distinguished Guests</h2>
        
        <div className="space-y-4">
          <GuestCard
            image="/lovable-uploads/f37da260-e928-421d-8716-9ed2d6377fe8.png"
            name="H.E. Abiy Ahmed"
            title="Prime Minister of Ethiopia"
            roles={["Keynote Speaker", "VIP"]}
          />
          <GuestCard
            image="/lovable-uploads/f903df5a-b520-4352-adbb-b1e988db0e3a.png"
            name="Dr. Birhane Meskel"
            title="Former Minister of Education"
            roles={["Panel Chair", "VIP"]}
          />
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Schedule;
