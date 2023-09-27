import { db } from "../../config/firebaseConfig";
import { doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc } from "firebase/firestore";

const EditFrom = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [stock, setStock] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const product = doc(db, "productos", id);
    const data = {
      nombre: nombre,
      precio: precio,
      stock: stock,
      categoria: categoria,
      descripcion: descripcion,
    };
    await updateDoc(product, data);
    navigate("/admin");
  };
  const getProductById = async (id) => {
    const product = await getDoc(doc(db, "productos", id));
    if (product.exists()) {
      //console.log(product.data())
      setDescripcion(product.data().descripcion);
      setNombre(product.data().nombre);
      setPrecio(product.data().precio);
      setStock(product.data().stock);
      setCategoria(product.data().categoria);
    } else {
      console.log("El producto no existe");
    }
  };
  useEffect(() => {
    getProductById(id);
  }, []);
  return (
    <div className="flex flex-col gap-5 items-center justify-center mb-11 w-full h-full p-7 bg-gray-600 rounded-md">
      <h2 className="text-3xl">Editar Producto</h2>
      <form
        onSubmit={update}
        className="flex flex-col gap-5 items-center justify-center mb-11 w-96 p-7 bg-gray-600 rounded-md"
      >
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
        />
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          placeholder="Precio"
        />
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock"
        />
        <input
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          placeholder="Categoria"
        />
        <input
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripcion"
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
