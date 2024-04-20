import { EvilIcons } from '@expo/vector-icons';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

const AttractionCard = ({ imageSrc, title, subTitle, classNames }) => {
  const { width } = Dimensions.get('window');
  const styles = StyleSheet.create({
    image: {
      width: (width - 102) / 2,
      height: 120,
      borderRadius: 15,
    },
  });

  return (
    <View
      className={`p-1 border-2 border-slate-200 rounded-[15px] mb-3 ${classNames}`}
    >
      <Image source={{ uri: imageSrc }} style={styles.image} />
      <Text className="text-[12px] font-medium ml-1 mt-2">{title}</Text>
      <View className="flex flex-row items-center ml-0.5 my-1">
        <EvilIcons name="location" size={12} color="#475569" />
        <Text className="text-[10px] text-slate-600 font-light">
          {subTitle}
        </Text>
      </View>
    </View>
  );
};

export default AttractionCard;
