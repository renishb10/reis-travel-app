import { View, Text, SafeAreaView } from 'react-native';
import Title from '../components/Title';
import Categories from '../components/Categories';
import { useState } from 'react';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <SafeAreaView>
      <View className="m-[32px]">
        <Title text="Where do" classNames={'text-2xl text-violet-800'} />
        <Title
          text="you want to go?"
          classNames={'text-2xl text-violet-800 font-bold'}
        />

        <Title
          text="Explore Attractions"
          classNames="text-md text-black font-semibold mt-[40px] mb-[8px]"
        />

        <Categories
          categories={[
            'All',
            'Popular',
            'Historical',
            'Random',
            'Trending',
            'Exclusive',
          ]}
          selectedCategory={selectedCategory}
          selectCategory={(cat) => setSelectedCategory(cat)}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
