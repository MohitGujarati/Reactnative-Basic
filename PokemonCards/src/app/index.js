import { StyleSheet, ScrollView, Text, View, FlatList, useState } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import PokemonCard from '../components/PokemonCard';
import pokemonList from '../../data.json';
import RNforms from '../components/ui/RNforms';
import RNnetworking from '../components/ui/RN_networking';




export default function Index() {

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* <RNforms /> */}
        <RNnetworking />
      </View>

    </SafeAreaView>
  )
}




const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: 'white',
  },
});


{/* 
  
  
export default function Index() {

  return (
    <SafeAreaView>
      {<FlatList
        data={pokemonList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PokemonCard
            pokemonID={item.id.toString()}
            name={item.name}
            image={item.image}
            type={item.type}
            hp={item.hp}
            moves={item.moves}
            weaknesses={item.weaknesses}
          />
        )}

        ItemSeparatorComponent={<View style={{ height: 12 }} />}
      // ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 12, marginBottom: 12 }}>No Pokemon Data Found, try again later </Text>}
      // ListFooterComponent={<Text style={{ textAlign: 'center', marginTop: 12, marginBottom: 12 }}>End of List</Text>}
      // ListHeaderComponent={<Text style={{ textAlign: 'center', marginTop: 12, marginBottom: 12 }}>Pokemon List</Text>}
      />

      }


    </SafeAreaView>
  )
}
  
  */}