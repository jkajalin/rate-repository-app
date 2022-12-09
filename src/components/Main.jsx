import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
// eslint-disable-next-line no-unused-vars
import SubHeading from './Subheading';
// eslint-disable-next-line no-unused-vars
import Text from './Text';
import SignIn from './SignIn';
// eslint-disable-next-line no-unused-vars
import Br from './Br';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    padding: 10,
    maxWidth: 500,
    backgroundColor: "gray",
  },
});

const Main = () => {
  return (
    <>    
    <AppBar />
    <View style={styles.container}>      
              
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/sign-in" element={<SignIn />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>      
      
    </View>

    </>
  );
};

export default Main;