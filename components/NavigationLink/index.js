import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  link: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Avenir-Heavy',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
});

const NavigationLink = ({onPress, linkText}) => (
  <Text style={styles.link} onPress={onPress}>
    {linkText}
  </Text>
);

NavigationLink.propTypes = {
  linkText: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

NavigationLink.defaultProps = {
  onPress: () => {},
};

export default NavigationLink;
