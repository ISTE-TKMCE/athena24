export default function Card({index, slides}) {
  return(
    <div className="embla__slide p-5" key={index}>
      <img
        className="embla__slide__img"
        src={slides.url}
        alt="Your alt text"
        width="300px"
      />
    </div>
  )
}
