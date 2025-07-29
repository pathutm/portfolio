import { portfolioData } from "@/data/portfolio-data";
import { CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 h-full hidden lg:block"></div>

          <div className="space-y-12">
            {portfolioData.experience.map((experience, index) => (
              <div key={index} className={`relative flex items-center lg:justify-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                <div className="lg:w-1/2 lg:px-8">
                  <div className={`experience-card bg-gradient-to-br p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'lg:ml-auto lg:text-right' : ''}`}
                       style={{
                         background: experience.color === 'blue' ? 'linear-gradient(to bottom right, rgb(239 246 255), rgb(224 231 255))' :
                                    experience.color === 'emerald' ? 'linear-gradient(to bottom right, rgb(236 253 245), rgb(209 250 229))' :
                                    'linear-gradient(to bottom right, rgb(255 251 235), rgb(254 243 199))'
                       }}>
                    <div className={`absolute lg:hidden w-4 h-4 rounded-full -left-2 top-6`}
                         style={{backgroundColor: experience.color === 'blue' ? 'rgb(59 130 246)' : experience.color === 'emerald' ? 'rgb(16 185 129)' : 'rgb(245 158 11)'}}></div>
                    <div className={`hidden lg:block absolute top-6 w-4 h-4 rounded-full ${index % 2 === 0 ? '-right-2' : '-left-2'}`}
                         style={{backgroundColor: experience.color === 'blue' ? 'rgb(59 130 246)' : experience.color === 'emerald' ? 'rgb(16 185 129)' : 'rgb(245 158 11)'}}></div>
                    
                    <span className="text-sm font-medium mb-2 block"
                          style={{color: experience.color === 'blue' ? 'rgb(37 99 235)' : experience.color === 'emerald' ? 'rgb(5 150 105)' : 'rgb(217 119 6)'}}>
                      {experience.date}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{experience.role}</h3>
                    <p className="font-medium mb-4"
                       style={{color: experience.color === 'blue' ? 'rgb(37 99 235)' : experience.color === 'emerald' ? 'rgb(5 150 105)' : 'rgb(217 119 6)'}}>
                      {experience.company}
                    </p>
                    
                    <ul className="space-y-2 text-slate-600">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className={`flex items-start ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                          <CheckCircle className={`mt-1 w-4 h-4 ${index % 2 === 0 ? 'lg:order-2 lg:ml-2 lg:mr-0' : ''} mr-2`}
                                      style={{color: experience.color === 'blue' ? 'rgb(59 130 246)' : experience.color === 'emerald' ? 'rgb(16 185 129)' : 'rgb(245 158 11)'}} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
