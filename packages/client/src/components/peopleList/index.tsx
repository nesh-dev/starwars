import React from "react";
import styled from "styled-components";
import { Person } from "../../generated/graphql";
import PersonCard from "../personCard";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 2%;
  position: relative;
`;
const PeopleList: React.FC<[Person]> = (people) => {
  return (
    <div>
      {people &&
        people?.map((item: Person) => (
          <Wrapper>
            <PersonCard
              key={item.name}
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
