import React from 'react'
import './css/Header.css'

export default function Header() {
  return (
    <div id="header-block">

        <div id="header-content">
            
            <div id='left-box'>
              <img src="Images/small-turners-logo.png" alt=''/> 
              <span class='link'>Insurance</span>
              <span class='link'>Claims</span>
              <span class='link'>About us</span>
            </div>

            <div id='right-box'>
              
              <span class='link'>icon</span>
              <span class='link'>0800 887 637</span>
              <a href='#'><span class='red-button'>login</span></a>
            </div>

        </div>

    </div>
  )
}
