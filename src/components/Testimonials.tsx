import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Working with DebugDream has been a game-changer for our business. Their web development team created a stunning, user-friendly site that has significantly increased our conversion rates.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "GlobalTech Inc.",
    rating: 5
  },
  {
    id: 2,
    content: "The mobile app DebugDream developed for us has received outstanding feedback from our users. Their attention to detail and commitment to quality is truly impressive.",
    author: "Michael Chen",
    position: "CEO",
    company: "MobiConnect",
    rating: 5
  },
  {
    id: 3,
    content: "Their SEO expertise helped us achieve top rankings for our key search terms. The increase in organic traffic has been remarkable.",
    author: "Emily Rodriguez",
    position: "Digital Manager",
    company: "TechStart Solutions",
    rating: 5
  },
  {
    id: 4,
    content: "DebugDream's team went above and beyond our expectations. They not only delivered a great product but also provided valuable insights throughout the process.",
    author: "David Kim",
    position: "Product Owner",
    company: "InnovatePro",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 bg-white rounded-full shadow-md hover:bg-primary-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-secondary-600" />
          </button>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-lg md:text-xl text-secondary-700 italic mb-8">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            <div className="flex items-center">
              <div>
                <div className="font-semibold text-secondary-900">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-secondary-600">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 bg-white rounded-full shadow-md hover:bg-primary-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-secondary-600" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-secondary-600' : 'bg-secondary-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;