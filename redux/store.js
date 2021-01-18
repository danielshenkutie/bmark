import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { createNetworkMiddleware } from 'react-native-offline';
import sagaRoot from './sagas';
import createSagaMiddleware from 'redux-saga';

const networkMiddleware = createNetworkMiddleware({
	queueReleaseThrottle: 200,
	regexActionType: /FETCH.*REQUEST/,
	actionTypes: [],
	queueReleaseThrottle: 50,
});
const logger = createLogger({
	// ...options
});
// Note: this API requires redux@>=3.1.0
const sagaMiddleware = createSagaMiddleware();

const middleware = [networkMiddleware, thunk];
if (process.env.NODE_ENV !== 'production') {
	middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));
//sagaMiddleware.run(sagaRoot);

export default store;
