import { useLocation } from "react-router-dom";
import eventDetails from "../content/events.js";
import CustomH from "../components/customh.jsx";
export default function EventPage() {
  const location = useLocation();
  const eventid = location.pathname.split("/");
  let event = eventDetails.filter((e) => {
    return e.id == eventid[2];
  });
  event = event[0];
  //console.log(event)
  return (
    <div>
      <CustomH name={event.name} type="1" />
      <div className="grid md:grid-cols-2 h-96 font-mono text-lg">
        <div className="flex justify-center ">
          <img className="w-64" src={event.posters[0]} />
        </div>
        <div className="flex justify-center">
          <div className="w-80">
            <div className="mb-2">
              <span className="text-3xl font-semibold font-serif ml-16">
                Description
              </span>
              <div className="mt-4">{event.details}</div>
            </div>
            <div className="mt-14">
              <div>Date : {event.date}</div>
              <div>Coordinators :</div>
              <div>
                {event.coordinators[0].name}: {event.coordinators[0].phone}
              </div>
              <div>
                {event.coordinators[1].name}: {event.coordinators[1].phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
