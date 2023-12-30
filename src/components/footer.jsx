import CustomH from "../components/customh.jsx"
import athenalogo from "../assets/ISTE original logo black 1 (2).png"
import istelogo from "../assets/ISTE original logo black 1(2).png"
import ig from "../assets/ig.png"
import x from "../assets/x new(1).jpg"
import linkedin from "../assets/linked.png"
export default function Footer() {
  return(
  <>
    <footer className="h-full w-full bg-my-yellow p-2">
      <CustomH name ="Contact us" type="2" />
      <div className="contianer p-2 h-full w-full grid grid-cols-4">
        <div className="img-container p-2 ">
          <img className=" w-44 h-full " src={athenalogo} alt="" />
        </div>
        <div className="main-container text-black col-span-2 text-center">
          <div className="flex justify-between">
            <a href="#"><button className="p-3 rounded"><img className="w-10 h-10" src={ig}></img></button></a>
            <a href="#"><button className="p-3 rounded"><img className="w-10 h-10" src={x}></img></button></a>
            <a href="#"><button className="p-3 rounded"><img className="w-10 h-10" src={linkedin}></img></button></a>
          </div><br /><br />
          <div className="flex justify-between">
            <a href="#"><span className=" text-xs text-gray-600 hover:text-gray-950">Terms Of Use</span></a>
            <a href="#"><span className=" text-xs text-gray-600 hover:text-gray-950">Privacy Policy</span></a>
            <a href="#"><span className=" text-xs text-gray-600 hover:text-gray-950">Copyrights</span></a>
            <a href="#"><span className=" text-xs text-gray-600 hover:text-gray-950">About Athena</span></a>
            <a href="#"><span className=" text-xs text-gray-600 hover:text-gray-950">Get Help</span></a>
            <a href="#"><span className=" text-xs text-gray-600 hover:text-gray-950">Address</span></a>
          </div>
        </div>
        <div className="img-container p-2 ">
          <img className=" w-48 h-full float-right " src={istelogo} alt="" />
        </div>
      </div>
    </footer>
  </>
  )
}
