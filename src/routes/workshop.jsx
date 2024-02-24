import { useLocation, Link } from "react-router-dom";
import workshopDetails from "../content/workshops.js";
import CustomH from "../components/customh.jsx";


export default function WorkshopPage() {
  const location = useLocation();
  const eventid = location.pathname.split("/");
  let event = workshopDetails.filter((e) => {
    return e.id == eventid[2];
  });
  event = event[0];
  //console.log(event)
  return (

    <div className="text-center px-10 grid place-items-center md:h-screen md:grid-rows-3">
        <div className="mix-blend-lighten font-primary text-center text-3xl md:text-4xl m-5">
          {event.name}
        </div>
      <div className="text-left grid grid-rows-2 gap-y-2 h-1/2 md:grid md:grid-cols-2 md:h-96 font-mono text-lg">
        <div className="flex justify-center ">
          <img className="w-64" src={event.posters[0]} />
        </div>
        <div className="flex justify-center">
          <div className="">
            <div className="mb-2">
              <span className="text-3xl font-semibold font-serif underline">
                Description
              </span>
              <div className="mt-4">{event.details}</div>
            </div>
            <div className="mt-14">
              <div className="font-bold">Date : {event.date}</div>
              <div className="underline">Coordinators </div>
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
      <Link to={event.link}><div className="my-5 mb-10 bg-yellow-300 rounded-xl text-black font-primary w-52 px-5 py-2 text-xl text-center">Register</div></Link>
    </div>
  );
}
