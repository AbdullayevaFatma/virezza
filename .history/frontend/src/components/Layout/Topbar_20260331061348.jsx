import { useEffect, useState } from "react";

const messages = [
  "Use code FIRST10 for 10% off selected items",
  "Get 10% on your first order over 500",
];

const Topbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4000); // 2 saniye geçiş

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black w-full py-2 flex items-center justify-center overflow-hidden">
      <p
        key={currentIndex}
        className="text-sm text-white transition-opacity duration-700 ease-in-out opacity-0 animate-fade-in"
      >
        {messages[currentIndex]}
      </p>
    </div>
  );
};

export default Topbar;