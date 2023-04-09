import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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

export type CreateEmployeesInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type CreateUserInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Employees = {
  __typename?: 'Employees';
  _id: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEmployees: Employees;
  createUser: User;
};


export type MutationCreateEmployeesArgs = {
  createEmployeesData: CreateEmployeesInput;
};


export type MutationCreateUserArgs = {
  createUserData: CreateUserInput;
};

export type Query = {
  __typename?: 'Query';
  employees: Array<Employees>;
  user: User;
};


export type QueryUserArgs = {
  _id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  username: Scalars['String'];
};

export type CreateUserMutationVariables = Exact<{
  createUserData: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', _id: string, username: string } };

export type CreateEmployeesMutationVariables = Exact<{
  createEmployeesData: CreateEmployeesInput;
}>;


export type CreateEmployeesMutation = { __typename?: 'Mutation', createEmployees: { __typename?: 'Employees', _id: string, firstName: string, lastName: string, email: string } };

export type EmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type EmployeesQuery = { __typename?: 'Query', employees: Array<{ __typename?: 'Employees', _id: string, firstName: string, lastName: string, email: string }> };

export const CreateUserDocument = gql`
    mutation createUser($createUserData: CreateUserInput!) {
  createUser(createUserData: $createUserData) {
    _id
    username
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    document = CreateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateEmployeesDocument = gql`
    mutation createEmployees($createEmployeesData: CreateEmployeesInput!) {
  createEmployees(createEmployeesData: $createEmployeesData) {
    _id
    firstName
    lastName
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateEmployeesGQL extends Apollo.Mutation<CreateEmployeesMutation, CreateEmployeesMutationVariables> {
    document = CreateEmployeesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EmployeesDocument = gql`
    query employees {
  employees {
    _id
    firstName
    lastName
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EmployeesGQL extends Apollo.Query<EmployeesQuery, EmployeesQueryVariables> {
    document = EmployeesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }