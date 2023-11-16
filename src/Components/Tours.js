

import CARDS from "./Cards";

function Tours({tours,removeHandler}){

return(

  <div className="wrapper">

    <div className="head-box">
      <h1 className="top-heading">Plan with Aman</h1>
    </div>

    <div className="cards-container">
      
      {
        tours.map(function(tour){
          return <CARDS key={tour.id} {...tour} removeHandler={removeHandler}></CARDS>
        })
      }


    </div>


  </div>

);


}

export default Tours;