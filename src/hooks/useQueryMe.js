import { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

const useQueryMe = () => {
  const [me, setMe] = useState( null );

  const { data, error, loading } = useQuery(GET_ME, {
    fetchPolicy: 'cache-and-network',    
  });
  if(error){
    console.log(error)
  }

  useEffect( () => {    
        
    if(!loading && data){    
      
      //console.log('graphql: ')
      //console.log( data.me )
      if (me !== data.me ){
        setMe( data.me )
      }  
      
    }

  }, [data]);
  
  
  return me;
}

export default useQueryMe;