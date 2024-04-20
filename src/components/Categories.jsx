import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const Categories = ({ categories, selectedCategory, selectCategory }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      className="-mr-[64px] mb-4"
      data={categories}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          className={`mr-6 ${
            selectedCategory === item && 'border-b-2 border-violet-800'
          } ${index === 0 && 'ml-2'}`}
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
