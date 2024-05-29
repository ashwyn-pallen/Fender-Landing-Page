import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import { guitars, statistics } from "../constants"
import { guitar1 } from "../assets/images"
import GuitarCard from "../components/GuitarCard"
import { useState } from "react"

const Hero = () => {
  const [bigGuitImg, setBigGuitImg] = useState(guitar1)

  return (
    <section id='home'
    className="w-full flex xl:flex-row flex-col
    justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col
      justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-cherry-red">
          Our New Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl 
        max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap
          relative z-10 pr-10">The New Arrivals</span>
          <br />
          <span className="inline-block
          mt-3"> At </span> <span 
          className="text-cherry-red inline-block mt-3"> 
          Fender
          </span> 
        </h1>
        <p className="font-montserrat text-slate-gray text-lg
        leading-8 mt-6 mb-14 sm:max-w-sm">
          Our flagship models offered in semi-hollow ash
          bodies and beautiful transparent finish options.
        </p>
        <Button label="Shop now" iconURL={arrowRight}/>

        <div className="flex justify-starts items-start flex-wrap
        w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center 
      xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover
      bg-center">
        <img src={bigGuitImg} alt="shoe collection" width={310} height={210}
        className="object-contain relative-z-10" />
      
          <div className="flex sm:gap=6 gap-4 absolute -bottom-[5%]
          sm:left-[15%] max:sm:px-6
          ">
            {guitars.map((g) => (
              <div key={g.key}>
                <GuitarCard imgURL={g}
                changeBigguit= {(gui) => setBigGuitImg(gui)}
                Bigguit={bigGuitImg}
                />
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default Hero;