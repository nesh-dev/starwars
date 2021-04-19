import { IResolvers} from 'graphql-tools'; 
import { QueryPeopleArgs, Person} from '../../generated/graphql'; 
import axios from 'axios'; 


export const peopleResolvers: IResolvers = { 

    Query: { 
        async people(_:void, args:QueryPeopleArgs): Promise<[Person]> {
            try{ 
             const response = await axios.get(`https://swapi.dev/api/people/?page=${args.input.page}`); 
             const {data: {results}} = response; 
             console.log(results, '?????')
             return results
            }catch(error){ 
                throw new Error(error)
            }
        }
    }, 


}
