import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LoginPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#b23a48', '#f0948f']} style={styles.background}>
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
          {/* <TouchableOpacity onPress={() => navigation.navigate('Register')}> */}
          <Text style={styles.registerText}>
            New Here? <Text style={styles.registerLink}>Register</Text>
          </Text>
          {/* </TouchableOpacity> */}
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
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
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
  },
  formContainer: {
    width: '80%',
  },
  loginText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d9a7a7',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    color: '#fff',
  },
  forgotPasswordText: {
    color: '#fff',
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
    color: '#fff',
    marginTop: 20,
    textAlign: 'center',
  },
  registerLink: {
    fontWeight: 'bold',
  },
});

export default LoginPage;
