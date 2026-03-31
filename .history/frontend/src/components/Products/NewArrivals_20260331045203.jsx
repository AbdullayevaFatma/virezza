import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const dragRef = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });

  const [isDragging, setIsDragging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [newArrivals, setNewArrivals] = useState([]);

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

    container.addEventListener("scroll", updateScrollButtons);
    container.addEventListener("wheel", handleWheel, { passive: false });
    updateScrollButtons();

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      container.removeEventListener("wheel", handleWheel);
    };
  }, [updateScrollButtons, newArrivals]);

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

  return (
    <section className="py-16 bg-[#f5f5f3]">

      {/* Başlık */}
      <div className="text-center mb-10">
        <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400 mb-2">
          Collection
        </p>
        <h2 className="text-2xl font-light text-gray-900 tracking-wide">
          Explore New Arrivals
        </h2>
      </div>

      {/* Carousel wrapper */}
      <div className="relative flex items-center">

        {/* Sol ok butonu — tam sol kenarda */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`absolute left-4 z-10 w-8 h-8 rounded-full border bg-white flex items-center justify-center transition-all duration-200
            ${canScrollLeft
              ? "border-gray-400 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900"
              : "border-gray-200 text-gray-300 cursor-not-allowed"
            }`}
        >
          <FiChevronLeft size={16} />
        </button>

        {/* Kart scroll alanı */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-1 overflow-x-scroll w-full px-16 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {newArrivals.map((product) => (
            <div
              key={product._id}
              className="flex-none w-[32%] min-w-[220px] group"
            >
              {/* Resim */}
              <div className="w-full aspect-[3/4] bg-[#eaeaea] overflow-hidden">
                <img
                  src={product.images[0]?.url}
                  alt={product.images[0]?.altText || product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  draggable="false"
                />
              </div>

              {/* Ürün adı ve fiyat — resmin altında ortada */}
              <div className="mt-3 text-center">
                <Link to={`/product/${product._id}`} className="group/link">
                  <p className="text-[13px] text-gray-800 tracking-wide leading-tight">
                    {product.name}
                  </p>
                  <p className="text-[13px] text-gray-500 mt-1">
                    ${product.price}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Sağ ok butonu — tam sağ kenarda */}
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`absolute right-4 z-10 w-8 h-8 rounded-full border bg-white flex items-center justify-center transition-all duration-200
            ${canScrollRight
              ? "border-gray-400 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900"
              : "border-gray-200 text-gray-300 cursor-not-allowed"
            }`}
        >
          <FiChevronRight size={16} />
        </button>

      </div>
    </section>
  );
};

export default NewArrivals;