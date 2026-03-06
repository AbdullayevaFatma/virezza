import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetail from '../components/Products/ProductDetail'

const Home = () => {
  return (
    <>
    <Hero/>
    <GenderCollectionSection/>
    <NewArrivals/>
    <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
    <ProductDetail/>

    <div className="container mx-auto">
      <h2 className="text-3xl text-center font-bold mb-4">Top Wears for Women</h2>
    </div>

    </>
  )
}

export default Home