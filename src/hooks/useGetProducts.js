import { db } from "../config/firebaseConfig";
import { collection, getDocs, orderBy } from "firebase/firestore";
import { useState, useEffect } from "react";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "productos");

  useEffect(() => {
    const getProducts = async () => {
      await getDocs(productsCollectionRef).then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
    };
    getProducts();
  });
  return { products };
};
