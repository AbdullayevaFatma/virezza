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
    <div className="mb-6"></div>
  </div>;
};

export default FilterSidebar;
