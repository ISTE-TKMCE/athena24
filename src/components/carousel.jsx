import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import Card from "./card.jsx"
import eventsDetails from "../content/events.js"
import  workshopDetails from "../content/workshops.js"



export default function Carousel({event}) {

  const autoplayOption = {
    delay: 4000,
    rootNode: (emblaRoot) => emblaRoot.parentElement
  }
  
  const [emblaRef ] = useEmblaCarousel({ loop: true },[Autoplay(autoplayOption)]);
 if(event) 
{return(
  <div className='embla embla__viewport md:m-10' ref={emblaRef}>
    <div className='flex flex-row '>
    {eventsDetails.map((event) => (
            <Card e eventid={event.id}/>
        ))}
    </div>
  </div>
);}
  else 
{return(<div className='embla embla__viewport md:m-10' ref={emblaRef}>
    <div className='flex flex-row '>
    {workshopDetails.map((event) => (
            <Card eventid={event.id}/>
        ))}
    </div>
  </div>)
}
  
}
