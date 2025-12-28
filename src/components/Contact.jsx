import React from 'react';
import { Download, Mail, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen relative bg-black/70 text-white overflow-hidden"
    >
      {/* Content Overlay */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-3xl w-full">
          
          {/* Main Card */}
          <div className="backdrop-blur-xl bg-black/40 border-2 border-pink-500/30 rounded-3xl p-8 md:p-10 shadow-2xl">
            
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </h2>
              <p className="text-lg text-gray-300">
                Available for alternance • 1 week school / 2 weeks company
              </p>
              <div className="flex items-center justify-center gap-3 mt-4">
                <span className="px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm font-semibold">
                  🟢 Available Now
                </span>
                <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-400 text-sm font-semibold">
                  📍 Montpellier, France
                </span>
              </div>
            </div>

            {/* Main CTA - Download CV */}
            <div className="flex justify-center mb-8">
              <button className="group relative px-10 py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                <span className="relative flex items-center gap-3">
                  <Download className="w-6 h-6" />
                  Download My CV
                </span>
              </button>
            </div>

            {/* What I'm Looking For */}
            <div className="border-t-2 border-pink-700/30 pt-8">
              <h3 className="text-xl font-bold text-center mb-6 text-pink-300">
                What I'm Looking For
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-b from-pink-900/10 to-transparent rounded-xl border border-pink-700/20">
                  <div className="text-3xl mb-2">🤖</div>
                  <h4 className="font-bold text-white mb-1.5 text-sm">AI & ML Projects</h4>
                  <p className="text-xs text-gray-400">Building intelligent systems and predictive models</p>
                </div>

                <div className="text-center p-4 bg-gradient-to-b from-purple-900/10 to-transparent rounded-xl border border-purple-700/20">
                  <div className="text-3xl mb-2">📊</div>
                  <h4 className="font-bold text-white mb-1.5 text-sm">Data Analysis</h4>
                  <p className="text-xs text-gray-400">Extracting insights from complex datasets</p>
                </div>

                <div className="text-center p-4 bg-gradient-to-b from-pink-900/10 to-transparent rounded-xl border border-pink-700/20">
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="font-bold text-white mb-1.5 text-sm">Innovation</h4>
                  <p className="text-xs text-gray-400">Solving real-world problems with tech</p>
                </div>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500 italic">
                💡 Fun fact: This background is procedurally generated—refresh the page for a new pattern!
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;