import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS, REVIEWS } from './fragments';

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
      ...Reviews
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEWS}
`;

export const GET_REPOSITORIES_BY_ORDER = gql`
  query allRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection){
    repositories(orderBy: $orderBy, orderDirection: $orderDirection){
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

export const GET_FILTERED_REPOSITORIES = gql`
  query filteredRepositories($searchKeyword: String) {
    repositories(searchKeyword: $searchKeyword){
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

export const GET_REPOSITORIES_BY_ARGS = gql`
  query getRepositoriesBy{
    repositories{
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