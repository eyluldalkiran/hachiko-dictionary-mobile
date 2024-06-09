import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Waves from '../Components/Waves';

const LoginPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.loginText}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#d9a7a7"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#d9a7a7"
          secureTextEntry
        />
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>
            New Here? <Text style={styles.registerLink}>Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <Waves style={styles.waves} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  waves: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#b23a48',
  },
  subtitle: {
    fontSize: 18,
    color: '#b23a48',
  },
  formContainer: {
    width: '80%',
  },
  loginText: {
    fontSize: 24,
    color: '#b23a48',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d9a7a7',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    color: '#b23a48',
  },
  forgotPasswordText: {
    color: '#b23a48',
    textAlign: 'right',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#b23a48',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  registerText: {
    color: '#b23a48',
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 50,
  },
  registerLink: {
    fontWeight: 'bold',
  },
});

export default LoginPage;
