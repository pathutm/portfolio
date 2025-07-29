import { portfolioData } from "@/data/portfolio-data";
import { BarChart3, CheckCircle, Sprout, ArrowRight } from "lucide-react";

const iconMap = {
  "chart-bar": BarChart3,
  "check-circle": CheckCircle,
  "seedling": Sprout,
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing innovative solutions that blend AI, automation, and scalable engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => {
            const IconComponent = iconMap[project.icon as keyof typeof iconMap];
            
            return (
              <div
                key={index}
                className="project-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
                data-testid={`project-card-${index}`}
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
                    <button className={`text-${project.color}-600 hover:text-${project.color}-800 font-medium flex items-center group`}
                            style={{
                              color: project.color === 'blue' ? 'rgb(37 99 235)' :
                                    project.color === 'emerald' ? 'rgb(5 150 105)' :
                                    'rgb(217 119 6)'
                            }}>
                      Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                    {project.award && (
                      <span className="text-xs bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 rounded-full">
                        {project.award}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
