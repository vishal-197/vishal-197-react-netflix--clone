import React, { useState } from 'react'
import logo from './img/logo (1).jpeg'
import logo2 from './img/logo (2).jpeg'
import './header.css'

function Header() {
    const [isdark, setisDark] = useState("");

    window.onscroll = () =>{
        setisDark(window.scrollY > 150 ? true : false)
    }


  return (

    <div className= {isdark ? "hreader_row dark": "hreader_row"}>
        <img src={logo} ></img>
        <img src={logo2} ></img>
    </div>
     
  )
}

export default Header