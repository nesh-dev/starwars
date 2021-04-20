import React from 'react'; 
import StarWarsImage from '../assets/Star_Wars_Logo 1.png'
import styled from "styled-components";
import SearchBar from '../components/searchBar';

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
`; 

const Home = () => {
    return (
       <div>
         <Container> 
            <Logo src={StarWarsImage} />
            <SearchBarWrapper>
                <SearchBar />
            </SearchBarWrapper>
       
         </Container>
       </div>
    )
}

export default Home
