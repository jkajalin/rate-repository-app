import { useParams } from "react-router";
import { Text} from "react-native";
import ReviewsContainer from "./ReviewContainer";
import useRepositoryById from "../hooks/useRepositoryById";

import SingleRepositoryListItem from "./SingleRepositoryListItem";


const SingleRepositoryListItemView = () => {
  
  const { id } = useParams();
  const { repository, loading, fetchMore } = useRepositoryById( id )

  if(loading){
    return <><Text>Loading...</Text></>
  } 
  
  //console.log( id )

  const onEndReach = () => {
    //console.log('fetchMore() until end...');
    fetchMore()
  };

  return (
    <>   
    { !repository? null : <SingleRepositoryListItem item={repository} showGitBtn={true} /> }
    
    <ReviewsContainer reviews={ repository.reviews } onEndReach={onEndReach} />
    </>
  )
}

export default SingleRepositoryListItemView