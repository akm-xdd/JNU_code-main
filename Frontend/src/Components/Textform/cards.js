import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';


const CardContainer = styled.div`
  

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 100px 50px;
  padding: 50px 50px;
  font-family: Calibri, sans-serif
`;

const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 350px;
  max-width: 100%;
  height: 300px;
  background: white;
  border-radius: 20px;
  transition: 0.5s;
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);

  &:hover {
    height: 400px;
  }
`;

const ImageBox = styled.div`
  position: absolute;
  top: 20px;
  width: 300px;
  height: 220px;
  background: #333;
  border-radius: 12px;
  overflow: hidden;
  transition: 0.5s;

  ${Card}:hover & {
    top: -100px;
    transform: scale(0.75);
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  position: absolute;
  top: 252px;
  width: 100%;
  height: 35px;
  padding: 0 30px;
  text-align: center;
  overflow: hidden;
  transition: 0.5s;

  ${Card}:hover & {
    top: 130px;
    height: 250px;
  }
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--clr);
`;

const Description = styled.p`
  color: #333;
`;

const LinkBar = styled.a`
  position: relative;
  top: 15px;
  display: inline-block;
  padding: 12px 25px;
  text-decoration: none;
  background: var(--clr);
  color: white;
  font-weight: 500;

  &:hover {
    opacity: 0.8;
  }
`;

function Cards(props) {
  return (
    <div className="container my-2 h-25 py-2 pb-4 " >
      <CardContainer>

        <Card style={{ "--clr": "#009688" }}>
          <ImageBox>
            <Image src="Images/Untitled15.jpeg" alt="Cancer-covid-picture" />
          </ImageBox>
          <Content>
            <Heading>Cancer-COVID Analyzer</Heading>
            <Description>
              Delving into the nexus of cancer and COVID-19: Unveiling insights on patient demographics, including gender, state, and age.
            </Description>
            <LinkBar><Link to="/CancerCovid" style={{ textDecoration: "none", color: "white" }}>Know More </Link> </LinkBar>
          </Content>
        </Card>

        <Card style={{ "--clr": "#009688" }}>
          <ImageBox>
            <Image src="Images/Untitled11.jpeg" alt="Vaccine picture" />
          </ImageBox>
          <Content>
            <Heading>ICMR Vaccine portal</Heading>
            <Description>
              Delving into the nexus of cancer and COVID-19: Unveiling insights on patient demographics, including gender, state, and age.
            </Description>
            <LinkBar href="https://vaccine.icmr.org.in/">Read More</LinkBar>
          </Content>
        </Card>

        <Card style={{ "--clr": "#009688" }}>
          <ImageBox>
            <Image src="https://i.postimg.cc/t4w95jsf/img-01.png" alt="Leafs" />
          </ImageBox>
          <Content>
            <Heading>Leafs</Heading>
            <Description>
              Unveiling the nexus of cancer and COVID-19: Analyzing patients' gender, state, and age for deeper insights and correlations. Delve into the complexities of these intersecting health factors.
            </Description>
            <LinkBar href="">Read More</LinkBar>
          </Content>
        </Card>
      </CardContainer>
    </div >
  );
}

export default Cards;