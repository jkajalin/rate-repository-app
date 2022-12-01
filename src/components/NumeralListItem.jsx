import { Text } from "react-native";
import theme from '../theme';

const roundedNumber = ( number ) => {
  return Math.floor(number / 100) / 10.0
}

const NumeralListItem = ( {number} ) => {

  return <Text style={theme.rounded}> { number >= 1000 ? roundedNumber(number)+'K' : number }</Text>;
} ;

export default NumeralListItem;