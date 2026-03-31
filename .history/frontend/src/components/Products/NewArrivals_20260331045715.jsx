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
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  // Kart yüksekliği sabit — butonlar buna göre ortalanıyor
  const CARD_HEIGHT = 280;

  return (
    <section className="py-20 bg-white">

      {/* Başlık */}
      <div className="text-center mb-14">
        <h2 className="text-2xl font-light tracking-widest text-gray-900 uppercase">
          New Arrivals
        </h2>
      </div>

      {/* Wrapper: buton + scroll yan yana */}
      <div className="flex items-start w-full">

        {/* Sol buton — kartların resim alanının tam ortasında */}
        <div
          className="flex-shrink-0 flex items-center justify-center w-12"
          style={{ height: `${CARD_HEIGHT}px` }}
        >
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`transition-opacity duration-200 ${
              canScrollLeft
                ? "opacity-70 hover:opacity-100 cursor-pointer"
                : "opacity-20 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft size={28} className="text-gray-700" />
          </button>
        </div>

        {/* Scroll track */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-4 overflow-x-scroll flex-1 py-8 ${
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
                className="flex-none"
                style={{
                  width: "260px",
                  transform: isCentered ? "scale(1.07)" : "scale(1)",
                  transition: "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  transformOrigin: "center top",
                }}
              >
                {/* Resim kutusu */}
                <div
                  className="w-full flex items-center justify-center overflow-hidden"
                  style={{ height: `${CARD_HEIGHT}px` }}
                >
                  <img
                    src={product.images[0]?.url}
                    alt={product.images[0]?.altText || product.name}
                    className="w-[75%] h-[75%] object-contain"
                    draggable="false"
                  />
                </div>

                {/* Bilgi */}
                <div className="mt-3 text-center">
                  <Link to={`/product/${product._id}`}>
                    <p className="text-sm text-gray-800 tracking-wide">
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
        <div
          className="flex-shrink-0 flex items-center justify-center w-12"
          style={{ height: `${CARD_HEIGHT}px` }}
        >
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`transition-opacity duration-200 ${
              canScrollRight
                ? "opacity-70 hover:opacity-100 cursor-pointer"
                : "opacity-20 cursor-not-allowed"
            }`}
          >
            <FiChevronRight size={28} className="text-gray-700" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default NewArrivals;