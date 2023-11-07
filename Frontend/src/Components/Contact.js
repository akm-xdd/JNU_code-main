import React from 'react';

export default function Contact(props) {
    let mystyle = {
        color: props.Mode === 'dark' ? "white" : "#113f67",
        backgroundColor: props.Mode === 'dark' ? '#132743' : '#e7eaf6',
        // border: " 1px solid " + props.Mode === 'black'? "white" : "black",
        // borderColor:props.Mode ==='dark'?'#b8a9c9':'#622569',
        // border: " 1px solid " ,
        // borderRadius: " 2px solid",
    }

    return (
        <div className='container-fluid py-4'
            style={mystyle}>
            {/* <h2 className='my-8' style={{color : props.Mode === 'dark' ? "white" : "black"}}>About Us</h2> */}

            <div className="row mx-4">


                <div className='col-lg-8 col-md-12 my-4'>

                    <div>
                        <h3 style={{color: props.Mode === 'dark' ? '#e7eaf6' : '#113f67', fontFamily: "URW Chancery L, cursive" }} className='text-center' >
                            <u>Contact us</u>
                        </h3>
                    </div >

                    <div>
                        <h5 style={{ color: props.Mode === 'dark' ? '#e7eaf6' : '#113f67' }}>
                            Indian Council of Medical Research

                            V. Ramalingaswami Bhawan, P.O. Box No. 4911<br />

                            Ansari Nagar, New Delhi - 110029, India<br />

                            Ph: 91-11-26588895 / 91-11-26588980, 91-11-26589794 / 91-11-26589336, 91-11-26588707<br />

                            Fax: 91-11-26588662<br />

                            Email:icmrhqds@sansad.nic.in
                        </h5>
                    </div>

                </div>


                <div className='col-lg-4 col-md-12 d-flex justify-content-center align-items-center'>
                    <div 
                        >
                        <div className="justify-content-center py-auto" style={{fontFamily: "URW Chancery L, cursive" }}>
                        
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3504.040750962232!2d77.214318!3d28.568539000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcfbba37bf655472a!2sV%20Ramalingaswami%20Bhawan!5e0!3m2!1sen!2sin!4v1597922849801!5m2!1sen!2sin" title="myFrame" width="400" height="400" style={{ top: "800px", right: "5px" }}></iframe>
                        </div>
                    </div>

                </div>
            </div>





        </div>

    );
}

{/* <div className="container-fluid px=0 mx=0" >
<img src="{% static 'C:\Users\deepa\OneDrive\Desktop\DJANGOproject\django\mysite\static\images\Contact.jpg' %}" alt="ICMR Image" width="1500" height="400"/>
<h3 style="position:absolute; top: 180px; left:50px; color:white" > Contact us </h3>
<h6 style="position:absolute; top: 230px; left:50px; color:white">
    Indian Council of Medical Research

    V. Ramalingaswami Bhawan, P.O. Box No. 4911<br/>

    Ansari Nagar, New Delhi - 110029, India<br/>

    Ph: 91-11-26588895 / 91-11-26588980, 91-11-26589794 / 91-11-26589336, 91-11-26588707<br/>

    Fax: 91-11-26588662<br/>

    Email:icmrhqds@sansad.nic.in
</h6>
</div>


<div className="container py-4">
<div className="row ">
    <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3504.040750962232!2d77.214318!3d28.568539000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcfbba37bf655472a!2sV%20Ramalingaswami%20Bhawan!5e0!3m2!1sen!2sin!4v1597922849801!5m2!1sen!2sin" width="400" height="380" style="position:absolute; top: 175px; right:50px"></iframe>	
    </div>	
</div>
 */}