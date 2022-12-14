// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

// useRepositories do not like to be async, if async, result: fail. At least if there no await around.
const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  //const [loading, setLoading] = useState(false);
  
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });
  if(error){
    console.log(error)
  }

  // eslint-disable-next-line no-unused-vars
  const fetchRepositories = async () => {
    //setLoading(true);
    
    //const response = await fetch('http://192.168.8.106:5000/api/repositories');
    //const json = await response.json();
    console.log('Trying disabled Fetch API: ')
    //console.log(json)
    //setLoading(false);
    //setLoading(loading);
    //setRepositories(json);
    //setRepositories(data);
  };
  
  useEffect( () => {
    //fetchRepositories();
        
    if(!loading && data.repositories){    
      
      //console.log('graphql: ')
      //console.log( data.repositories )
      setRepositories( data.repositories );      
      
    }

  }, [loading]);   
  
  return { repositories, loading, refetch: fetchRepositories };  
};

export default useRepositories;