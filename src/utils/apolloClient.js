import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';


const APOLLO_URI = Constants.manifest.extra.apolloUri

console.log('connecting to', APOLLO_URI)

const httpLink = createHttpLink({
  // Replace the IP address part with your own IP address!
  uri: APOLLO_URI,  
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;