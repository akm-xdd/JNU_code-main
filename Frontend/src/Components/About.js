import React from 'react'
// import { useState } from 'react'

export default function About(props) {

    // const [mystyle, SetMyStyle] = useState({
    //     color : "white",
    //     backgroundColor: "black",   
    // })

    // const [btnText, setBtnText] = useState('Light Mode')
    
    // const toggleStyle = () => {
    //     if (mystyle.color === 'white'){
    //         SetMyStyle ({
    //             color : "black",
    //             backgroundColor: "white",
    //             border: " 1px solid white"

    //         })
    //         setBtnText('Dark Mode')

    //     }
    //     else{
    //         SetMyStyle ({
    //             color : "white",
    //             backgroundColor: "black",

    //         })
    //         setBtnText('Light Mode')
    //     }
    // }

    let mystyle = {
        color : props.Mode === 'dark' ? "white" : "black",
        backgroundColor: props.Mode === 'dark'?'#132743':'#e7eaf6',
        // border: " 1px solid " + props.Mode === 'black'? "white" : "black",
        // borderColor:props.Mode ==='dark'?'#b8a9c9':'#622569',
        // border: " 1px solid " ,
        // borderRadius: " 2px solid",
    }
    return(
        <div className='container' style = {mystyle}>
            <h2 className='my-3' style={{color : props.Mode === 'dark' ? "white" : "black"}}>About Us</h2>
            <div className="accordion" id="accordionExample" style = {mystyle}>
                <div className="accordion-item" style= {{borderColor:props.Mode ==='dark'?'#e7eaf6':'#132743'}}>
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" style = {mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body"style = {mystyle}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style= {{borderColor:props.Mode ==='dark'?'#b8a9c9':'#132743'}}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style = {mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style = {mystyle}>
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style= {{borderColor:props.Mode ==='dark'?'#b8a9c9':'#132743'}}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style = {mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style = {mystyle}>
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div >
            {/* <div className = "container my-3">
                
                    
                <button type="button" className="btn btn-dark" onClick={toggleStyle}>{btnText}</button>
                   
            </div> */}

        </div>
    )
}