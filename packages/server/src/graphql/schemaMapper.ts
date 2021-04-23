import 'graphql-import-node';
import { join } from 'path';
import resolvers from './resolverMap';
import { GraphQLSchema } from 'graphql';
import { addResolversToSchema } from 'graphql-tools';
import { loadSchemaSync, loadSchema } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'



const schema = loadSchemaSync(join(__dirname, 'schema.graphql'), {
    loaders: [
        new GraphQLFileLoader(),
    ]
})


const schemaWithResolvers: GraphQLSchema = addResolversToSchema({
    schema,
    resolvers
})

export default schemaWithResolvers;
