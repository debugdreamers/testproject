import React from 'react';
import { Users, Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">About debugdream</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            We're a team of passionate developers and designers building exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard 
            icon={<Users className="h-10 w-10 text-secondary-600" />}
            title="Our Team"
            description="Talented professionals committed to excellence and innovation in every project we undertake."
          />
          <ValueCard 
            icon={<Target className="h-10 w-10 text-secondary-600" />}
            title="Our Mission"
            description="To create digital solutions that solve real-world problems and exceed client expectations."
          />
          <ValueCard 
            icon={<TrendingUp className="h-10 w-10 text-secondary-600" />}
            title="Our Vision"
            description="To be the leading digital partner for businesses seeking growth through technology."
          />
        </div>
        
        <div className="mt-20 flex flex-col md:flex-row items-center">
          <div className="flex-1 mb-10 md:mb-0 md:pr-12">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">Our Story</h3>
            <p className="text-secondary-700 mb-4">
              Founded in 2025, debugdream began with a simple idea: to make technology accessible and useful 
              for businesses of all sizes. What started as a small team of three has grown into a thriving 
              company with clients across multiple industries.
            </p>
            <p className="text-secondary-700">
              We believe in building lasting relationships with our clients, understanding their unique challenges,
              and creating tailored solutions that drive real business results.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative">
              <div className="w-full rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Our team at work" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary-300 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-primary-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
      <div className="mb-4 transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-secondary-800 mb-2">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </div>
  );
};

export default About;