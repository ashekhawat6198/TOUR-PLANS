import { useState } from "react";

function CARDS({id,name,info,image,price,removeHandler}){

   const [readMore,setReadmore]=useState(false);
  const description=readMore ? info : `${info.substring(0,200)}...`;

  function readmorehandler(){
    setReadmore(!readMore);
  }
return(
    <div className="card">
     
     <img src={image} className="image"></img>
     <div className="tour-details">
      <div className="tour-price">{price}</div>
      <div className="tour-name">{name}</div>
      <div className="desc">
        {description}
        <span className="readMore" onClick={readmorehandler}>
          {readMore ? 'Read Less' : 'Read More' }
        </span>
      </div>
      <button className="btn" onClick={function(){removeHandler(id)}}>Not Interested</button>
     </div>


    </div>
 

);


}


export default CARDS;