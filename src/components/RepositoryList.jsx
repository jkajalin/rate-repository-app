import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryListItem from './RepositoryListItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;


const RepositoryList = () => {
  const { repositories } = useRepositories();

  /*
  if( repositories ){
    //console.log( repositories )    
  }else{
    console.log('foobar')
  }  
  */
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}      
      
      renderItem={RepositoryListItem}
      keyExtractor={item => item.id}
      // other props
    />
  );
};

export default RepositoryList;