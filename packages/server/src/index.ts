import express from 'express'; 
import { ApolloServer } from 'apollo-server-express'; 
import schema from './graphql/schemaMapper'; 
import { environment } from './enviroment';





const app = express(); 

const server = new ApolloServer({ 
    schema, 
    introspection: environment.apollo.introspection,
    playground: environment.apollo.playground
})

server.applyMiddleware({app, path: '/graphql'});

app.listen(environment.port, () => { 
    console.log(`Graphql now running on port ${environment.port}`);
})
