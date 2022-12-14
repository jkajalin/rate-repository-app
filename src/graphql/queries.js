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

// other queries...