import { useState } from "react";
import { useAddProduct } from "../../hooks/useAddProduct";

const AddProductForm = () => {
  const { addProduct } = useAddProduct();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addProduct({
      nombre,
      precio,
      stock,
      categoria,
      descripcion,
    });
    setNombre("");
    setPrecio("");
    setStock("");
    setCategoria("");
    setDescripcion("");
  };
  return (
    <div className="flex flex-col gap-5 items-center justify-center mb-11 w-full h-full p-7 bg-gray-600 rounded-md">
      <h2 className="text-3xl">Agregar Producto</h2>
      <form
        className="flex flex-col gap-5 items-center justify-center mb-11 w-96 p-7 bg-gray-600 rounded-md"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <input
          type="text"
          placeholder="Categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-800 px-10 py-3 font-semibold text-xl text-white "
        >
          Agregar
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
