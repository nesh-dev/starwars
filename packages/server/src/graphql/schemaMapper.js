"use strict";
exports.__esModule = true;
require("graphql-import-node");
var userTypeDefs = require("./schemas/users.graphql");
var emptyTypeDefs = require("./schemas/empty.graphql");
var peopleTypeDefs = require("./schemas/people.graphql");
var resolverMap_1 = require("./resolverMap");
var graphql_tools_1 = require("graphql-tools");
var schema = graphql_tools_1.makeExecutableSchema({
    typeDefs: [emptyTypeDefs, userTypeDefs, peopleTypeDefs],
    resolvers: resolverMap_1["default"]
});
exports["default"] = schema;
