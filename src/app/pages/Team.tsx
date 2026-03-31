import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import { ImageWithFallback } from "../components/common/ImageWithFallback";
import veeradityaImg from "../../assets/Veeraditya.png"
import WebTeamManager from "../../assets/WebTeamManager.png"

export function Team() {
  const overallManagers = [
    {
      id: 1,
      name: "Veeraditya Karan Parakh",
      role: "General Secretary Technical Affairs",
      email: "gsectech@iitb.ac.in",
      phone: "9191919100",
      image: veeradityaImg,
    },
    {
      id: 2,
      name: "Prince Kumar",
      role: "Admin Nominee",
      email: "prince.itc24@gmail.com",
      phone: "+91 6203261916",
      image: "https://images.unsplash.com/photo-1762708548366-a4aeac157758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50JTIwc21pbGluZyUyMG1hbGUlMjBwb3J0cmFpdCUyMG91dGRvb3JzfGVufDF8fHx8MTc3NDY5ODIyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      name: "Shivam Saran",
      role: "PG Tech Nominee",
      email: "pgnom.tech.iitb@gmail.com",
      phone: "+91 6378350541",
      image: "https://images.unsplash.com/photo-1627776880991-808c5996527b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50JTIwbWFsZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDY5ODIyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const techTeamManagers = [
    {
      id: 4,
      name: "Aarav Sharma",
      role: "Manager, IITB Racing",
      email: "aarav.racing@iitb.ac.in",
      phone: "+91 9876543210",
      image: "https://images.unsplash.com/photo-1762708548366-a4aeac157758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50JTIwc21pbGluZyUyMG1hbGUlMjBwb3J0cmFpdCUyMG91dGRvb3JzfGVufDF8fHx8MTc3NDY5ODIyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 5,
      name: "Diya Patel",
      role: "Manager, Mars Rover Team",
      email: "diya.rover@iitb.ac.in",
      phone: "+91 8765432109",
      image: "https://images.unsplash.com/photo-1756367141220-570ab35ec2f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50JTIwc21pbGluZyUyMGZlbWFsZSUyMHBvcnRyYWl0JTIwb3V0ZG9vcnN8ZW58MXx8fHwxNzc0Njk4MjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const clubManagers = [
    {
      id: 6,
      name: "Utkarsh Tanwar",
      role: "Manager, ITC Web Team",
      email: "Utkarsh.webteam@iitb.ac.in",
      phone: "+91 909091011",
      image: WebTeamManager,
    },
    {
      id: 7,
      name: "Sneha Reddy",
      role: "Manager, Aeromodelling Club",
      email: "sneha.aero@iitb.ac.in",
      phone: "+91 6543210987",
      image: "https://images.unsplash.com/photo-1756367141220-570ab35ec2f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50JTIwc21pbGluZyUyMGZlbWFsZSUyMHBvcnRyYWl0JTIwb3V0ZG9vcnN8ZW58MXx8fHwxNzc0Njk4MjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const MemberCard = ({ member, index }: { member: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#1e293b]/60 border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-[#1e293b]/80 transition-colors shadow-lg"
    >
      <div className="w-32 h-32 rounded-3xl overflow-hidden mb-6 ring-4 ring-slate-800">
        <ImageWithFallback
          src={member.image}
          alt={member.name}
          className={`w-full h-full object-cover ${
            member.name === "Veeraditya Karan Parakh" ? "object-top" : "object-center"
          }`}
        />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
      <p className="text-blue-400 font-medium mb-8 min-h-[48px] flex items-center justify-center">{member.role}</p>
      
      <div className="space-y-3 w-full text-slate-300 text-sm mb-8">
        <div className="flex items-center justify-center gap-3">
          <Mail className="w-4 h-4 text-slate-400" />
          <span>{member.email}</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Phone className="w-4 h-4 text-slate-400" />
          <span>{member.phone}</span>
        </div>
      </div>

      <div className="flex gap-4 mt-auto">
        <a href="#" className="p-2 bg-[#0077b5] rounded-lg hover:opacity-80 transition-opacity">
          <Linkedin className="w-5 h-5 text-white" />
        </a>
        <a href="#" className="p-2 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-lg hover:opacity-80 transition-opacity">
          <Instagram className="w-5 h-5 text-white" />
        </a>
      </div>
    </motion.div>
  );

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-4"
        >
          Cabinet
        </motion.h1>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Meet the dedicated team that manages and drives the technical activities across the institute.
        </p>
      </div>

      <div className="space-y-24">
        {/* Overall Managers Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-700 pb-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
            Overall Managers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {overallManagers.map((member, index) => (
              <MemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </section>

        {/* Tech Team Managers Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-700 pb-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
            Tech Team Managers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {techTeamManagers.map((member, index) => (
              <MemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </section>

        {/* Club Managers Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-700 pb-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-teal-500 rounded-full"></span>
            Club Managers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {clubManagers.map((member, index) => (
              <MemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
