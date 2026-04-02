import Acc from "../../assets/acc-categories.avif";
import Dress from "../../assets/dress-categories.avif"
import Shoe from "../../assets/shoes-category.avif"
import Swimwear from "../../assets/swimwear-categories.webp"
import Sunglasses from "../../assets/sunglasses-categories.avif"
import Jewelry from "../../assets/jewelry-categories.avif"

const categories = [
  { title: "Ready-to-Wear", img: Acc },
  { title: "Dress", img: Dress },
  { title: "Shoes", img: Acc },
  { title: "Jewellery", img: Jewelry },
  { title: "Swimwear", img: Swimwear },
  { title: "Sunglasses", img: Sunglasses },
];

const Categories = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex mb-10 gap-5 justify-center">
        <button className="px-12 py-2 w-40 font-light bg-black text-white rounded">
          Women
        </button>
        <button className="px-12 py-2 w-40 font-light border border-black rounded">
          Men
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.title} className="flex flex-col items-center">
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-72 object-cover"
            />
            <p className="mt-4 text-center font-medium">{cat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;