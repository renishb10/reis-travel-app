import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const Categories = ({ categories, selectedCategory, selectCategory }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      className="-mr-[32px]"
      data={categories}
      renderItem={({ item }) => (
        <TouchableOpacity
          className={`mr-6 ${
            selectedCategory === item && 'border-b-2 border-violet-800'
          }`}
          onPress={() => selectCategory(item)}
        >
          <Text
            className={`text-slate-600 text-[12px] pt-4 pb-1 ${
              selectedCategory === item && 'text-black font-semibold'
            }`}
          >
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};
export default Categories;
