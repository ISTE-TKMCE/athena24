import CustomH from "../components/customh.jsx"
import scheduleDetails from "../content/schedule.js"
export default function Schedule() {
  return(
  <div className="grid place-items-center">
    <CustomH name="Schedule" type="1"/>
      <div>
        {scheduleDetails.map((e)=> {
          return(<div className="grid grid-cols-3 m-5 gap-2">
            <div className="grid place-content-center bg-yellow-300 text-black min-h-32">
              <div className="text-3xl font-bold">{e.date.split("-")[0]}</div> 
              <div className="font-bold">Feb</div>
            </div>
            <div className="col-span-2 m-3">
              <div className="text-2xl font-bold">{e.name}</div>
              <div className="text-lg">{e.des}</div>
              <div className="bg-blue-500 w-16 text-center rounded-xl px-1">{e.time}</div>
            </div>
          </div>)
        })}

      </div>
   </div>
  )
    
}
