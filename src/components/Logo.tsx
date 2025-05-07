import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="h-10 w-10 relative">
        {/* <img 
          src="/logo.png" 
          alt="debugdream logo" 
          className="h-full w-full object-contain"
        /> */}
      </div>
      <div className="ml-2 text-xl font-bold text-secondary-900">
        debugdream
      </div>
    </div>
  );
};

export default Logo;