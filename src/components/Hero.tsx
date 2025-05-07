import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-b from-primary-100 to-primary-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-4 leading-tight">
              Bringing Dreams to <span className="text-secondary-600">Reality</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-700 mb-8 max-w-xl">
              We build innovative solutions that help businesses grow and succeed in the digital era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                 className="inline-flex items-center justify-center px-6 py-3 bg-secondary-600 text-white rounded-md hover:bg-secondary-700 transition-colors group">
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
              href="#services" className="inline-flex items-center justify-center px-6 py-3 border border-secondary-600 text-secondary-700 rounded-md hover:bg-secondary-50 transition-colors">
                Learn More
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="w-full aspect-square rounded-2xl bg-secondary-200 overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team working together" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-400 rounded-lg shadow-lg"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary-500 rounded-lg shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;