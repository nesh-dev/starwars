import { IResolvers } from 'graphql-tools';
import { AuthenticationResponse, RegisterArg, QueryLoginArgs } from '../../generated/graphql';

export const userResolvers: IResolvers = {

    Query: {
        async login(_: void, args: QueryLoginArgs): Promise<AuthenticationResponse> {
            return {
                token: "token"
            }
        }
    },
    Mutation: {
        async MutationRegisterArgs(_: void, args: RegisterArg): Promise<AuthenticationResponse> {
            return {
                token: "token"
            }
        }
    }
}


