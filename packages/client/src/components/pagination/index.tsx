import React from "react";
import styled from "styled-components";
import KeyLeft from "../../assets/key_arrow_left.png";
import KeyRight from "../../assets/keyboard_arrow_right 1.png";

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

const TraverseButton = styled(CountButton)<{ disabled?: boolean }>`
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
  if (pagesInfo?.people?.next == null) return true;
};

const checkPrevDisabled = (pagesInfo: any) => {
  if (pagesInfo?.people?.previous == null) return true;
};
const Pagination = ({
  pagesInfo,
  myArray,
  decrementPage,
  incrementPage,
  pageNumber,
  pageLimit,
  getCurrentPageInfo,
}: any) => {
  return (
    <PagContainer>
      <TraverseButton
        onClick={(e) => decrementPage(e)}
        disabled={checkPrevDisabled(pagesInfo)}
      >
        <img src={KeyLeft} alt="key left" />
      </TraverseButton>

      {myArray &&
        myArray?.map((item: number, index: number) => (
          <PagButton
            active={active(pageNumber, item)}
            onClick={(e) => getCurrentPageInfo(e, item)}
          >
            {item}
          </PagButton>
        ))}

      <TraverseButton
        onClick={(e) => incrementPage(e)}
        disabled={checkNextDisabled(pagesInfo)}
      >
        <img src={KeyRight} alt="key right" />
      </TraverseButton>
    </PagContainer>
  );
};

export default Pagination;
