import React from 'react';
import { Pressable, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import Text from './Text';
import * as yup from 'yup';
import theme from '../theme';
import useSignUp from '../hooks/useSignUp';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
  passwordConfirm: yup.string().oneOf( [yup.ref('password'), null] ).required('Password confirm is required'),
});

// eslint-disable-next-line no-unused-vars
export const SignUpForm = ( { onSubmit, ...props } ) => (
  <Formik
    initialValues={{ username: '', password: '', passwordConfirm: '' }}
    onSubmit={ onSubmit }
    //onSubmit={ values => console.log(values) }
    validationSchema={ validationSchema }    
  >
    {/* eslint-disable-next-line no-unused-vars */}
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <FormikTextInput
          name='username'          
          placeholder='Username'
          style={ theme.textInputBox }          
        />
        <FormikTextInput
          name='password' 
          secureTextEntry={true}
          placeholder='Password'
          style={ theme.textInputBox }
        />
        <FormikTextInput
          name='passwordConfirm' 
          secureTextEntry={true}
          placeholder='Confirm password'
          style={ theme.textInputBox }
        />        
        <Pressable onPress={handleSubmit} style={ theme.buttonBox } ><Text style={ theme.buttonText } >Sign up</Text></Pressable>
      </View>
    )}
  </Formik>
);

const SignUp = () => {
  
  const [signUp] = useSignUp(); 
  
  //const navigate = useNavigate(); 

  const onSubmit = async (values) => {
    const { username, password } = values;
    
    console.log( 'signUp onSubmit: ', username, password )

    try {
      // eslint-disable-next-line no-unused-vars
      const { data } = await signUp({ username, password });
      //console.log('login: ',data);      
      /*
      if(data && data.authenticate.accessToken){        
        //console.log('SignIn token: ',data.authenticate.accessToken)
        //console.log('navigate /')
        //navigate('/')
      }
      */      
            
    } catch (e) {
      console.log(e);
    }
  };

  return <>
  <View style={ theme.signInView }>
    <Text>The sign up view</Text>
    <SignUpForm onSubmit={onSubmit} />

  </View>      
  </>;
};

export default SignUp;