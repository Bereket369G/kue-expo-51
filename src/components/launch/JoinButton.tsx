import { Button } from "@/components/ui/button";

interface JoinButtonProps {
  onClick?: () => void;
}

export const JoinButton = ({ onClick }: JoinButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="w-full bg-[rgba(242,242,253,1)] text-[#000001] hover:bg-[rgba(232,232,243,1)] text-lg leading-loose px-[70px] py-3 rounded-[10px] transition-colors"
    >
      Join the Expo
    </Button>
  );
};
