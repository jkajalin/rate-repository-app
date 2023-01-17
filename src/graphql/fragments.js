import { gql } from '@apollo/client';

export const REPOSITORY_DETAILS = gql`
  fragment RepositorykDetails on Repository {
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
`

export const REVIEWS = gql`
  fragment Reviews on Repository {
    reviews(first: $first, after: $after) {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
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
`

export const REVIEWS_FIELDS = gql`
  fragment ReviewFields on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
  }
`

export const PAGE_INFO = gql`
  fragment PageInfo on Repository {
    pageInfo {
      endCursor
      startCursor
      hasNextPage
    }
  }
`

export const PAGE_INFO_FIELDS = gql`
  fragment PageInfoFields on PageInfo{    
    endCursor
    startCursor
    hasNextPage    
  }
`
