import { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

const useQueryMe = ( variables ) => {
  const [me, setMe] = useState( null );

  const { data, error, loading, refetch } = useQuery(GET_ME, {
    variables,
    fetchPolicy: 'cache-and-network',    
  });
  if(error){
    console.log(error)
  }

  useEffect( () => {    
        
    if(!loading && data){    
      
      //console.log('graphql: ')
      
      if ( me !== data.me ){
        //console.log('setMe, useQueryMe', data.me )
        setMe( data.me ) 
      }      
    }

  }, [data, variables]);
  
  return [me, refetch];
}

export default useQueryMe;