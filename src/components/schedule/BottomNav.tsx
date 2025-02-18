
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, CalendarCheck, Medal } from "lucide-react";
import { cn } from "@/lib/utils";

export const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveClass = (path: string) => {
    return location.pathname === path ? "bg-[#2A307C] rounded-lg" : "";
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1A1F7C] text-white py-4 border-t border-[#2A307C] shadow-lg z-50">
      <div className="max-w-md mx-auto flex justify-around items-center px-4">
        <Button 
          variant="ghost"
          onClick={() => navigate("/schedule")} 
          className={cn(
            "flex flex-col items-center gap-1 h-auto py-2 hover:bg-[#2A307C] hover:text-white transition-colors",
            getActiveClass("/schedule")
          )}
        >
          <Calendar className="w-5 h-5" />
          <span className="text-xs font-medium">Schedule</span>
        </Button>
        <Button 
          variant="ghost"
          onClick={() => navigate("/events")}
          className={cn(
            "flex flex-col items-center gap-1 h-auto py-2 hover:bg-[#2A307C] hover:text-white transition-colors",
            getActiveClass("/events")
          )}
        >
          <CalendarCheck className="w-5 h-5" />
          <span className="text-xs font-medium">All Events</span>
        </Button>
        <Button 
          variant="ghost"
          onClick={() => navigate("/certificate")}
          className={cn(
            "flex flex-col items-center gap-1 h-auto py-2 hover:bg-[#2A307C] hover:text-white transition-colors",
            getActiveClass("/certificate")
          )}
        >
          <Medal className="w-5 h-5" />
          <span className="text-xs font-medium">Certificate</span>
        </Button>
      </div>
    </nav>
  );
};
