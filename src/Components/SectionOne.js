import React from 'react'
import './css/SectionOne.css'

export default function SectionOne() {
  return (
<div id="section-one-block">

<div id="section-one-content">
    
    <div id="section-one-left">
      <div class='section-one-blue'>Car Insurance</div>
      <div class='section-one-white'>It's time to find an affordable insurance solution.</div>
    </div>

            <div id="section-one-right">
      <div id='registration-box'>
        <div class='top-blue'>
        </div>
        <div id='bottom-white' class='bottom-white'>
          <div>
    <input type='text' id='registration-input-box' placeholder='Enter your registration number here'/>
          <button class='spacer'>Get a Quote</button>
          <button class='buy-online'>Buy Online</button>
          </div>
        </div>
      </div>
    </div>

</div>

</div>
  )
}
