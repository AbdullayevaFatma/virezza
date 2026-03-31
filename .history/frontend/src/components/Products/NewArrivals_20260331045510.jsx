import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const dragRef = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });

  const [isDragging, setIsDragging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [newArrivals, setNewArrivals] = useState([]);
  const [centeredIndex, setCenteredIndex] = useState(0);

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

  // Hangi kart merkeze en yakın — onu bul
  const findCenteredCard = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

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
  }, []);

  const updateScrollButtons = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollWidth > container.scrollLeft + container.clientWidth
    );
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    const handleScroll = () => {
      updateScrollButtons();
      findCenteredCard();
    };

    container.addEventListener("scroll", handleScroll);
    container.addEventListener("wheel", handleWheel, { passive: false });
    updateScrollButtons();
    findCenteredCard();

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("wheel", handleWheel);
    };
  }, [updateScrollButtons, findCenteredCard, newArrivals]);

  const handleMouseDown = (e) => {
    dragRef.current = {
      isDragging: true,
      startX: e.pageX - scrollRef.current.offsetLeft,
      scrollLeft: scrollRef.current.scrollLeft,
    };
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!dragRef.current.isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - dragRef.current.startX;
    scrollRef.current.scrollLeft = dragRef.current.scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    dragRef.current.isDragging = false;
    setIsDragging(false);
  };

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-white">

      {/* Başlık */}
      <div className="text-center mb-14">
        <h2 className="text-2xl font-light tracking-widest text-gray-900 uppercase">
          New Arrivals
        </h2>
      </div>

      {/* Carousel + butonlar */}
      <div className="relative flex items-center">

        {/* Sol buton */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`absolute left-6 z-20 transition-opacity duration-200 ${
            canScrollLeft ? "opacity-80 hover:opacity-100" : "opacity-20 cursor-not-allowed"
          }`}
        >
          <FiChevronLeft className="text-3xl text-gray-700" />
        </button>

        {/* Scroll alanı */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex items-center gap-6 overflow-x-scroll w-full px-24 py-8 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {newArrivals.map((product, index) => {
            const isCentered = index === centeredIndex;
            return (
              <div
                key={product._id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="flex-none group"
                style={{
                  width: "340px",
                  transform: isCentered ? "scale(1.08)" : "scale(1)",
                  transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  transformOrigin: "center center",
                }}
              >
                {/* Resim kutusu */}
                <div className="w-full h-[280px] bg-[#f2f2f0] flex items-center justify-center overflow-hidden">
                  <img
                    src={product.images[0]?.url}
                    alt={product.images[0]?.altText || product.name}
                    className="w-[72%] h-[72%] object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                    draggable="false"
                  />
                </div>

                {/* Ürün bilgisi */}
                <div className="mt-4 text-center">
                  <Link to={`/product/${product._id}`}>
                    <p className="text-sm tracking-wide text-gray-800">
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

        {/* Sağ buton */}
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`absolute right-6 z-20 transition-opacity duration-200 ${
            canScrollRight ? "opacity-80 hover:opacity-100" : "opacity-20 cursor-not-allowed"
          }`}
        >
          <FiChevronRight className="text-3xl text-gray-700" />
        </button>

      </div>
    </section>
  );
};

export default NewArrivals;