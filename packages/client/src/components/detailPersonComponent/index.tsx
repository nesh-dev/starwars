import React from "react";
import styled from "styled-components";
import { Person } from '../../generated/graphql';

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  padding: 2%;
`;

const CardOutline = styled.div`
  background: #ffffff;
  border: 2px dashed #ffe81f;
  padding: 2%;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 16px;
  color: black;
  font-style: bold;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  font-weight: bold;
  margin-right: 5%;
`;

const Info = styled.div`
  margin-right: 50%;
  font-size: 18px;
  font-weight: 200;
  text-alight: center;
`;



const DetailComponent: React.FC<Person> = ( {name, height, mass, homeworld, gender} ) => {
  return (
    <Card>
      <CardOutline>
        <Text>
          <Title>Name:</Title>
          <Info>{name}</Info>
        </Text>
        <Text>
          {" "}
          <Title>Height:</Title>
          <Info>{height} Ft. </Info>
        </Text>
        <Text>
          {" "}
          <Title>Mass:</Title>
          <Info> {mass} KG </Info>
        </Text>
        <Text>
          <Title>HomeWorld:</Title>
          <Info>{homeworld}</Info>
        </Text>
        <Text>
          <Title>Gender:</Title>
          <Info>{gender}</Info>
        </Text>
      </CardOutline>
    </Card>
  );
};

export default DetailComponent;
