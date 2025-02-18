
import { cn } from "@/lib/utils";

interface GuestCardProps {
  image: string;
  name: string;
  title: string;
  roles: string[];
}

export const GuestCard = ({ image, name, title, roles }: GuestCardProps) => (
  <div className="group relative rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
    <div className="flex gap-4">
      <img 
        src={image} 
        alt={name} 
        className="h-24 w-24 rounded-lg object-cover ring-2 ring-[#1A1F7C]/10"
      />
      <div className="flex-1 space-y-2">
        <h3 className="text-xl font-semibold text-[#1A1F7C]">{name}</h3>
        <p className="text-gray-600">{title}</p>
        <div className="flex flex-wrap gap-2">
          {roles.map((role, index) => (
            <span
              key={index}
              className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
                role === "VIP" 
                  ? "bg-[#FFFBEB] text-[#92400E] border border-[#92400E]" 
                  : role === "Panel Chair"
                  ? "bg-[#F3E8FF] text-[#6B21A8] border border-[#6B21A8]"
                  : "bg-[#EEF3FF] text-[#1A1F7C] border border-[#1A1F7C]"
              )}
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);
