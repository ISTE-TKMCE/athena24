import {Link } from "react-router-dom"
import poster from "../assets/ticket wp.png"
export default function DelegatePass(){
  return(
  <div className="grid place-items-center min-h-[90vh]">
      <div className="grid justify-items-center gap-5">
        <img src={poster} className="px-5 md:w-[500px]"/>
        <div className="text-xl text-center px-10 md:px-20" >Delegate passes are available for 400/-. The pass can be used for up to five events per delegate as well as talk sessions. Workshops are not included in this.</div>
      <Link to={"https://www.yepdesk.com/embed/buy-tickets/65d5ba7cc9e77c000171d68d/private/ch3mnatd0l"}><div className="my-5 mb-10 bg-yellow-300 rounded-xl text-black font-primary w-52 px-5 py-2 text-xl text-center">Get Pass</div></Link>
      </div>
    </div>
  )
}
