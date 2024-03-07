import eventsDetails from "../content/events.js"
import {Link } from "react-router-dom"
import {useEffect, useState} from "react";
import workshopDetails from "../content/workshops.js"
import talkshowDetails from "../content/talkshow.js"

export default function Card({eventid, e,w,t}) {
    if(e){
const event = eventsDetails.find(searchEvent)
  function searchEvent(e){
    return e.id == eventid;
  }
  //console.log(event)

  return(
    <div className="embla__slide p-5 w-[400px]" >
      <div
        className="group embla__slide__img h-96 bg-white rounded-lg text-black grid place-content-center"
      >
          {event.link ? <img src={event.posters[0]} className="object-fill w-full h-full"/>
 : <div className="text-xl font-primary">Coming Soon</div>}
          {event.link ?<Link to={'/event/'+ event.id} className="absolute bottom-10 left-28 border border-yellow-300 w-36 rounded-lg text-center drop-shadow-lg bg-yellow-300 font-primary text-xl px-2 py-1">Register</Link>
 : null}
                </div>
    </div>
  ) }
  else if(w){
const event = workshopDetails.find(searchEvent)
  function searchEvent(e){
    return e.id == eventid;
  }
  //console.log(event)
return(
    <div className="embla__slide p-5 w-[400px]" >
      <div
        className="group embla__slide__img h-96 bg-white rounded-lg text-black grid place-content-center"
      >
          {event.link ? <img src={event.posters[0]} className="object-fill w-full h-full"/>
 : <div className="text-xl font-primary">Coming Soon</div>}
          {event.link ?<Link to={'/workshop/'+ event.id} className="absolute bottom-10 left-28 border border-yellow-300 w-36 rounded-lg text-center drop-shadow-lg bg-yellow-300 font-primary text-xl px-2 py-1">Register</Link>
 : null}
                </div>
    </div>
  )
  } else if(t){
    const event = talkshowDetails.find(searchEvent)
    function searchEvent(e){
    return e.id == eventid;
  }
  //console.log(event)
return(
    <div className="embla__slide p-5 w-[400px]" >
      <div
        className="group embla__slide__img h-96 bg-white rounded-lg text-black grid place-content-center"
      >
          {event.link ? <img src={event.posters[0]} className="object-fill w-full h-full"/>
 : <div className="text-xl font-primary">Coming Soon</div>}
          {event.link ?<Link to={'/workshop/'+ event.id} className="absolute bottom-10 left-28 border border-yellow-300 w-36 rounded-lg text-center drop-shadow-lg bg-yellow-300 font-primary text-xl px-2 py-1">Register</Link>
 : null}
                </div>
    </div>
  )
  }
}
