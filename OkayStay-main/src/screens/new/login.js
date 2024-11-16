import React, { useState } from 'react';
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    TouchableOpacity, 
    TextInput,
    Alert 
} from 'react-native';

import * as RootNavigation from '../../navigation/RootNavigation';
import Button from '../../components/login/Button';

export default function Login({ navigation }) {
    const [passwordSecure, setPasswordSecure] = useState(true);
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [emailError, setEmailError] = useState('');
        const [passwordError, setPasswordError] = useState('');
        const [successMessage, setSuccessMessage] = useState('');
      
        const validateEmail = (email) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        };
      
        const validatePassword = (password) => {
          const hasUppercase = /[A-Z]/.test(password);
          const hasNumber = /[0-9]/.test(password);
          const hasSpecialChar = /[!@#$%^&*]/.test(password);
          const isLongEnough = password.length >= 8;
          return hasUppercase && hasNumber && hasSpecialChar && isLongEnough;
        };
      
        const handleLogin = () => {
          let valid = true;
          setEmailError('');
          setPasswordError('');
          setSuccessMessage('');
      
          if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            valid = false;
          }
          if (!validatePassword(password)) {
            setPasswordError(
              'Password must contain at least 8 characters, including an uppercase letter, a number, and a special character.'
            );
            valid = false;
          }
      
          if (valid) {
            setSuccessMessage('Login successfully');
            setTimeout(() => {
              navigation.navigate('Signup');
            }, 1000); // Navigate after a short delay
          }
        };

    return (
        <View style={styles.container}>
            <Image 
                resizeMode="cover"
                style={styles.backgroundImage}
                source={require('../../../assets/background/10.jpg')}
            />
            <View style={styles.formContainer}>
                <Text style={styles.title}>OkayStay</Text>
                <Text style={styles.subtitle}>Easy To Find Your Stay</Text>

                {/* Email Input Field */}
                <View style={styles.inputsContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email Address"
                        placeholderTextColor="#888"
                        value={email} // Bound to the email state
                        onChangeText={(text) => setEmail(text)} // Updates the email state
                    />
                    {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

                    {/* Password Input Field */}
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#888"
                        secureTextEntry={passwordSecure}
                        value={password} // Bound to the password state
                        onChangeText={(text) => setPassword(text)} // Updates the password state
                    />
                    {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

                    {/* Button to submit form */}
                    <Button  title="Login to account" action={handleLogin} />
                    {successMessage ? <Text style={styles.successText}>{successMessage}</Text> : null}
                </View>

                {/* Additional Account Actions */}
                <View style={styles.accountActions}>
                    <TouchableWithoutFeedback onPress={() => {}}>
                        <Text style={styles.accountActionText}>Forgot Password?</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Signup")}>
                        <Text style={styles.accountActionText}>No Account Yet?</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        position: 'absolute',
        width: '400%',
        height: '100%',
        top: 0,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
        width: '80%',
        position: 'absolute',
        top: 0,
        zIndex: 9,
        paddingHorizontal: '8%',
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 13,
        color: '#fff',
        textAlign: 'center',
    },
    inputsContainer: {
        paddingVertical: 30,
        width: '100%',
    },
    input: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    accountActions: {
        width: '100%',
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    accountActionText: {
        color: '#fff',
        fontSize: 13,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
        textAlign: 'left',
        width: '100%',
    },
    successText: {
        color: 'green',
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
    },
    
});