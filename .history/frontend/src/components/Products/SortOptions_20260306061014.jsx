import { useState } from "react"
import { useSearchParams } from "react-router-dom"

const SortOptions = () => {
  const [searchParams,setSearchParams] = useSearchParams()
  const handleSortChange =(e)=>{
const sortBy = e.target
  }
  return (
    <div className="mb-4 flex items-center justify-end">
      <select onChange={handleSortChange} className="border rounded-md focus:outline-none" id="sort">

      
        <option value="">Default</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  )
}

export default SortOptions