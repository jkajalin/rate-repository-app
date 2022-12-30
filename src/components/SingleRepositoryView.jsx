import { useParams } from "react-router";
import { Text } from "react-native";

import { useQuery } from '@apollo/client';
import { GET_REPOSITORY_BY_ID } from "../graphql/queries";
// eslint-disable-next-line no-unused-vars
import RepositoryListItem from "./RepositoryListItem";
import SingleRepositoryListItem from "./SingleRepositoryListItem";
//import { useEffect } from "react";

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
    console.log( data )
  }
  */

  return (
    <>
    {/* <Text>{id}</Text> */}
    { !data.repository? null : <SingleRepositoryListItem item={data.repository} showGitBtn={true} /> }
   
    </>
  )
}

export default SingleRepositoryListItemView