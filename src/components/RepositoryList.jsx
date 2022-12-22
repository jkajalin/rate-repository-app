import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryListItem from './RepositoryListItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ( { repositories } ) => {
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
}


const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />
};

export default RepositoryList;