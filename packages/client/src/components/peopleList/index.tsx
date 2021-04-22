import React from "react";
import styled from "styled-components";
import { Person } from "../../generated/graphql";
import PersonCard from "../personCard";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 2%;
  position: relative;
`;

interface PeopleListProps{ 
  data: Person[] | undefined
  
}
const PeopleList: React.FC<PeopleListProps> = ({data}) => {
 
  return (
    <div>
      {
        data?.map((item, index) => (
          <Wrapper>
            <PersonCard
              key={index}
              name={item.name}
              height={item.height}
              mass={item.mass}
              homeworld={item.homeworld}
              gender={item.gender}
            />
          </Wrapper>
        ))}
    </div>
  );
};

export default PeopleList;
