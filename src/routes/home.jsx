import Carousel from "../components/carousel.jsx"
import Hero from "../components/hero.jsx"
// import Blur from "../components/blur.jsx"
import CustomH from "../components/customh.jsx"

export default function Home() {
  return (
      <div >
       <Hero/> 
      <div>
       <CustomH name="Events" type="1"/>
       <Carousel/>
       <CustomH name="Workshops" type="1"/>
       <Carousel/>
      </div>
      </div>
  );
}
