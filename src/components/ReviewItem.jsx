import { format } from 'date-fns'
import { StyleSheet, View, Pressable, Alert } from "react-native";
import Text from './Text';
import { useNavigate } from "react-router-native";
import useDeleteReview from '../hooks/useDeleteReview';

// eslint-disable-next-line no-unused-vars
import theme from '../theme';

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
  ownerwBtnWrapper: {
    flexDirection: 'row', 
    alignSelf: 'stretch',
  }
});

const ReviewItem = ( {review} ) => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview()

  const handleDelete = () => {
    console.log('deleting: ', review.id)
    try {      
        deleteReview( review.id )  
    } catch (error) {
      console.log(error)
    }
  }

  const delAlert = () =>
    Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Delete', onPress: () => { 
          handleDelete()
        }       
      },
    ])

  //console.log( review )
  //console.log( review.createdAt )
  // <Link to={`/repositories/${review.repositoryId}`}> </Link>
  return(
    <View style={ theme.reviewView } >
      <Text style={ theme.roundedRating } fontSize={'heading'}>{ review.rating }</Text>
      <View style={ theme.reviewDetail }>
        <Text fontWeight={'bold'} >{ review.repositoryId ? review.repositoryId : review.user.username}</Text>
        <Text color={'textSecondary'} styles={ { padding: 5 } } >{ format( new Date(review.createdAt), 'dd.MM.yyyy') }</Text>
        <Text styles={ { padding: 5 } }>{ review.text }</Text>
        {review.repositoryId? <View style={ styles.ownerwBtnWrapper  }>
            <Pressable onPress={ () => { navigate(`/repositories/${review.repositoryId}`) } } style={ theme.buttonBox } ><Text style={ theme.buttonText } >View repository</Text></Pressable>
            <Pressable onPress={ delAlert } style={ theme.redButtonBox } ><Text style={ theme.buttonText } >Delete review</Text></Pressable>
          </View>  : null} 
      </View>         
    </View>
    
  )
}

export default ReviewItem