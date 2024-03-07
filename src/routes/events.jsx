import eventsDetails from "../content/events.js"
import Card from "../components/card.jsx"
import CustomH from "../components/customh.jsx"
export default function Events() {
  const eventdata_d1 = eventsDetails.filter((e)=> {
    return e.date == "19-01-2024"
  })
  return(
    <div className="w-screen  grid">
      <CustomH name="Events" type="1"/>
      <div className='grid justify-items-center grid-cols-1 md:grid-cols-3 '>
    {eventsDetails.map((event) => (
            <Card e eventid={event.id}/>
        ))}
    </div>
      
    </div>
  )
  
}
