// eslint-disable-next-line no-unused-vars
import { Image, View, Text, StyleSheet, Button, Pressable }from 'react-native';
import * as Linking from 'expo-linking';
// eslint-disable-next-line no-unused-vars
import theme from '../theme';
import RepositoryListItem from './RepositoryListItem';

//import Text from './Text';

// most styling defined in theme.js

const styles = StyleSheet.create({
  singleReposListItem: {
    display: 'flex',
    //flexWrap: "wrap",
    backgroundColor: 'white',
  },
  buttonStyles:{
    display: 'flex',
    padding: 5,
    margin: 10,
    //height: 30,
    backgroundColor: theme.colors.btnColor,    
    borderRadius: 8,
    alignItems: 'center',    
  },
  buttonText:{    
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',      
  }
});


const SingleRepositoryListItem = ( {item, showGitBtn} ) => {

  
  return(
    <View style={ styles.singleReposListItem } >
      <RepositoryListItem item={item} />
      { !showGitBtn? null : 
      <>
        <Pressable onPress={ () => { Linking.openURL(item.url) } } style={ styles.buttonStyles }><Text style={styles.buttonText} >Open in GitHub</Text></Pressable><Text>{item.url}</Text>
        {/*
        <Button style={ styles.buttonStyles }  onPress={ ()=>{} } title="Open in GitHub" />
        */}
      </> 
      }      
    </View>
    
  );
}

export default SingleRepositoryListItem;