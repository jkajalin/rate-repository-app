import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.errorText,
  },
  textInputBoxBc: {    
    border: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#586069', // ei toimi
  },
  errorInputBoxBc: {
    backgroundColor: 'mistyrose',    
    border: 'dotted',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#d73a4a', // ei toimi web puolella, ios ympäristössä oikein
    
  },
});

const FormikTextInput = ({ name, style, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  let textInputStyle = [];

  if( showError ){
    textInputStyle =
    [
      //style,    
      styles.errorInputBoxBc,
      style,    
    ];
    //console.log('required')
  }else{
    textInputStyle =
    [
      //style,    
      styles.textInputBoxBc,
      style,
    ];
    //console.log('correct inputs')
  }
  

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}                
        {...props}
        style={textInputStyle}
      />    
           
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;