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
    <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Education</h2>
            
            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="education-card bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                      <p className="text-blue-600 font-medium">{edu.institution}</p>
                      {edu.location && <p className="text-slate-500 text-sm">{edu.location}</p>}
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-slate-500">{edu.date}</span>
                      <div className="text-lg font-bold text-emerald-600">{edu.score}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Certifications</h2>
            
            <div className="space-y-4">
              {portfolioData.certifications.map((cert, index) => (
                <div key={index} className={`certification-card bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4`}
                     style={{borderLeftColor: cert.color === 'blue' ? 'rgb(59 130 246)' : cert.color === 'emerald' ? 'rgb(16 185 129)' : cert.color === 'purple' ? 'rgb(147 51 234)' : cert.color === 'amber' ? 'rgb(245 158 11)' : 'rgb(99 102 241)'}}>
                  <h4 className="font-semibold text-slate-900 mb-1">{cert.title}</h4>
                  <p className="text-sm font-medium mb-1"
                     style={{color: cert.color === 'blue' ? 'rgb(37 99 235)' : cert.color === 'emerald' ? 'rgb(5 150 105)' : cert.color === 'purple' ? 'rgb(126 34 206)' : cert.color === 'amber' ? 'rgb(217 119 6)' : 'rgb(79 70 229)'}}>
                    {cert.issuer}
                  </p>
                  <p className="text-slate-500 text-xs">
                    {cert.date}{cert.expires && ` - ${cert.expires}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">Achievements & Recognition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.achievements.map((achievement, index) => {
              const IconComponent = achievementIcons[achievement.icon as keyof typeof achievementIcons];
              
              return (
                <div key={index} className="achievement-card bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                     style={{
                       background: achievement.color === 'blue' ? 'linear-gradient(to bottom right, rgb(239 246 255), rgb(199 210 254))' :
                                  achievement.color === 'emerald' ? 'linear-gradient(to bottom right, rgb(236 253 245), rgb(167 243 208))' :
                                  achievement.color === 'purple' ? 'linear-gradient(to bottom right, rgb(250 245 255), rgb(221 214 254))' :
                                  achievement.color === 'amber' ? 'linear-gradient(to bottom right, rgb(255 251 235), rgb(253 230 138))' :
                                  achievement.color === 'rose' ? 'linear-gradient(to bottom right, rgb(255 241 242), rgb(252 165 165))' :
                                  'linear-gradient(to bottom right, rgb(240 253 250), rgb(153 246 228))'
                     }}>
                  <IconComponent className="w-12 h-12 mb-4 mx-auto"
                                style={{color: achievement.color === 'blue' ? 'rgb(37 99 235)' : achievement.color === 'emerald' ? 'rgb(5 150 105)' : achievement.color === 'purple' ? 'rgb(126 34 206)' : achievement.color === 'amber' ? 'rgb(217 119 6)' : achievement.color === 'rose' ? 'rgb(225 29 72)' : 'rgb(20 184 166)'}} />
                  <h4 className="font-bold text-slate-900 mb-2">{achievement.title}</h4>
                  <p className="text-slate-600 text-sm">{achievement.organization}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
