import { portfolioData } from "@/data/portfolio-data";
import { User, Mail, Phone, MapPin, Linkedin, Github, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '-2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '-4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Professional Photo Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center">
              <User className="w-16 h-16 text-slate-400" data-testid="profile-placeholder" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            {portfolioData.name}
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            {portfolioData.title}
          </p>
          <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto">
            Building the future with AI-powered solutions, leading cross-functional teams, and delivering scalable systems that make a difference.
          </p>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="glass-card rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <MapPin className="w-8 h-8 text-blue-300 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <p className="text-white font-medium">Location</p>
              <p className="text-slate-300 text-sm">{portfolioData.location}</p>
            </div>
            <div className="glass-card rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <Mail className="w-8 h-8 text-blue-300 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <p className="text-white font-medium">Email</p>
              <p className="text-slate-300 text-sm">{portfolioData.email}</p>
            </div>
            <div className="glass-card rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <Phone className="w-8 h-8 text-blue-300 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <p className="text-white font-medium">Phone</p>
              <p className="text-slate-300 text-sm">{portfolioData.phone}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleScrollToProjects}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              data-testid="button-view-work"
            >
              View My Work
            </button>
            <button
              onClick={handleScrollToContact}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12">
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-blue-300 transition-colors duration-300 hover:scale-110 transform"
              data-testid="link-linkedin"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-blue-300 transition-colors duration-300 hover:scale-110 transform"
              data-testid="link-github"
            >
              <Github className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
}
