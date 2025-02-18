import { LaunchScreen } from "@/components/launch/LaunchScreen";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Index = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-gradient-to-b from-[#F8F9FB] to-white">
      {/* Hero Section */}
      <div className="relative px-6 pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-4xl md:text-6xl font-bold text-[#1A1F7C] text-center mb-6">Ethiopian Leadership & Technology Summit</motion.h1>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">Join us for a groundbreaking event that unites Leadership excellence with technological innovation</motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={() => navigate("/registration")} className="bg-[#1A1F7C] hover:bg-[#2A307C] text-white px-8 py-6 rounded-full text-lg flex items-center gap-2">
              Register Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button onClick={() => navigate("/schedule")} variant="outline" className="px-8 py-6 rounded-full text-lg border-[#1A1F7C] text-[#1A1F7C] hover:bg-[#1A1F7C] hover:text-white">
              View Schedule
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#F8F9FB] hover:shadow-lg transition-shadow">
              <Calendar className="w-12 h-12 text-[#1A1F7C] mb-4" />
              <h3 className="text-xl font-semibold mb-2">4-Day Event</h3>
              <p className="text-gray-600">Comprehensive program covering athletics and technology</p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.8
          }} className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#F8F9FB] hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-[#1A1F7C] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Speakers</h3>
              <p className="text-gray-600">Learn from industry leaders and athletic champions</p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 1
          }} className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#F8F9FB] hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-[#1A1F7C] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Networking</h3>
              <p className="text-gray-600">Connect with industry professionals and innovators</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="px-6 py-16 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-[#1A1F7C]">Our Partners</h2>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 1.2
        }} className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="w-48 h-48 relative flex items-center justify-center p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <img src="/lovable-uploads/0ac8a5f3-ead5-487c-9d9f-14b501866eea.png" alt="Haile Grand" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="w-48 h-48 relative flex items-center justify-center p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <img src="/lovable-uploads/32fa31a6-5e5c-4b2e-905f-7a84ffa14f88.png" alt="Kotebe University of Education" className="max-w-full max-h-full object-contain" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Launch Screen Component */}
      <LaunchScreen />
    </div>;
};
export default Index;