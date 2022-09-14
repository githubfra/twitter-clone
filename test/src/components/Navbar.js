import React from "react";
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg d-flex bg-white"  >
            <div className="container-fluid d-flex">
                <a className="navbar-brand padding-right-40px" href="/">Twitter Clone</a>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#"></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"></a>
                    </li>
                    <li className="nav-item">
                        <p className="nav-brand" style={{fontSize:"30px"}}> A </p>
                    </li>
                </ul>
            </div>
        </nav>
        
    )
}



export default Navbar