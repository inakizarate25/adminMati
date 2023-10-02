import { db } from "../config/firebaseConfig";
import { collection, getDocs, orderBy } from "firebase/firestore";
import { useState, useEffect } from "react";

export const useGetOrders = () => {
  const [orders, setOrders] = useState([]);
  const ordersCollectionRef = collection(db, "orders");

  useEffect(() => {
    const getOrders = async () => {
      await getDocs(ordersCollectionRef).then((snapshot) => {
        setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    getOrders();
  });
  return { orders };
};
