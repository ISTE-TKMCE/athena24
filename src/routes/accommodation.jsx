import {Link } from "react-router-dom"
import poster from "../assets/ticket wp.png"
import Blur from "../components/blur.jsx"
export default function Accommodation(){
 const isMobile = window.innerWidth <= 480;

  // Set coordinates based on the device type
  const blur1Coordinates = isMobile
    ? { position: "absolute", top: "30%", left: "-15%" }
    : { position: "absolute", top: "20%", left: "-10%"};
const blur2Coordinates = isMobile
    ? { position: "absolute", top: "10%", left: "30%" }
    : { position: "absolute", top: "10%", left: "80%"};



  return(
  <div className="grid place-items-center min-h-[90vh]">
      <Blur coordinates={blur1Coordinates} />
      <Blur class="hidden md:block" coordinates={blur2Coordinates} />
      <div className=" relative grid justify-items-center gap-5">
        <div className="text-xl text-center px-10 md:px-20" >The delegate pass covers all students, with an additional charge for those opting for food and accommodation. </div>
        <div className="text-xl text-center px-10 md:px-20" >For non-fasting students, the fee is ₹180, and for fasting students, it is ₹200. </div>
      <Link to={"https://www.yepdesk.com/athena-accommodation-and-food/private/no2hvhtp2i"}><div className="my-5 mb-10 bg-yellow-300 rounded-xl text-black font-primary w-52 px-5 py-2 text-xl text-center">Purchase</div></Link>
      </div>
    </div>
  )
}
