import React from 'react';

const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Technologies We Use</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            We use modern, proven technologies to deliver robust, scalable, and high-performing digital solutions for our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TechStack
            title="Web Development"
            technologies={[
              "React.js",
              "Next.js",
              "Node.js",
              "PostgreSQL",
              "TypeScript",
              "Tailwind CSS"
            ]}
          />
          <TechStack
            title="Mobile Development"
            technologies={[
              "React Native",
              "Flutter",
              "iOS/Swift",
              "Android/Kotlin"
            ]}
          />
          <TechStack
            title="SEO & Analytics"
            technologies={[
              "Google Analytics",
              "SEMrush",
              "Ahrefs",
              "Schema Markup"
            ]}
          />
          <TechStack
            title="Digital Marketing"
            technologies={[
              "Meta Ads",
              "Google Ads",
              "Mailchimp",
              "HubSpot"
            ]}
          />
          <TechStack
            title="Conversion Optimization"
            technologies={[
              "Hotjar",
              "Google Optimize",
              "VWO",
              "Analytics"
            ]}
          />
          <TechStack
            title="DevOps & Support"
            technologies={[
              "Docker",
              "CI/CD",
              "AWS",
              "Monitoring Tools"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

interface TechStackProps {
  title: string;
  technologies: string[];
}

const TechStack: React.FC<TechStackProps> = ({ title, technologies }) => {
  return (
    <div className="bg-primary-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
      <h3 className="text-xl font-semibold text-secondary-800 mb-4">{title}</h3>
      <ul className="space-y-2">
        {technologies.map((tech, index) => (
          <li
            key={index}
            className="flex items-center text-secondary-700 hover:text-secondary-900 transition-colors"
          >
            <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Technologies;