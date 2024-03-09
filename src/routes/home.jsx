import Carousel from "../components/carousel.jsx"
import Hero from "../components/hero.jsx"
// import Blur from "../components/blur.jsx"
import CustomH from "../components/customh.jsx"
import Blur from "../components/blur.jsx"
import {Link } from "react-router-dom"
import {useState } from "react"

export default function Home() {
  const [toggle, setToggle] = useState();
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
        <div className="cursor-pointer bg-yellow-300 text-3xl text-black transform transition-transform hover:scale-95 duration-1000 font-primary text-center py-3 my-3 m-5 md:m-5 mt-0 rounded-lg relative" onClick={()=> {setToggle(!toggle)}}>About Athena
          {toggle ? <div className="text-xl p-3 ">ISTE TKMCE is glad to present ATHENA, 22nd Annual ISTE State Students' Convention. ATHENA is a manifesto of opportunities for young people to demonstrate and enrich their talents as well as to bring their ideas into life. The fiesta exhibits a new countenance of vigor to transform inventiveness to existence and enhance abounding opportunities to enlive and refurbish the flair of innovation in young minds. With the theme Revolutionizing Tomorrow with Technology, ISTE TKMCE is poised to give every student a truly one of a kind experience and a plethora of memories and valuable insights to carry on with you.</div> : null}
        </div>
        <Link to="/schedule"><div className="bg-yellow-300 text-3xl text-black transform transition-transform hover:scale-110 duration-1000 font-primary text-center py-3 my-3 m-5 mt-10 rounded-lg relative">Schedule</div></Link>
        <Link to="/delegatepass"><div className="bg-yellow-300 text-3xl text-black transform transition-transform hover:scale-110 duration-1000 font-primary text-center py-3 my-3 m-5 rounded-lg relative">Get Delegate Pass</div></Link>
        <Link to="/accommodation"><div className="bg-yellow-300 text-3xl text-black transform transition-transform hover:scale-110 duration-1000 font-primary text-center py-3 my-3 m-5 rounded-lg relative">Accommodation</div></Link>
        
       <CustomH name="Events" type="1"/>
        <Carousel event/>
       <CustomH name="Workshops" type="1"/>
        <Carousel ws/>
        <CustomH name="Talk Show" type="1"/>
        <Carousel talk/>
      </div>
      </div>
  );
}
