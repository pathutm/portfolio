import { portfolioData } from "@/data/portfolio-data";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-32 left-16 w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-2xl opacity-40"></div>
      <div className="absolute bottom-40 right-24 w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full blur-xl opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Professional Experience</h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"></div>
          
          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative pl-20"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Experience Card */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-slate-100 hover:border-blue-200">
                  <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.role}</h3>
                      <p className="text-blue-600 font-semibold text-lg mb-2">{exp.company}</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                      {exp.date}
                    </div>
                  </div>
                  
                  <div className="grid gap-3">
                    {exp.description.map((item, itemIndex) => (
                      <motion.div 
                        key={itemIndex} 
                        className="flex items-start group"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (itemIndex * 0.1) }}
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-4 mt-2 group-hover:scale-125 transition-transform duration-200"></div>
                        <span className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-200">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
