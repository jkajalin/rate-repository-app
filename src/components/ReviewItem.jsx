import { format } from 'date-fns'
// eslint-disable-next-line no-unused-vars
import { StyleSheet, View } from "react-native";
import Text from './Text';
// eslint-disable-next-line no-unused-vars
import theme from '../theme';

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
  
});

const ReviewItem = ( {review} ) => {
  // blaa
  //console.log( review )
  //console.log( review.createdAt )

  return(
    <View style={ { color: 'black', backgroundColor: 'white', padding: 5 } } >
      <Text style={ theme.roundedRating } fontSize={'heading'}>{ review.rating }</Text>
      <View style={ theme.reviewDetail }>
        <Text fontWeight={'bold'} >{ review.user.username }</Text>
        <Text color={'textSecondary'} styles={ { padding: 5 } } >{ format( new Date(review.createdAt), 'dd.MM.yyyy') }</Text>
        <Text styles={ { padding: 5 } }>{ review.text }</Text> 
      </View>         
    </View>
    
  )
}

export default ReviewItem