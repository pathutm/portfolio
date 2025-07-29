import { portfolioData } from "@/data/portfolio-data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Building Tomorrow's Technology Today</h3>
            <div className="prose prose-lg text-slate-600 space-y-4">
              {portfolioData.about.summary.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {portfolioData.about.stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Technical Expertise</h3>
            
            <div className="space-y-6">
              {portfolioData.skills.map((skillGroup, index) => (
                <div key={index} className="skill-category">
                  <h4 className="text-lg font-semibold text-slate-700 mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`skill-badge bg-gradient-to-r from-${skillGroup.color}-100 to-${skillGroup.color}-200 text-${skillGroup.color}-800 hover:from-${skillGroup.color}-200 hover:to-${skillGroup.color}-300`}
                        data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                        style={{
                          backgroundColor: skillGroup.color === 'purple' ? 'rgb(243 232 255)' : 
                                         skillGroup.color === 'blue' ? 'rgb(219 234 254)' : 
                                         'rgb(209 250 229)',
                          color: skillGroup.color === 'purple' ? 'rgb(107 33 168)' : 
                                skillGroup.color === 'blue' ? 'rgb(30 58 138)' : 
                                'rgb(6 78 59)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
