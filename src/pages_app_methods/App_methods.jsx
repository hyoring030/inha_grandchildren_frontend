import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import { useContext } from "react";
import { FontSizeContext } from "../pages_font_context/FontSizeProvider";
import { Fade } from "react-awesome-reveal";
import App_methodNav from "./App_methodNav";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Highlight = styled.span`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 68%, #ffd05d 50%);
  border-radius: 3px;
`;

const BackGround = styled.div`
  background-image: url(/mainBackground.png);
  background-size: cover;
  border-radius: 0 0 50px 60px / 0 0 12px 19px;
  @media (orientation: portrait) {
    height: 40vh;
  }
  @media (orientation: landscape) {
    height: 95vh;
  }
  font-family: "MICE";
`;
const Text = styled.h1`
  color: #ffffff;
  margin-left: 10%;
  padding-top: 2%;
  margin-bottom: 10%;
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.9rem";
      case "large":
        return "2.2rem";
      case "veryLarge":
        return "2.5rem";
    }
  }};
`;

const Title = styled.div`
  /* font-size: 1.6rem; */
  color: black;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 10%;
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.6rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.2rem";
    }
  }};
  height: 50px;

  @media (orientation: landscape) {
    text-align: center;
  }
`;

const Title1 = styled.div`
  /* font-size: 1.6rem; */
  color: black;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 5%;
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.6rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.2rem";
    }
  }};
  height: 120px;
`;

const Videobox = styled.div`
  text-align: center;
`;

const Icon = styled.img`
  width: 80px;
  height: 60px;
  padding-left: 10%;
  padding-top: 7%;
`;

const LevelBackGround = styled.div`
  background-image: url(/levelbackground.svg);
  background-size: cover;
  @media (orientation: landscape) {
    background-image: url(/levelbackground.svg);
    background-size: cover;
    height: 410vh;
  }
`;

const Text2 = styled.h1`
  /* font-size: 1.9rem; */
  text-align: center;
  padding-top: 7%;
  padding-bottom: 10%;
  @media (orientation: landscape) {
    font-size: 2.5rem;
  }

  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.9rem";
      case "large":
        return "2.1rem";
      case "veryLarge":
        return "2.3rem";
    }
  }};
`;

const LevelText = styled.p`
  font-weight: bold;
  /* font-size: 1.3rem; */
  @media (orientation: landscape) {
    font-size: 1.9rem;
  }
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.3rem";
      case "large":
        return "1.5rem";
      case "veryLarge":
        return "1.7rem";
    }
  }};
`;

const Arrow = styled.img`
  margin-left: 30%;
  @media (orientation: landscape) {
    width: 14%;
  }
`;

const Arrow2 = styled.img`
  margin-left: 40%;
  margin-top: 3%;
  margin-bottom: 3%;
  @media (orientation: landscape) {
    width: 14%;
  }
`;

const Arrow3 = styled.img`
  margin-left: 15%;
  margin-top: 3%;
  @media (orientation: landscape) {
    width: 14%;
  }
`;

const Arrow4 = styled.img`
  margin-left: 37%;
  @media (orientation: landscape) {
    width: 14%;
  }
`;

//씨앗
const LevelBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10%;
`;

const SeedImg = styled.img`
  margin-right: 3%;
  @media (orientation: landscape) {
    width: 20%;
  }
`;

//새싹
const LevelBox2 = styled.div`
  display: flex;
  align-items: center;
  margin-left: 35%;
`;
const Img2 = styled.img`
  margin-left: 3%;
  @media (orientation: landscape) {
    width: 20%;
  }
`;

//꽃
const LevelBox3 = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30%;
`;
const Img3 = styled.img`
  margin-right: 3%;
  @media (orientation: landscape) {
    width: 20%;
  }
`;

//열매
const LevelBox4 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
`;
const Img4 = styled.img`
  width: 30%;
  height: 45%;
  margin-bottom: 4%;
  @media (orientation: landscape) {
    width: 20%;
  }
`;

//나무
const LevelBox5 = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20%;
`;
const Img5 = styled.img`
  margin-left: 3%;
  margin-bottom: 5%;
  @media (orientation: landscape) {
    width: 60%;
    height: 40vh;
    content: url("/Ground_tree.svg");
  }
`;

//썸네일
const Thumbnail = styled.img`
  content: url("/howtouse1.svg");
  @media (orientation: landscape) {
    height: 45vh;
  }
`;

const Thumbnail2 = styled.img`
  content: url("/howtouse2.svg");
  @media (orientation: landscape) {
    height: 45vh;
  }
`;

const App_methods = () => {
  const { fontSize, setFontSize } = useContext(FontSizeContext);
  document.body.style = "background: white;";
  const navigate = useNavigate();

  const GoToPlayer1 = () => {
    navigate("/HowToUse1");
  };

  const GoToPlayer2 = () => {
    navigate("/HowToUse2");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BackGround>
        <App_methodNav />
        <Icon src="/videoIcon.svg"></Icon>
        <Text fS={fontSize}>
          직접 <Highlight>동영상으로</Highlight>
          <br />
          알려드릴게요🐥
        </Text>
        <Div>
          <Videobox>
            <Link to={"/HowToUse1"} style={{ textDecoration: "none" }}>
              <Thumbnail />
            </Link>
          </Videobox>
          <Title fS={fontSize}>'손주야~'사용영상 </Title>
        </Div>

        <Div>
          <Videobox>
            <Thumbnail2 onClick={GoToPlayer2} />
          </Videobox>
          <Title fS={fontSize}>어플삭제는 이렇게 해요 </Title>
        </Div>

        <LevelBackGround>
          <Text2 fS={fontSize}>
            <Highlight>디지털 단계</Highlight>에 대해서 <br /> 알려드릴게요.
          </Text2>

          <Fade key={0} bottom>
            <LevelBox>
              <SeedImg src="/Ground_seed.svg" />
              <LevelText fS={fontSize}>1단계 : 씨앗</LevelText>
            </LevelBox>
          </Fade>

          <Fade key={1} bottom delay={200}>
            <Arrow src="/down-arrow1.svg" />

            <LevelBox2>
              <LevelText fS={fontSize}>2단계 : 새싹</LevelText>
              <Img2 src="/Ground_2.svg" />
            </LevelBox2>
          </Fade>

          <Fade key={2} bottom delay={400}>
            <Arrow2 src="/arrow-down2.svg" />

            <LevelBox3>
              <Img3 src="/Ground_3.svg" />
              <LevelText fS={fontSize}>3단계 : 꽃</LevelText>
            </LevelBox3>
          </Fade>

          <Fade key={3} bottom delay={600}>
            <Arrow3 src="/arrow-down3.svg" />
            <LevelBox4>
              <Img4 src="/Ground_4.svg" />
              <LevelText fS={fontSize}>4단계 : 열매</LevelText>
            </LevelBox4>
          </Fade>

          <Fade key={4} bottom delay={600}>
            <Arrow4 src="/arrow-down4.svg" />
            <LevelBox5>
              <LevelText fS={fontSize}>5단계 : 나무</LevelText>
              <Img5 src="/Ground_5.svg" />
            </LevelBox5>
          </Fade>
        </LevelBackGround>
      </BackGround>
    </>
  );
};

export default App_methods;
