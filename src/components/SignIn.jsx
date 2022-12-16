import React from 'react';
import { useNavigate } from 'react-router-native';
// eslint-disable-next-line no-unused-vars
import { Button, Pressable, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import Text from './Text';
import * as yup from 'yup';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';

// eslint-disable-next-line no-unused-vars
//import AuthStorage from '../utils/authStorage';


//const authStorage = new AuthStorage()

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});


// eslint-disable-next-line no-unused-vars
const LoginForm = ( { onSubmit, ...props } ) => (
  <Formik
    initialValues={{ username: '', password: '' }}
    onSubmit={ onSubmit }
    //onSubmit={ values => console.log(values) }
    validationSchema={ validationSchema }
  >
    {/* eslint-disable-next-line no-unused-vars */}
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <FormikTextInput
          name='username'
          //onChangeText={handleChange('username')}
          //onBlur={handleBlur('username')}
          //value={values.username}
          placeholder='Usename'
          style={ theme.textInputBox }          
        />
        <FormikTextInput
          name='password' 
          secureTextEntry={true}
          //onChangeText={handleChange('pswd')}
          //onBlur={handleBlur('pswd')}
          //value={values.pswd}
          placeholder='Password'
          style={ theme.textInputBox }
        />
        {/* <Button onPress={handleSubmit} title="Sign in" /> */}
        <Pressable onPress={handleSubmit} style={ theme.buttonBox } ><Text style={ theme.buttonText } >Sign in</Text></Pressable>
      </View>
    )}
  </Formik>
);

const SignIn = () => {

  const [signIn] = useSignIn();
  const navigate = useNavigate();
 

  const onSubmit = async (values) => {
    const { username, password } = values;
    
    //console.log( 'loginSubmit: ', username, password)

    try {
      const { data } = await signIn({ username, password });
      //console.log(data);      
      
      if(data){
        navigate('/')
      }      
            
    } catch (e) {
      console.log(e);
    }
  };

  return <>
  <View style={ theme.signInView }>
    <Text>The sign in view</Text>
    <LoginForm onSubmit={onSubmit} />

  </View>      
  </>;
};

export default SignIn;