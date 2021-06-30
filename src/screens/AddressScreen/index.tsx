import React, {useState} from 'react'
import { View, Text, TextInput,Button} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import countryList from 'country-list';
import styles from './styles';

const countries = countryList.getData();

const AddressScreen = () => {
  const [country, setCountry]  = useState(countries[1].code);
  const [fullname, setFullname] = useState('');
  const [phone, setPhonenumber ] = useState('');
  const [address, setAddress ] = useState('');
  const [city, setCity ] = useState('');

  console.log(fullname);

  const onCheckout = () => {
    if(!fullname) {
      Alert.alert('Pleasse fill in the fu');
      return;
    }
    console.warn('Success down');
  }

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Picker
         onValueChange={setCountry}
         selectedValue={country}
        >
        {countries.map(country => (
          <Picker.Item value={country.code} label={country.name} />
        ))} 
        </Picker>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Full name (First and Last Name) </Text>
        <TextInput 
        style={styles.input}
        placeholder="Full name"
        value={fullname}
        onChangeText={setFullname}
        />
      </View>

      {/* Phone number */}
       <View style={styles.row}>
        <Text style={styles.label}>Phone number </Text>
        <TextInput 
        style={styles.input}
        placeholder="Phone number"
        value={phone}
        onChangeText={setPhonenumber}
        keyboardType={'phone-pad'}
        />
      </View>
      {/* Address */}
       <View style={styles.row}>
        <Text style={styles.label}>Address</Text>
        <TextInput 
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        />
      </View>

       {/* Address */}
       <View style={styles.row}>
        <Text style={styles.label}>City</Text>
        <TextInput 
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
        />
      </View>

      <Button text='Checkout' onPress={onCheckout} />
      
    </View>
  );
};

export default AddressScreen;
