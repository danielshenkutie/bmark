import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './redux/actions';
import Input from './components/Inputs';
import Picker from './components/picker';
import ModalFilterPicker from 'react-native-modal-filter-picker';

const options = [
	{
		key: 'kenya',
		label: 'Kenya',
	},
	{
		key: 'uganda',
		label: 'Uganda',
	},
	{
		key: 'libya',
		label: 'Libya',
	},
	{
		key: 'morocco',
		label: 'Morocco',
	},
	{
		key: 'estonia',
		label: 'Estonia',
	},
];
const TestScreen = (props) => {
	console.log(props);
	const dispatch = useDispatch();
	const { root } = useSelector((state) => state.app);
	const [visible, setVisible] = React.useState(true);
	return (
		<View style={{ flex: 1 }}>
			<TouchableOpacity
				onPress={() => {
					dispatch(Actions.fetchUser('www.goole.com'));
					console.log('test', root);
				}}
			>
				<Text>Click</Text>
			</TouchableOpacity>
			<Input
				value={'99'}
				onBlur={() => {}}
				onChange={() => {}}
				placeholder={'place holder'}
			></Input>
			<ModalFilterPicker
				visible={visible}
				onSelect={() => {}}
				onCancel={() => setVisible(!visible)}
				options={[...options, ...options]}
			/>
		</View>
	);
};

export default TestScreen;
