import {Link } from "react-router-dom"
import poster from "../assets/ticket wp.png"
export default function DelegatePass(){
  return(
  <div className="grid place-items-center min-h-screen">
      <div>
        <img src={poster} className="px-5"/>
      </div>
      <Link to={"https://www.yepdesk.com/embed/buy-tickets/65d5ba7cc9e77c000171d68d/private/ch3mnatd0l"}><div className="my-5 mb-10 bg-yellow-300 rounded-xl text-black font-primary w-52 px-5 py-2 text-xl text-center">Get Pass</div></Link>
    </div>
  )
}
