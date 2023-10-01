import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const useAddProduct = () => {
  const collectionRef = collection(db, "productos");

  const addProduct = async ({ name, price, stock, category, description }) => {
    await addDoc(collectionRef, {
      name,
      price,
      stock,
      category,
      description,
    });
  };
  return { addProduct };
};
