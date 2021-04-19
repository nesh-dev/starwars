import { IResolvers} from "graphql-tools"; 
import { merge } from 'lodash'; 
import { userResolvers } from "./resolvers/user.resolvers"; 
import { peopleResolvers } from "./resolvers/person.resolvers"

const resolveMap: IResolvers = merge(userResolvers, peopleResolvers)

export default resolveMap; 



