import { Image, View, Text, StyleSheet }from 'react-native';
import theme from '../theme';
import NumeralListItem from './NumeralListItem';


//import Text from './Text';

// most styling defined in theme.js
const styles = StyleSheet.create({
  reposListItem: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    flexWrap: "wrap",
    padding: 10,
    paddingTop: 10,
    //height: '100%',
    //maxWidth: '100%',
    width: '100%', 
  },
});


const RepositoryListItem = ( { item } ) => {

  return(
   
      <View style={ styles.reposListItem } key={item.key} testID="repositoryItem">
        
        <Image style={ { width: 50, height: 50, marginRight: 20 } } source={{
            uri: `${item.ownerAvatarUrl}`,
          }} />
        <View style={ theme.itemBasics }>
          <View style={ theme.flexTitle }>
            <Text style={ theme.titleMain }>{item.fullName}</Text>
            
            
          </View>
          <Text style={ theme.titleNote }>{item.description}</Text>     
          <Text style={ theme.languageBox }>{item.language}</Text>
        </View> 
        <View style={theme.numerals}>        
          <Text style={ theme.nmrlItem }>Forks <NumeralListItem number={item.forksCount}  /></Text>
          <Text style={ theme.nmrlItem} >Starts <NumeralListItem number={item.stargazersCount}  /> </Text>
          <Text style={ theme.nmrlItem} >Rating <Text style={theme.rounded}>{item.ratingAverage}</Text></Text>
          <Text style={ theme.nmrlItem} >Reviews <NumeralListItem number={item.reviewCount}  /></Text>
        </View>
        
      </View>     
  );
}

export default RepositoryListItem;