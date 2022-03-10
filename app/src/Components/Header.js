import React from 'react'
import './css/Header.css'

export default function Header() {
  return (
    <div id="header-block">

        <div id="header-content">
            
            <div id='left-box'>
              <img src="Images/turners-logo-grey-header.png" alt=''/> 
              <span class='link'>Insurance</span>
              <span class='link'>Claims</span>
              <span class='link'>About us</span>
            </div>

            <div id='right-box'>
              <div class='phone-icon'></div>
              <div class='phone-link'><img src="Images/phone-icon.png" alt=''  />0800 887 637</div>
              <div><button class='red-button'>login</button></div>
            </div>

        </div>

    </div>
  )
}
