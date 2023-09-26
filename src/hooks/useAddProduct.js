import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const useAddProduct = () => {
  const collectionRef = collection(db, "productos");

  const addProduct = async ({
    nombre,
    precio,
    stock,
    categoria,
    descripcion,
  }) => {
    await addDoc(collectionRef, {
      nombre,
      precio,
      stock,
      categoria,
      descripcion,
    });
  };
  return { addProduct };
};
