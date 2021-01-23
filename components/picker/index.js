import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ModalFilterPicker from '../modalPicker';

const Picker = ({ options, placeholder, onCancel }) => {
	const [visible, setVisible] = React.useState(false);
	return (
		<TouchableWithoutFeedback
			style={styles.picker}
			onPress={() => setVisible(true)}
		>
			<Text>{placeholder}</Text>
			<ModalFilterPicker
				visible={visible}
				onSelect={() => {}}
				onCancel={() => setVisible(false)}
				options={[...options, ...options]}
			/>
		</TouchableWithoutFeedback>
	);
};

export default Picker;

const styles = StyleSheet.create({
	picker: {
		height: 48,
		width: '100%',
		backgroundColor: 'red',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 8,
		borderWidth: 1,
		borderRadius: 4,
	},
});
