import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

// const newArrivals = [
//   { _id: "1", name: "Stylish Jacket", price: 120, images: [{ url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket" }] },
//   { _id: "2", name: "Casual Shirt", price: 85, images: [{ url: "https://picsum.photos/500/500?random=2", altText: "Casual Shirt" }] },
//   { _id: "3", name: "Slim Pants", price: 95, images: [{ url: "https://picsum.photos/500/500?random=3", altText: "Slim Pants" }] },
//   { _id: "4", name: "Summer Dress", price: 110, images: [{ url: "https://picsum.photos/500/500?random=4", altText: "Summer Dress" }] },
//   { _id: "5", name: "Sport Shoes", price: 150, images: [{ url: "https://picsum.photos/500/500?random=5", altText: "Sport Shoes" }] },
//   { _id: "6", name: "Denim Jacket", price: 135, images: [{ url: "https://picsum.photos/500/500?random=6", altText: "Denim Jacket" }] },
//   { _id: "7", name: "Wool Coat", price: 200, images: [{ url: "https://picsum.photos/500/500?random=7", altText: "Wool Coat" }] },
// ];

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const dragRef = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });

  const [isDragging, setIsDragging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const [newArrivals,setNewArrivals]=useState([])
  useEffect(()=>{
    const fetchNewArrivals = async()=>{
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`)
        setNewArrivals(response.data)
      } catch (error) {
        console.error(error);
        
      }
    }
  })

  // ✅ Scroll butonlarını güncelle
  const updateScrollButtons = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollWidth > container.scrollLeft + container.clientWidth);
  }, []);

  // ✅ Mouse wheel ile yatay scroll + scroll buton güncellemesi
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault(); // sayfanın dikey scroll etmesini engelle
      container.scrollLeft += e.deltaY; // yatay kaydır
    };

    container.addEventListener("scroll", updateScrollButtons);
    container.addEventListener("wheel", handleWheel, { passive: false }); // passive: false şart!
    updateScrollButtons();

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      container.removeEventListener("wheel", handleWheel);
    };
  }, [updateScrollButtons]);


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
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, eius!
        </p>

        <div className="absolute right-0 -bottom-7.5 flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${canScrollLeft ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded border ${canScrollRight ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      >
        {newArrivals.map((product) => (
          <div key={product._id} className="min-w-full sm:min-w-[50%] lg:min-w-[30%] relative">
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-125 object-cover"
              draggable="false"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;