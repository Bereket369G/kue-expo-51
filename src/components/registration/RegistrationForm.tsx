
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { User, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Starting tour with data:", formData);
    navigate("/schedule");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="max-w-[480px] w-full">
        <h1 className="text-[40px] leading-[1.2] text-center mb-4 text-black">
          Welcome
        </h1>
        <p className="text-[22px] leading-[1.4] text-center mb-16 text-black">
          Join us to enhance your expo experience!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 size-6" />
            <Input
              type="text"
              placeholder="First name"
              className="h-[72px] pl-14 text-lg bg-[#F8F9FB] border-none rounded-lg"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 size-6" />
            <Input
              type="text"
              placeholder="Last name"
              className="h-[72px] pl-14 text-lg bg-[#F8F9FB] border-none rounded-lg"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 size-6" />
            <Input
              type="tel"
              placeholder="Phone number- 0987654321"
              className="h-[72px] pl-14 text-lg bg-[#F8F9FB] border-none rounded-lg"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <Button
            type="submit"
            className="w-full h-[72px] bg-[#1A1F7C] hover:bg-[#161963] text-white text-xl font-normal rounded-lg mt-16"
          >
            Start Tour
          </Button>
        </form>
      </div>
    </main>
  );
};
