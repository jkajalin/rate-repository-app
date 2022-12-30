import { useParams } from "react-router";
// eslint-disable-next-line no-unused-vars
import { Text, StyleSheet, View } from "react-native";
import ReviewsContainer from "./ReviewContainer";

import { useQuery } from '@apollo/client';
import { GET_REPOSITORY_BY_ID } from "../graphql/queries";

import SingleRepositoryListItem from "./SingleRepositoryListItem";

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },  
});

const SingleRepositoryListItemView = () => {
  
  const { id } = useParams();

  const { data, error, loading } = useQuery(GET_REPOSITORY_BY_ID, {
    variables: { "repositoryId": id },
    fetchPolicy: 'cache-and-network',
  });
  if(loading){
    return <><Text>Loading...</Text></>
  }
  if(error){
    console.log(error)
  }   
  
  console.log( id )

  /*
  if(data){
    //console.log( data )
    //console.log( data.repository.reviews )
  }
  */

  return (
    <>
    {/* <Text>{id}</Text> */}
    { !data.repository? null : <SingleRepositoryListItem item={data.repository} showGitBtn={true} /> }
    
    <ReviewsContainer reviews={ data.repository.reviews }/>
    </>
  )
}

export default SingleRepositoryListItemView