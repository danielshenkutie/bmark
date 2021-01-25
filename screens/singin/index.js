/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Button, StyleSheet, SafeAreaView, Text, Tou} from 'react-native';
// import AuthContext from '../../Context/contextProvider';

import EmailInputField from '../../components/emailInput';
import PasswordField from '../../components/password';
import NavigationLink from '../../components/NavigationLink';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  login: {
    width: '100%',
    padding: 16,
    flex: 3,
    justifyContent: 'space-evenly',
  },
  logo: {
    flex: 3,
    backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 48,
    backgroundColor: '#04dbc1',
  },
});

export default function SignInScreen({navigation}) {
  const [username, setUsername] = React.useState('email2235@test.com');
  const [password, setPassword] = React.useState('123456');

  //const { authContext } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Text>Benchmark Tool</Text>
      </View>

      <View style={styles.login}>
        <EmailInputField
          labelText=""
          placeholderText="Email"
          onBlur={(text) => {
            // setUsername(text);
          }}
          onChangeText={(e) => {
            setUsername(e);
          }}
        />
        <PasswordField
          value={password}
          placeholderText="Password"
          labelText=""
          onBlur={(text) => {}}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <NavigationLink
          linkText="Don't have an account? Signup"
          onPress={() => navigation.navigate('singup')}></NavigationLink>

        <Button color="#333" title="Sign in" />
      </View>
      <View style={{flex: 2}}></View>
    </SafeAreaView>
  );
}
