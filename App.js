import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './components/LoginForm.js';

export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo}
          source={require('./images/Risilog.png')} />
          <Text style={styles.title}>RisiChat</Text>
          <Text style={styles.title}>version 0.1</Text>

      </View>

      <View style={styles.formcontainer}>
      <LoginForm />
    </View>
  </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logocontainer: {
    flexGrow:1,
    alignItems: "center",
    marginTop:25
  },
  logo: {
    width:150,
    height:150
  },
  title: {
    textAlign: "center",
    color: "white",
    width:170,
    fontSize:22,
    marginTop:10,
  }
});
