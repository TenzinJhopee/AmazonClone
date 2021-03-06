import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  root: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    padding: 5,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    flex: 2,
    resizeMode: 'contain',
    height: 150,
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    paddingLeft: 5,
    textDecorationLine: 'line-through',
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },

  star: {
    margin: 2,
  },
  quantityContainer: {
    marginLeft: 30,
    marginTop: 10,
  },
});

export default styles;