import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';

import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    // eslint-disable-next-line no-unused-vars

    const { data } = await mutate({ variables: { credentials: { username, password } } })
    
    if(data){
      //console.log(data.authenticate.accessToken)
      await authStorage.setAccessToken(data.authenticate.accessToken)
      apolloClient.resetStore();
    }    
    
    return {data}
  };

  return [signIn, result];
};

export default useSignIn