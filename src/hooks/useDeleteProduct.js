import { deleteDoc, doc, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const useDeleteProduct = (id) => {
  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "productos", id));
    where("id", "==", id);
  };

  return { deleteProduct };
};
