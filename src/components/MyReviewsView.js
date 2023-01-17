import { Text } from "react-native";
import useQueryMe from '../hooks/useQueryMe';
import ReviewsContainer from "./ReviewContainer";

const MyReviewsView = () => {
  
  const [user] = useQueryMe( {includeReviews: true} );  
   
  // && !reviewUser
  if(user && user.reviews ){
    //console.log('MyReviews',user)
    //setReviewUser(user)
    return <>
      <Text>Your reviews:</Text>
      <ReviewsContainer reviews={ user.reviews }  />
    </>
  }else{
    return <>
    <Text>Loading...</Text>
    <Text>Available only once, why...</Text>    
    <Text>fail</Text> 
    </>
  }
  
}

export default MyReviewsView