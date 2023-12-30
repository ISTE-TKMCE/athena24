export default function CustomH({name,type}) {
  if(type == 1){
    return(
        <div className="font-primary text-center text-4xl m-5">
          <img className="h-1 w-2/5 inline-block m-4" src="src\assets\line before.png" alt="" />
          {name}
          <img className="h-1 w-2/5 inline-block m-4" src="src\assets\line after.png" alt="" />
        </div>
    ) 
  }else{
    return(
      <div className="font-primary text-black text-center text-4xl  mb-4">
        <img className="h-1 w-2/5 inline-block m-4" src="src\assets\line footer 1.png" alt="" />
        {name}
        <img className="h-1 w-2/5 inline-block m-4" src="src\assets\line footer 2.png" alt="" />
      </div>
    )
  }


}
