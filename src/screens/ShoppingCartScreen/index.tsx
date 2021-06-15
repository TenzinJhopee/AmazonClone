import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import CartProductItem from '../../components/CartProductItem';
import QuantitySelector from '../../components/QuantitySelector';
import products from '../../data/cart';
import Button from '../../components/Button';

const ShoppingCart = () => {
  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );

  return (
    <View style={styles.page}>
      {/* <ProductItem item={products[1]} /> */}

      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Subtotal ({products.length} items):{' '}
              <Text style={{color: '#e47911', fontWeight: 'bold'}}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>
            <Button
              text="Processed to checkout"
              onPress={() => console.warn('got')}
              containerStyles={{
                backgroundColor: '#f7e300',
                borderColor: '#c7b602',
              }}
            />
          </View>
        )}
        // keyExtractor={({ id }) => id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default ShoppingCart;
