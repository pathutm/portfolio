import { portfolioData } from "@/data/portfolio-data";
import { motion } from "framer-motion";
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
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_rgb(0_0_0)_1px,_transparent_0)] bg-[length:50px_50px]"></div>
      </div>
      
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

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Technical Expertise</h3>
            
            <div className="space-y-6">
              {portfolioData.skills.map((skillGroup, index) => (
                <motion.div 
                  key={index} 
                  className="skill-category"
                  variants={itemVariants}
                >
                  <h4 className="text-lg font-semibold text-slate-700 mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => {
                      const IconComponent = techIcons[skill as keyof typeof techIcons];
                      return (
                        <motion.span
                          key={skillIndex}
                          className="skill-badge flex items-center gap-2"
                          data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                          style={{
                            backgroundColor: skillGroup.color === 'purple' ? 'rgb(243 232 255)' : 
                                           skillGroup.color === 'blue' ? 'rgb(219 234 254)' : 
                                           'rgb(209 250 229)',
                            color: skillGroup.color === 'purple' ? 'rgb(107 33 168)' : 
                                  skillGroup.color === 'blue' ? 'rgb(30 58 138)' : 
                                  'rgb(6 78 59)'
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {IconComponent && <IconComponent className="w-4 h-4" />}
                          {skill}
                        </motion.span>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
