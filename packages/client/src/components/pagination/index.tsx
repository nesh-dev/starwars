import React from "react";
import styled from "styled-components";
import KeyLeft from "../../assets/key_arrow_left.png";
import KeyRight from "../../assets/keyboard_arrow_right 1.png";
import { Person } from "../../generated/graphql";

const PagButton = styled.button<{ active?: boolean }>`
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  margin-left: 2%;
  width: 30px;
  ${(props) =>
    props.active &&
    `
  font-weight: bold;
  background: #ffe81f;
  color: #fff;
`}
  &:hover {
    background: #ffe81f;
    color: #ffff;
    outline: none;
    border: none;
  }
`;

const PagContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const CountButton = styled(PagButton)`
  &:hover {
    background: #ffff;
    color: #ffff;
    outline: none;
    border: 1px solid #ffe81f;
  }
`;

const NextButton = styled(CountButton)<{ disabled?: boolean }>`
  ${(props) =>
    props.disabled &&
    `
cursor: none;
background: #ffff;
color: #fff;
border: 1px solid #dddddd;
&:hover {
  background: #ffff;
  color: #ffff;
  outline: none;
  border: 1px solid #dddddd;
}
`};
`;

const PrevButton = styled(CountButton)<{ disabled?: boolean }>`
  ${(props) =>
    props.disabled &&
    `
cursor: none;
background: #ffff;
color: #fff;
border: 1px solid #dddddd;
&:hover {
  background: #ffff;
  color: #ffff;
  outline: none;
  border: 1px solid #dddddd;
}
`};
`;

const active = (pageNumber: string, item: number) => {
  return item === parseInt(pageNumber);
};

const checkNextDisabled = (pagesInfo: any) => {

  if (pagesInfo?.next === null) {return true}
};

const checkPrevDisabled = (pagesInfo: any) => {
  if (pagesInfo?.previous === null) {return true;}
};

interface PaginationProps { 
  pagesInfo: any,
  myArray: number[],
  decrementPage: (e: React.MouseEvent<HTMLButtonElement>) => void,
  incrementPage: (e: React.MouseEvent<HTMLButtonElement>) => void,
  pageNumber: string, 
  getCurrentPageInfo:  (e: React.MouseEvent<HTMLButtonElement>, item:number) => void,
}


const Pagination: React.FC<PaginationProps> = ({
  pagesInfo,
  myArray,
  decrementPage,
  incrementPage,
  pageNumber,
  getCurrentPageInfo,
}) => {
  return (
    <PagContainer>
      <PrevButton
        onClick={(e) => decrementPage(e)}
        disabled={checkPrevDisabled(pagesInfo)}
      >
        <img src={KeyLeft} alt="key left" />
      </PrevButton>

      {myArray &&
        myArray?.map((item: number, index: number) => (
          <PagButton
            active={active(pageNumber, item)}
            onClick={(e) => getCurrentPageInfo(e, item)}
          >
            {item}
          </PagButton>
        ))}

      <NextButton
        onClick={(e) => incrementPage(e)}
        disabled={checkNextDisabled(pagesInfo)}
      >
        <img src={KeyRight} alt="key right" />
      </NextButton>
    </PagContainer>
  );
};

export default Pagination;
