import { useState } from "react";
import { useAddProduct } from "../../hooks/useAddProduct";
import { useNavigate } from "react-router-dom";

const AddProductForm = () => {
  const { addProduct } = useAddProduct();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    addProduct({
      name,
      price,
      stock,
      category,
      description,
    });
    setName("");
    setPrice("");
    setStock("");
    setCategory("");
    setDescription("");
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-slate-900 rounded-md px-3 py-2 w-[300px]"
        />
        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
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
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-slate-900 rounded-md px-3 py-2 w-[300px]"
        >
          <option value="categoria 1">celulares</option>
          <option value="categoria 2">accesorios</option>
          <option value="categoria 3">consolas</option>
        </select>
        <input
          type="text"
          placeholder="Descripcion"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
