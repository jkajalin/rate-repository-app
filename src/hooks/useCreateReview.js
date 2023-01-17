import { useMutation } from '@apollo/client';

import { REVIEW_REPOSITORY } from '../graphql/mutations';

const useCreateReview = () => {
  const [mutate, result] = useMutation( REVIEW_REPOSITORY )
  

  const createReview = async ( { ownerName, repositoryName, rating, text } ) => {
    console.log('useCreateReview, owner, repositoryName, rating: ', ownerName, repositoryName, rating)
    
    const { data, error, loading } = await mutate({ 
      variables: { review: { ownerName, repositoryName, "rating": Number(rating), text } } 
    })
    //const {data} = await mutate({ variables: { review: { ownerName, repositoryName, "rating": Number(rating), text } } })
        
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

  return [createReview, result]
}

export default useCreateReview