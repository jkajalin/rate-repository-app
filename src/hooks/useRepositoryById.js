import { useQuery } from '@apollo/client';
import { GET_REPOSITORY_BY_ID } from "../graphql/queries";

const useRepositoryById = ( id ) => {

  const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY_BY_ID, {
    variables: { repositoryId: id, first:2 },
    fetchPolicy: 'cache-and-network',
  })
  if(error){
    console.log(error)
  }

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        repositoryId: id, 
        first:2,
      },
    });
  };
  
  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  }
}

export default useRepositoryById