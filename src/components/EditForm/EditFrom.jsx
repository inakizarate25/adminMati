import { db } from "../../config/firebaseConfig";
import { doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc } from "firebase/firestore";

const EditFrom = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const product = doc(db, "productos", id);
    const data = {
      name: name,
      price: price,
      stock: stock,
      category: category,
      description: description,
    };
    await updateDoc(product, data);
    navigate("/admin");
  };
  const getProductById = async (id) => {
    const product = await getDoc(doc(db, "productos", id));
    if (product.exists()) {
      //console.log(product.data())
      setDescription(product.data().description);
      setName(product.data().name);
      setPrice(product.data().price);
      setStock(product.data().stock);
      setCategory(product.data().category);
    } else {
      console.log("El producto no existe");
    }
  };
  useEffect(() => {
    getProductById(id);
  }, []);
  return (
    <div className="flex flex-col gap-5 items-center justify-center mb-11 w-full h-full p-7 bg-neutral-900 ">
      <h2 className="text-3xl text-white font-medium">Editar Producto</h2>
      <form
        onSubmit={update}
        className="flex flex-col gap-5 items-center justify-center mb-11 w-96 p-7 bg-gray-600 rounded-md"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          className="border border-slate-900 rounded-md px-3 py-2 w-[300px]"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Precio"
          className="border border-slate-900 rounded-md px-3 py-2 w-[300px]"
        />
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock"
          className="border border-slate-900 rounded-md px-3 py-2 w-[300px]"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-slate-900 rounded-md px-3 py-2 w-[300px]"
        >
          <option value="">Categoria</option>
          <option value="celulares">celulares</option>
          <option value="accesorios">accesorios</option>
          <option value="consolas">consolas</option>
        </select>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripcion"
          className="border border-slate-900 rounded-md px-3 py-2 w-[300px]"
        />
        <button
          type="submit"
          className="bg-blue-800 px-10 py-3 font-semibold text-xl text-white "
        >
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default EditFrom;
