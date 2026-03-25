import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails, fetchSimilarProducts } from "../../redux/slices/productsSlice";
import { addToCart } from "../../redux/slices/cartSlice";

// const selectedProduct = {
//   name: "Stylish Jacket",
//   price: 120,
//   originalPrice: 150,
//   description: "Perfect for any location",
//   brand: "Zara",
//   material: "Leather",
//   sizes: ["S", "M", "L", "XL"],
//   colors: ["Red", "Black"],
//   images: [
//     {
//       url: "https://picsum.photos/500/500?random=1",
//       altText: "Stylish Jacket 1",
//     },
//     {
//       url: "https://picsum.photos/500/500?random=2",
//       altText: "Stylish Jacket 2",
//     },
//   ],
// };

// const similarProducts =[
//   {
//     _id:1,
//     name:"Product 1",
//     price:100,
//     images:[{url:"https://picsum.photos/500/500?random=1"}]
//   },
//   {
//     _id:2,
//     name:"Product 2",
//     price:100,
//     images:[{url:"https://picsum.photos/500/500?random=2"}]
//   },
//   {
//     _id:3,
//     name:"Product 3",
//     price:100,
//     images:[{url:"https://picsum.photos/500/500?random=3"}]
//   },
//   {
//     _id:4,
//     name:"Product 4",
//     price:100,
//     images:[{url:"https://picsum.photos/500/500?random=4"}]
//   },
// ]
const ProductDetail = ({productId}) => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize,setSelectedSize]=useState("");
  const [selectedColor,setSelectedColor]=useState("");
  const [quantity,setQuantity] = useState(1);
  const [isButtonDisabled,setIsButtonDisabled]=useState(false)
  const {id} = useParams()
  const dispatch = useDispatch()
  const {selectedProduct,loading,error,similarProducts} = useSelector((state)=>state.products)
const {user,guestId} = useSelector((state)=>state.auth)

const productFetchId = productId || id

useEffect(() => {
  if(productFetchId){
    dispatch(fetchProductDetails(productFetchId))
    dispatch(fetchSimilarProducts({id:productFetchId}))
  }
}, [dispatch,productFetchId])



  useEffect(()=>{
    if(selectedProduct?.images?.length > 0){
      setMainImage(selectedProduct.images[0].url)
    }
  },[selectedProduct])


  const handleQuantityChange =(action)=>{
if(action==="plus") setQuantity((prev)=>prev+1)
  if(action==="minus" && quantity>1) setQuantity((prev)=>prev-1)
  }

  const handleAddToCart =()=>{
    if(!selectedSize || !selectedColor){
      toast.error("Please select a size and color before adding to cart.",{
        duration:1000
      })
      return
    }
    setIsButtonDisabled(true)
   dispatch(addToCart({productId:productFetchId,quantity,size:selectedSize,color:selectedColor,guestId,userId:user?._id})).then(()=>{
    toast.success("Product added to cart!",{duration:1000})
   }).finally(()=>{
    setIsButtonDisabled(false)
   })
  }

  if(loading){
    return <p>Loading...</p>
  }
  if(error){
    return <p>Error: {error}</p>
  }
  return (
    <div className="p-6">
      {
        selectedProduct && 
      }
      
    </div>
  );
};

export default ProductDetail;
