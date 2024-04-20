import { Text, SafeAreaView } from 'react-native';

const AttractionScreen = ({ navigation, route }) => {
  const { attraction } = route?.params || {};

  return (
    <SafeAreaView>
      <Text onPress={() => navigation.goBack()}>Back</Text>
      <Text>{attraction?.name}</Text>
    </SafeAreaView>
  );
};

export default AttractionScreen;
