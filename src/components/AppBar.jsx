import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Heading from './Heading';
import AppBarTab from './AppBarTab';
import { Link } from "react-router-native";

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
  return <View style={styles.container} >
    {/* ... */}
      <ScrollView horizontal>
        <AppBarTab><Link to="/"><Heading color="appBarText">Repositories </Heading></Link></AppBarTab>    
        <AppBarTab><Link to="/sign-in"><Heading color="appBarText">Sign in</Heading></Link></AppBarTab>
        
      </ScrollView>
    </View>;
};

export default AppBar;