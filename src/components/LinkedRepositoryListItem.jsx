import { Pressable }from 'react-native';
import { Link } from "react-router-native";
import RepositoryListItem from './RepositoryListItem';

const LinkedRepositoryListItem = ( {item} ) => {

  //console.log(item.id)  
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