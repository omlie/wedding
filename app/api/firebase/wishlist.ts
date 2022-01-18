import { child, get, ref, set } from "firebase/database";
import { firebaseDB } from "./firebase";

const addWishlistCounter = (id: string) => {
  if (id) set(ref(firebaseDB(), "wishlist/" + id), 0);
};

export const updateWishlistCounter = async (
  id: string,
  amount: number
): Promise<number | undefined> => {
  if (id) {
    const count = await getWishlistCounter(id);
    await set(ref(firebaseDB(), "wishlist/" + id), count + amount);
    return count + 1;
  }
};

export const getWishlistCounter = async (id: string): Promise<number> => {
  const result = await get(child(ref(firebaseDB()), "wishlist/" + id))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val() as number;
      } else {
        addWishlistCounter(id);
        return getWishlistCounter(id);
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return result ?? 0;
};
