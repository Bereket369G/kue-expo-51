
import { ScheduleHeader } from "@/components/schedule/ScheduleHeader";
import { ScheduleItem } from "@/components/schedule/ScheduleItem";
import { GuestCard } from "@/components/schedule/GuestCard";
import { BottomNav } from "@/components/schedule/BottomNav";

const Schedule = () => {
  return <div className="min-h-screen pb-20 bg-indigo-100">
      <ScheduleHeader />
      
      <div className="container mx-auto max-w-4xl px-6 py-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Program Schedule</h2>
        
        <div className="space-y-4">
          <ScheduleItem time="09:00 AM" title="Opening Ceremony: Future of Innovation" location="Main Auditorium" type="keynote" />
          <ScheduleItem time="10:30 AM" title="Networking Break" location="Exhibition Hall" type="break" />
          <ScheduleItem time="11:00 AM" title="AI Governance Summit" location="Diplomatic Suite A" type="closed-door" />
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-6 py-8">
        <h2 className="text-3xl font-bold text-[#1A1F7C] mb-6">Distinguished Guests</h2>
        
        <div className="space-y-4">
          <GuestCard image="/lovable-uploads/f37da260-e928-421d-8716-9ed2d6377fe8.png" name="H.E. Abiy Ahmed" title="Prime Minister of Ethiopia" roles={["Keynote Speaker", "VIP"]} />
          <GuestCard image="/lovable-uploads/f903df5a-b520-4352-adbb-b1e988db0e3a.png" name="Dr. Birhane Meskel" title="Former Minister of Education" roles={["Panel Chair", "VIP"]} />
          <GuestCard image="/lovable-uploads/ad4f4cc3-a63b-40ec-9bfc-438c718e6a50.png" name="Haile Gebrselassie" title="Olympic Champion & Business Leader" roles={["Guest Speaker", "Innovation Leader"]} />
          <GuestCard image="/lovable-uploads/38afb8f8-5bde-4933-8cf6-c2c7abb7c3c2.png" name="Tirunesh Dibaba" title="Triple Olympic Champion" roles={["Special Guest", "Sports Ambassador"]} />
          <GuestCard image="/lovable-uploads/cef38671-6c14-470d-9c11-c84d6f95344f.png" name="Derartu Tulu" title="Olympic Gold Medalist" roles={["Distinguished Guest", "Sports Legend"]} />
          <GuestCard image="/lovable-uploads/32fa31a6-5e5c-4b2e-905f-7a84ffa14f88.png" name="Dr. Eleni Gabre-Madhin" title="Founder & CEO, blueMoon" roles={["Innovation Speaker", "Tech Leader"]} />
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-6 py-8">
        <h2 className="text-3xl font-bold text-[#1A1F7C] mb-6">Featured Speakers</h2>
        
        <div className="space-y-4">
          <GuestCard image="/lovable-uploads/0ac720e3-5aee-45de-8866-44642f6feeff.png" name="Dr. Yinager Dessie" title="Governor, National Bank of Ethiopia" roles={["Economic Policy", "Finance Expert"]} />
          <GuestCard image="/lovable-uploads/0ac8a5f3-ead5-487c-9d9f-14b501866eea.png" name="Prof. Sebsebe Demissew" title="Executive Director, Ethiopian Academy of Sciences" roles={["Research", "Innovation"]} />
          <GuestCard image="/lovable-uploads/4f3ee650-28c5-4aaa-acd2-60805cae3fd1.png" name="Dr. Solomon Dadi" title="Director of Digital Transformation" roles={["Digital Innovation", "Technology"]} />
          <GuestCard image="/lovable-uploads/af728d60-9b9b-4775-84db-f99ada2abc0b.png" name="Dr. Bethlehem Alemu" title="Founder, soleRebels" roles={["Entrepreneurship", "Innovation"]} />
        </div>
      </div>

      <BottomNav />
    </div>;
};

export default Schedule;
