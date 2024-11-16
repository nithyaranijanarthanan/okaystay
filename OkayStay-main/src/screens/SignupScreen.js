import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, CheckBox } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SignUpScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    userType:'',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    phone: '',
    state: '',
    city: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({});
  
 
  const handleStateChange = (selectedState) => {
    setForm({ ...form, state: selectedState, city: '' });
    setCities(states[selectedState] || []);
  };

  const validateForm = () => {
    const validationErrors = {};
    if (!form.userType) validationErrors.userType = "Please select user type.";
    if (!form.firstName) validationErrors.firstName = "First name is required.";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) validationErrors.email = "Enter a valid email.";
    if (!form.dob.match(/^\d{2}\/\d{2}\/\d{4}$/)) validationErrors.dob = "DOB must be in DD/MM/YYYY format.";
    if (!form.phone.match(/^\d{10}$/)) validationErrors.phone = "Phone number must be 10 digits.";
    if (!form.state) validationErrors.state = "State is required.";
    if (!form.city) validationErrors.city = "City is required.";
    if (form.password.length < 8 || !/[A-Z]/.test(form.password) || !/[0-9]/.test(form.password) || !/[^a-zA-Z0-9]/.test(form.password)) {
      validationErrors.password = "Password must be at least 8 characters, contain uppercase, number, and special character.";
    }
    if (form.password !== form.confirmPassword) validationErrors.confirmPassword = "Passwords do not match.";
    if (!form.acceptTerms) validationErrors.acceptTerms = "You must accept terms and privacy policy.";
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSignUp = () => {
    if (validateForm()) {
      navigation.navigate('Home'); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Sign Up</Text>
      <Picker
        selectedValue={form.userType}
        onValueChange={(itemValue) => setForm({ ...form, userType: itemValue })}
        style={styles.picker}
      >
        <Picker.Item label="Select User Type" value="" />
        <Picker.Item label="Landlord" value="landlord" />
        <Picker.Item label="Tenant" value="tenant" />
      </Picker>
      {errors.userType && <Text style={styles.errorText}>{errors.userType}</Text>}
      
      <View style={styles.row}>
        <View style={styles.flexInput}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={form.firstName}
            onChangeText={(text) => setForm({ ...form, firstName: text })}
          />
          {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}
        </View>
        <View style={styles.flexInput}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
          />
   
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Date of Birth (DD/MM/YYYY)"
        value={form.dob}
        onChangeText={(text) => setForm({ ...form, dob: text })}
        keyboardType="numeric"
      />
      {errors.dob && <Text style={styles.errorText}>{errors.dob}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="numeric"
        value={form.phone}
        onChangeText={(text) => setForm({ ...form, phone: text })}
      />
      {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

      <TextInput
        style={styles.input}
        placeholder="State"
        value={form.state}
        onFocus={() => {
          
        }}
        onChangeText={handleStateChange}
      />
      {errors.state && <Text style={styles.errorText}>{errors.state}</Text>}

      <TextInput
        style={styles.input}
        placeholder="City"
        value={form.city}
        editable={!!form.state}
        onChangeText={(text) => setForm({ ...form, city: text })}
      />
      {errors.city && <Text style={styles.errorText}>{errors.city}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={form.password}
        onChangeText={(text) => setForm({ ...form, password: text })}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={form.confirmPassword}
        onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
      />
      {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

      <View style={styles.row}>
        <CheckBox
          value={form.acceptTerms}
          onValueChange={() => setForm({ ...form, acceptTerms: !form.acceptTerms })}
        />
        <TouchableOpacity onPress={() => setForm({ ...form, acceptTerms: !form.acceptTerms })}>
          <Text style={styles.checkboxText}>I accept the </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
          <Text style={styles.link}>Terms of Use</Text>
        </TouchableOpacity>
        <Text style={styles.checkboxText}> & </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
          <Text style={styles.link}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
      {errors.acceptTerms && <Text style={styles.errorText}>{errors.acceptTerms}</Text>}

      <Button title="Sign Up" onPress={handleSignUp} />

      <View style={styles.loginRow}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  flexInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  checkboxText: {
    fontSize: 14,
  },
  link: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  signup:{
    color: 'green',
    fontSize: 20,
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  picker:{
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  }
});
