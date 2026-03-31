import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [newArrivals, setNewArrivals] = useState([]);
  const [centeredIndex, setCenteredIndex] = useState(0);

  // DATA FETCH
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

  // ORTADAKİ KARTI BUL
  const findCenteredCard = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const containerCenter =
      container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      const cardCenter =
        card.offsetLeft + card.offsetWidth / 2;

      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });

    setCenteredIndex(closestIndex);
  }, []);

  // SCROLL BUTTON STATE
  const updateScrollButtons = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);

    setCanScrollRight(
      container.scrollWidth >
        container.scrollLeft + container.clientWidth
    );
  }, []);

  // SCROLL LISTENER
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      updateScrollButtons();
      findCenteredCard();
    };

    container.addEventListener("scroll", handleScroll);

    updateScrollButtons();
    findCenteredCard();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [updateScrollButtons, findCenteredCard, newArrivals]);

  // OKLAR (ÜRÜN BAZLI KAYDIRMA)
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = cardRefs.current[0];
    if (!card) return;

    const gap = 16; // gap-4
    const cardWidth = card.offsetWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const CARD_HEIGHT = 380;

  return (
    <section className="py-20 bg-white">

      {/* TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-2xl font-light tracking-widest uppercase">
          New Arrivals
        </h2>
      </div>

      <div className="flex items-start w-full">

        {/* LEFT BUTTON */}
        <div
          className="flex-shrink-0 flex items-center justify-center w-12"
          style={{ height: `${CARD_HEIGHT}px` }}
        >
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`transition ${
              canScrollLeft
                ? "opacity-70 hover:opacity-100"
                : "opacity-20 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft size={28} />
          </button>
        </div>

        {/* SCROLL AREA */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-scroll flex-1 py-8 px-6 scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {newArrivals.map((product, index) => {
            const isCentered = index === centeredIndex;

            return (
              <div
                key={product._id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="flex-none basis-[calc((100%-2rem)/3)]"
                style={{
                  transform: isCentered ? "scale(1.08)" : "scale(1)",
                  transition: "all 0.4s ease",
                }}
              >
                {/* IMAGE */}
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

                {/* INFO */}
                <div className="mt-3 text-center">
                  <Link to={`/product/${product._id}`}>
                    <p className="text-sm text-gray-800">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      ${product.price}
                    </p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT BUTTON */}
        <div
          className="flex-shrink-0 flex items-center justify-center w-12"
          style={{ height: `${CARD_HEIGHT}px` }}
        >
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`transition ${
              canScrollRight
                ? "opacity-70 hover:opacity-100"
                : "opacity-20 cursor-not-allowed"
            }`}
          >
            <FiChevronRight size={28} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default NewArrivals;