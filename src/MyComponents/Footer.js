import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className='Footer'>
         <div className="explore">
            <h1>Explore</h1>
            <a href="#"><h3>Questions</h3></a>
            <a href="#"><h3>Articles</h3></a>
            <a href="#"><h3>Tutorials</h3></a>
         </div>
         <div className="support">
         <h1>Support</h1>
         <a href="#"><h3>FAQ's</h3></a>
         <a href="#"><h3>Help</h3></a>
         <a href="#"><h3>Contact Us</h3></a>
         </div>
         <div className="stay-connected">
            <h1>Stay-Connected</h1>
         </div>
    </div>
  )
}

export default Footer
