import React from 'react';
import { Globe, Search, BarChart, Settings, MessageSquare, LineChart, Smartphone } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-primary-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Our Services</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Our agency values are rooted in collaboration, innovation, and excellence. We believe in forging strong partnerships with our clients, understanding their unique aspirations and translating them into compelling digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Globe />}
            title="Web Design and Development"
            description="Our agency specializes in creating visually stunning and user-friendly websites that captivate audiences. From concept to implementation, we craft custom designs that reflect your brand's unique identity and leave a lasting impression."
            technologies={["React.js", "Next.js", "Node.js", "PostgreSQL"]}
          />
          <ServiceCard 
            icon={<Smartphone />}
            title="Mobile App Development"
            description="We create native and cross-platform mobile applications that deliver exceptional user experiences. Our mobile solutions are built with performance, scalability, and user engagement in mind."
            technologies={["React Native", "Flutter", "iOS/Swift", "Android/Kotlin"]}
          />
          <ServiceCard 
            icon={<Search />}
            title="Search Engine Optimization"
            description="We help your website rank higher on Google by optimizing its technical structure, improving content with targeted keywords, and building local SEO. This brings in more organic traffic from people actively searching for your services."
            technologies={["Google Analytics", "SEMrush", "Ahrefs", "Schema Markup"]}
          />
          <ServiceCard 
            icon={<MessageSquare />}
            title="Digital Marketing"
            description="We create and manage engaging content across platforms like Facebook, Instagram, and Google. From social media posts to paid ads and email campaigns, we help you reach the right audience and turn interest into action."
            technologies={["Meta Ads", "Google Ads", "Mailchimp", "HubSpot"]}
          />
          <ServiceCard 
            icon={<LineChart />}
            title="Conversion Rate Optimization"
            description="Increase your website's effectiveness in converting visitors into customers. Through careful analysis and testing, we identify areas for improvement and implement strategic optimizations to enhance conversion rates and drive business growth."
            technologies={["Hotjar", "Google Optimize", "VWO", "Analytics"]}
          />
          <ServiceCard 
            icon={<Settings />}
            title="Ongoing Support & Optimization"
            description="We don't just launch and leave. With regular performance tracking, monthly reports, and strategy reviews, we continuously refine your campaigns to ensure consistent growth, better results, and a strong return on investment."
            technologies={["Docker", "CI/CD", "AWS", "Monitoring Tools"]}
          />
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, technologies }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-4px] group">
      <div className="w-12 h-12 flex items-center justify-center bg-primary-200 text-secondary-700 rounded-lg mb-4 group-hover:bg-secondary-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-secondary-800 mb-3">{title}</h3>
      <p className="text-secondary-600 leading-relaxed mb-4">{description}</p>
      <div className="border-t border-primary-100 pt-4">
        <h4 className="text-sm font-semibold text-secondary-700 mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-primary-50 text-secondary-600 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;