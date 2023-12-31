import eventsDetails from "../content/events.js"
import {Link } from "react-router-dom"
export default function Card({eventid}) {
  const event = eventsDetails.find((e)=> e.id == eventid)
  return(
    <div className="embla__slide p-5 w-[400px]" >
      <div
        className="group embla__slide__img h-96 bg-white rounded-lg text-black grid place-content-center"
      >
        <img src={event.posters[0]} className="object-fill w-full h-full"/>
        <Link to={'/event/'+ event.id} className="absolute bottom-10 left-28 border border-yellow-300 w-36 rounded-lg text-center drop-shadow-lg bg-yellow-300 font-primary text-xl px-2 py-1">Register</Link>
      </div>
    </div>
  )
}
