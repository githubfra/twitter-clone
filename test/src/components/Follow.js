import React from "react";
import "./Follow.css"

function Follow() {
  return (

    <div className="container d-flex justify-content-end">
    <div className="row"> 
    <div className="col-6">
    <><div className="card p-20">
      <div className="card-header">
        Who To Follow
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"> <img classNameName="card-img-top" src="https://cdn-icons-png.flaticon.com/128/4049/4049744.png" alt="" /> <img />nickname <button type="button" class="btn btn-outline-primary rounded-circle">Follow</button></li>
        <li className="list-group-item"> <img classNameName="card-img-top" src="https://cdn-icons-png.flaticon.com/128/4049/4049744.png" alt="" /> <img />nickname <button type="button" class="btn btn-outline-primary rounded-circle">Follow</button></li>
        <li className="list-group-item"><img classNameName="card-img-top" src="https://cdn-icons-png.flaticon.com/128/4049/4049744.png" alt="" /> <img />nickname <button type="button" class="btn btn-outline-primary rounded-circle">Follow</button></li>
      </ul>
    </div><div className="card">
        <div className="card-header">
          Following
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <img classNameName="card-img-top" src="https://cdn-icons-png.flaticon.com/128/4049/4049744.png" alt="" /> <img />nickname <button type="button" class="btn btn-outline-primary rounded-circle">Unfollow</button></li>
          <li className="list-group-item"> <img classNameName="card-img-top" src="https://cdn-icons-png.flaticon.com/128/4049/4049744.png" alt="" /> <img />nickname <button type="button" class="btn btn-outline-primary rounded-circle">UnFollow</button></li>
        </ul>
      </div></>
     </div> 
     </div>
     </div>

      );
}


      export default Follow;