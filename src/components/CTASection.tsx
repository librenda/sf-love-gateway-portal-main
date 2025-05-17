
import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  return (
    <section className="bg-sfdating-red text-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to meet your perfect tech match?
        </h2>
        <p className="text-lg sm:text-xl mb-10 opacity-90 max-w-3xl mx-auto">
          Join thousands of San Francisco professionals who have found meaningful relationships through RizzMCP.
        </p>
        <Button 
          className="bg-white text-sfdating-red hover:bg-gray-100 px-8 py-6 text-lg font-medium"
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Started Today
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
