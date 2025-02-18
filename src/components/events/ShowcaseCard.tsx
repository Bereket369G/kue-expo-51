
interface ShowcaseCardProps {
  image: string;
  type: string;
  title: string;
  subtitle: string;
  description: string;
  typeStyle: "government" | "award";
}

export const ShowcaseCard = ({
  image,
  type,
  title,
  subtitle,
  description,
  typeStyle,
}: ShowcaseCardProps) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
    <div className="p-4">
      <span
        className={`inline-block px-3 py-1 rounded-full text-sm mb-3 border ${
          typeStyle === "government"
            ? "bg-[#E8F5E9] text-[#2E7D32] border-[#2E7D32]/20"
            : "bg-[#F3E5F5] text-[#6A1B9A] border-[#6A1B9A]/20"
        }`}
      >
        {type}
      </span>
      <h3 className="text-xl font-medium mb-1 text-[#1A1F7C]">{title}</h3>
      <p className="text-base text-gray-600 mb-2">{subtitle}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);
