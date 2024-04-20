import { View, Text } from 'react-native';

const Title = ({ text, classNames }) => {
  return (
    <View>
      <Text className={classNames}>{text}</Text>
    </View>
  );
};

export default Title;
