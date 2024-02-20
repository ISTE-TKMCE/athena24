import { Link } from "react-router-dom"
export default function NavBar() {
  return(
  <div className="grid place-items-center grid-cols-3 py-10 md:mx-[30vw] font-primary text-2xl">
      <Link to="/" className="text-white">Home</Link>
      <Link to="/events" className="text-white">Events</Link>
      <Link to="/workshops" className="text-white">Workshops</Link>
    </div>
  )
}
