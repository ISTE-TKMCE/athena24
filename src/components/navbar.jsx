export default function NavBar() {
  return(
  <div className="grid place-items-center grid-cols-3 py-10 md:mx-[30vw] font-primary text-2xl">
      <div className="cursor-pointer">Home</div>
      <div className="cursor-pointer">Events</div>
      <div className="cursor-pointer">Workshops</div>
    </div>
  )
}
