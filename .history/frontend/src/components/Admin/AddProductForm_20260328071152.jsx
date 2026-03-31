import  { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/slices/adminProductSlice";

const AddProductForm = () => {
  const dispatch = useDispatch();

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    discountPrice: "",
    countInStock: "",
    sku: "",
    category: "",
    brand: "",
    sizes: "",
    colors: "",
    collections: "",
    material: "",
    gender: "Unisex",
    isFeatured: false,
    isPublished: true,
    images: "",
    tags: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    dimensions: { length: "", width: "", height: "" },
    weight: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.includes("dimensions.")) {
      const key = name.split(".")[1];
      setProductData({
        ...productData,
        dimensions: { ...productData.dimensions, [key]: value },
      });
    } else if (type === "checkbox") {
      setProductData({ ...productData, [name]: checked });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...productData,
      sizes: productData.sizes.split(",").map((s) => s.trim()),
      colors: productData.colors.split(",").map((c) => c.trim()),
      tags: productData.tags.split(",").map((t) => t.trim()),
      images: productData.images.split(",").map((url) => ({ url, altText: "" })),
      price: Number(productData.price),
      discountPrice: Number(productData.discountPrice),
      countInStock: Number(productData.countInStock),
      weight: Number(productData.weight),
      dimensions: {
        length: Number(productData.dimensions.length),
        width: Number(productData.dimensions.width),
        height: Number(productData.dimensions.height),
      },
    };

    dispatch(createProduct(payload));

    setProductData({
      name: "",
      description: "",
      price: "",
      discountPrice: "",
      countInStock: "",
      sku: "",
      category: "",
      brand: "",
      sizes: "",
      colors: "",
      collections: "",
      material: "",
      gender: "Unisex",
      isFeatured: false,
      isPublished: true,
      images: "",
      tags: "",
      metaTitle: "",
      metaDescription: "",
      metaKeywords: "",
      dimensions: { length: "", width: "", height: "" },
      weight: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-6 space-y-2">
      <h3 className="font-bold text-lg">Add New Product</h3>
      <input name="name" placeholder="Name" value={productData.name} onChange={handleChange} className="border p-1 w-full" />
      <textarea name="description" placeholder="Description" value={productData.description} onChange={handleChange} className="border p-1 w-full" />
      <input name="price" type="number" placeholder="Price" value={productData.price} onChange={handleChange} className="border p-1 w-full" />
      <input name="discountPrice" type="number" placeholder="Discount Price" value={productData.discountPrice} onChange={handleChange} className="border p-1 w-full" />
      <input name="countInStock" type="number" placeholder="Count in Stock" value={productData.countInStock} onChange={handleChange} className="border p-1 w-full" />
      <input name="sku" placeholder="SKU" value={productData.sku} onChange={handleChange} className="border p-1 w-full" />
      <input name="category" placeholder="Category" value={productData.category} onChange={handleChange} className="border p-1 w-full" />
      <input name="brand" placeholder="Brand" value={productData.brand} onChange={handleChange} className="border p-1 w-full" />
      <input name="sizes" placeholder="Sizes (comma separated)" value={productData.sizes} onChange={handleChange} className="border p-1 w-full" />
      <input name="colors" placeholder="Colors (comma separated)" value={productData.colors} onChange={handleChange} className="border p-1 w-full" />
      <input name="collections" placeholder="Collections" value={productData.collections} onChange={handleChange} className="border p-1 w-full" />
      <input name="material" placeholder="Material" value={productData.material} onChange={handleChange} className="border p-1 w-full" />
      <select name="gender" value={productData.gender} onChange={handleChange} className="border p-1 w-full">
        <option value="Men">Men</option>
        <option value="Women">Women</option>
        <option value="Unisex">Unisex</option>
      </select>
      <label className="flex items-center space-x-2">
        <input type="checkbox" name="isFeatured" checked={productData.isFeatured} onChange={handleChange} />
        <span>Featured</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" name="isPublished" checked={productData.isPublished} onChange={handleChange} />
        <span>Published</span>
      </label>
      
      <input name="tags" placeholder="Tags (comma separated)" value={productData.tags} onChange={handleChange} className="border p-1 w-full" />
      <input name="metaTitle" placeholder="Meta Title" value={productData.metaTitle} onChange={handleChange} className="border p-1 w-full" />
      <input name="metaDescription" placeholder="Meta Description" value={productData.metaDescription} onChange={handleChange} className="border p-1 w-full" />
      <input name="metaKeywords" placeholder="Meta Keywords" value={productData.metaKeywords} onChange={handleChange} className="border p-1 w-full" />
      <input name="dimensions.length" placeholder="Length" value={productData.dimensions.length} onChange={handleChange} className="border p-1 w-full" />
      <input name="dimensions.width" placeholder="Width" value={productData.dimensions.width} onChange={handleChange} className="border p-1 w-full" />
      <input name="dimensions.height" placeholder="Height" value={productData.dimensions.height} onChange={handleChange} className="border p-1 w-full" />
      <input name="weight" placeholder="Weight" type="number" value={productData.weight} onChange={handleChange} className="border p-1 w-full" />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 mt-2">Add Product</button>
    </form>
  );
};

export default AddProductForm;