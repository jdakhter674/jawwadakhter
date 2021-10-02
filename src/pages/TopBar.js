import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'


const TopBar = () => {
    return (
        <div className="main_nav">
            
        <nav className="navbar navbar-expand-lg navbar-dark ">
        <a className="navbar-brand animate__animated animate__bounce animate__delay-2s" href="#" style={{textTransform:'uppercase'}}>Jawwad Akhter</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/"  className="Link_pages">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </Link>
            </li>
            <li className="nav-item ">
                <Link to="/project" className="Link_pages">
              <a className="nav-link links" href="#">Project </a>
                </Link>
            </li>
            <li className="nav-item ">
                <Link to="/about" className="Link_pages">
              <a className="nav-link links" href="#">About Me</a>
                </Link>
            </li>
           
            
          </ul>
        </div>
      </nav>
        </div>
    )
}

export default TopBar
