import React,{useState} from 'react'

export default function About(props) {
    // const[myStyle,setMyStyle]=useState({
    //     color:'dark',
    //     backgroundColor:'white'
    // })
    let myStyle={
      color: props.mode==='dark'?'white':'grey',
      backgroundColor: props.mode==='dark'?'grey':'white'
    }

  

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3" >About us</h1>
      <div className="accordion" id="accordionExample">
          <div className="accordion-item" >
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong> Analyze your text</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                Textutils gives you a way to analyze your text quickly and efficiently. It tells word count, character count and gives preview.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle} >
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed"  type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to Use</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item" >
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Average Time</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                TextUtils gives the average time required to read particular text.
              </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}
