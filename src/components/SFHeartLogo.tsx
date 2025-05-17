
import React from 'react';

interface SFHeartLogoProps {
  className?: string;
  size?: number;
}

const SFHeartLogo: React.FC<SFHeartLogoProps> = ({ className = '', size = 200 }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: 'auto' }}>
      <img 
        src="/lovable-uploads/f9d88df5-cb77-4393-90b9-e01d7e876ea3.png" 
        alt="RizzMCP Logo" 
        className="w-full h-auto rounded-md" 
        style={{ maxWidth: size }}
      />
    </div>
  );
};

export default SFHeartLogo;
