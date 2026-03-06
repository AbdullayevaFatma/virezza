import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'

const Home = () => {
  return (
    <>
    <Hero/>
    <GenderCollectionSection/>
    <NewArrivals/>
    <h2 className='text-3xl text-center'>Best Seller</h2>

    </>
  )
}

export default Home