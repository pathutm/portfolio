import { portfolioData } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { Users, Code, Cloud, CheckCircle } from "lucide-react";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTypescript } from "react-icons/si";

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
    "TypeScript": SiTypescript,
    "MongoDB": SiMongodb,
    "Express.js": SiExpress,
    "AWS": FaAws,
    "Docker": FaDocker,
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Me</h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Building Tomorrow's Technology Today</h3>
            <div className="prose prose-lg text-slate-600 space-y-4">
              {portfolioData.about.summary.map((paragraph, index) => (
                <motion.p 
                  key={index}
                  variants={itemVariants}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {portfolioData.about.stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-blue-600 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
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
                      {skillGroup.category === 'Development & AI' && <Code className="w-8 h-8" />}
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
        </motion.div>
      </div>
    </section>
  );
}
