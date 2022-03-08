import React from 'react'
import './css/SectionTwo.css'

export default function SectionTwo() {
  return (
<div id="section-two-block">

  <div id="section-two-content">

    <div class='section-two-title'>
    What we offer at Turners Cars Insurance  
    </div>

    <div class='section-two-box-two'>

      <div class='section-two-left'>
        <div id='section-two-top'>
          <img src="Images/icon02.png" alt=''/><br/>
            <div class='section-two-left-title'>
            Mechanical<br/> Breakdown Insurance
            </div>
        </div>
          <div id='section-two-bottom-left'>
            <div id='section-two-bottom-left-text'>
              This is and insurance policy that<br/>
              protects you from unexpected costs<br/>
              in the event that your car has a<br/>
              sudden and unforseen break-down.<br/>
            </div>
            <div id='section-two-box-two-button'>
            Find out more
            </div>
          </div>
      </div>

      <div class='section-two-right'>
        <div id='section-two-top'>
          <img src="Images/icon01.png" class='icon01' alt=''/><br/>
            <div class='section-two-left-title'>
            Third Party, Fire<br/> Accident & Theft
            </div>
        </div>
          <div id='section-two-bottom-left'>
            <div id='section-two-bottom-left-text'>
            Cover for your car if it is damaged by<br/>
            fire, stolen, or you accidentally<br/>
            damage someone else's property<br/>
            with your car.<br/>
            </div>

            <div id='section-two-box-two-button'>
            Find out more
            </div>
        </div>
      </div>
    </div>

    {/* ========== */}

    <div id='section-two-box-three'>
    
    <span class='section-two-title'>Compare cover</span>

      <div id='section-two-box-three-content'>

      <table id="compare-cover-plan">
        <tr>
          <th class='column-one'></th>
          <th class='column-two'>Mechanical<br/>Breakdown Insurance</th>
          <th class='column-two'>Mechanical<br/>Breakdown Insurance</th>
        </tr>
        <tr>
          <td class='info-column'>Mechanical and Electrical breakdown</td>
          <td class='tick-column'>tick icon</td>
          <td class='tick-column'>tick icon</td>
        </tr>
        <tr>
          <td class='info-column'>Mechanical and Electrical breakdown</td>
          <td class='tick-column'>tick icon</td>
          <td class='tick-column'>tick icon</td>
        </tr>
        <tr>
          <td class='info-column'>Mechanical and Electrical breakdown</td>
          <td class='tick-column'>tick icon</td>
          <td class='tick-column'>tick icon</td>
        </tr>
        <tr>
          <td class='info-column'>Mechanical and Electrical breakdown</td>
          <td class='tick-column'>tick icon</td>
          <td class='tick-column'>tick icon</td>
        </tr>
        <tr>
          <td class='info-column'>Mechanical and Electrical breakdown</td>
          <td class='tick-column'>tick icon</td>
          <td class='tick-column'>tick icon</td>
        </tr>
        <tr>
          <td class='info-column'>Mechanical and Electrical breakdown</td>
          <td class='tick-column'>tick icon</td>
          <td class='tick-column'>tick icon</td>
        </tr>
        <tr>
          <td class='info-column'>Mechanical and Electrical breakdown</td>
          <td class='tick-column'>tick icon</td>
          <td class='tick-column'>tick icon</td>
        </tr>
        <tr>
          <td class='bottom-column'></td>
          <td class='bottom-column'><div class='get-a-quote-button'>Get a quote!</div></td>
          <td class='bottom-column'><div class='get-a-quote-button'>Get a quote</div></td>
        </tr>
      </table>

      </div>

    </div>  

  </div>

</div>
  )
}
