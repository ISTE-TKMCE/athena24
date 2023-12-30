import lines from "../assets/line footer 2.png"
import linef from "../assets/line footer 1.png"
import line1 from "../assets/line before.png"
import line2 from "../assets/line after.png"
export default function CustomH({name,type}) {
  if(type == 1){
    return(
        <div className="font-primary text-center text-4xl m-5">
          <img className="h-1 w-2/5 inline-block m-4" src={line1} alt="" />
          {name}
          <img className="h-1 w-2/5 inline-block m-4" src={line2} alt="" />
        </div>
    ) 
  }else{
    return(
      <div className="font-primary text-black text-center text-4xl  mb-4">
        <img className="h-1 w-2/5 inline-block m-4" src={linef} alt="" />
        {name}
        <img className="h-1 w-2/5 inline-block m-4" src={lines} alt="" />
      </div>
    )
  }


}
