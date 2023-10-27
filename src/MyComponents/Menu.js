import React from 'react'
import {MenuData} from "./MenuData"
import MenuItem from './MenuItem'
import "./menu.css"

function Menu() {
  return (
    <div>
        <div className="menu">
            <h1 className="menuTitle">Featured Article's </h1>
            <div className="MenuList">
                {MenuData.map((menu, key) =>{
                    return (
                        <MenuItem 
                        key={key}
                        image={menu.image}
                        articleName = {menu.articleName}
                        desc = {menu.desc}
                        rating = {menu.rating}
                        name = {menu.name} 
                    />);
                })}
            </div>
        </div>
    </div>
  )
}

export default Menu
    