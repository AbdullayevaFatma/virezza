
const SortOptions = () => {
  return (
    <div className="mb-4 flex items-center justify-end">
      <select className="border rounded-md focus:outline-none" id="sort">

        onCha
        <option value="">Default</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  )
}

export default SortOptions