export default function Footer() {
  return(
  <>
    <footer className="h-full w-full bg-my-yellow ">
      <div className="contianer p-2 h-full w-full grid grid-cols-4">
        <div className="img-container p-2 ">
          <img className=" w-44 h-ful " src="src\assets\ISTE original logo black 1 (2).png" alt="" />
        </div>
        <div className="main-container text-black col-span-2 text-center">
          <h2 className="text-3xl font-bold">Contact Us</h2><br />
          <div className="flex justify-between">
            <a href="#"><button className="p-3 rounded"><img className="w-10 h-10" src="src\assets\ig.png"></img></button></a>
            <a href="#"><button className="p-3 rounded"><img className="w-10 h-10" src="src\assets\x new(1).jpg"></img></button></a>
            <a href="#"><button className="p-3 rounded"><img className="w-10 h-10" src="src\assets\linked.png"></img></button></a>
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
          <img className=" w-48 h-full float-right " src="src\assets\ISTE original logo black 1(2).png" alt="" />
        </div>
      </div>
    </footer>
  </>
  )
}
