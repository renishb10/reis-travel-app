import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Text,
} from 'react-native';
import Title from '../components/Title';
import Categories from '../components/Categories';
import { useEffect, useState } from 'react';
import AttractionCard from '../components/AttractionCard';
import attractionsData from '../data/attractions.json';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [attractions, setAttractions] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const filteredData =
      selectedCategory === 'All'
        ? attractionsData
        : attractionsData.filter((a) =>
            a.categories.includes(selectedCategory)
          );
    setAttractions(filteredData);
  }, [selectedCategory]);

  return (
    <SafeAreaView className="m-[32px] flex-1">
      <FlatList
        data={attractions}
        style={{ flexGrow: 1 }}
        numColumns={2}
        keyExtractor={(attraction) => String(attraction?.id)}
        ListHeaderComponent={
          <>
            <View>
              <Title text="Where do" classNames={'text-2xl text-violet-800'} />
              <Title
                text="you want to go?"
                classNames={'text-2xl text-violet-800 font-bold'}
              />

              <Title
                text="Explore Attractions"
                classNames="text-md text-black font-semibold mt-[40px] mb-[8px]"
              />
            </View>

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
          </>
        }
        ListEmptyComponent={
          <Text className="text-xs text-center mt-12 text-slate-600">
            No items found.
          </Text>
        }
        renderItem={({ item: attraction, index }) => (
          <AttractionCard
            key={attraction.id}
            title={attraction.name}
            subTitle={attraction.city}
            navigateToAttraction={() =>
              navigation.navigate('Attraction', { attraction })
            }
            classNames={index % 2 === 0 && 'mr-3'}
            imageSrc={attraction.images?.length ? attraction.images[0] : null}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  attractionContainer: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default HomeScreen;
