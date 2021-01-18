import * as Actions from '../actions';
import { offlineActionTypes } from 'react-native-offline';

const appReducer = (state = { root: 'dan' }, action) => {
	switch (action.type) {
		case Actions.TEST_ACTION:
			return { ...state, root: action.payload };
		case offlineActionTypes.CONNECTION_CHANGE:
			console.log('network changed');
			return state;
		case offlineActionTypes.FETCH_OFFLINE_MODE:
			console.log('offlineActionTypes.payload');
			return state;
		default:
			return state;
	}
};

export default appReducer;
