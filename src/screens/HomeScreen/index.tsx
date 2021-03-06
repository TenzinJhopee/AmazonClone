import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import ProductItem from '../../components/ProductItems';
import products from '../../data/products';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      {/* Render Product Compoentn */}
      {/* <ProductItem item={products[1]} /> */}

      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,

  },
});

export default HomeScreen;