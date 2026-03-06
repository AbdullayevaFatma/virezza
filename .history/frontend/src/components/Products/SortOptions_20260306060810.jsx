
const SortOptions = () => {
  return (
    <div className="mb-4 flex items-center justify-end">
      <select className="border rounded-md focus:outline-none" id="sort">
        <option value="">Default</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value=""></option>
        <option value="">Default</option>
      </select>
    </div>
  )
}

export default SortOptions