import gql from 'graphql-tag';

export const GET_STAR_WARS_PEOPLE = gql`
  query people($page: String!){ 
    people(input:{page: $page} { 
      count,
      previous,
      next,
      results{
      name, 
      homeworld, 
      mass, 
      gender, 
      height}
    }
      
  }
`;
