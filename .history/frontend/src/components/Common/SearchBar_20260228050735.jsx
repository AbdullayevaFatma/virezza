import { useState } from "react"
import { HiMagnifyingGlass } from "react-icons/hi2"

const SearchBar = () => {

  const [searchTerm,setSearchTerm] = useState("")
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div>{
      isOpen ? (<form className="relative flex items-center justify-center"></form>):(
        <button onClick={()=>setIsOpen(!isOpen)}>
          <HiMagnifyingGlass className="h-6 w-6"/>
        </button>
      )
      }</div>
  )
}

export default SearchBar