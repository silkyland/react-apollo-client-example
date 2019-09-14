import gql from "graphql-tag";

export const GET_USERS = gql`
  {
    users {
      id
      avatar
      name
      username
      email
      password
      createdAt
      updatedAt
    }
  }
`;

export const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      avatar
      name
      username
      email
      password
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_USER = gql`
  mutation updateUser($input: userInput) {
    updateUser(input: $input) {
      id
      avatar
      name
      username
      email
      password
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;
