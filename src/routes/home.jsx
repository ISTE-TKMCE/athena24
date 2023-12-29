import Carousel from "../components/carousel.jsx"
import Hero from "../components/hero.jsx"
// import Blur from "../components/blur.jsx"
import CustomH from "../components/customh.jsx"

export default function Home() {
  return (
      <div >
       <Hero/> 
      <div>
        <CustomH name="Event"/>
       <Carousel/>
      </div>
      </div>
  );
}
