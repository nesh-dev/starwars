import 'graphql-import-node';

import * as userTypeDefs from './schemas/users.graphql'; 
import * as emptyTypeDefs from './schemas/empty.graphql'; 
import resolvers from './resolverMap'; 
import { GraphQLSchema } from 'graphql'; 
import { makeExecutableSchema } from 'graphql-tools';


const schema: GraphQLSchema = makeExecutableSchema({ 
    typeDefs: [ emptyTypeDefs, userTypeDefs], 
    resolvers
})

export default schema; 
