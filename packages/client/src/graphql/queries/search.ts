import gql from 'graphql-tag';

export const SEARCH_STAR_WARS_PEOPLE = gql`
    query searchPeople($name: String!){ 
        searchPeople(input: {name:$name}) { 
        name
        height
        mass
        gender
        homeworld
    }
}`;
