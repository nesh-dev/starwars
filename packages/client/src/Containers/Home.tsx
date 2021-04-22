import React, { useState, useEffect } from "react";
import StarWarsImage from "../assets/Star_Wars_Logo 1.png";
import styled from "styled-components";
import SearchBar from "../components/searchBar";
import Pagination from "../components/pagination";
import PeopleList from "../components/peopleList";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_STAR_WARS_PEOPLE } from "../graphql/queries/people";
import { SEARCH_STAR_WARS_PEOPLE } from "../graphql/queries/search";
import { ResultObject, Person, Page, SearchParams } from "../generated/graphql";
import _ from "lodash";

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

interface QueryData {
  people: ResultObject;
}

interface SearchQueryData {
  searchPeople: [Person];
}

const Home = () => {
  const [pageNumber, setPageNumber] = useState("1");
  // const [characterListData, setCharacterListData] = useState([]);
  const [characterName, setCharacterName] = useState<string>("");
  const [pageInfo, setPageInfo] = useState<any>();
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const decrementPage = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setPageNumber((parseInt(pageNumber) - 1).toString());
  };

  const incrementPage = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setPageNumber((parseInt(pageNumber) + 1).toString());
  };

  const getCurrentPageInfo = (
    e: React.MouseEvent<HTMLButtonElement>,
    item: number
  ): void => {
    setPageNumber(item.toString());
  };

  const { data, loading, error } = useQuery<QueryData, Page>(
    GET_STAR_WARS_PEOPLE,
    {
      variables: { page: pageNumber },
    }
  );

  const [loadSearchResults, { data: searchResults }] = useLazyQuery<
    SearchQueryData,
    SearchParams
  >(SEARCH_STAR_WARS_PEOPLE, {
    variables: { name: characterName },
  });

  const [debouncedCallApi] = useState(() =>
    _.debounce(loadSearchResults, 1000)
  );

  const onValueChange = async (e: React.FormEvent<HTMLInputElement>) => {
    setCharacterName(e.currentTarget.value);
    await debouncedCallApi();
  };

  useEffect(() => {
    setPageInfo(data?.people);
  }, [data?.people]);

  if (loading) return <div>Loading....</div>;
  if (error) return <div> {error.message} </div>;

  return (
    <div>
      <Container>
        <Logo src={StarWarsImage} />
        <Wrapper>
          <SearchBar onValueChange={onValueChange} />
        </Wrapper>
        <Wrapper>
          <PeopleList
            data={
              searchResults
                ? searchResults?.searchPeople
                : data?.people?.results
            }
          />
        </Wrapper>
        <PaginationWrapper>
          {pageInfo ? (
            <Pagination
              pagesInfo={pageInfo}
              myArray={myArray}
              decrementPage={decrementPage}
              incrementPage={incrementPage}
              pageNumber={pageNumber}
              getCurrentPageInfo={getCurrentPageInfo}
            />
          ) : (
            <div></div>
          )}
        </PaginationWrapper>
      </Container>
    </div>
  );
};

export default Home;
