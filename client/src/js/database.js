import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, content) => {
  // create a connection
  const jateDb = await openDB('jate', 1);

  // new transaction 
  const tx = jateDb.transaction('jate', 'readwrite');

  // open desired object
  const store = tx.objectStore('jate');

  //the actual PUT action, 
  const request = store.put({ id: id, todo: content });

  // Get confirmation of the request.
  const result = await request;

  console.error('putDb not implemented');

  return result
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;

  //Only if DB doesnt work
  console.error('getDb not implemented');
  return result
};

initdb();
