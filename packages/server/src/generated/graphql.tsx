import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthenticationResponse = {
  __typename?: 'AuthenticationResponse';
  token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
};

export type MutationRegisterArg = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Page = {
  page?: Maybe<Scalars['String']>;
};

export type Person = {
  __typename?: 'Person';
  name?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  mass?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  homeworld?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  login: AuthenticationResponse;
  people?: Maybe<Array<Person>>;
};


export type QueryLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type QueryPeopleArgs = {
  input?: Maybe<Page>;
};
