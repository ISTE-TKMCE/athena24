import Carousel from "../components/carousel.jsx"
import Hero from "../components/hero.jsx"
// import Blur from "../components/blur.jsx"
import CustomH from "../components/customh.jsx"
import Blur from "../components/blur.jsx"

export default function Home() {
 const isMobile = window.innerWidth <= 480;

  // Set coordinates based on the device type
  const blur1Coordinates = isMobile
    ? { position: "absolute", top: "20%", left: "-15%" }
    : { position: "absolute", top: "20%", left: "-10%"};

  const blur2Coordinates = isMobile
    ? { position: "absolute", top: "10%", left: "30%" }
    : { position: "absolute", top: "10%", left: "80%"};


  return (
      <div className="overflow-hidden">
      <Blur coordinates={blur1Coordinates} />
      <Blur class="hidden md:block" coordinates={blur2Coordinates} />
       <Hero/> 
      <div>
       <CustomH name="Events" type="1"/>
        <Carousel event/>
       <CustomH name="Workshops" type="1"/>
        <Carousel/>
      </div>
      </div>
  );
}
