import { portfolioData } from "@/data/portfolio-data";
import { Trophy, Lightbulb, Star, Award, Presentation, Mic } from "lucide-react";

const achievementIcons = {
  trophy: Trophy,
  lightbulb: Lightbulb,
  star: Star,
  award: Award,
  presentation: Presentation,
  microphone: Mic,
};

export default function EducationSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full"
             style={{
               backgroundImage: `conic-gradient(from 0deg at 50% 50%, rgba(59, 130, 246, 0.1) 0deg, transparent 60deg, transparent 300deg, rgba(99, 102, 241, 0.1) 360deg)`,
               backgroundSize: '100px 100px'
             }}>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Education</h2>
            
            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="education-card bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                      <p className="text-blue-400 font-medium">{edu.institution}</p>
                      {edu.location && <p className="text-slate-400 text-sm">{edu.location}</p>}
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-slate-400">{edu.date}</span>
                      <div className="text-lg font-bold text-emerald-400">{edu.score}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Certifications</h2>
            
            <div className="space-y-4">
              {portfolioData.certifications.map((cert, index) => (
                <div key={index} className={`certification-card bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-4 rounded-xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border-l-4`}
                     style={{borderLeftColor: cert.color === 'blue' ? 'rgb(59 130 246)' : cert.color === 'emerald' ? 'rgb(16 185 129)' : cert.color === 'purple' ? 'rgb(147 51 234)' : cert.color === 'amber' ? 'rgb(245 158 11)' : 'rgb(99 102 241)'}}>
                  <h4 className="font-semibold text-white mb-1">{cert.title}</h4>
                  <p className="text-sm font-medium mb-1"
                     style={{color: cert.color === 'blue' ? 'rgb(96, 165, 250)' : cert.color === 'emerald' ? 'rgb(52, 211, 153)' : cert.color === 'purple' ? 'rgb(196, 181, 253)' : cert.color === 'amber' ? 'rgb(251, 191, 36)' : 'rgb(129, 140, 248)'}}>
                    {cert.issuer}
                  </p>
                  <p className="text-slate-400 text-xs">
                    {cert.date}{cert.expires && ` - ${cert.expires}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Achievements & Recognition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.achievements.map((achievement, index) => {
              const IconComponent = achievementIcons[achievement.icon as keyof typeof achievementIcons];
              
              return (
                <div key={index} className="achievement-card bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl text-center hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
                  <IconComponent className="w-12 h-12 mb-4 mx-auto"
                                style={{color: achievement.color === 'blue' ? 'rgb(96, 165, 250)' : achievement.color === 'emerald' ? 'rgb(52, 211, 153)' : achievement.color === 'purple' ? 'rgb(196, 181, 253)' : achievement.color === 'amber' ? 'rgb(251, 191, 36)' : achievement.color === 'rose' ? 'rgb(251, 113, 133)' : 'rgb(45, 212, 191)'}} />
                  <h4 className="font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-slate-300 text-sm">{achievement.organization}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
