import 'graphql-import-node';

import * as userTypeDefs from './schemas/users.graphql'; 
import * as emptyTypeDefs from './schemas/empty.graphql'; 
import * as peopleTypeDefs from './schemas/people.graphql'; 
import resolvers from './resolverMap'; 
import { GraphQLSchema } from 'graphql'; 
import { makeExecutableSchema } from 'graphql-tools';


const schema: GraphQLSchema = makeExecutableSchema({ 
    typeDefs: [ emptyTypeDefs, userTypeDefs, peopleTypeDefs], 
    resolvers
})

export default schema; 
