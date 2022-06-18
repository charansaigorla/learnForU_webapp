import React from 'react'
import { NavLink } from 'react-router-dom'

export default function List() {
  return (
    
    <>
    <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
  <div className="container">
  <a className="navbar-brand" href="#">
        LearnForU
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
           <NavLink to="/"><h4 style={{ color: "#FFFFFF" ,paddingRight: 20}} className="w3-bar-item w3-button">Home</h4></NavLink>
             
          </li>

        <li className="nav-item active">
           <NavLink to="/about"><h4 style={{ color: "#FFFFFF" ,paddingRight: 20}} className="w3-bar-item w3-button">About us</h4></NavLink>
             
          </li>
          <li className="nav-item active">
           <NavLink to="/signin"><h4 style={{ color: "#FFFFFF" ,paddingRight: 20}} className="w3-bar-item w3-button">SignIn</h4></NavLink>
             
          </li>
          <li className="nav-item active">
           <NavLink to="/signup"><h4 style={{ color: "#FFFFFF" ,paddingRight: 20}} className="w3-bar-item w3-button">Signup</h4></NavLink>
             
          </li>
        </ul>
      </div>
  </div>
   
  </nav>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
    </>
    </>
  )
}
