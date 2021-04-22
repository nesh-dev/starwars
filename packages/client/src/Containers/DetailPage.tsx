import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import StarWarsImage from "../assets/Star_Wars_Logo 1.png";
import DetailComponent from "../components/detailPersonComponent";
import { SEARCH_STAR_WARS_PEOPLE } from "../graphql/queries/search";
import { Person, SearchParams } from "../generated/graphql";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  flex-direction: column;
`;
const Logo = styled.img`
  width: 35%;
`;

const Wrapper = styled.div`
  width: 35%;
  margin-top: 2%;
`;

export default function DetailPage() {
  interface ParamTypes {
    name: string;
  }

  interface SearchObject {
    searchPeople: Person[];
  }

  const { name } = useParams<ParamTypes>();

  const { data, loading, error } = useQuery<SearchObject, SearchParams>(
    SEARCH_STAR_WARS_PEOPLE,
    {
      variables: { name: name },
    }
  );

  console.log(data, "LLL", name);

  if (loading) return <div>Loading....</div>;

  if (error) return <div> {error.message} </div>;

  return (
    <Container>
      <Logo src={StarWarsImage} />
      <Wrapper>
        {data ? (
          <DetailComponent
            name={data?.searchPeople[0]?.name}
            height={data?.searchPeople[0]?.height}
            mass={data?.searchPeople[0]?.mass}
            homeworld={data?.searchPeople[0]?.homeworld}
            gender={data?.searchPeople[0]?.gender}
          />
        ) : (
          <div></div>
        )}
      </Wrapper>
    </Container>
  );
}
