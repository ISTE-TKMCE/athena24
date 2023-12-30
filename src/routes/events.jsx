import eventsDetais from "../content/events.js"
import Card from "../components/card.jsx"
import CustomH from "../components/customh.jsx"
export default function Events() {
  const eventdata_d1 = eventsDetais.filter((e)=> {
    return e.date == "19-01-2024"
  })
  return(
    <div><CustomH name="Events" type="1"/>
      <div className="grid place-items-center">
        <h2>Day 1</h2>
      <div className="grid md:grid-cols-3  ">{eventdata_d1.map((event)=>{
        return(
        <Card eventid={event.eventid}/> 
        )
      })}</div>
      </div>
      <div className="grid place-items-center">
        <h2>Day 2</h2>
      <div className="grid md:grid-cols-3  ">{eventdata_d1.map((event)=>{
        return(
        <Card eventid={event.eventid}/> 
        )
      })}</div>
      </div>
      
    </div>
  )
  
}
