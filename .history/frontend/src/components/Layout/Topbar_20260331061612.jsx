import { useEffect, useState } from "react";

const messages = [
  "Use code FIRST10 for 10% off selected items",
  "Get 10% off on your first order over 500",
];

const Topbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setVisible(true); 
      }, 700); 
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black w-full py-2 flex items-center justify-center">
      <p
        className={`text-sm text-white transition-opacity duration-700 ease-in-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {messages[currentIndex]}
      </p>
    </div>
  );
};

export default Topbar;