
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
  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <span
        className={`inline-block px-3 py-1 rounded-full text-sm mb-3 ${
          typeStyle === "government"
            ? "bg-[#E8F5E9] text-[#2E7D32]"
            : "bg-[#F3E5F5] text-[#6A1B9A]"
        }`}
      >
        {type}
      </span>
      <h3 className="text-xl font-medium mb-1">{title}</h3>
      <p className="text-base text-gray-600 mb-2">{subtitle}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);
