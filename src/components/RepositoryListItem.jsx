import { Image, Text, View, StyleSheet }from 'react-native';
import theme from '../theme';
import NumeralListItem from './NumeralListItem';


const styles = StyleSheet.create({
  reposListItem: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    flexWrap: "wrap",
    padding: 10,
    paddingTop: 10,
  },
});


const RepositoryListItem = ( {item} ) => {

  return(
    
    <View style={ styles.reposListItem } key={item.key}>
      
      <Image style={ { width: 50, height: 50, marginRight: 20 } } source={{
          uri: `${item.ownerAvatarUrl}`,
        }} />
      <div style={ theme.itemBasics }>
        <div style={ theme.flexTitle }>
          <Text style={ theme.titleMain }>{item.fullName}</Text>
          
          
        </div>
        <Text style={ theme.titleNote }>{item.description}</Text>     
        <Text style={ theme.languageBox }>{item.language}</Text>
      </div> 
      <div style={theme.numerals}>        
        <Text style={ theme.nmrlItem }>Forks <NumeralListItem number={item.forksCount}  /></Text>
        <Text style={ theme.nmrlItem} >Starts <NumeralListItem number={item.stargazersCount}  /> </Text>
        <Text style={ theme.nmrlItem} >Rating <Text style={theme.rounded}>{item.ratingAverage}</Text></Text> {/* Assuming rating cant be over 100 */}
        <Text style={ theme.nmrlItem} >Reviews <NumeralListItem number={item.reviewCount}  /></Text>
      </div>
           
      
    </View>
    
  );
}

export default RepositoryListItem;