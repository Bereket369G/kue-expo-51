
import { cn } from "@/lib/utils";

interface ScheduleItemProps {
  time: string;
  title: string;
  location: string;
  type: "keynote" | "break" | "closed-door";
}

export const ScheduleItem = ({ time, title, location, type }: ScheduleItemProps) => {
  const getTypeStyles = () => {
    switch (type) {
      case "keynote":
        return "bg-[#EEF3FF] text-[#1A1F7C] border-[#1A1F7C]";
      case "break":
        return "bg-[#F2F2F2] text-gray-600 border-gray-400";
      case "closed-door":
        return "bg-[#FFEFEF] text-[#B91C1C] border-[#B91C1C]";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="group relative rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex gap-6">
        <div className="w-24">
          <div className="text-lg font-semibold text-gray-900">{time.split(" ")[0]}</div>
          <div className="text-sm text-gray-500">{time.split(" ")[1]}</div>
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-500 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </p>
          <span className={cn(
            "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
            getTypeStyles()
          )}>
            {type.charAt(0).toUpperCase() + type.slice(1).replace("-", " ")}
          </span>
        </div>
      </div>
    </div>
  );
};
