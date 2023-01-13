import { gql } from '@apollo/client';
// eslint-disable-next-line no-unused-vars
import { REPOSITORY_DETAILS, REVIEWS, PAGE_INFO } from './fragments';

export const GET_REPOSITORIES = gql`
  query allRepositories{
    repositories {
      totalCount
      edges {
        node {
          ...RepositorykDetails
        }
        cursor        
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
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
  query Repository($repositoryId: ID!, $first: Int, $after: String) {
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
  query allRepositories( $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $first: Int, $after: String){
    repositories( orderBy: $orderBy, orderDirection: $orderDirection, first: $first, after: $after ){
      totalCount
      edges {
        node {
          ...RepositorykDetails
        }
        cursor        
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
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
        cursor        
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
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
        cursor                
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;