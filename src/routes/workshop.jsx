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

    <div className="text-center px-10 grid place-items-center md:min-h-screen md:grid-rows-3">
        <div className="mix-blend-lighten font-primary text-center text-3xl md:text-4xl m-5">
          {event.name}
        </div>
      <div className="text-left grid grid-rows-2 gap-y-2  md:grid md:grid-cols-2 md:h-96  font-mono text-lg">
        <div >
          <CustomCarousel event={event.posters}/>
        </div>
        <div className="flex justify-center">
          <div className="">
            <div className="mb-2">
              <span className="text-3xl font-semibold font-serif underline">
                Description
              </span>
              <div className="mt-4">{event.details}</div>
            </div>
            <div className="text-xl font-bold text-yellow-300 mt-8">Reg.Fee : {event.price}Rs</div>
            <div className="mt-10">
              <div className="font-bold my-2 text-lg">Date : {event.date}</div>
              <div className="underline font-bold text-lg">Coordinators </div>
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

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import Card from "../components/card.jsx"



 function CustomCarousel({event}) {

  const autoplayOption = {
    delay: 4000,
    rootNode: (emblaRoot) => emblaRoot.parentElement
  }
  
  const [emblaRef ] = useEmblaCarousel({ loop: true },[Autoplay(autoplayOption)]);
return(
  <div className='embla embla__viewport md:m-10' ref={emblaRef}>
    <div className='flex flex-row '>
    {event.map((event, key) => (
        <CustomCard src={event}/>
        ))}
    </div>
  </div>
);}


function CustomCard({src}){
  return(

    <div className="embla__slide p-5 w-[500px]" >
      <div
        className="group embla__slide__img h-96 bg-white rounded-lg text-black grid place-content-center"
      >
           <img src={src} className="object-fill w-full h-full"/>
                </div>
    </div>
  
  )
}
