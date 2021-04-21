import React, { useState } from "react";
import StarWarsImage from "../assets/Star_Wars_Logo 1.png";
import styled from "styled-components";
import SearchBar from "../components/searchBar";
import PersonCard from "../components/personCard";
import Pagination from "../components/pagination"; 
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

const Wrapper = styled.div`
  width: 35%;
  margin-top: 2%;
`;

const PaginationWrapper = styled(Wrapper)`
  display: flex; 
  justify-content: center;
`; 


const Home = () => {

  const [pageNumber, setPageNumber] = useState("1");
  const pageLimit = 9;
  const myArray= [1,2,3,4,5,6,7,8,9]

  const decrementPage = (e: React.MouseEvent<HTMLButtonElement>): void => { 

    setPageNumber((parseInt(pageNumber) - 1).toString());
  }

  const incrementPage = (e: React.MouseEvent<HTMLButtonElement>): void=> { 
    
    setPageNumber((parseInt(pageNumber) + 1).toString());
  }

  const getCurrentPageInfo = (e: React.MouseEvent<HTMLButtonElement>, item: number): void => { 

    setPageNumber(item.toString())

  }



  const { data, loading, error } = useQuery(GET_STAR_WARS_PEOPLE, {
    variables: { page: pageNumber },
  });
  if (loading) return <div>Loading....</div>;
  if (error) return <div> {error.message} </div>;

  return (
    <div>
      <Container>
        <Logo src={StarWarsImage} />
        <Wrapper>
          <SearchBar />
        </Wrapper>
        { data &&
          data?.people?.results.map((item: any) => (
            <Wrapper>
              <PersonCard key={item.name} people={item} />
            </Wrapper>
          ))
          }
           <PaginationWrapper>
           <Pagination 
           pagesInfo={data}
           myArray={myArray}
           decrementPage={decrementPage}
           incrementPage={incrementPage}
           pageNumber={pageNumber}
           pageLimit={pageLimit}
           getCurrentPageInfo={getCurrentPageInfo}
            />
           </PaginationWrapper>
     
      </Container>
    </div>
  );
};

export default Home;
