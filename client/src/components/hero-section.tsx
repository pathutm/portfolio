import { portfolioData } from "@/data/portfolio-data";
import { User, Mail, Phone, MapPin, ChevronDown, Download, Eye } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Hi all, I'm <span className="gradient-text bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">{portfolioData.name}</span> 👋
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              {portfolioData.title}
            </motion.p>
            
            <motion.p 
              className="text-lg text-slate-300 mb-12 leading-relaxed"
              variants={itemVariants}
            >
              A passionate innovator 🚀 with experience building AI-powered solutions, 
              leading cross-functional teams, and delivering scalable systems that make a real impact.
            </motion.p>

            {/* Social Links */}
            <motion.div className="flex justify-center lg:justify-start space-x-4 mb-12" variants={itemVariants}>
              <motion.a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-all duration-300"
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
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                data-testid="link-linkedin"
              >
                <FaLinkedin className="text-white text-xl" />
              </motion.a>
              <motion.a
                href="#"
                className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter className="text-white text-xl" />
              </motion.a>
              <motion.a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram className="text-white text-xl" />
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

          {/* Right Column - Profile Image Placeholder */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              {/* Main Profile Image Container */}
              <motion.div 
                className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 p-1 shadow-2xl"
                animate={{
                  rotate: [0, 1, 0, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-full h-full rounded-2xl bg-slate-100 flex items-center justify-center overflow-hidden relative">
                  {/* Placeholder for actual photo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"></div>
                  <User className="w-32 h-32 text-slate-400 z-10" data-testid="profile-placeholder" />
                  
                  {/* Photo Upload Hint */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-2 text-white text-xs text-center">
                    📸 Add your professional photo here
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Decorative Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -180, -360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <span className="text-lg">⚡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Contact Info Cards - Moved below main content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div 
            className="glass-card rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <MapPin className="w-8 h-8 text-blue-300 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
            <p className="text-white font-medium">Location</p>
            <p className="text-slate-300 text-sm">{portfolioData.location}</p>
          </motion.div>
          <motion.div 
            className="glass-card rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Mail className="w-8 h-8 text-blue-300 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
            <p className="text-white font-medium">Email</p>
            <p className="text-slate-300 text-sm">{portfolioData.email}</p>
          </motion.div>
          <motion.div 
            className="glass-card rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Phone className="w-8 h-8 text-blue-300 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
            <p className="text-white font-medium">Phone</p>
            <p className="text-slate-300 text-sm">{portfolioData.phone}</p>
          </motion.div>
        </motion.div>
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
