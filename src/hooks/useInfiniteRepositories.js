//import { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES_BY_ORDER } from '../graphql/queries';

// useRepositories do not like to be async, if async, result: fail. At least if there no await around.
const useInfiniteRepositories = ( variables ) => {
  //const [repositories, setRepositories] = useState();
    
  const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES_BY_ORDER, {
    variables,
    fetchPolicy: 'cache-and-network',    
  });
  if(error){
    console.log(error)
  }
  
  /*
  useEffect( () => {    
        
    if(!loading && data.repositories){    
      
      //console.log('graphql: ')
      //console.log( data.repositories )
      setRepositories( data.repositories );      
      
    }

  }, [loading]);
  */
  
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
  
    if (!canFetchMore) {
      return;
    }
  
    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables              
      },
    });     
  };
  
  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };  
};

export default useInfiniteRepositories;