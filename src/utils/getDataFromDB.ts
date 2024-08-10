import { get, ref } from '@firebase/database';
import { db } from '../firebase';

export const getDataFromDB = async <T>(path: string): Promise<T | null> => {
  try {
    let data: T | null = null;
    await get(ref(db, path)).then((snapshot) => {
      if (snapshot.exists()) {
        data = snapshot.val();
      }
    });

    return data;
  } catch (e) {
    console.log(e);
    return null; // 오류 발생 시 null 반환
  }
};
