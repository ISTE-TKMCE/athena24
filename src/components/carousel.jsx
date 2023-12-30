import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import Card from "./card.jsx"

const slides = [
  { url: "https://picsum.photos/200" },
  { url: "https://picsum.photos/200" },
  { url: "https://picsum.photos/200" },
  { url: "https://picsum.photos/200" },
  { url: "https://picsum.photos/200" },
  { url: "https://picsum.photos/200" },
  { url: "https://picsum.photos/200" },
  { url: "https://picsum.photos/200" },
  { url: "https://picsum.photos/200" },
  { url: "https://picsum.photos/200" },
 
];


export default function Carousel() {

  const autoplayOption = {
    delay: 4000,
    rootNode: (emblaRoot) => emblaRoot.parentElement
  }
  
  const [emblaRef ] = useEmblaCarousel({ loop: true },[Autoplay(autoplayOption)]);

 return(
  <div className='embla embla__viewport md:m-10' ref={emblaRef}>
    <div className='flex flex-row '>
    {slides.map((slides,index) => (
            <Card key={index}  slides={slides}/>
        ))}
    </div>
  </div>
);
}
