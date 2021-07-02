import React, {useState} from 'react'
import { View, Text, TextInput, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import countryList from 'country-list';
import styles from './styles';
import Button from '../../components/Button';

const countries = countryList.getData();

const AddressScreen = () => {
  const [country, setCountry]  = useState(countries[1].code);
  const [fullname, setFullname] = useState('');
  const [phone, setPhonenumber ] = useState('');
  const [address, setAddress ] = useState('');
  const [addressError, setAddressError] = useState('Invalid add');
  const [city, setCity ] = useState('');

  // const {state, setState} = useState({
  //   country: '',
  //   fullname: '',
  // })


  console.log(fullname);

  const onCheckout = () => {
    if(addressError) {
      Alert.alert('Fix all field errors before submitting');
    }

    if(!fullname) {
      Alert.alert('Pleasse fill in the fullname');
      return;
    }

    if(!phone) {
      Alert.alert('Please fill phone number');
      return;
    }
    console.warn('Success. Checkout ');
  }

  const validateAddress = () => {
    if (address.length < 3) {
      setAddressError('Address is too short');
    }

    if(address.length > 10) {
      setAddressError('Address is too long');
    }
  }

  return (
    <KeyboardAvoidingView
       behavoir={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
    <ScrollView style={styles.root}>
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
        onEndEditing={validateAddress}
        onChangeText={(text) => {
          setAddress(text);
          setAddressError('')
        }}
        />
        {!!addressError && (
          <Text style={styles.errorLabel}>{addressError}</Text>
        )}
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

      <Button text='Checkout' onPress={onCheckout} />
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;
