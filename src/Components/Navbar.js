import React from 'react'
import {Link} from 'react-router-dom'
//import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://nareshkakkad.github.io/nkreact/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link" to="https://nareshkakkad.github.io/nkreact/"> Home</Link> </li>
        <li className="nav-item"> <Link className="nav-link" to="https://nareshkakkad.github.io/nkreact/about">About</Link>  </li>
        <li className="nav-item"> <Link className="nav-link" to="https://nareshkakkad.github.io/nkreact/services">Services</Link>   </li>  
        <li className="nav-item"> <Link className="nav-link" to="https://nareshkakkad.github.io/nkreact/form">Form</Link>   </li>  
        <li className="nav-item"> <Link className="nav-link" to="https://nareshkakkad.github.io/nkreact/formlist">Form List</Link>   </li>  
      </ul>
      
      {props.searchBar ?<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>: "no search bar"}
    </div>
  </div>
</nav>
  )
}

// Navbar.defaultProps={
// title:"NK title",
// searchBar:true

// }

// Navbar.PropType={
//     title: PropTypes.string,
//     searchBar: PropTypes.bool.isRequired
//     }
