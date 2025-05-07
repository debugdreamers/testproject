import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Contact Us</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Have a question or ready to start your next project? We're here to help. Reach out to us and our team will get back to you shortly.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/5">
            <div className="bg-primary-50 p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <ContactItem 
                  icon={<Mail />}
                  title="Email Us"
                  details={[
                    'info@debugdream.com',
                    'support@debugdream.com'
                  ]}
                />
                <ContactItem 
                  icon={<Phone />}
                  title="Call Us"
                  details={[
                    '+977-9843812308'
                  ]}
                />
                <ContactItem 
                  icon={<MapPin />}
                  title="Visit Us"
                  details={[
                    'Kathmandu, Nepal'
                  ]}
                />
                <ContactItem 
                  icon={<Clock />}
                  title="Business Hours"
                  details={[
                    'Monday - Friday: 9:00 AM - 6:00 PM',
                    'Saturday: 10:00 AM - 4:00 PM',
                    'Sunday: Closed'
                  ]}
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">Send Us a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    required
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                  Your Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                  required
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-secondary-600 text-white rounded-md hover:bg-secondary-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, details }) => {
  return (
    <div className="flex items-start">
      <div className="mr-4 p-2 bg-primary-200 text-secondary-700 rounded-full">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-secondary-800">{title}</h4>
        {details.map((detail, index) => (
          <p key={index} className="text-secondary-600">{detail}</p>
        ))}
      </div>
    </div>
  );
};

export default Contact;