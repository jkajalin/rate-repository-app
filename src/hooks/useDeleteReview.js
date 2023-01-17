import { useMutation } from '@apollo/client';

import { DELETE_REVIEW } from '../graphql/mutations';
import { GET_ME } from '../graphql/queries';

const useDeleteReview = () => {
  // 'getCurrentUser($includeReviews: true)'
  const [mutate, result] = useMutation( DELETE_REVIEW, {
    refetchQueries: [
      {query: GET_ME,  variables: {includeReviews: true} }, // DocumentNode object parsed with gql
      
    ],
  } )
  

  const deleteReview = async (  reviewId  ) => {
    console.log('Id of review to delete: ', reviewId)
    
    const { data, error, loading } = await mutate({ 
      variables: { deleteReviewId: reviewId  } 
    })
    
        
    if(!loading && error){
      console.log(error)
    }
    /*
    if(!loading && data){
      console.log(data)
    }    
    */
    return {data}
  }

  return [deleteReview, result]

} 

export default useDeleteReview