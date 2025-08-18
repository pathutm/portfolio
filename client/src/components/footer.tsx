import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2025 Jeba angelline mary M. All rights reserved. Built with passion and innovation.
          </div>
          <div className="text-slate-400 text-sm flex items-center">
            Designed & Developed with <Heart className="mx-1 w-4 h-4 text-red-500" /> for the future
          </div>
        </div>
      </div>
    </footer>
  );
}
