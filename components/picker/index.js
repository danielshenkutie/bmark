import * as React from 'react';
import { StyleSheet, View, Picker } from 'react-native';

const theme = {
	primary: '#2cb9b0',
	secondary: '#0c0d34',
	text: 'rgba(12,13,52,0.7)',
	gray: '#f4f0ef',
	darkGray: '#8a8d90',
	danger: '#ff0058',
	bg: '#fff',
};
const styles = StyleSheet.create({
	container: {
		marginVertical: 12,
		borderRadius: 4,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: theme.text,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 1 },
		shadowRadius: 1,
		shadowOpacity: 0.25,
		elevation: 0,
	},
	picker: {
		width: '100%',
	},
	icon: {
		color: theme.text,
	},
});

const PickerSelector = ({
	options,
	selectedValue,
	onValueChange,
	mode,
	style,
}) => (
	<Picker
		selectedValue={selectedValue}
		style={{ height: 50, width: 150 }}
		onValueChange={() => {}}
	>
		<Picker.Item label='Java' value='java' />
		<Picker.Item label='JavaScript' value='js' />
	</Picker>
);

PickerSelector.defaultProps = {
	mode: 'dropdown',
	style: {},
};

export default PickerSelector;
