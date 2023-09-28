import { useState } from "react";
import { useAddProduct } from "../../hooks/useAddProduct";
import { useNavigate } from "react-router-dom";

const AddProductForm = () => {
  const { addProduct } = useAddProduct();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const navigate = useNavigate();

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
    navigate("/admin");
  };
  return (
    <div className="flex flex-col gap-5 items-center justify-center mb-11 w-full h-full p-7 bg-neutral-900 ">
      <h2 className="text-3xl text-white font-medium">Agregar Producto</h2>
      <form
        className="flex flex-col gap-5 items-center justify-center mb-11 w-96 p-7 bg-gray-600 rounded-md"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="border border-slate-900 rounded-md px-3 py-2 w-[300px]"
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          className="border border-slate-900 rounded-md px-3 py-2 w-[300px]"
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="border border-slate-900 rounded-md px-3 py-2 w-[300px]"
        />
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="border border-slate-900 rounded-md px-3 py-2 w-[300px]"
        >
          <option value="categoria 1">Categoría 1</option>
          <option value="categoria 2">Categoría 2</option>
          <option value="categoria 3">Categoría 3</option>
        </select>
        <input
          type="text"
          placeholder="Descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="border border-slate-900 rounded-md px-3 py-2 w-[300px]"
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
