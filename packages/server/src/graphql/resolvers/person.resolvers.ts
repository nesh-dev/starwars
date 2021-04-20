import { IResolvers } from 'graphql-tools';
import { QueryPeopleArgs, Person, QuerySearchPeopleArgs } from '../../generated/graphql';
import axios from 'axios';


export const peopleResolvers: IResolvers = {
    Query: {
        async people(_: void, args: QueryPeopleArgs): Promise<[Person]> {
            try {
                const response = await axios.get(`https://swapi.dev/api/people/?page=${args.input.page}`);
                const { data: { results } } = response;
                return results
            } catch (error) {
                throw new Error(error)
            }
        },

        async searchPeople(_: void, args: QuerySearchPeopleArgs): Promise<Person> {
            try {
                const response = await axios.get(`https://swapi.dev/api/people/?search=${args.input.name}`)
                const { data: { results } } = response;
                return results;
            } catch (error) {
                throw new Error(error)
            }
        }
    },


}
