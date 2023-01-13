import { useParams } from "react-router";
// eslint-disable-next-line no-unused-vars
import { Text, StyleSheet, View } from "react-native";
import ReviewsContainer from "./ReviewContainer";

//import { useQuery } from '@apollo/client';
//import { GET_REPOSITORY_BY_ID } from "../graphql/queries";
import useRepositoryById from "../hooks/useRepositoryById";

import SingleRepositoryListItem from "./SingleRepositoryListItem";

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },  
});

const SingleRepositoryListItemView = () => {
  
  const { id } = useParams();
  const { repository, loading, fetchMore } = useRepositoryById( id )

  /*
  const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY_BY_ID, {
    variables: { repositoryId: id, first:2 },
    fetchPolicy: 'cache-and-network',
  });
  */
  if(loading){
    return <><Text>Loading...</Text></>
  }
  
  
  console.log( id )

  /*
  if(data){
    //console.log( data )
    //console.log( data.repository.reviews )
  }
  */  

  const onEndReach = () => {
    console.log('fetchMore() until end...');
    fetchMore()
  };

  return (
    <>
    {/* { !data.repository? null : <SingleRepositoryListItem item={data.repository} showGitBtn={true} /> } */}
    { !repository? null : <SingleRepositoryListItem item={repository} showGitBtn={true} /> }
    
    <ReviewsContainer reviews={ repository.reviews } onEndReach={onEndReach} />
    </>
  )
}

export default SingleRepositoryListItemView