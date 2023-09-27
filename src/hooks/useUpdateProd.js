// import { updateDoc, doc } from "firebase/firestore";
// import { db } from "../config/firebaseConfig";

// export const useUpdateProd = (id) => {
//   const collectionRef = collection(db, "productos");
//   const updateProduct = async (
//     id,
//     nombre,
//     precio,
//     stock,
//     categoria,
//     descripcion
//   ) => {
//     await updateDoc(doc(collectionRef, id), {
//       nombre,
//       precio,
//       stock,
//       categoria,
//       descripcion,
//     });
//   };
//   return { updateProduct };
// };
