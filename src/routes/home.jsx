import Carousel from "../components/carousel.jsx"
import Hero from "../components/hero.jsx"
import Blur from "../components/blur.jsx"
import CustomH from "../components/customh.jsx"

export default function Home() {
  return (
      <div >
       <Hero/> 
       <Blur/>
      <div>
       <CustomH name="Events"/>
       <Carousel/>
       <CustomH name="Workshops"/>
       <Carousel/>
      </div>
      </div>
  );
}
