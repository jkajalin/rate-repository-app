import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Heading from './Heading';
import AppBarTab from './AppBarTab';
import { Link } from "react-router-native";

// eslint-disable-next-line no-unused-vars
import useQueryMe from '../hooks/useQueryMe';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    display: 'flex',    
    flexDirection: 'row',
    flexWrap: 'wrap',
    height:100,
    alignItems: 'flex-end',
    
  },
  
});

const AppBar = () => {
  const user = useQueryMe();  
  //console.log( 'userQuery:', user )
  //console.log('me: ',me)
  
  return <View style={styles.container} >
    {/* ... */}
      <ScrollView horizontal>
        <AppBarTab><Link to="/"><Heading color="appBarText">Repositories </Heading></Link></AppBarTab>
        { user ? <AppBarTab><Link to="/sign-out"><Heading color="appBarText">Sign out</Heading></Link></AppBarTab>
        : <AppBarTab><Link to="/sign-in"><Heading color="appBarText">Sign in</Heading></Link></AppBarTab>
        }    
                
      </ScrollView>
    </View>;
};

export default AppBar;