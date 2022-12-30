import { FlatList, View, StyleSheet } from 'react-native';
// eslint-disable-next-line no-unused-vars
import RepositoryListItem from './RepositoryListItem';
import useRepositories from '../hooks/useRepositories';
import LinkedRepositoryListItem from './LinkedRepositoryListItem';

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
      
      renderItem={LinkedRepositoryListItem}
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