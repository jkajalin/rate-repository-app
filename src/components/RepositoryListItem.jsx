import { Text, View }from 'react-native';

const RepositoryListItem = ( {item} ) => {

  return(
    
    <View style={{ backgroundColor: 'white' }} key={item.key}>
      <Text>---</Text>
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Starts: {item.stargazersCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      
    </View>
    
  );
}

export default RepositoryListItem;