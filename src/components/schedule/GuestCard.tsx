
interface GuestCardProps {
  image: string;
  name: string;
  title: string;
  roles: string[];
}

export const GuestCard = ({
  image,
  name,
  title,
  roles,
}: GuestCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm flex items-center gap-6">
      <img 
        src={image} 
        alt={name} 
        className="w-24 h-24 rounded-lg object-cover ring-2 ring-[#1A1F7C]/10"
        loading="lazy"
        decoding="async"
        fetchPriority="high"
      />
      <div className="flex-1">
        <h3 className="text-2xl font-medium text-[#1A1F7C]">{name}</h3>
        <p className="text-gray-600 mb-3">{title}</p>
        <div className="flex flex-wrap gap-2">
          {roles.map((role, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#E3F2FD] text-[#1A1F7C] rounded-full text-sm border border-[#1A1F7C]/20"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
