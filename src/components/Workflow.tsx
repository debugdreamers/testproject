import React from 'react';
import { MessageSquare, Lightbulb, BarChart2 } from 'lucide-react';

const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">From Concept to Completion</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Our basic workflow described as below:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <WorkflowStep
            icon={<MessageSquare className="h-10 w-10 text-secondary-600" />} 
            title="Discussion"
            step="01"
            description="Combining meticulous research and meaningful discussions, we delve into the product and its visionary, uncovering valuable insights and identifying key challenges."
          />
          <WorkflowStep
            icon={<Lightbulb className="h-10 w-10 text-secondary-600" />} 
            title="Ideation"
            step="02"
            description="We identify the most effective project execution strategy, ensuring that our methods align with the defined goals and exceed expectations."
          />
          <WorkflowStep
            icon={<BarChart2 className="h-10 w-10 text-secondary-600" />} 
            title="Execution"
            step="03"
            description="This is where our thinking process transforms into exceptional visual output. We craft designs that not only impress but also deliver results, from prototype to market-ready product."
          />
        </div>
      </div>
    </section>
  );
};

interface WorkflowStepProps {
  icon: React.ReactNode;
  title: string;
  step: string;
  description: string;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({ icon, title, step, description }) => {
  return (
    <div className="bg-primary-50 p-6 rounded-lg shadow-md text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-secondary-800 mb-1">{title}</h3>
      <div className="text-secondary-500 font-bold text-lg mb-2">{step}</div>
      <p className="text-secondary-600">{description}</p>
    </div>
  );
};

export default Workflow; 