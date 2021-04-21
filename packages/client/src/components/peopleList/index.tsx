import React from "react";
import styled from "styled-components";
import PersonCard from "../personCard";

const Wrapper = styled.div`
width: 100%;
margin-top: 2%;
position: relative;
`;
const PeopleList = ({ data }: any) => {
  return (
    <div>
      {data &&
        data?.map((item: any) => (
          <Wrapper>
            <PersonCard key={item.name} people={item} />
          </Wrapper>
        ))}
    </div>
  );
};

export default PeopleList;
