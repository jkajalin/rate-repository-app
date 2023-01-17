import { FlatList, View, StyleSheet, Pressable, Text, Modal } from 'react-native';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';

import useSortedRepositories from '../hooks/useSortedRepositories';
import useFilteredRepositories from '../hooks/useFilteredRepositories';

import LinkedRepositoryListItem from './LinkedRepositoryListItem';
import {Picker} from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';

import theme from '../theme';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  sortSelect: {
    backgroundColor: "gray",
    padding: 10,          
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
    maxWidth: 480,          
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
    marginVertical: theme.sortBtn.marginVertical,
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
export const RepositoryListContainer = ( { repositories, onEndReach, ...props } ) => {

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
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      
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
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery] = useDebounce(searchQuery, 1000)
  
  const [ sortOrder, setSortOrder ] = useState( { orderBy: "CREATED_AT", orderDirection: "DESC" } )
  
  let { repositories, fetchMore } = useSortedRepositories( sortOrder, {first: 2} )
 
  const filteredRepositories  = useFilteredRepositories( debouncedQuery )

  const onChangeSearch = keywords => {
    //console.log('keywords: ',keywords) 
    setSearchQuery(keywords)
  }
  
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

  if( debouncedQuery && !filteredRepositories.loading){
    //console.log('filtered-data:', filteredRepositories )
    repositories = filteredRepositories.repositories
  }

  const onEndReach = () => {
    //console.log('fetchMore() until end');
    fetchMore();
  };

  return <>
    <View style={styles.sortSelectWrapper}>
      <Searchbar
        placeholder="Search"
        onChangeText={ onChangeSearch }
        value={searchQuery}
      />
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
    <RepositoryListContainer repositories={repositories} onEndReach={onEndReach} />
  </>
};

export default RepositoryList;