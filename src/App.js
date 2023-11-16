import React, { useState } from "react";

import data from './data';
import Tours from "./Components/Tours";

const App = () => {

  const[tour,setTour]=useState(data);

  function cardRemoveHandler(id){
     const newTours=tour.filter(tour=>id!==tour.id);
     setTour(newTours);
  }

  if(tour.length===0){
    
     return(
<div className="refresh">
      <div className="refresh-head">No tours left</div>
      <button className="refresh-btn" onClick={function(){setTour(data)}}>Refresh</button>
    </div>
     );
     
    
    
  }

return(

  <Tours tours={tour} removeHandler={cardRemoveHandler}></Tours>

);
  
  
};

export default App;
