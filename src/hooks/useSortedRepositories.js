//import { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES_BY_ORDER } from '../graphql/queries';

// useRepositories do not like to be async, if async, result: fail. At least if there no await around.
// ( sortOrder, variables )
const useSortedRepositories = ( sortOrder, variables ) => {
  //const [repositories, setRepositories] = useState();
  
  // { data, error, loading, fetchMore, ...result }
  const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES_BY_ORDER, {
    variables: {
      orderBy: sortOrder.orderBy,
      orderDirection: sortOrder.orderDirection,
      first: variables.first,
    },
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
        orderBy: sortOrder.orderBy,
        orderDirection: sortOrder.orderDirection,        
        first: variables.first,              
      },
    });          
    // setRepositories( data.repositories );            
  };
  
  
  // { repositories, loading, fetchMore: handleFetchMore, ...result }
  return { repositories: data?.repositories, loading, fetchMore: handleFetchMore, ...result };  
};

export default useSortedRepositories;