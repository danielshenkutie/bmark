import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import {CheckBox} from 'react-native-elements';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderColor: 'rgba(52,52,52,0.1)',
    borderWidth: 1,
    marginTop: 4,
    borderRadius: 4,
  },
  labelContainer: {
    position: 'absolute',
    top: 2,
    left: 2,
  },
  checkBoxShowContainer: {
    position: 'absolute',
    bottom: 16,
    right: 0,
    zIndex: 100,
  },
  innerChcekBoxShowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  checkBox: {
    margin: 0,
    padding: 0,
    borderWidth: 0,
  },
  checkBoxtext: {
    fontWeight: 'normal',
    color: '#777',
    paddingBottom: 0,
  },
  textInput: {
    paddingBottom: 8,
    fontSize: 17,
    marginLeft: 4,
    borderRadius: 4,
  },
});

const PasswordFiled = ({
  autoFocus,
  onCheckBoxPress,
  showPassword,
  labelText,
  placeholderText,
  onChangeText,
  onBlur,
}) => (
  <View style={styles.container}>
    <View style={styles.labelContainer}>
      <Text>{labelText}</Text>
    </View>
    <View style={styles.checkBoxShowContainer}>
      <CheckBox
        checked={showPassword}
        checkedIcon="eye-slash"
        uncheckedIcon="eye"
        uncheckedColor="#aaa"
        containerStyle={styles.checkBox}
        textStyle={styles.checkBoxtext}
        onPress={onCheckBoxPress}
      />
    </View>
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder={placeholderText}
        underlineColorAndroid="transparent"
        autoFocus={autoFocus}
        style={styles.textInput}
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry={!showPassword}
        textContentType="password"
        onChangeText={(text) => onChangeText(text)}
        onBlur={onBlur}
      />
    </View>
  </View>
);
PasswordFiled.propTypes = {
  onCheckBoxPress: PropTypes.func,
  onChangeText: PropTypes.func,
  showPassword: PropTypes.bool,
  autoFocus: PropTypes.bool,
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  onBlur: PropTypes.func,
};
PasswordFiled.defaultProps = {
  onCheckBoxPress: () => {},
  onChangeText: () => {},
  showPassword: false,
  autoFocus: false,
  labelText: 'Password',
  placeholderText: '',
};
export default PasswordFiled;
