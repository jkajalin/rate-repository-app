import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Heading from './Heading';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    display: 'flex',    
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 80,
    alignItems: 'flex-end',
    // ...
  },
  // ...
});

const AppBar = () => {
  return <View style={styles.container} >
    {/* ... */}    
    <AppBarTab><Heading color="appBarText">Repositories</Heading></AppBarTab>
    </View>;
};

export default AppBar;