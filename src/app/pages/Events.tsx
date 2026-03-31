import { motion } from "motion/react";
import { Rocket, MonitorPlay } from "lucide-react";
import { ImageWithFallback } from "../components/common/ImageWithFallback";
import racingImg from "../../assets/RacingTeam.png";
import auvImg from "../../assets/AUV.png";
import marsRoverImg from "../../assets/MRT.png";
import sspImg from "../../assets/SSP.png";

export function Events() {
  const teams = [
    {
      id: 1,
      name: "Autonomous Underwater Vehicle (AUV) IIT Bombay",
      description: "Autonomous Underwater Vehicle team focused on underwater robotics research and competitions.",
      image: auvImg,
      icon: null,
    },
    {
      id: 2,
      name: "IIT Bombay Racing",
      description: "IIT Bombay Racing focuses on building electric vehicles for competitions like Formula Student.",
      image: racingImg,
      icon: null,
    },
    {
      id: 3,
      name: "IITB Rocket Team",
      description: "IN-SPACe recognized team of students developing high-power rockets.",
      image: null,
      icon: Rocket,
    },
    {
      id: 4,
      name: "Mars Rover Team",
      description: "Team focused on building robotic systems for planetary exploration competitions.",
      image: marsRoverImg,
      icon: null,
    },
    {
      id: 5,
      name: "Student Satellite Program (SSP) IIT Bombay",
      description: "Student-led satellite program at IIT Bombay.",
      image: sspImg,
      icon: null,
    },
    {
      id: 6,
      name: "Team Chemeca",
      description: "Catalysing Reactions into Reality.",
      image: null,
      icon: MonitorPlay,
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 uppercase tracking-wider"
        >
          Tech Teams & Clubs
        </motion.h1>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Explore the various technical teams, clubs, and communities that drive innovation at IIT Bombay.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team, index) => (
          <motion.div
            key={team.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#1e293b]/70 border border-slate-700/60 rounded-2xl p-6 hover:bg-[#1e293b] hover:border-slate-500 transition-all group shadow-lg"
          >
            <div className="flex items-center gap-5 mb-4">
              {team.image ? (
                <div className="w-16 h-16 rounded-xl bg-black overflow-hidden flex items-center justify-center p-1.5 flex-shrink-0 border border-slate-700">
                  <ImageWithFallback
                    src={team.image}
                    alt={team.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700 group-hover:bg-slate-700 transition-colors">
                  {team.icon && <team.icon className="w-8 h-8 text-slate-300" />}
                </div>
              )}
              <h3 className="text-lg font-bold text-white leading-tight">
                {team.name}
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {team.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
