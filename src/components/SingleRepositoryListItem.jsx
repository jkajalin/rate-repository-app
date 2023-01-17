import { View, Text, StyleSheet, Pressable }from 'react-native';
import * as Linking from 'expo-linking';
import theme from '../theme';
import RepositoryListItem from './RepositoryListItem';

//import Text from './Text';

// most styling defined in theme.js

const styles = StyleSheet.create({
  singleReposListItem: {
    display: 'flex',
    //flexWrap: "wrap", // this setting drops all "numerals" out of reposListItem box 
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
        
      </> 
      }      
    </View>
    
  );
}

export default SingleRepositoryListItem;