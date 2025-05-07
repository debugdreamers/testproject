import React from 'react';
import { Award, Users, Clock } from 'lucide-react';

const ValueProposition: React.FC = () => {
  return (
    <section id="value" className="py-20 bg-primary-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Value Clients Can Expect</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard
            icon={<Award className="h-10 w-10 text-secondary-600" />}
            title="Best Result"
            step="01"
            description="High-quality, professionally designed websites that reflect your brand identity."
          />
          <ValueCard
            icon={<Users className="h-10 w-10 text-secondary-600" />}
            title="Great Support"
            step="02"
            description="Ongoing support, maintenance, and updates to keep your website running smoothly."
          />
          <ValueCard
            icon={<Clock className="h-10 w-10 text-secondary-600" />}
            title="On-time"
            step="03"
            description="Timely project delivery and a collaborative approach throughout the design process."
          />
        </div>
      </div>
    </section>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  step: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, step, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-secondary-800 mb-1">{title}</h3>
      <div className="text-secondary-500 font-bold text-lg mb-2">{step}</div>
      <p className="text-secondary-600">{description}</p>
    </div>
  );
};

export default ValueProposition; 