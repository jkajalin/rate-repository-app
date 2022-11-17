import Text from './Text';

const SubHeading = ({ ...props }) => {
  

  //return <Text style={textStyle} {...props} />;
  return <Text fontWeight="bold" fontSize="subheading" {...props}></Text>;
};

export default SubHeading;