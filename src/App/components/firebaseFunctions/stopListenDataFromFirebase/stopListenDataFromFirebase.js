import { getDatabase, ref, off } from 'firebase/database';

export async function stopListenDataFromFirebase(userId, dataSection) {
  const firebaseDataBase = getDatabase();
  const firebaseDataBaseReference = ref(firebaseDataBase, 'users/' + userId + '/' + dataSection);
  off(firebaseDataBaseReference);
}
