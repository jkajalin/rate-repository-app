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
    reviews {
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
      }
    }
  }
`
