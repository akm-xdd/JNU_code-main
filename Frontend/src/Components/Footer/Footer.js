// import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube, faGoogle } from '@fortawesome/free-brands-svg-icons';
import React from'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from'mdbreact';
import {
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';


// import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';

export default function App(props) {

  let mystyle = {
    color : props.Mode === 'dark' ? "#e7eaf6" : "black",
    backgroundColor: props.Mode === 'dark'?'#24527a':'#ffb5b5',
    border: " 1px solid " + props.Mode === 'black'? "white" : "black",
    borderColor:props.Mode ==='dark'?'#b8a9c9':'#622569',
    // border: " 1px solid " ,
    // borderRadius: " 2px solid",
    // style={{ backgroundColor: '#45637d' }}
}

  return (
    <MDBFooter className='text-center text-white ' 
    style={{ 
      backgroundColor:props.Mode=== 'dark'?'#24527a':'#c86b85',
      fontFamily:"URW Chancery L, cursive" 
      }}>
      {/* <MDBContainer className='p-4' >
        <section className=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol lg='6'>
              <div className='ratio ratio-16x9'>
                <iframe
                  className='shadow-1-strong rounded'
                  src='https://www.youtube.com/embed/ztaTocTDSMw'
                  title='YouTube video'
                  allowFullScreen
                  data-gtm-yt-inspected-2340190_699='true'
                  id='388567449'
                ></iframe>
              </div>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer> */}

      <MDBContainer className='pt-4 '>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="light"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 mx-3'
            href='https://www.facebook.com/ICMROrganisation'
            role='button'
          >
            <FontAwesomeIcon icon={faFacebook} beat size="lg" />
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 mx-3'
            href='https://twitter.com/ICMRDELHI'
            role='button'
          >
            <FontAwesomeIcon icon={faTwitter} beat size="lg" />
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 mx-3'
            href='https://main.icmr.nic.in/'
            role='button'
          >
            <FontAwesomeIcon icon={faGoogle} beat size="lg" />
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 mx-3'
            href='https://www.instagram.com/icmrorganisation/'
            role='button'
          >
            <FontAwesomeIcon icon={faInstagram} beat size="lg" />
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 mx-3'
            href='https://www.linkedin.com/company/icmrorganization'
            role='button'
          >
            <FontAwesomeIcon icon={faLinkedin} beat size="lg" />
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 mx-3'
            href='https://www.youtube.com/c/icmrorganisation'
            role='button'
          >
            <FontAwesomeIcon icon={faYoutube} beat size="lg" />
            <MDBIcon fab className='fa-youtube' />
          </MDBBtn>
        </section>
      </MDBContainer>


      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://main.icmr.nic.in/'>
          ICMR-JNU 
        </a>
      </div>
    </MDBFooter>
  );
}