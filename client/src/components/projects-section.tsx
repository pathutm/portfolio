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
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" 
             style={{
               backgroundImage: `linear-gradient(45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%), 
                                linear-gradient(-45deg, rgba(99, 102, 241, 0.1) 25%, transparent 25%), 
                                linear-gradient(45deg, transparent 75%, rgba(59, 130, 246, 0.1) 75%), 
                                linear-gradient(-45deg, transparent 75%, rgba(99, 102, 241, 0.1) 75%)`,
               backgroundSize: '60px 60px',
               backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
             }}>
        </div>
      </div>
      
      {/* Floating Accent Elements */}
      <div className="absolute top-40 right-32 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-32 left-24 w-1 h-1 bg-indigo-400 rounded-full opacity-80 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-1/2 right-16 w-px h-12 bg-gradient-to-b from-blue-400/30 to-transparent rotate-12"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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
                className="project-card bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden group"
                data-testid={`project-card-${index}`}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02, borderColor: "rgba(59, 130, 246, 0.3)" }}
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
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`text-xs px-2 py-1 rounded-full`}
                        style={{
                          backgroundColor: project.color === 'blue' ? 'rgba(59, 130, 246, 0.1)' :
                                         project.color === 'emerald' ? 'rgba(16, 185, 129, 0.1)' :
                                         'rgba(245, 158, 11, 0.1)',
                          color: project.color === 'blue' ? 'rgb(96, 165, 250)' :
                                project.color === 'emerald' ? 'rgb(52, 211, 153)' :
                                'rgb(251, 191, 36)',
                          border: `1px solid ${project.color === 'blue' ? 'rgba(59, 130, 246, 0.2)' :
                                              project.color === 'emerald' ? 'rgba(16, 185, 129, 0.2)' :
                                              'rgba(245, 158, 11, 0.2)'}`
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
                        color: project.color === 'blue' ? 'rgb(96, 165, 250)' :
                              project.color === 'emerald' ? 'rgb(52, 211, 153)' :
                              'rgb(251, 191, 36)'
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
