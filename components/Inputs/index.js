import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = ({ value, placeholder, onChange, onBlur }) => {
	return (
		<TextInput
			onChange={onChange}
			onBlur={onBlur}
			style={styles.Input}
			placeholder={placeholder}
			value={value}
		></TextInput>
	);
};

export default Input;

const styles = StyleSheet.create({
	Input: {
		padding: 8,
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 4,
		width: '100%',
		height: 48,
	},
});
