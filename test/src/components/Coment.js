import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';



function Coment() {
  return (

    <div className="container-fluid d-flex mt-5 bg-white border">
      <div className="col-1 mt-3" id="div1">
       <div className="mt-3 ms-100" id="div6">CU</div> 
      </div>
      <div className="col-10 ">
        <div class="form-floating mt-4">
          <textarea class="form-control bg-light" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label for="floatingTextarea">What's happening...</label>
        </div>
        <div className=" d-flex justify-content-start mt-4">
          <FontAwesomeIcon icon={faImage} />
        </div>
        <div className="d-flex justify-content-end">
          <p className=" mt-1 md-4" id="parrafo1"> 140</p>
          <button type="button" class="btn btn-primary mt-1 ms-3 mb-3">Tweet</button>
        </div>
      </div>
      
    </div>
    
  )
}

export default Coment