// eslint-disable-next-line no-unused-vars
import { Pressable }from 'react-native';
import { Link } from "react-router-native";
// eslint-disable-next-line no-unused-vars
import theme from '../theme';
import RepositoryListItem from './RepositoryListItem';

//import Text from './Text';

// most styling defined in theme.js
/*
const styles = StyleSheet.create({
  singleReposListItem: {
    
  },
});
*/

const LinkedRepositoryListItem = ( {item} ) => {

  
  return(
    <>
    <Pressable>
      <Link to={`/repositories/${item.id}`}>
        <RepositoryListItem item={item} />
      </Link>
    </Pressable> 
    </>    
     
  );
}

export default LinkedRepositoryListItem;