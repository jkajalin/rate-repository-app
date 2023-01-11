import { FlatList, View, StyleSheet, Pressable, Text, Modal } from 'react-native';
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import useRepositories from '../hooks/useRepositories';
import useSortedRepositories from '../hooks/useSortedRepositories';
import LinkedRepositoryListItem from './LinkedRepositoryListItem';
import {Picker} from '@react-native-picker/picker';
// eslint-disable-next-line no-unused-vars
import AppBarTab from './AppBarTab';
import theme from '../theme';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  sortSelect: {
    //height: 50,
    backgroundColor: "gray",
    padding: 10,
    //display: 'flex',      
  },
  sortSelectWrapper: {
    //display: 'flex',
    //height: 50,
    //padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    //alignItems: "center", // muuttaa ios näkymän palkiksi
    //marginTop: 22,
    //height: 400,
    maxWidth: 480,
    //maxHeight: 300,
    ///padding: 10,        
  },
  modalView: {
    height: 100, // web puolella selkeämmin näkyville
    maxWidth: 400,    
    //margin: 10,
    padding: 10,
    backgroundColor: "gray",
    borderRadius: 2,    
    //alignItems: "center", // muuttaa ios näkymän palkiksi
    justifyContent: "center",
    shadowColor: theme.shadow.shadowColor,
    shadowOffset: theme.shadow.shadowOffset,
    shadowOpacity: theme.shadow.shadowOpacity,
    shadowRadius: theme.shadow.shadowRadius,
    elevation: theme.shadow.elevation,
  },
  sortBtn: {
    height: theme.sortBtn.height, 
    padding: theme.sortBtn.padding, 
    margin: theme.sortBtn.margin, 
    borderColor: theme.sortBtn.borderColor, 
    borderWidth: theme.sortBtn.borderWidth, 
    borderRadius: theme.sortBtn.borderRadius,
    shadowColor: theme.shadow.shadowColor,
    shadowOffset: theme.shadow.shadowOffset,
    shadowOpacity: theme.shadow.shadowOpacity,
    shadowRadius: theme.shadow.shadowRadius,
    elevation: theme.shadow.elevation, 
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

// eslint-disable-next-line no-unused-vars
/*
const PickerWrapper = () => {
  
  const [ sortOrder, setSortOrder ] = useState()

  return(
    <View >
          
      <Picker 
        selectedValue={sortOrder}
        // eslint-disable-next-line no-unused-vars
        onValueChange={ ( itemValue, itemIndex ) => 
          setSortOrder(itemValue)
        }  
      >
        <Picker.Item label='Latest repositories' value='CREATED_AT'/>
        <Picker.Item label='Highest rated' value='RATING_AVERAGE'/>
        <Picker.Item label='Lowest rated' value='LOWEST_RATED'/>  
      </Picker>
      
    </View>
  ) 
}
*/
export const RepositoryListContainer = ( { repositories } ) => {

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator} 
      renderItem={LinkedRepositoryListItem}
      keyExtractor={item => item.id}
      // other props
    />
  );
}

// this alternative could be used as sortOrder state
// eslint-disable-next-line no-unused-vars
const sortEnum = {
  LATEST_REPOSITORIES: { orderBy: "CREATED_AT", orderDirection: "DESC" },
  HIGHEST_RATED: { orderBy: "RATING_AVERAGE", orderDirection: "DESC" },
  LOWEST_RATED:  { orderBy: "RATING_AVERAGE", orderDirection: "ASC" },
}

const RepositoryList = () => {

  const [modalVisible, setModalVisible] = useState(false);
  
  const [ sortOrder, setSortOrder ] = useState( { orderBy: "CREATED_AT", orderDirection: "DESC" } )
  //const { repositories } = useRepositories()
  const { repositories } = useSortedRepositories( sortOrder )
  
  //console.log( 'sort order:', sortOrder )
  let sortLabel = ''

  if( sortOrder.orderBy === "CREATED_AT" ){
    sortLabel = 'Latest repositories'
  }
  if( sortOrder.orderBy === "RATING_AVERAGE" && sortOrder.orderDirection === "DESC" ){
    sortLabel = 'Highest rated'
  }
  if( sortOrder.orderBy === "RATING_AVERAGE" && sortOrder.orderDirection === "ASC" ){
    sortLabel = 'Lowest rated'
  }
  //console.log(sortLabel)

  return <>
    <View style={styles.sortSelectWrapper}>
      <Pressable onPress={ () => setModalVisible(true) }  style={ styles.sortBtn }><Text>&#9660; {sortLabel}</Text></Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Picker style={styles.sortSelect}
              selectedValue={ JSON.stringify(sortOrder) }
              // eslint-disable-next-line no-unused-vars
              onValueChange={ ( itemValue, itemIndex ) => {
                  setSortOrder( JSON.parse(itemValue) )
                  setModalVisible(!modalVisible) 
                }                
              }  
            >
              <Picker.Item label='Latest repositories' value={ JSON.stringify( { "orderBy": "CREATED_AT", "orderDirection": "DESC" } ) } />
              <Picker.Item label='Highest rated' value={ JSON.stringify( { "orderBy": "RATING_AVERAGE", "orderDirection": "DESC" } ) } />  
              <Picker.Item label='Lowest rated' value={ JSON.stringify( { "orderBy": "RATING_AVERAGE", "orderDirection": "ASC" } ) } />
            </Picker>
          </View>
        </View>
      </Modal>
        
      
    </View>
    <RepositoryListContainer repositories={repositories} />
  </>
};

export default RepositoryList;