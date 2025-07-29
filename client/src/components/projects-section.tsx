import { portfolioData } from "@/data/portfolio-data";
import { BarChart3, CheckCircle, Sprout, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { SiReact, SiDocker, SiAmazon, SiPython, SiJavascript } from "react-icons/si";
import { FaRobot, FaLeaf } from "react-icons/fa";

const iconMap = {
  "chart-bar": BarChart3,
  "check-circle": CheckCircle,
  "seedling": FaLeaf,
};

export default function ProjectsSection() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Featured Projects</h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing innovative solutions that blend AI, automation, and scalable engineering
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.projects.map((project, index) => {
            const IconComponent = iconMap[project.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={index}
                className="project-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                data-testid={`project-card-${index}`}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`h-48 bg-gradient-to-br from-${project.color}-500 to-${project.color === 'blue' ? 'indigo' : project.color === 'emerald' ? 'teal' : 'orange'}-600 relative overflow-hidden`}
                     style={{
                       background: project.color === 'blue' ? 'linear-gradient(to bottom right, rgb(59 130 246), rgb(79 70 229))' :
                                  project.color === 'emerald' ? 'linear-gradient(to bottom right, rgb(16 185 129), rgb(20 184 166))' :
                                  'linear-gradient(to bottom right, rgb(245 158 11), rgb(234 88 12))'
                     }}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="text-white text-4xl group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.tags[0]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`text-xs px-2 py-1 rounded-full`}
                        style={{
                          backgroundColor: project.color === 'blue' ? 'rgb(219 234 254)' :
                                         project.color === 'emerald' ? 'rgb(209 250 229)' :
                                         'rgb(254 243 199)',
                          color: project.color === 'blue' ? 'rgb(30 58 138)' :
                                project.color === 'emerald' ? 'rgb(6 78 59)' :
                                'rgb(146 64 14)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <motion.button 
                      className="font-medium flex items-center group"
                      style={{
                        color: project.color === 'blue' ? 'rgb(37 99 235)' :
                              project.color === 'emerald' ? 'rgb(5 150 105)' :
                              'rgb(217 119 6)'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                    {project.award && (
                      <motion.span 
                        className="text-xs bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 rounded-full"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        {project.award}
                      </motion.span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
