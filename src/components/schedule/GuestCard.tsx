
interface GuestCardProps {
  image: string;
  name: string;
  title: string;
  roles: string[];
}

export const GuestCard = ({ image, name, title, roles }: GuestCardProps) => (
  <div className="flex gap-4 px-6 py-4">
    <img src={image} alt={name} className="w-24 h-24 rounded-lg object-cover" />
    <div className="flex-1">
      <h3 className="text-[#1A1F7C] text-xl font-medium mb-1">{name}</h3>
      <p className="text-gray-600 mb-2">{title}</p>
      <div className="flex gap-2">
        {roles.map((role, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-md text-sm ${
              role === "VIP"
                ? "bg-[#FFFBEB] text-[#92400E]"
                : role === "Panel Chair"
                ? "bg-[#F3E8FF] text-[#6B21A8]"
                : "bg-[#EEF3FF] text-[#1A1F7C]"
            }`}
          >
            {role}
          </span>
        ))}
      </div>
    </div>
  </div>
);
