import { useState } from "react";
import { useAddProduct } from "../../hooks/useAddProduct";
import { useUpdateProd } from "../../hooks/useUpdateProd";

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
    <form
      className="flex  gap-5 items-center justify-center mb-11"
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
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddProductForm;
