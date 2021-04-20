
import React from 'react'; 
import styled from 'styled-components';
import SearchImage from '../../assets/search.png';


const FormInput = styled.input`
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    height: 50px;
    margin-top: 10%;
    position: relative;
    width: 100%;
    padding-left: 5%;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #FFE81F;
        border: 1px solid ##FFE81F;
    }
`; 

const SearchIcon = styled.img`
    margin-left: -10%;
    margin-bottom: -2%;
    position: relative;
`;

const SearchBar = () => {
    return (
        <div>
            <FormInput placeholder="Search your favorite Star Wars characters"/>
            <SearchIcon src={SearchImage} />
        </div>
    )
}

export default SearchBar;
