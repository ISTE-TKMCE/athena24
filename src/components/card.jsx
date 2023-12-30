import eventsDetails from "../content/events.js"
export default function Card({eventid}) {
  const event = eventsDetails.find((e)=> e.eventid == eventid)
  return(
    <div className="embla__slide p-5 w-[400px]" >
      <div
        className="embla__slide__img h-96 bg-white rounded-lg text-black"
      >
        hello {event.name}
      </div>
    </div>
  )
}
