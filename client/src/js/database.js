import { openDB } from 'idb';

//  Initialize database
const initdb = async () => {
  try {
    // Create a new database called 'jate' version 1
    openDB('jate', 1, {
      upgrade(db) {
        if (db.objectStoreNames.contains('jate')) {
          console.log('jate database already exists');
          return;
        }
        // Create an object store called 'jate', auto-increment the id key.
        db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
        console.log('jate database created');
      },
    });
  } catch (err) {
    console.error('Error initializing database:', err);
  }
};

// Puts content in the database
export const putDb = async (content) => {
  try {
    // Create connection to the db and version to use.
    const jateDb = await openDB('jate', 1);
    // Create new transaction and specify the privileges.
    const tx = jateDb.transaction('jate', 'readwrite');
    // Open up the desired object store.
    const store = tx.objectStore('jate');
    // Use the PUT method on the store and pass in the content.
    const request = store.put({ id: 1, value: content });
    // Confirm the request.
    const result = await request;

    result
      ? console.log('🚀 - data saved to the database', result)
      : console.error('🚫 - error saving to the database');
  } catch (err) {
    console.error('Error saving to database:', err);
  }
};

// Gets all the content from the database
export const getDb = async () => {
  try {
    // Create connection to the db and version to use.
    const jateDb = await openDB('jate', 1);
    // Create new transaction and specify the privileges.
    const tx = jateDb.transaction('jate', 'readonly');
    // Open up the object store.
    const store = tx.objectStore('jate');
    // Use GET method to get all data in the db
    const request = store.get(1);
    // Confirm the request.
    const result = await request;

    result
      ? console.log('GET Success:', result.value)
      : console.error('🚫 - getDb not implemented');
    return result?.value;
  } catch (err) {
    console.error('Error getting data from database:', err);
  }
};

initdb();
