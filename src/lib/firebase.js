import { seedDatabase } from "../seed";

const config = {
  //your firebase stuff here
};

const firebase = window.firebase.initializeApp(config);

const { FieldValue } = window.firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
