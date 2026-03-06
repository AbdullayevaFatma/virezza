import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });
  const [priceRange, setPriceRange] = useState([0, 100]);
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Purple",
    "Orange",
    "Black",
    "White",
    "Pink",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = [
    "Cotton",
    "Fleece",
    "Wool",
    "Polyester",
    "Silk",
    "Linen",
    "Denim",
    "Leather",
  ];

  const brands = [
    "Ralph Lauren",
    "Massimo Dutti",
    "Zara",
    "H&M",
    "Tommy Hilfiger",
    "Calvin Klein",
  ];
  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0,params.maxPrice || 100])
  },[searchParams]);

  return <div className="p-4">
    <h3 className="text-xl font-medium mb-4 text-gray-800">Filter</h3>
      {/* Category Filter */}
    <div className="mb-6">
      <label className="block text-gray-600 font-medium mb-2">Category</label>
      {
        categories.map((category)=>(
          <div key={category} className="flex items-center mb-1">
            <input type="radio"  name="category" className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"/>
            <span className="text-gray-700">{category}</span>
          </div>
        ))
      }
    </div>
      {/* Gender Filter */}
    <div className="mb-6">
      <label className="block text-gray-600 font-medium mb-2">Category</label>
      {
        genders.map((gender)=>(
          <div key={gender} className="flex items-center mb-1">
            <input type="radio"  name="gender" className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"/>
            <span className="text-gray-700">{gender}</span>
          </div>
        ))
      }
    </div>
      {/* Color Filter */}
    <div className="mb-6">
      <label className="block text-gray-600 font-medium mb-2">Color</label>
      <div className="flex flex-wrap gap-2">
          {
        colors.map((color)=>(
         <button key={color} name="color" className="w-8 h-8 rounded-full cursor-pointer transition hover:scale-105" style={{backgroundColor: color.toLowerCase()}}></button>
        ))
      }
      </div>
    
    </div>

        {/* Size Filter */}
    <div className="mb-6">
      <label className="block text-gray-600 font-medium mb-2">Size</label>
      {
        sizes.map((size)=>(
          <div key={size} className="flex items-center mb-1">
            <input type="checkbox"  name="size" className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"/>
            <span className="text-gray-700">{size}</span>
          </div>
        ))
      }
    </div>

        {/*  Material Filter */}
    <div className="mb-6">
      <label className="block text-gray-600 font-medium mb-2">Size</label>
      {
        materials.map((material)=>(
          <div key={material} className="flex items-center mb-1">
            <input type="checkbox"  name="material" className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"/>
            <span className="text-gray-700">{material}</span>
          </div>
        ))
      }
    </div>
        {/* Brand Filter */}
    <div className="mb-6">
      <label className="block text-gray-600 font-medium mb-2">Size</label>
      {
        brands.map((brand)=>(
          <div key={brand} className="flex items-center mb-1">
            <input type="checkbox"  name="brand" className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"/>
            <span className="text-gray-700">{brand}</span>
          </div>
        ))
      }
    </div>
    
  </div>;
};

export default FilterSidebar;
