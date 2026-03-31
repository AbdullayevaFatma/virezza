import { useEffect, useState } from "react";

const messages = [
  "Use code FIRST10 for 10% off selected items",
  "Get 10% off on your first order over 500+",
];

const Topbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setFade(true); // fade in
      }, 500); // geçiş süresi
    }, 3000); // her mesaj 3 saniye görünür

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black w-full py-2 flex items-center justify-center overflow-hidden">
      <p
        className={`text-sm text-white transition-all duration-700 ease-in-out ${
          fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        {messages[currentIndex]}
      </p>
    </div>
  );
};

export default Topbar;