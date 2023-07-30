import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FontSizeContext } from "../pages_font_context/FontSizeProvider";

const BackGround = styled.div`
  background-image: url(/mainBackground.png);
  width: 100vw;
  height: 40vh;
  background-size: cover;
  border-radius: 0 0 50px 60px / 0 0 12px 19px;
`;

const P = styled.p`
  font-size: 25px;
`;

const ExBox = styled.div`
  width: 70%;
  min-height: 20vh; /* 최대 높이를 지정합니다. */

  background: #ffffff;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 25px;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VertiBox = styled.div`
  /*선택지랑 예시 문구 세로로 묶는 box*/
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Highlight = styled.span`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 90%,
    rgba(255, 255, 255, 0.4) 55%
  );
`;

const Option = styled.div`
  /* 선택지 하나하나 control */

  width: 80%;
  height: 66px;

  background: #ffffff;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  color: #000000;
  box-sizing: border-box;

  margin-bottom: 1rem;
  padding: 2rem;
`;

const Label1 = styled.p`
  font-size: 25px;
`;

const Label2 = styled.p`
  font-size: 30px;
`;

const Label3 = styled.p`
  font-size: 35px;
`;

const Title = styled.h1`
  color: #ffffff;
  width: 300px;
`;

const Logo = styled.img`
  content: url(text.svg);
`;

const VertiBox2 = styled.div`
  margin-top: 23%;
  margin-bottom: 5%;
`;

const ButtonBox = styled.div`
  display: flex;
  margin-top: 10%;
  margin-bottom: 10%;
`;

const CancelBtn = styled.button`
  width: 78px;
  height: 39px;

  background: #f4f4f4;
  border-radius: 5px;
  border: none;
  margin-right: 5%;
`;

const CancelP = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;

  color: #000000;
`;

const SetBtn = styled.button`
  width: 120px;
  height: 39px;

  background: linear-gradient(97.27deg, #df7857 0%, #e7ab9a 100%);
  border-radius: 5px;
  border: none;
`;

const SetP = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */
  color: #ffffff;
`;

const Input = styled.input`
  appearance: none;
  border: 2.5px solid rgba(97, 113, 67, 0.3);
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  transition: border 0.2s ease-in-out;
  position: relative;

  &:checked {
    border: 2.5px solid #617143;
  }
  &:checked::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 12px;
    height: 12px;
    background-color: #617143;
    border-radius: 50%;
  } /* Ellipse 5 */
`;

const FontSizeSetting = () => {
  const { fontSize, setFontSize } = useContext(FontSizeContext);

  const handleRadioChange = (event) => {
    setFontSize(event.target.name);
    console.log(fontSize);
  };

  return (
    <BackGround>
      <VertiBox>
        <VertiBox2>
          <Logo />
          <Title>
            원하는 <Highlight>글자 크기</Highlight>를 선택해 주세요
          </Title>
        </VertiBox2>
        <Div>
          <ExBox>
            <p
              style={{
                fontSize:
                  fontSize === "normal"
                    ? "1.6rem"
                    : fontSize === "large"
                    ? "1.9rem"
                    : "2.2rem",
              }}
            >
              동해물과 백두산이 마르고 닳도록
            </p>
          </ExBox>
          <Option>
            <Label1 htmlFor="select">보통</Label1>
            <Input
              type="radio"
              name="normal"
              checked={fontSize === "normal"}
              onChange={handleRadioChange}
            />
          </Option>
          <Option>
            <Label2 htmlFor="select2">크게</Label2>
            <Input
              type="radio"
              name="large"
              checked={fontSize === "large"}
              onChange={handleRadioChange}
            />
          </Option>
          <Option>
            <Label3 htmlFor="select3">매우 크게</Label3>
            <Input
              type="radio"
              name="veryLarge"
              checked={fontSize === "veryLarge"}
              onChange={handleRadioChange}
            />
          </Option>
        </Div>
        <ButtonBox>
          <CancelBtn>
            <CancelP>취소</CancelP>
          </CancelBtn>
          <SetBtn>
            <SetP>설정하기</SetP>
          </SetBtn>
        </ButtonBox>
      </VertiBox>
    </BackGround>
  );
};

export default FontSizeSetting;
