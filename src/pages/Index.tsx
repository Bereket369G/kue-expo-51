import { LaunchScreen } from "@/components/launch/LaunchScreen";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, Users, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
const Index = () => {
  const navigate = useNavigate();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, {
    once: true,
    margin: "-100px"
  });
  const isInView2 = useInView(ref2, {
    once: true,
    margin: "-100px"
  });
  const isInView3 = useInView(ref3, {
    once: true,
    margin: "-100px"
  });
  return <div className="min-h-screen bg-gradient-to-b from-[#F8F9FB] to-white">
      {/* Hero Section */}
      <div className="relative px-6 pt-12 pb-20 md:pt-20 md:pb-32 bg-blue-950">
        <div className="max-w-7xl mx-auto">
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="font-bold text-center mb-6 bg-gradient-to-r from-[#6DD5FA] to-[#FF758C] bg-clip-text text-transparent md:text-6xl text-5xl">
            Artificial Intelligence In Education: Opportunities And Challenges For The Global South
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-center mb-12 max-w-2xl mx-auto text-gray-300 text-3xl font-bold">
            3rd International Research Conference
          </motion.p>

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
            <Button onClick={() => navigate("/schedule")} className="bg-gradient-to-r from-[#6DD5FA] to-[#FF758C] hover:opacity-90 text-white px-8 py-6 rounded-full text-lg flex items-center gap-2 transition-all duration-300 hover:scale-105">
              View Schedule
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-16 backdrop-blur-lg bg-blue-950">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#6DD5FA] to-[#FF758C] bg-clip-text text-transparent">
            Why Join Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div ref={ref1} style={{
            transform: isInView1 ? "none" : "translateY(50px)",
            opacity: isInView1 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
          }} whileHover={{
            scale: 1.05
          }} onClick={() => navigate("/registration")} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <Calendar className="w-12 h-12 text-[#6DD5FA] mb-4" />
              <h3 className="text-xl font-semibold mb-2">2-Day Event</h3>
              <p className="text-gray-600">Comprehensive program covering AI-Research and technology</p>
            </motion.div>

            <motion.div ref={ref2} style={{
            transform: isInView2 ? "none" : "translateY(50px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
          }} whileHover={{
            scale: 1.05
          }} onClick={() => navigate("/registration")} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <Users className="w-12 h-12 text-[#FF758C] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Speakers</h3>
              <p className="text-gray-600">Learn from industry leaders and innovators</p>
            </motion.div>

            <motion.div ref={ref3} style={{
            transform: isInView3 ? "none" : "translateY(50px)",
            opacity: isInView3 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }} whileHover={{
            scale: 1.05
          }} onClick={() => navigate("/registration")} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <Award className="w-12 h-12 text-[#9b87f5] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Networking</h3>
              <p className="text-gray-600">Connect with industry professionals and innovators</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="px-6 py-16 bg-gradient-to-b from-white/50 to-[#F8F9FB] bg-blue-950">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-2xl font-semibold text-center mb-12 bg-gradient-to-r from-[#6DD5FA] to-[#FF758C] bg-clip-text text-blue-800 md:text-4xl">
            Hosted By
          </motion.h2>
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
            <motion.div whileHover={{
            scale: 1.05
          }} className="w-48 h-48 relative flex items-center justify-center p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <img src="/lovable-uploads/32fa31a6-5e5c-4b2e-905f-7a84ffa14f88.png" alt="Kotebe University of Education" className="max-w-full max-h-full object-contain" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Launch Screen Component */}
      <LaunchScreen />
    </div>;
};
export default Index;