import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query allRepositories{
    repositories {
      totalCount
      edges {
        node {
          ...RepositorykDetails
        }        
      }
      
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const GET_ME = gql`
  {
    me {
      id
      username
    }
  }
`;

export const GET_REPOSITORY_BY_ID = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositorykDetails
      url
    }
  }
  ${REPOSITORY_DETAILS}
`;

// other queries...