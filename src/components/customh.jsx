import lines from "../assets/line footer 2.png"
import linef from "../assets/line footer 1.png"
import line1 from "../assets/line before.png"
import line2 from "../assets/line after.png"
import underline from "../assets/underline.png"
export default function CustomH({name,type}) {
  if(type == 1){
    return(
        <div className="mix-blend-lighten font-primary text-center text-3xl md:text-4xl m-5">
          <img className="h-1 md:w-2/5 w-2/12 inline-block m-4" src={line1} alt="" />
          {name}
          <img className="h-1 md:w-2/5 w-2/12 inline-block m-4" src={line2} alt="" />
        </div>
    ) 
  }else if(type == 2){
    return(
      <div className="font-primary text-white text-center text-3xl md:text-4xl  m-10">
        <img className="h-1 md:w-2/5 w-2/12 inline-block m-4" src={linef} alt="" />
        {name}
        <img className="h-1 md:w-2/5 w-2/12 inline-block m-4" src={lines} alt="" />
      </div>
    )
  }else{
    return(
      <div className="font-primary text-white text-center text-3xl md:text-4xl  m-10">
        {/* <img className="h-1 md:w-2/5 w-5/12 inline-block -mb-5" src={underline} alt="" /> */}
        <h2 className="text-3xl text-center font-primary md:text-4xl ">{name}</h2>
        <img className="h-1 md:w-3/5 w-6/12 inline-block -mt-8" src={underline} alt="" />
      </div>
    )
  }


}
