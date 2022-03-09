import React from 'react';
import axios from 'axios';
import { useState } from 'react';

import './css/SectionFour.css'

export default function SectionFour() {

  const [resultsSection, setResultsSection] = useState('');
  
  function watsonTester(){
    const searchValue = document.getElementById('search').value
    console.log(`you are looking for ${searchValue}`)

    // put value of from textbox in variable question
    let question = document.getElementById('search').value

    // take question and replace an of special characters
    let trimmer = question.replace(/[$/!/@/#/$/%/^/&/*/+/{/}/[/\]/:/;/?/>/</]/g, "")

    // the question and trim any white space
    let finalQuestion = trimmer.trim();

    // check if final question is trimmed correctly 
    console.log(`we here --- ${finalQuestion}`);

    // get box and clear it out

    axios.get(`http://localhost:4000/query/${finalQuestion}`)
    .then(setResultsSection(`searching . . . ${finalQuestion}`))
    .then(res => {
        console.log('hold up')
        console.log(res)
        let result = res.data.result.results
        const listlist = result.slice(0, 3).map((ID, text, question) => (
        <div class="search-results">
          Question: {ID.question} <br/><br/>Answer: {ID.text}
        </div>
        ))
        setResultsSection(listlist)
        
    })
  }

// ================

  return (
<div id="section-four-block">

  <div id="section-four-content">

    <div id='top-title'>
      Frequently Asked Questions
    </div>

    <div id='search-bar'>
      <span class="title-heading">type your question below</span>
      
      <input type="text" id="search" placeholder=' how do I buy a car ?'/>
      
      <button onClick={watsonTester}>Search</button>
    </div>
    <div class="search-results-holder">
      {resultsSection}
    </div>


  </div>

</div>
  )
}
