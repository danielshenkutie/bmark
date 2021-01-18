import { combineReducers } from 'redux';
import app from './app';
import { createReducer as createNetworkReducer } from 'react-native-offline';
function comparisonFn(action, actionQueue) {
	if (typeof action === 'object') {
		return actionQueue.find((queued) => isEqual(queued, action));
	}
	if (typeof action === 'function') {
		return actionQueue.find(
			(queued) =>
				action.meta.name === queued.meta.name &&
				action.meta.args.id === queued.meta.args.id
		);
	}
	return undefined;
}

const reducer = combineReducers({
	app,
	network: createNetworkReducer(comparisonFn),
});
export default reducer;
