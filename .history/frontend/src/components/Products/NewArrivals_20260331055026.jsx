import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const PrevArrow = ({ onClick, currentSlide }) => (
  <button
    onClick={onClick}
    disabled={currentSlide === 0}
    className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1 rounded-full transition-opacity duration-200 ${
      currentSlide === 0 ? "opacity-20 cursor-not-allowed" : "opacity-70 hover:opacity-100"
    }`}
  >
    <FiChevronLeft size={26} className="text-gray-700" />
  </button>
);

const NextArrow = ({ onClick, slideCount, slidesToShow, currentSlide }) => {
  const isEnd = currentSlide >= slideCount - slidesToShow;
  return (
    <button
      onClick={onClick}
      disabled={isEnd}
      className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1 rounded-full transition-opacity duration-200 ${
        isEnd ? "opacity-20 cursor-not-allowed" : "opacity-70 hover:opacity-100"
      }`}
    >
      <FiChevronRight size={26} className="text-gray-700" />
    </button>
  );
};

const NewArrivals = () => {
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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow slideCount={newArrivals.length} slidesToShow={4} />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-14">
        <h2 className="text-2xl font-light tracking-widest text-gray-900 uppercase">
          New Arrivals
        </h2>
      </div>

      <div className="relative px-10">
        <Slider {...settings}>
          {newArrivals.map((product) => (
            <div key={product._id} className="px-1">
              <div className="w-full h-[320px] flex items-center justify-center">
                <img
                  src={product.images[0]?.url}
                  alt={product.images[0]?.altText || product.name}
                  className="w-full h-full object-contain"
                  draggable="false"
                />
              </div>
              <div className="mt-3 text-center">
                <Link to={`/product/${product._id}`}>
                  <p className="text-sm text-gray-800 tracking-wide">{product.name}</p>
                  <p className="text-sm text-gray-400 mt-1">${product.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default NewArrivals;