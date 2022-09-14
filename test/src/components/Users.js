import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Users() {
    return (
        <div className="container-fluid  mt-4 bg-white border">
            <div className="row">
                <div className="col-1 mt-3" id="div1">
                    <div className="mt-3 ms-100" id="div2">CA</div>
                </div>
                <div className="col-5 ">
                    <div class="form-floating mt-4 ">
                        <p> <strong> Jhon Wick</strong>@capAmerica * Apr 2</p>
                        <p>  Prank your friends or imitate celebrities. You can make fake twitter tweets in any creative way you like. Upload profile picture, select username, write message... like this</p>
                    </div>
                </div>
            </div>
            <div className=" col-6 d-flex align-items-center" >
                <FontAwesomeIcon icon={faComment} className="icons" />
                <FontAwesomeIcon icon={faArrowRight} className="icons" /> <p className=" mt-3 md-4"> 12</p>
                <FontAwesomeIcon icon={faHeart} className="icons" />
                <FontAwesomeIcon icon={faArrowUpFromBracket} className="icons" />
            </div>

            {/*  cambio de comentario */}

            <div className="row border-top">
                <div className="col-1 mt-3" id="div1">
                    <div className="mt-3 ms-100" id="div2">JW</div>
                </div>
                <div className="col-5 ">
                    <div class="form-floating mt-4 ">
                        <p> <strong> Jhon Wick</strong>@jhon1123wick * 6h</p>
                        <p>  Build your own Fake Twitter Post now! Check it out @simitator.com</p>
                    </div>
                </div>
            </div>
            <div className=" col-6 d-flex align-items-center" >
                <FontAwesomeIcon icon={faComment} className="icons" />
                <FontAwesomeIcon icon={faArrowRight} className="icons" /> <p className=" mt-3 md-4"> 12</p>
                <FontAwesomeIcon icon={faHeart} className="icons" />
                <FontAwesomeIcon icon={faArrowUpFromBracket} className="icons" />
            </div>
        </div>
    )
}

export default Users