import hero from "../../assets/hero.avif"
const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <div className="relative flex-1">
          <img src={hero} alt=""className="w-full h-[700px] object-cover"/>
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p"></div>
        </div>
        <div className="relative flex-1">
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  )
}

export default GenderCollectionSection