
import { useEffect } from 'react';
import { hourglass } from 'ldrs';

const LoadingScreen = () => {
  useEffect(() => {
    hourglass.register();
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <l-hourglass
        size="40"
        bg-opacity="0.1"
        speed="1.75" 
        color="black"
      ></l-hourglass>
    </div>
  );
};

export default LoadingScreen;
