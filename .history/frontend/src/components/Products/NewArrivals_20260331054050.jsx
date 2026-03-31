import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [centeredIndex, setCenteredIndex] = useState(0);

  const GAP = 2; 
  const CARD_HEIGHT = 380;

 
  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`
        );
        setNewArrivals(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNewArrivals();
  }, []);


  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerView(1);
      else if (width < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  const updateScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth);

  
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });
    setCenteredIndex(closestIndex);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateScroll);
    updateScroll();
    return () => container.removeEventListener("scroll", updateScroll);
  }, [newArrivals]);

  
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = cardRefs.current[0];
    if (!card) return;

    const cardWidth = card.offsetWidth + GAP;
    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 px-4 bg-white relative">
      <div className="text-center mb-14">
        <h2 className="text-2xl font-medium tracking-wider">New Arrivals</h2>
      </div>

      <div className="relative">
        {/* LEFT ARROW */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full transition ${
            canScrollLeft ? "opacity-70 hover:opacity-100" : "opacity-20 cursor-not-allowed"
          }`}
        >
          <FiChevronLeft size={28} />
        </button>

        {/* SCROLL AREA */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll scroll-smooth"
          style={{
            gap: `${GAP}px`,
            paddingLeft: '48px',
            paddingRight: '48px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {newArrivals.map((product, index) => {
            const isCentered = index === centeredIndex;
            return (
              <div
                key={product._id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="flex-none"
                style={{
                  width: `calc((100% - ${(cardsPerView - 1) * GAP}px) / ${cardsPerView})`,
                  transform: isCentered ? "scale(1.08)" : "scale(1)",
                  transition: "all 0.4s ease",
                }}
              >
                <div
                  className="w-full flex items-center justify-center overflow-hidden"
                  style={{ height: `${CARD_HEIGHT}px` }}
                >
                  <img
                    src={product.images[0]?.url}
                    alt={product.name}
                    className="w-[75%] h-[75%] object-contain"
                  />
                </div>
                <div className="mt-3 text-center">
                  <Link to={`/product/${product._id}`}>
                    <p className="text-sm text-gray-800">{product.name}</p>
                    <p className="text-sm text-gray-400 mt-1">${product.price}</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full transition ${
            canScrollRight ? "opacity-70 hover:opacity-100" : "opacity-20 cursor-not-allowed"
          }`}
        >
          <FiChevronRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;