import { StyleSheet, View, Platform } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

// eslint-disable-next-line no-unused-vars
import Text from './Text';
import SignIn from './SignIn';

import theme from '../theme';
import SignOut from './SignOut';
import SingleRepositoryListItemView from './SingleRepositoryView';
import NewReviewView from './NewReviewView';
import SignUp from './SignUpView';
import MyReviewsView from './MyReviewsView';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    padding: 10,
    maxWidth: 500,
    backgroundColor: "gray",
  },
  text: {    
    fontFamily: Platform.select({
      android: theme.fonts.android,
      ios: theme.fonts.ios,
      default: theme.fonts.main,
    }),    
  },
});

const Main = () => {
  return (
    <>    
    <AppBar />
    <View style={ [styles.container, styles.text] }>      
              
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/sign-in" element={<SignIn />} exact />
        <Route path="/sign-up" element={<SignUp />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/sign-out" element={<SignOut />} exact />
        <Route path="/repositories/:id" element={<SingleRepositoryListItemView />} exact/>
        <Route path="/create-review" element={<NewReviewView />} exact />
        <Route path="/myreviews" element={<MyReviewsView />} exact />
      </Routes>      
      
    </View>

    </>
  );
};

export default Main;