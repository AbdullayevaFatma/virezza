import { useState } from "react"

const EditProduct = () => {
  const [productData,setProductData] = useState({
    name:"",
    description:"",
    price:0,
    count
  })
  return (
    <div>EditProduct</div>
  )
}

export default EditProduct