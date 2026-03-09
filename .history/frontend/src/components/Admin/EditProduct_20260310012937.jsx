import { useState } from "react"

const EditProduct = () => {
  const [productData,setProductData] = useState({
    name:"",
    description:"",
    price:0,
    countInStock:0,
    sku:"",
    category:"",
    brand:"",
    sizes:[],
    col
  })
  return (
    <div>EditProduct</div>
  )
}

export default EditProduct