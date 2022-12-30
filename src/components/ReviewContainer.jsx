import {  View, FlatList, StyleSheet } from "react-native";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },  
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewsContainer = ( {reviews} ) => {

  const reviewNodes = reviews
    ? reviews.edges.map(edge => edge.node)
    : [];

  
  //console.log( reviewNodes )
 
  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}      
      
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={item => item.id}
      
      style={ {marginTop: 10}}
    />
  )
}

export default ReviewsContainer