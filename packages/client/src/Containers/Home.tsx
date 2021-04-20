import React, { useState } from "react";
import StarWarsImage from "../assets/Star_Wars_Logo 1.png";
import styled from "styled-components";
import SearchBar from "../components/searchBar";
import PersonCard from "../components/personCard";
import { useQuery } from "@apollo/client";
import { GET_STAR_WARS_PEOPLE } from "../graphql/queries/people";

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

const SearchBarWrapper = styled.div`
  width: 35%;
  margin-top: 2%;
`;

const Home = () => {
  const [pageNumber, setPageNumber] = useState("1");
  const { data, loading, error } = useQuery(GET_STAR_WARS_PEOPLE, {
    variables: { page: pageNumber },
  });
  if (loading) return <div>Loading....</div>;
  if (error) return <div> {error.message} </div>;

  return (
    <div>
      <Container>
        <Logo src={StarWarsImage} />
        <SearchBarWrapper>
          <SearchBar />
        </SearchBarWrapper>
        {data &&
          data?.people?.results.map((item: any) => (
            <SearchBarWrapper>
              <PersonCard key={item.name} people={item} />
            </SearchBarWrapper>
          ))}
      </Container>
    </div>
  );
};

export default Home;
