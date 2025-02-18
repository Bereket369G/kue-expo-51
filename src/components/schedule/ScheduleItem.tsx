
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
        return "bg-[#EEF3FF] text-[#1A1F7C]";
      case "break":
        return "bg-[#F2F2F2] text-gray-600";
      case "closed-door":
        return "bg-[#FFEFEF] text-[#B91C1C]";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="flex gap-6 px-6 py-4">
      <div className="w-24">
        <div className="text-lg text-gray-900">{time.split(" ")[0]}</div>
        <div className="text-sm text-gray-500">{time.split(" ")[1]}</div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-500 mb-2">{location}</p>
        <span className={`inline-block px-3 py-1 rounded-md text-sm ${getTypeStyles()}`}>
          {type.charAt(0).toUpperCase() + type.slice(1).replace("-", " ")}
        </span>
      </div>
    </div>
  );
};
