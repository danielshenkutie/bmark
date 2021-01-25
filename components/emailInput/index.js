import React from 'react';
import PropTypes from 'prop-types';
import {Item, Input, Label} from 'native-base';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const styles = StyleSheet.create({
  input: {
    padding: 8,
    borderColor: 'rgba(52,52,52,0.1)',
    borderWidth: 1,
    paddingLeft: 16,
    fontSize: 16,
    elevation: 0,
    height: 48,
    borderRadius: 4,
  },
});

const EmailInputField = ({
  autoFocus,
  labelText,
  placeholderText,
  onChangeText,
  onBlur,
}) => (
  <TextInput
    style={styles.input}
    autoCapitalize="none"
    autoCorrect={false}
    autoFocus={autoFocus}
    onChangeText={onChangeText}
    placeholder={placeholderText}
    keyboardType="email-address"
    onBlur={onBlur}
  />
);

EmailInputField.propTypes = {
  autoFocus: PropTypes.bool,
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  onChangeText: PropTypes.func,
  onBlur: PropTypes.func,
};

EmailInputField.defaultProps = {
  autoFocus: false,
  labelText: '',
  placeholderText: '',
  onChangeText: () => {},
  onBlur: () => {},
};

export default EmailInputField;
