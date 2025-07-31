import { portfolioData } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { Users, Code, Cloud, CheckCircle } from "lucide-react";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const techIcons = {
    "React.js": FaReact,
    "Node.js": FaNodeJs,
    "Python": FaPython,
    "JavaScript": SiJavascript,
    "MongoDB": SiMongodb,
    "Express.js": SiExpress,
    "AWS": FaAws,
    "Docker": FaDocker,
  };

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Professional Background Pattern */}
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.1) 2px, transparent 2px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>
      
      {/* Accent Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full blur-2xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </motion.div>

        {/* Enhanced About Me Section with Skills Highlight */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Building Tomorrow's Technology Today
          </h3>
          <div className="prose prose-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6">
            <p className="text-lg mb-2">
              I’m a backend developer and AI enthusiast with <span className="font-semibold text-blue-600">11+ months</span> of experience, specializing in launching full-stack products, deploying scalable APIs, and leading cross-functional teams.
            </p>
            <p className="text-lg mb-2">
              I thrive at the intersection of technology and management, aiming to deliver high-impact solutions as a future Project Manager.
            </p>
          </div>

          {/* Skills Highlight Grid */}
          <div className="flex flex-wrap justify-center gap-6 mt-4 mb-6">
            {/* ClickUp Logo (Custom SVG) */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 32 32" className="w-12 h-12 mb-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.001 4.667l7.07 7.07a2 2 0 002.828-2.828l-8.485-8.485a2 2 0 00-2.828 0l-8.485 8.485a2 2 0 002.828 2.828l7.07-7.07z" fill="#7B68EE"/>
                <path d="M6.343 19.657a8 8 0 0111.314 0 8 8 0 0111.314 0l-2.828 2.828a4 4 0 00-5.657 0 4 4 0 01-5.657 0l-2.828-2.828z" fill="#FF5EDF"/>
                <path d="M9.172 22.485a4 4 0 015.657 0 4 4 0 015.657 0l-2.828 2.829a1 1 0 01-1.415 0l-2.828-2.829z" fill="#00C4CC"/>
              </svg>
              <span className="text-xs font-medium text-slate-700">ClickUp</span>
            </div>
            <div className="flex flex-col items-center">
              <FaReact className="text-blue-500 w-12 h-12 mb-1" />
              <span className="text-xs font-medium text-slate-700">React</span>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-green-600 w-12 h-12 mb-1" />
              <span className="text-xs font-medium text-slate-700">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <FaPython className="text-yellow-500 w-12 h-12 mb-1" />
              <span className="text-xs font-medium text-slate-700">Python</span>
            </div>
            <div className="flex flex-col items-center">
              <SiJavascript className="text-yellow-400 w-12 h-12 mb-1" />
              <span className="text-xs font-medium text-slate-700">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb className="text-green-700 w-12 h-12 mb-1" />
              <span className="text-xs font-medium text-slate-700">MongoDB</span>
            </div>
            <div className="flex flex-col items-center">
              <FaAws className="text-orange-500 w-12 h-12 mb-1" />
              <span className="text-xs font-medium text-slate-700">AWS</span>
            </div>
            <div className="flex flex-col items-center">
              <FaDocker className="text-blue-400 w-12 h-12 mb-1" />
              <span className="text-xs font-medium text-slate-700">Docker</span>
            </div>
            <div className="flex flex-col items-center">
              <SiExpress className="text-gray-700 w-12 h-12 mb-1" />
              <span className="text-xs font-medium text-slate-700">Express</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-lg mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
          >
            <div className="text-3xl font-bold text-blue-600 mb-2">45+</div>
            <div className="text-sm font-medium text-slate-600">APIs Deployed</div>
          </motion.div>
          <motion.div 
            className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
          >
            <div className="text-3xl font-bold text-indigo-600 mb-2">11+</div>
            <div className="text-sm font-medium text-slate-600">Months Experience</div>
          </motion.div>
        </motion.div>

        {/* Technical Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.skills.map((skillGroup, groupIndex) => (
              <motion.div 
                key={groupIndex} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-slate-100 hover:border-blue-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                    skillGroup.color === 'purple' ? 'bg-gradient-to-br from-purple-100 to-indigo-100' : 
                    skillGroup.color === 'blue' ? 'bg-gradient-to-br from-blue-100 to-cyan-100' : 
                    'bg-gradient-to-br from-emerald-100 to-teal-100'
                  }`}>
                    <div className={`p-3 rounded-xl ${
                      skillGroup.color === 'purple' ? 'text-purple-600' : 
                      skillGroup.color === 'blue' ? 'text-blue-600' : 
                      'text-emerald-600'
                    }`}>
                      {skillGroup.category === 'Management & Leadership' && <Users className="w-8 h-8" />}
                      {skillGroup.category === 'AI/ML & Development' && <Code className="w-8 h-8" />}
                      {skillGroup.category === 'Cloud & DevOps' && <Cloud className="w-8 h-8" />}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{skillGroup.category}</h4>
                </div>
                
                <div className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex items-center p-2 rounded-lg hover:bg-slate-50 transition-colors duration-200 group"
                      whileHover={{ scale: 1.02, x: 3 }}
                    >
                      <div className={`w-2 h-2 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200 ${
                        skillGroup.color === 'purple' ? 'bg-purple-500' : 
                        skillGroup.color === 'blue' ? 'bg-blue-500' : 
                        'bg-emerald-500'
                      }`}></div>
                      <span className="text-slate-700 font-medium text-sm group-hover:text-slate-900 transition-colors duration-200">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
