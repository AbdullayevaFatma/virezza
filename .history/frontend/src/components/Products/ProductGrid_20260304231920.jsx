import { Link } from "react-router-dom"

const ProductGrid = ({products}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {
        products.map((product,index)=>(
          <Link key={index}></Link>
        ))
      }
    </div>
  )
}

export default ProductGrid