
interface SpeakerCardProps {
  image: string;
  name: string;
  title: string;
  role: string;
  onClick?: () => void;
}

export const SpeakerCard = ({ image, name, title, role, onClick }: SpeakerCardProps) => (
  <div className="bg-white rounded-lg p-6 shadow-sm flex items-center gap-4 mb-4 relative">
    <img src={image} alt={name} className="w-16 h-16 rounded-lg object-cover" />
    <div className="flex-1">
      <h3 className="text-xl font-medium">{name}</h3>
      <p className="text-gray-600">{title}</p>
      <span className="inline-block px-3 py-1 bg-[#E3F2FD] text-[#1A1F7C] rounded-full text-sm mt-2">
        {role}
      </span>
    </div>
    {onClick && (
      <button
        onClick={onClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#1A1F7C] rounded-full flex items-center justify-center text-white"
      >
        <ArrowRight className="w-6 h-6" />
      </button>
    )}
  </div>
);
