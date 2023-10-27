import React from 'react'

function MenuItem({image, articleName, desc, rating, name}) {
  return (
    <div className='MenuItem'>
        <img src={image} alt="images" />
        <h5>Article's Name: {articleName}</h5>
        <p>Description: {desc}</p>
        <p><i class="fa-solid fa-star"></i>{rating} {name}</p>
    </div>
  )
}

export default MenuItem
