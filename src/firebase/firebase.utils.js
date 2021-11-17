import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
	apiKey: 'AIzaSyATYI8JDMYVzFlYdrONl-W5Uk8ByPEg2BQ',
	authDomain: 'crwn-cloths-db.firebaseapp.com',
	projectId: 'crwn-cloths-db',
	storageBucket: 'crwn-cloths-db.appspot.com',
	messagingSenderId: '158480645030',
	appId: '1:158480645030:web:b64896343f733205a26d67',
	measurementId: 'G-L3PCHH89R6',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	console.log(userAuth);
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
