import { motion } from "motion/react";

export function About() {
  const stats = [
    { value: "20+", label: "Tech Bodies", color: "text-blue-400" },
    { value: "80+", label: "Yearly Events", color: "text-purple-400" },
    { value: "200+", label: "Summer Projects", color: "text-pink-400" },
    { value: "10k+", label: "Students Catered", color: "text-teal-400" },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 inline-block mb-4"
        >
          About Us
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-slate-300 text-lg leading-relaxed"
        >
          <p>
            The Institute Technical Council (ITC) at IIT Bombay is at the forefront of nurturing student innovation, technical skills, and leadership. We provide students with the resources and guidance needed to bring their ideas to life through a wide range of technical clubs, teams, and events.
          </p>
          <p>
            With a focus on fostering collaboration and creativity, ITC plays a pivotal role in organizing technical workshops, competitions, and projects. From aeromodelling to artificial intelligence, the council caters to a diverse set of technical interests, making it a hub for student-led innovation.
          </p>
        </motion.div>

        {/* Right Column: Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1e293b]/50 border border-slate-700/50 p-8 rounded-2xl flex flex-col justify-center shadow-lg"
            >
              <span className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </span>
              <span className="text-slate-400 font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
