import React from "react";
import PropTypes from 'prop-types';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import styled from "styled-components";

// const Img =styled.div`
// mix-blend-mode: mutliply`
export default function NavBarSym(props) {

  let mystyle = {
    color: props.Mode === 'dark' ? "#F8F8FF" : "black",
    backgroundColor: props.Mode === 'dark' ? '#45637d' : '#F8F8FF',
    // border: " 1px solid " + props.Mode === 'black'? "white" : "black",
    // borderColor:props.Mode ==='dark'?'#b8a9c9':'#622569',
    // border: " 1px solid " ,
    // borderRadius: " 2px solid",
  }
  return (
    <>
      <div style={mystyle} >
        {/* <div className="navbar px-my-0 py-1 mx-0 " style={{disply:'flex', justifyContent:'left', position: 'sticky-top', backgroundColor: props.Mode === 'dark'?'#24527a':'#c86b85',borderColor:props.Mode ==='dark'?'#F8F8FF':'#132743', color : props.Mode === 'dark' ? "#F8F8FF" : "black",}}>
               */}
        <div className="navbar px-my-0 py-0 mx-0 d-flex justify-content-center" 
        style={{ disply: 'flex', justifyContent: 'left', position: 'sticky-top', 
        backgroundColor: props.Mode === 'dark' ? 'grey' : '#F8F8FF', 
        borderColor: props.Mode === 'dark' ? '#F8F8FF' : '#132743', 
        color: props.Mode === 'dark' ? "#F8F8FF" : "black", 
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>



          {/* <nav className={`navbar navbar-expand navbar-${props.Mode} bg-${props.Mode} `}> */}

          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} mx-auto`}>
            <Link className="navbar-brand">
              <img src="Images/ICMRlogo.jpeg" alt="ICMRlogo" width="140" height="70" className="d-inline-block align-text-top mx-3" style={{ marginLeft: '100px' }} />
              <img src="Images/Untitled14.jpeg" alt="JNUlogo" width="50" height="70" className="d-inline-block align-text-top" />
              <strong>{props.title}</strong>
            </Link >





          </nav>
        </div>

      </div>


    </>
  );

}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,

}

Navbar.defaultProps = {
  title: 'ICMR-JNU Analytics Centre',

}