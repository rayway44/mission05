import React from 'react'
import './css/SectionTwo.css'

export default function SectionTwo() {
  return (
<div id="section-two-block">

  <div id="section-two-content">

        <div id="product-solutions">
        Product Solutions
        </div>

        <div class='section-two-title'>
        What we offer at Turners Cars Insurance  
        </div>

        <div class='section-two-box-two'>

          <div class='section-two-left'>
            <div id='left-background'>
              <div id='section-two-top'>
                  <img src="Images/circle-icon01.png" alt=''/><br/>
                  <div class='section-two-left-title'>
                  Mechanical<br/> Breakdown Insurance
                  </div>
              </div>
              
                <div id='section-two-bottom-left'>
                  <div id='section-two-bottom-left-text'>
                    This is and insurance policy that
                    protects you from unexpected costs
                    in the event that your car has a
                    sudden and unforseen break-down.
                  </div>
                  <div id='section-two-read-more'>
                    <div id='section-two-read-more-format'>
                      <a href class="read-more">Read more</a> <img src="Images/right-arrow.png" alt='' />
                    </div>
                  </div>
                </div>
              </div>
          </div>


          <div class='section-two-right'>
            
            <div id='left-background'>
              <div id='section-two-top'>
                  <img src="Images/circle-icon02.png" alt=''/><br/>
                  <div class='section-two-left-title'>
                  Third Party, Fire<br/>Accident & Theft
                  </div>
              </div>
              
                <div id='section-two-bottom-left'>
                  <div id='section-two-bottom-left-text'>
                    Cover for your car if it is damaged
                    by fire, stolen, or you accidentally damage
                    someone else's property with your car.
                  </div>
                  <div id='section-two-read-more'>
                    <div id='section-two-read-more-format'>
                      <a href class="read-more">Read more</a> <img src="Images/right-arrow.png" alt='' />
                    </div>
                  </div>
                </div>
              </div>
          </div>

          
        </div>

    {/* ========== */}

    <div id='section-two-box-three'>
      
        <div id="product-solutions">
        Compare cover
        </div>

        <div class='section-two-title'>
        What we offer at Turners Cars Insurance  
        </div>

      <div id='section-two-box-three-content'>
        <div id='table-holder'>
        
          <table id="compare-cover-plan">
            <tr>
              <th class='column-one'></th>
              <th class='column-two'>Mechanical<br/>Breakdown Insurance</th>
              <th class='column-two'>Mechanical<br/>Breakdown Insurance</th>
            </tr>
            <tr>
              <td class='info-column'>Mechanical and Electrical breakdown</td>
              <td class='tick-column'><img src="Images/tick-icon.png" alt='' /></td>
              <td class='tick-column'><img src="Images/tick-icon.png" alt='' /></td>
            </tr>
            <tr>
              <td class='info-column'>AA Roadservice & 24/7 breakdown assistance</td>
              <td class='tick-column'><img src="Images/tick-icon.png" alt='' /></td>
              <td class='tick-column'><img src="Images/tick-icon.png" alt='' /></td>
            </tr>
            <tr>
              <td class='info-column'>Parts & labour</td>
              <td class='tick-column'><img src="Images/tick-icon.png" alt='' /></td>
              <td class='tick-column'><img src="Images/tick-icon.png" alt='' /></td>
            </tr>
            <tr>
              <td class='info-column'>Vehicle recovery and towing</td>
              <td class='tick-column'><img src="Images/tick-icon.png" alt='' /></td>
              <td class='tick-column'><img src="Images/tick-icon.png" alt='' /></td>
            </tr>
            <tr>
              <td class='info-column'>Nil excess for windscreen repairs</td>
              <td class='tick-column'><img src="Images/tick-icon.png" alt='' /></td>
              <td class='tick-column'><img src="Images/tick-icon.png" alt='' /></td>
            </tr>
            <tr>
              <td class='info-column'>Towing and storage</td>
              <td class='tick-column'><img src="Images/x-icon.png" alt='' /></td>
              <td class='tick-column'><img src="Images/tick-icon.png" alt='' /></td>
            </tr>
          </table>
          <div class='reveal-all'>
            <a href >Show all items</a> <img src="Images/down-arrow-icon.png" alt='' />
          </div>
        </div>
          <div class='quote-now'>
            <button>Get a quote now!</button>
          </div>
      </div>

    </div>  

  </div>

</div>
  )
}
