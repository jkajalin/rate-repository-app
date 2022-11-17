import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SubHeading from './Subheading';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    padding: 10
  },
});

const Main = () => {
  return (
    <>
    <AppBar />
    <View style={styles.container}>
      
        
      
      
      <RepositoryList />
      
      <SubHeading>Bold subheading</SubHeading>
      <Text color="textSecondary">Text with secondary color</Text>
    </View>
    </>
  );
};

export default Main;