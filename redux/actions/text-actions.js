export const TEST_ACTION = 'TEST_ACTION';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
import { offlineActionCreators } from 'react-native-offline';

export const fetchUser = (url) => {
	async function thunk(dispatch) {
		fetch(url)
			.then((response) => response.json())
			.then((responseJson) => {
				dispatch({ type: FETCH_USER_SUCCESS, payload: responseJson });
			})
			.catch((error) => {
				console.error('error', error);
				dispatch(offlineActionCreators.fetchOfflineMode(thunk));
			});
	}

	thunk.interceptInOffline = true; // This is the important part
	thunk.meta = {
		retry: true,
		name: 'fetchApi',
		args: [],
	};
	return thunk; // Return it afterwards
};

/* export const saveProfilePicture = (downloadUR) => {
	async function thunk(dispatch) {
		const SAVE_PROFILE = gql`
			mutation SaveProfile($url: String!) {
				saveProfile(url: $url) {
					profilePic
				}
			}
		`;

		try {
			dispatch(saveProfileRequest());
			const data = await graphQLClient.request(SAVE_PROFILE, {
				url: downloadURL,
			});

			const {
				saveProfile: { profilePic },
			} = data;

			dispatch(saveProfileSuccess(profilePic));
		} catch (error) {
			dispatch(saveProfileFailure(error.message));
		}
	}

	thunk.interceptInOffline = true;
	thunk.meta = {
		retry: true,
		name: 'saveProfilePicture',
		args: [downloadURL],
	};
	return thunk;
}; */
