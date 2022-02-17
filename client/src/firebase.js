import { initializeApp } from 'firebase/app';

import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyAAkFPOgeREHUcqwv9PcUse0lQvCgf-dyw',
  authDomain: 'netflix-clone-83b5e.firebaseapp.com',
  projectId: 'netflix-clone-83b5e',
  storageBucket: 'netflix-clone-83b5e.appspot.com',
  messagingSenderId: '1171731773',
  appId: '1:1171731773:web:7433c28dfbc3b7627cc154',
  measurementId: 'G-0JSLETK74C',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
