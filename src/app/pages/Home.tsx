import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Cpu, Globe, Rocket } from "lucide-react";
import { ImageWithFallback } from "../components/common/ImageWithFallback";
import mainBuildingImg from "../../assets/MainBuilding.png";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={mainBuildingImg}
            alt="IIT Bombay Main Building"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark Overlay for readability - slightly lighter to highlight the background */}
          <div className="absolute inset-0 bg-slate-900/60 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
              Institute <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Technical</span> Council
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-300 md:text-2xl drop-shadow-lg">
              Nurturing student innovation, technical skills, and leadership at IIT Bombay.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link 
                to="/about"
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/events"
                className="px-8 py-3.5 bg-slate-800/80 hover:bg-slate-700 border border-slate-600 text-white rounded-full font-medium transition-all flex items-center gap-2 backdrop-blur-sm"
              >
                Explore Tech Teams
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
              <p className="text-slate-400 leading-relaxed">
                Providing resources and guidance to bring student ideas to life through cutting-edge projects.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-colors"
            >
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Technical Excellence</h3>
              <p className="text-slate-400 leading-relaxed">
                From aeromodelling to AI, we cater to a diverse set of technical interests.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-teal-500/30 transition-colors"
            >
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Impact</h3>
              <p className="text-slate-400 leading-relaxed">
                Our teams compete and excel in prestigious international competitions worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
