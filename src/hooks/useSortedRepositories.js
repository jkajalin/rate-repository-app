import { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES_BY_ORDER } from '../graphql/queries';

// useRepositories do not like to be async, if async, result: fail. At least if there no await around.
const useSortedRepositories = ( sortOrder ) => {
  const [repositories, setRepositories] = useState();
    
  const { data, error, loading } = useQuery(GET_REPOSITORIES_BY_ORDER, {
    variables: sortOrder,
    fetchPolicy: 'cache-and-network',
  });
  if(error){
    console.log(error)
  }
  
  useEffect( () => {    
        
    if(!loading && data.repositories){    
      
      //console.log('graphql: ')
      //console.log( data.repositories )
      setRepositories( data.repositories );      
      
    }

  }, [loading]);   
  
  return { repositories, loading };  
};

export default useSortedRepositories;