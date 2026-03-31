import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const PrevArrow = ({ onClick }) => (
  <div className="absolute -left-2 top-1/2 -translate-y-1/2 z-10">
    <button
      onClick={onClick}
      className="bg-white shadow p-2 rounded-full hover:bg-gray-100"
    >
      <FiChevronLeft size={28} />
    </button>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
    <button
      onClick={onClick}
      className="bg-white shadow p-2 rounded-full hover:bg-gray-100"
    >
      <FiChevronRight size={28} />
    </button>
  </div>
);

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
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="text-center mb-14">
        <h2 className="text-2xl font-light tracking-widest text-gray-900 uppercase">
          New Arrivals
        </h2>
      </div>

      <div className="relative">
        <Slider {...settings}>
          {newArrivals.map((product) => (
            <div key={product._id} className="px-1">
              <div className="w-full h-[320px] flex items-center justify-center">
                <img
                  src={product.images[0]?.url}
                  alt={product.images[0]?.altText || product.name}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
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