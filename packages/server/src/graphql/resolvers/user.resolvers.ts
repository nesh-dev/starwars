import { IResolvers } from 'graphql-tools';
import { AuthenticationResponse, MutationRegisterArgs, QueryLoginArgs } from '../../generated/graphql';

export const userResolvers: IResolvers = {

    Query: {
        async login(_: void, args: QueryLoginArgs): Promise<AuthenticationResponse> {
            return {
                token: "token"
            }
        }
    },

    // Mutation: {
    //     async MutationRegisterArgs(_: void, args: MutationRegisterArgs): Promise<AuthenticationResponse> {
    //         return {
    //             token: "token"
    //         }
    //     }
    // }
}


