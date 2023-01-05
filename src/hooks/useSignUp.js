import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-native';
import { CREATE_USER } from '../graphql/mutations';

// eslint-disable-next-line no-unused-vars
import useSignIn from '../hooks/useSignIn';

const useSignUp = () => {

  const navigate = useNavigate();
  const [mutate, result] = useMutation( CREATE_USER )
  const [signIn] = useSignIn();  

  const createUser = async ( { username, password } ) => {
    console.log('useCreateUser', username, password)
    
    const { data, error, loading } = await mutate({ variables: { user: { username, password } } })    
        
    if(!loading && error){
      console.log(error)
    }
    
    if(!loading && data){
      console.log(data)
      
      if(data.createUser.username){
        const signInData = await signIn({ username, password });
        //console.log( signInData )
        
        // this part could be relocated in useSignIn hook, and cleaned from here and SignIn view code
        if(signInData.data && signInData.data.authenticate.accessToken){        
          // supposed "the reviewed repositories list view"
          navigate('/')
        }  

      }
      
    }    
    
    return {data}
  }

  return [createUser, result]
}

export default useSignUp