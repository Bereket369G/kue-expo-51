
import { ArrowRight } from "lucide-react";

interface SpeakerCardProps {
  image: string;
  name: string;
  title: string;
  role: string;
  loading?: "lazy" | "eager";
}

export const SpeakerCard = ({
  image,
  name,
  title,
  role,
  loading = "lazy"
}: SpeakerCardProps) => (
  <div className="bg-white rounded-lg p-6 shadow-sm flex items-center gap-4 mb-4 relative transition-all duration-300 hover:shadow-md">
    <img 
      src={image} 
      alt={name} 
      className="w-16 h-16 rounded-lg object-cover ring-2 ring-[#1A1F7C]/10" 
      loading={loading}
      decoding="async"
      fetchPriority="high"
    />
    <div className="flex-1">
      <h3 className="text-xl font-medium text-[#1A1F7C]">{name}</h3>
      <p className="text-gray-600">{title}</p>
      <span className="inline-block px-3 py-1 bg-[#E3F2FD] text-[#1A1F7C] rounded-full text-sm mt-2 border border-[#1A1F7C]/20">
        {role}
      </span>
    </div>
  </div>
);
