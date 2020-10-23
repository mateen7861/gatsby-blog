import firebase from 'firebase';

const config = {
    ...firebase config here
};

let instance;

export default function getFirebase() {
    if (typeof window !== 'undefined') {
        if (instance) return instance;
        instance = firebase.initializeApp(config);
        return instance;
    }

    return null;
}