
import { useEffect } from 'react';
import { reuleaux } from 'ldrs';

const LoadingScreen = () => {
  useEffect(() => {
    reuleaux.register();
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <l-reuleaux
        size="37"
        stroke="5"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.2" 
        color="black" 
      ></l-reuleaux>
    </div>
  );
};

export default LoadingScreen;
