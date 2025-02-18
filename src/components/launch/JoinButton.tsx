
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface JoinButtonProps {
  onClick?: () => void;
}

export const JoinButton = ({ onClick }: JoinButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    navigate("/registration");
  };

  return (
    <Button
      onClick={handleClick}
      className="w-full bg-[rgba(242,242,253,1)] text-[#000001] hover:bg-[rgba(232,232,243,1)] text-lg leading-loose px-[70px] py-3 rounded-[10px] transition-colors"
    >
      Join the Expo
    </Button>
  );
};
