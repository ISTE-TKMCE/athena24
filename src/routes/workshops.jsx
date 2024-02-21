import eventsDetails from "../content/events.js"
import Card from "../components/card.jsx"
import CustomH from "../components/customh.jsx"
export default function Events() {
  const eventdata_d1 = eventsDetails.filter((e)=> {
    return e.date == "19-01-2024"
  })
  return(
    <div className=" w-screen ">
      <CustomH name="Workshops" type="1"/>
      <div className='grid grid-cols-1 md:grid-cols-3 px-8'>
    {eventsDetails.map((event) => (
            <Card eventid={event.id}/>
        ))}
    </div>
      
    </div>
  )
  
}
