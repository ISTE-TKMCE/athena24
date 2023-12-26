import useEmblaCarousel from "embla-carousel-react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
 return(
  <div className='embla embla__viewport' ref={emblaRef}>
    <div className='flex flex-row '>
    {slides.map((slides,index) => (
            <div className="embla__slide " key={index}>
              <div className="">
                <span>{index + 1}</span>
              </div>
              <img
                className="embla__slide__img"
                src={slides.url}
                alt="Your alt text"
              />
            </div>
          ))}
    </div>
  </div>
);
}
