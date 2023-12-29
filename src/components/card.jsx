export default function Card({slides}) {
  return(
    <div className="embla__slide p-5" >
      <img
        className="embla__slide__img"
        src={slides.url}
        alt="Your alt text"
        width="300px"
      />
    </div>
  )
}
