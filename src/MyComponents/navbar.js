import React from 'react'
import "./navbar.css"

function navbar() {
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand">DEV@DEAKIN</a>
            <form className="search-bar d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <div className="buttons">
                <button href="#">Post</button>
                <button href="#">Login</button>
            </div>
        </div>
        </nav>
    </div>
    );
}
        
        
export default navbar