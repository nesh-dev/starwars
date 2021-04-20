import React from "react";
import StarWarsImage from "../assets/Star_Wars_Logo 1.png";
import styled from "styled-components";
import SearchBar from "../components/searchBar";
import PersonCard from "../components/personCard";

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
  return (
    <div>
      <Container>
        <Logo src={StarWarsImage} />
        <SearchBarWrapper>
          <SearchBar />
        </SearchBarWrapper>
       
          {results.map((item: any) => (
             <SearchBarWrapper>
            <PersonCard key={item.name} people={item} />
            </SearchBarWrapper>
          ))}
        
      </Container>
    </div>
  );
};

const results: any = [
  {
    name: "Anakin Skywalker",
    homeworld: "http://swapi.dev/api/planets/1/",
    mass: "84",
    gender: "male",
    height: "188",
  },
  {
    name: "Wilhuff Tarkin",
    homeworld: "http://swapi.dev/api/planets/21/",
    mass: "unknown",
    gender: "male",
    height: "180",
  },
  {
    name: "Chewbacca",
    homeworld: "http://swapi.dev/api/planets/14/",
    mass: "112",
    gender: "male",
    height: "228",
  },
  {
    name: "Han Solo",
    homeworld: "http://swapi.dev/api/planets/22/",
    mass: "80",
    gender: "male",
    height: "180",
  },
  {
    name: "Greedo",
    homeworld: "http://swapi.dev/api/planets/23/",
    mass: "74",
    gender: "male",
    height: "173",
  },
  {
    name: "Jabba Desilijic Tiure",
    homeworld: "http://swapi.dev/api/planets/24/",
    mass: "1,358",
    gender: "hermaphrodite",
    height: "175",
  },
  {
    name: "Wedge Antilles",
    homeworld: "http://swapi.dev/api/planets/22/",
    mass: "77",
    gender: "male",
    height: "170",
  },
  {
    name: "Jek Tono Porkins",
    homeworld: "http://swapi.dev/api/planets/26/",
    mass: "110",
    gender: "male",
    height: "180",
  },
  {
    name: "Yoda",
    homeworld: "http://swapi.dev/api/planets/28/",
    mass: "17",
    gender: "male",
    height: "66",
  },
  {
    name: "Palpatine",
    homeworld: "http://swapi.dev/api/planets/8/",
    mass: "75",
    gender: "male",
    height: "170",
  },
];

export default Home;
