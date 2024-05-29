import { guit8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between
    items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize
        font-bold lg:max-w-lg">
          We Provide You <span 
          className="text-cherry-red"> 
          Super
        </span> <span 
          className="text-cherry-red"> 
          Quality
        </span> Gear
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium style and sound,
          our meticulously crafted guitars are designed
          to make you want to play everyday, providing you
          with unmatched quality, innovation and elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication 
        to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="view details"/>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={guit8} alt="guit8" width={570} height={522} 
        className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality