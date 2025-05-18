
import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  job: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "RizzMCP helped me find my perfect match who actually understands what I do for a living!",
    author: "Ryan H.",
    job: "Software Engineer at Google"
  },
  {
    quote: "After countless failed dates, RizzMCP's algorithm finally matched me with someone amazing!",
    author: "Ella S.",
    job: "Product Manager at Airbnb"
  },
  {
    quote: "The quality of matches on RizzMCP is so much better than what I found on other apps.",
    author: "Eshan B.",
    job: "Data Scientist at Meta"
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-sfdating-red">
          Success Stories
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex-1">
                <svg className="h-8 w-8 text-sfdating-red/30 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
