import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Nom d'utilisateur</Text>
      <TextInput placeholder="Risitas la chancla"
      autoCorrect={false}
      returnKeyType="next"
      onSubmitEditing={() => this.passwordInput.focus()}
      underlineColorAndroid='transparent'
      style={styles.input}  />

      <Text>Mot de passe</Text>
      <TextInput
      secureTextEntry
      returnKeyType="go"
      placeholder="motdepasse"
      autoCorrect={false}
      underlineColorAndroid='transparent'
      style={styles.input}
      ref={(input) => this.passwordInput = input}  />


      <TouchableOpacity style={styles.buttondesign}>
            <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:30
  },
  input: {
  height: 35,
  backgroundColor: 'rgba(255,255,255,0.2)',
  marginBottom:20,
  color: '#FFF',
  paddingHorizontal:10,
  },
  buttondesign: {
    borderStyle: "solid",
    borderRadius:100,
    borderColor: "black",
    borderWidth:2,
  },
  buttontext: {
    paddingTop:10,
    paddingBottom:10,
    textAlign: "center",
    color:"#FFFFFF"
  }
});
