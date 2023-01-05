import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation authenticate( $credentials: AuthenticateInput! ){
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`

export const REVIEW_REPOSITORY = gql`
  mutation createReview($review: CreateReviewInput) {
    createReview(review: $review) {
      id
      repositoryId
      userId
      createdAt
      text
      rating
      user {
        username
      }
    }
  }
`

export const CREATE_USER = gql`
  mutation createUser($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username    
    }
  }
`