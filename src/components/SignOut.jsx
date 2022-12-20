import Text from "./Text"
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';


const SignOut = () => {

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const singOut = async () => {
    await authStorage.removeAccessToken()
    await apolloClient.resetStore();
  }

  singOut()  
  
  /*
  const getToken = async () => {
    const t = await authStorage.getAccessToken()
    if (t){
      console.log('fail', t)
    }
    else{
      console.log('success?', t)
    }
  }

  getToken()
  */
  //console.log('still visible?',authStorage.getAccessToken())   

  return <>
    <Text>User should be signed out now</Text>
  </>
}

export default SignOut