import React from 'react';
import { useNavigate } from 'react-router-native';
// eslint-disable-next-line no-unused-vars
import { Button, TextInput, View, Pressable, Text } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import theme from '../theme';
import useCreateReview from '../hooks/useCreateReview';

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner username is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup.number().required('Rating is a required number between 0 and 100').min(0).max(100).integer(),
  //review: yup.string(),
});

// eslint-disable-next-line no-unused-vars
const CreateReviewForm = ( {onSubmit, ...props} ) => (
  <Formik
    initialValues={{ ownerName: '', repositoryName: '', rating: '', text: '', }}
    onSubmit={ onSubmit }
    //onSubmit={ values => console.log(values) }
    validationSchema={ validationSchema }    
  >
    {/* eslint-disable-next-line no-unused-vars */}
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <FormikTextInput
          name='ownerName'          
          placeholder='Repository owner username'
          style={ theme.textInputBox }          
        />
        <FormikTextInput
          name='repositoryName'          
          placeholder='Repository name'
          style={ theme.textInputBox }
        />
        <FormikTextInput
          name='rating'         
          placeholder='Rating between 0 and 100'
          style={ theme.textInputBox }
        />
        <FormikTextInput
          name='text'         
          placeholder='Review text'
          style={ theme.textInputBox }
          multiline={true}
        />
        {/* <Button onPress={handleSubmit} title="Foobar submit" /> */}
        <Pressable onPress={ handleSubmit } style={ theme.buttonBox } ><Text style={ theme.buttonText } >Create a review</Text></Pressable>
      </View>
    )}
  </Formik>
)

const NewReviewView = () => {

  const [createReview] = useCreateReview()  
  const navigate = useNavigate(); 

  const onSubmit = async ( values ) => {
    //console.log('form submit values', values)
    const { ownerName, repositoryName, rating, text } = values;
    //console.log('deconstruckt, owner, rating', ownerName, rating)

    try{
      const { data } = await createReview( { ownerName, repositoryName, rating, text } )      

      if( data ){
        //console.log('new review', data )        
        if( data.createReview.repositoryId ){
          //console.log(data.createReview.repositoryId)
          const repPath = '/repositories/'.concat(data.createReview.repositoryId)
          //console.log(repPath)
          navigate(repPath)
        }   
      }
      else{
        console.log( 'fail' )
      }
      
    }catch (e) {
      console.log(e);
    }

    
  }

  return <View style={ theme.signInView }>
    <Text>Foobar form below</Text>
    <CreateReviewForm onSubmit={onSubmit} />
  </View>
}

export default NewReviewView