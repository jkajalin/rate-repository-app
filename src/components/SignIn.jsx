import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Button, Pressable, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import Text from './Text';
import theme from '../theme';


// eslint-disable-next-line no-unused-vars
const LoginForm = props => (
  <Formik
    initialValues={{ username: '', pswd: '' }}
    onSubmit={values => console.log(values)}
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
          name='pswd' 
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

  return <>
  <View style={ theme.signInView }>
    <Text>The sign in view</Text>
    <LoginForm />

  </View>      
  </>;
};

export default SignIn;