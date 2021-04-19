import { IResolvers} from "graphql-tools"; 
import { merge } from 'lodash'; 
import { userResolvers } from "./resolvers/user.resolvers"; 

const resolveMap: IResolvers = merge(userResolvers)

export default resolveMap; 



