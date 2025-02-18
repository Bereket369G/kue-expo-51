
export const ScrollStyles = () => (
  <style>
    {`
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      @keyframes floating {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      .animate-floating {
        animation: floating 3s ease-in-out infinite;
      }
    `}
  </style>
);
