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

  // ✅ Scroll butonlarını güncelle
  const updateScrollButtons = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollWidth > container.scrollLeft + container.clientWidth
    );
  }, []);

  // ✅ Mouse wheel ile yatay scroll + scroll buton güncellemesi
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
    <>
      <style>{`
        .na-section {
          padding: 80px 0;
          background: #f5f5f3;
          font-family: 'Georgia', serif;
        }

        .na-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto 48px auto;
          padding: 0 24px;
        }

        .na-titles h2 {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #888;
          margin: 0 0 10px 0;
          font-family: 'Helvetica Neue', sans-serif;
        }

        .na-titles p {
          font-size: 28px;
          font-weight: 400;
          color: #1a1a1a;
          margin: 0;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .na-nav-buttons {
          display: flex;
          gap: 8px;
          flex-shrink: 0;
        }

        .na-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #d0d0d0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #1a1a1a;
        }

        .na-btn:hover:not(:disabled) {
          background: #1a1a1a;
          border-color: #1a1a1a;
          color: white;
        }

        .na-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .na-track {
          display: flex;
          gap: 2px;
          overflow-x: scroll;
          scroll-behavior: smooth;
          -ms-overflow-style: none;
          scrollbar-width: none;
          padding: 0 24px;
          max-width: 1248px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .na-track::-webkit-scrollbar {
          display: none;
        }

        .na-card {
          flex: 0 0 calc(33.333% - 2px);
          min-width: 280px;
          background: white;
          position: relative;
          overflow: hidden;
        }

        .na-card-image-wrap {
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: #f0f0ee;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .na-card-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          display: block;
        }

        .na-card:hover .na-card-image-wrap img {
          transform: scale(1.03);
        }

        .na-card-info {
          padding: 14px 16px 18px;
          background: white;
        }

        .na-card-info a {
          text-decoration: none;
          color: inherit;
        }

        .na-card-name {
          font-size: 13px;
          font-weight: 400;
          color: #1a1a1a;
          letter-spacing: 0.02em;
          margin: 0 0 4px 0;
          font-family: 'Helvetica Neue', sans-serif;
        }

        .na-card-price {
          font-size: 13px;
          color: #666;
          font-family: 'Helvetica Neue', sans-serif;
          margin: 0;
          letter-spacing: 0.02em;
        }

        @media (max-width: 768px) {
          .na-card {
            flex: 0 0 80%;
          }

          .na-titles p {
            font-size: 22px;
          }
        }

        @media (max-width: 480px) {
          .na-card {
            flex: 0 0 90%;
          }
        }
      `}</style>

      <section className="na-section">
        {/* Header */}
        <div className="na-header">
          <div className="na-titles">
            <h2>Collection</h2>
            <p>Explore New Arrivals</p>
          </div>
          <div className="na-nav-buttons">
            <button
              className="na-btn"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              className="na-btn"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className="na-track"
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {newArrivals.map((product) => (
            <div key={product._id} className="na-card">
              <div className="na-card-image-wrap">
                <img
                  src={product.images[0]?.url}
                  alt={product.images[0]?.altText || product.name}
                  draggable="false"
                />
              </div>
              <div className="na-card-info">
                <Link to={`/product/${product._id}`}>
                  <p className="na-card-name">{product.name}</p>
                  <p className="na-card-price">${product.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default NewArrivals;