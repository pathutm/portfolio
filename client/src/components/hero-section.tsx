import { portfolioData } from "@/data/portfolio-data";
import { User, Mail, Phone, MapPin, ChevronDown, Download, Eye, Code, Database, Cpu, Zap, Brain, Rocket } from "lucide-react";
import { FaLinkedin, FaGithub, FaRocket, FaCog, FaLightbulb, FaCode, FaServer, FaCloud } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-indigo-950/20"></div>
      
      {/* Advanced Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Tech Icons */}
        <motion.div
          className="absolute top-20 left-20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaCode className="text-blue-400/30 text-4xl" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-32"
          animate={{ 
            y: [0, 25, 0],
            rotate: [0, -180, -360],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Database className="text-indigo-400/30 text-3xl" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-32"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -15, 0],
            rotate: [0, 90, 180]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <FaServer className="text-emerald-400/30 text-3xl" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 right-20"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Brain className="text-purple-400/30 text-5xl" />
        </motion.div>
        
        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.8, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-20">
          {/* Left Column - Animated Text Content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Animated Introduction */}
            <motion.div
              className="mb-8"
              variants={itemVariants}
            >
              <motion.div 
                className="inline-flex items-center space-x-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-4 py-2 mb-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="text-blue-400 w-4 h-4" />
                <span className="text-blue-300 text-sm font-medium">Ready to Innovate</span>
              </motion.div>
              
              <div className="text-blue-400 text-xl font-medium mb-4">I am a</div>
              
              {/* Main Animated Title */}
              <div className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <div className="relative inline-block">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
                  >
                    {portfolioData.title}
                  </motion.span>
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  />
                </div>
              </div>
              
              {/* Typewriter Effect for Role */}
              <div className="text-2xl md:text-3xl text-slate-300 font-light mb-6 h-12">
                <Typewriter
                  options={{
                    strings: [
                      'Agentic AI Innovator',
                      'Backend Developer', 
                      'Project Management Officer',
                      'Full-Stack Engineer',
                      'AI Solution Architect'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                  }}
                />
              </div>
              
              <motion.div 
                className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-8"
                variants={itemVariants}
              >
                Enhancing digital experiences that are <span className="text-blue-400 font-semibold">smooth</span>, 
                <span className="text-purple-400 font-semibold"> scalable</span>, and made to 
                <span className="text-indigo-400 font-semibold"> impress</span>.
              </motion.div>
              
              {/* Interactive Skills Pills */}
              <motion.div 
                className="flex flex-wrap gap-2 mb-6"
                variants={itemVariants}
              >
                {['AI/ML', 'MERN Stack', 'AWS', 'Docker', 'LangChain'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-full text-slate-300 text-xs font-medium"
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                      borderColor: "rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex justify-center lg:justify-start space-x-3 mb-8" variants={itemVariants}>
              <motion.a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-700/50 rounded-full flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                data-testid="link-github"
              >
                <FaGithub className="text-white text-xl" />
              </motion.a>
              <motion.a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600/50 backdrop-blur-sm border border-blue-500/50 hover:bg-blue-600/70 rounded-full flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                data-testid="link-linkedin"
              >
                <FaLinkedin className="text-white text-xl" />
              </motion.a>

            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" variants={itemVariants}>
              <motion.button
                onClick={handleScrollToContact}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 shadow-xl hover:shadow-2xl flex items-center justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-contact-me"
              >
                CONTACT ME
              </motion.button>
              <motion.button
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 flex items-center justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-download-resume"
              >
                <Download className="mr-2 w-5 h-5" />
                DOWNLOAD MY RESUME
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Visual Animation */}
          <motion.div 
            className="flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Central Core */}
              <motion.div
                className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-white/20 to-transparent backdrop-blur-sm flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              {/* Organized Skill Icons - Better positioning */}
              {[
                { icon: FaCode, color: "from-blue-400 to-blue-600", angle: 0, radius: 80, label: "Frontend" },
                { icon: Database, color: "from-indigo-400 to-indigo-600", angle: Math.PI/3, radius: 85, label: "Database" },
                { icon: FaServer, color: "from-purple-400 to-purple-600", angle: 2*Math.PI/3, radius: 75, label: "Backend" },
                { icon: Cpu, color: "from-emerald-400 to-emerald-600", angle: Math.PI, radius: 90, label: "AI/ML" },
                { icon: FaCloud, color: "from-cyan-400 to-cyan-600", angle: 4*Math.PI/3, radius: 70, label: "Cloud" },
                { icon: Zap, color: "from-amber-400 to-amber-600", angle: 5*Math.PI/3, radius: 95, label: "Performance" }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    className={`absolute w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} shadow-xl flex items-center justify-center backdrop-blur-sm border-2 border-white/30 hover:border-white/60 transition-all duration-300`}
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                    animate={{
                      x: [
                        Math.cos(item.angle) * item.radius,
                        Math.cos(item.angle + 2*Math.PI) * item.radius
                      ],
                      y: [
                        Math.sin(item.angle) * item.radius,
                        Math.sin(item.angle + 2*Math.PI) * item.radius
                      ],
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 15 + index,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    whileHover={{ 
                      scale: 1.3, 
                      zIndex: 10,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                    }}
                    title={item.label}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                );
              })}

              {/* Data Flow Lines */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                      <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
                      <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                    </linearGradient>
                  </defs>
                  {[...Array(6)].map((_, i) => (
                    <motion.circle
                      key={i}
                      cx="200"
                      cy="200"
                      r={60 + i * 20}
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: [0, 1, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </svg>
              </motion.div>

              {/* Organized Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-br from-blue-400/60 to-indigo-400/60 rounded-full"
                  style={{
                    left: `${30 + (i % 4) * 15}%`,
                    top: `${25 + Math.floor(i / 4) * 30}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.7, 1.2, 0.7]
                  }}
                  transition={{
                    duration: 4 + (i * 0.5),
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Corner Decorative Elements - Properly positioned */}
              <motion.div 
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl border-2 border-white/20"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-lg">🚀</span>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-xl border-2 border-white/20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -180, -360]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <span className="text-sm">⚡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>


      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>
  );
}
