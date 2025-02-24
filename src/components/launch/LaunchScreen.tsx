
import { Button } from "@/components/ui/button";
import { TimeDisplay } from "./TimeDisplay";
import { useNavigate } from "react-router-dom";

export const LaunchScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[50vh] w-full flex items-center justify-center bg-blue-950">
      <div className="bg-white rounded-lg shadow-lg max-w-[480px] w-full overflow-hidden">
        <section className="bg-[#1A1F7C] flex w-full flex-col items-center p-8 text-white space-y-6">
          <TimeDisplay />
          
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl font-bold">ExpoConnect</h1>
            <p className="text-base text-center text-white/80">
              Where connections create opportunities
            </p>
          </div>

          <Button
            onClick={() => navigate("/schedule")}
            size="lg"
            className="w-full bg-white text-[#1A1F7C] hover:bg-white/90"
          >
            View Schedule
          </Button>
        </section>
      </div>
    </div>
  );
};
