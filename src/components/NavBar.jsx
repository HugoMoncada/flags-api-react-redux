import React from 'react'
import {Link} from "react-router-dom"

const NavBar = () => {
     return (
              <nav className="navbar bg-white justify-content-between border-bottom border-dark mb-5">
                  <div className="container">
                    
                  <Link className="navbar-brand py-3" to="/"><h3><strong>Where in the world?</strong></h3></Link>
                    
                  {/* <button className="btn btn-outline-dark my-3 my-sm-0 mr-3" type="submit">
                    <svg width="1em" height="1em" viewBox="0 0 20 20" className="bi bi-moon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"/>
                    </svg>
                    Dark mode
                  </button> */}
                </div>
             </nav>
     )
}

export default NavBar
