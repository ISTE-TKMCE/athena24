import eventsDetais from "../content/events.js"
import Card from "../components/card.jsx"
import CustomH from "../components/customh.jsx"
export default function Events() {
  const eventdata_d1 = eventsDetais.filter((e)=> {
    return e.date == "19-01-2024"
  })
  console.log(eventdata_d1)
  return(
    <div className="h-screen">
      <CustomH name="Events" type="1"/>
      
    </div>
  )
  
}
