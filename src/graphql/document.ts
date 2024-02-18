import { graphql } from '@/graphql/generated/gql';

export const query = graphql(/* GraphQL */ `
  query getPostQueryDocument {
    getPosts {
      id
      text
      created_at
      user {
        name
      }
    }
  }
`);

export const createPost = graphql(/* GraphQL */ `
  mutation createPost($userId: Int!, $text: String!) {
    createPost(input: { userId: $userId, text: $text }) {
      id
      text
      user {
        id
      }
      created_at
    }
  }
`);

export const createUser = graphql(/* GraphQL */ `
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(input: { name: $name, email: $email, password: $password }) {
      id
      name
      email
      password
    }
  }
`);
