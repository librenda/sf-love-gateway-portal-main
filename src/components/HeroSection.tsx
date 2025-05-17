
import React from 'react';
import { Button } from "@/components/ui/button";
import SFHeartLogo from './SFHeartLogo';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-sfdating-red/5" />
      <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-sfdating-red/5" />
      
      <div className="container mx-auto px-6 py-16 md:py-32 flex flex-col md:flex-row items-center">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left mb-10 md:mb-0 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-sfdating-red">RizzMCP</span>
            <br />
            <span className="text-gray-800">
              Where Tech Meets <span className="text-sfdating-red">Romance</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-xl">
            If you're a <span className="font-semibold">SWE in San Francisco</span>, 
            you never have to swipe on Tinder again.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Button 
              className="bg-sfdating-red hover:bg-sfdating-red/90 text-white px-8 py-6 text-lg shadow-lg"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Now
            </Button>
            <Button 
              variant="outline"
              className="border-sfdating-red text-sfdating-red hover:bg-sfdating-red/10 px-8 py-6 text-lg"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Right content - Logo */}
        <div className="flex-1 flex justify-center md:justify-end z-10">
          <div className="animate-pulse-slow">
            <SFHeartLogo size={280} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
