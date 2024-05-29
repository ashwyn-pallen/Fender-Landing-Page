import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center 
    max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687}
        className="object-contain w-full"/>
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize
        font-bold lg:max-w-lg">
        <span 
          className="text-cherry-red"> 
          Special
        </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Unleash your inner rock star with our Sale Extravaganza, 
        offering up to 30% off select Fender guitars! Plus, 
        enjoy exclusive online offers like free shipping on selected orders. 
        Bundle your new Fender guitar with select accessories 
        and save 15%, or participate in our Trade-In Program.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        Whether you're a beginner or a pro, there's never been a better 
        time to join the Fender family. Shop now and start 
        your musical journey today!
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight}/>
          <Button label="Learn More" backgroundColor="bg-white"
          borderColor="border-slate-gray" text-Color="text-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer