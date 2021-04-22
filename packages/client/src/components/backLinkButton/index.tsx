import React from "react";
import styled from "styled-components";
import BackIcon from "../../assets/arrow_back.svg";

const BackLinkOuter = styled.div`
 
    border-radius: 50%; 
    border: 1px solid black;
    display: flex: 
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 10%;
`;

const BackLinkInner = styled.div`
  border-radius: 50%;
  border: 1px dashed #ffe81f;
  justify-content: center;
  align-items: center;
`;

const BackButtonImage = styled.img`
  width: 100%;
  color: #ffe81f;
`;
export default function BackButton({ handleBackButton }: any) {
  return (
    <BackLinkOuter onClick={handleBackButton}>
      <BackLinkInner>
        <BackButtonImage src={BackIcon} />
      </BackLinkInner>
    </BackLinkOuter>
  );
}
