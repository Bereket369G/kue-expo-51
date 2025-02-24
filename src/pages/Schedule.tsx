
import { ScheduleHeader } from "@/components/schedule/ScheduleHeader";
import { ScheduleItem } from "@/components/schedule/ScheduleItem";
import { GuestCard } from "@/components/schedule/GuestCard";
import { BottomNav } from "@/components/schedule/BottomNav";
import { useState } from "react";

const Schedule = () => {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  return (
    <div className="min-h-screen pb-20 bg-indigo-100">
      <ScheduleHeader />
      
      <div className="container mx-auto max-w-4xl px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Program Schedule</h2>
          <div className="relative p-1 w-48 bg-gray-800 rounded-full">
            <div 
              className={`absolute inset-y-1 ${
                activeDay === 'day1' ? 'left-1' : 'right-1'
              } w-[calc(50%-4px)] bg-[#1A1F7C] rounded-full transition-all duration-300`}
            />
            <div className="relative flex">
              <button
                onClick={() => setActiveDay('day1')}
                className={`flex-1 h-8 text-sm font-medium z-10 ${
                  activeDay === 'day1' ? 'text-white' : 'text-gray-400'
                }`}
              >
                Day 1
              </button>
              <button
                onClick={() => setActiveDay('day2')}
                className={`flex-1 h-8 text-sm font-medium z-10 ${
                  activeDay === 'day2' ? 'text-white' : 'text-gray-400'
                }`}
              >
                Day 2
              </button>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          {activeDay === 'day1' ? (
            <>
              <ScheduleItem time="09:00 AM" title="Opening Ceremony: Future of Innovation" location="Main Auditorium" type="keynote" />
              <ScheduleItem time="10:30 AM" title="Networking Break" location="Exhibition Hall" type="break" />
              <ScheduleItem time="11:00 AM" title="AI Governance Summit" location="Diplomatic Suite A" type="closed-door" />
            </>
          ) : (
            <>
              <ScheduleItem time="09:30 AM" title="Innovation Day Opening" location="Main Auditorium" type="keynote" />
              <ScheduleItem time="11:00 AM" title="Tech Showcase" location="Exhibition Hall" type="break" />
              <ScheduleItem time="02:00 PM" title="Future Tech Panel" location="Conference Room B" type="closed-door" />
            </>
          )}
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-6 py-8">
        <h2 className="text-3xl font-bold text-[#1A1F7C] mb-6">Distinguished Guests</h2>
        
        <div className="space-y-4">
          <GuestCard image="/images/f37da260-e928-421d-8716-9ed2d6377fe8.png" name="H.E. Abiy Ahmed" title="Prime Minister of Ethiopia" roles={["Keynote Speaker", "VIP"]} />
          <GuestCard image="/images/f903df5a-b520-4352-adbb-b1e988db0e3a.png" name="Dr. Birhane Meskel" title="Former Minister of Education" roles={["Panel Chair", "VIP"]} />
          <GuestCard image="/images/ad4f4cc3-a63b-40ec-9bfc-438c718e6a50.png" name="Haile Gebrselassie" title="Olympic Champion & Business Leader" roles={["Guest Speaker", "Innovation Leader"]} />
          <GuestCard image="/images/38afb8f8-5bde-4933-8cf6-c2c7abb7c3c2.png" name="Tirunesh Dibaba" title="Triple Olympic Champion" roles={["Special Guest", "Sports Ambassador"]} />
          <GuestCard image="/images/cef38671-6c14-470d-9c11-c84d6f95344f.png" name="Derartu Tulu" title="Olympic Gold Medalist" roles={["Distinguished Guest", "Sports Legend"]} />
          <GuestCard image="/images/32fa31a6-5e5c-4b2e-905f-7a84ffa14f88.png" name="Dr. Eleni Gabre-Madhin" title="Founder & CEO, blueMoon" roles={["Innovation Speaker", "Tech Leader"]} />
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Schedule;
