export default function Footer() {
  return(
  <>
    <footer className="h-full w-full bg-my-yellow ">
      <div className="contianer p-2 h-full w-full grid grid-cols-4">
        <div className="img-container p-2 ">
          <img className=" w-44 h-ful " src="src\assets\ISTE original logo black 1 (2).png" alt="" />
        </div>
        <div className="main-container text-black col-span-2 text-center">
          <h2 className="text-3xl font-bold">Contact Us</h2>
        </div>
        <div className="img-container p-2 ">
          <img className=" w-48 h-full float-right " src="src\assets\ISTE original logo black 1(2).png" alt="" />
        </div>
      </div>
    </footer>
  </>
  )
}
