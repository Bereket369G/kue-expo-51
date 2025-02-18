
import { ArrowRight } from "lucide-react";

interface EventCardProps {
  type: string;
  title: string;
  time?: string;
  location?: string;
  startsIn?: string;
  accessRequired?: string;
  typeStyle: "public" | "restricted";
  onClick?: () => void;
}

export const EventCard = ({
  type,
  title,
  time,
  location,
  startsIn,
  accessRequired,
  typeStyle,
  onClick,
}: EventCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg p-6 shadow-sm relative mb-4 cursor-pointer transition-all duration-300 hover:shadow-md animate-floating"
    >
      <span
        className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${
          typeStyle === "public"
            ? "bg-[#E8F5E9] text-[#2E7D32]"
            : "bg-[#FFF3E0] text-[#E65100]"
        }`}
      >
        {type}
      </span>

      <h3 className="text-2xl font-medium mb-2">{title}</h3>

      {time && location && (
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <span className="inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {time}
          </span>
          <span className="text-gray-400">-</span>
          <span>{location}</span>
        </div>
      )}

      {startsIn && (
        <p className="text-[#1A1F7C] mt-2">{startsIn}</p>
      )}

      {accessRequired && (
        <div className="flex items-center gap-2 text-gray-600 mt-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          {accessRequired}
        </div>
      )}
    </div>
  );
};
