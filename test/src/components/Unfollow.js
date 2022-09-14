import React from "react";
import "./Follow.css"

function UnFollow() {
    return (

        <div className="container d-flex justify-content-end pt-20">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            Following
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"> <img classNameName="card-img-top" src="https://cdn-icons-png.flaticon.com/128/4049/4049744.png" alt="" /> <img />Nickname <button type="button" class="btn btn-outline-primary rounded-circle ms-5">Unfollow</button></li>
                            <li className="list-group-item"> <img classNameName="card-img-top" src="https://cdn-icons-png.flaticon.com/128/4049/4049744.png" alt="" /> <img />Nickname <button type="button" class="btn btn-outline-primary rounded-circle ms-5">UnFollow</button></li>
                            <li className="list-group-item"> <img classNameName="card-img-top" src="https://cdn-icons-png.flaticon.com/128/4049/4049744.png" alt="" /> <img />Nickname <button type="button" class="btn btn-outline-primary rounded-circle ms-5">UnFollow</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default UnFollow;
