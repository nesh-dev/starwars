"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var user_resolvers_1 = require("./resolvers/user.resolvers");
var person_resolvers_1 = require("./resolvers/person.resolvers");
var resolveMap = lodash_1.merge(user_resolvers_1.userResolvers, person_resolvers_1.peopleResolvers);
exports["default"] = resolveMap;
