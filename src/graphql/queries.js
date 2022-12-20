import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query allRepositories{
    repositories {
      totalCount
      edges {
        node {
          id                   
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
        }        
      }
      
    }
  }
`;

export const GET_ME = gql`
  {
    me {
      id
      username
    }
  }
`;

// other queries...