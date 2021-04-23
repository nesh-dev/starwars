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
  register: AuthenticationResponse;
};


export type MutationRegisterArgs = {
  RegisterArg: RegisterArg;
};

export type Page = {
  page: Scalars['String'];
};

export type Person = {
  __typename?: 'Person';
  name: Scalars['String'];
  height: Scalars['String'];
  mass: Scalars['String'];
  gender: Scalars['String'];
  homeworld: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  login: AuthenticationResponse;
  people: ResultObject;
  searchPeople: Array<Person>;
};


export type QueryLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type QueryPeopleArgs = {
  input: Page;
};


export type QuerySearchPeopleArgs = {
  input: SearchParams;
};

export type RegisterArg = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ResultObject = {
  __typename?: 'ResultObject';
  count: Scalars['Int'];
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
  results: Array<Person>;
};

export type SearchParams = {
  name: Scalars['String'];
};
