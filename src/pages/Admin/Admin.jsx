import { useGetProducts } from "../../hooks/useGetProducts";
import { useDeleteProduct } from "../../hooks/useDeleteProduct";
import { useUpdateProd } from "../../hooks/useUpdateProd";
import Pagination from "../../components/pagination/Pagination";
import edit from "../../assets/pen.svg";
import del from "../../assets/trash-alt (1).svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles.css";
const Admin = () => {
  const { products } = useGetProducts();
  const { deleteProduct } = useDeleteProduct();

  const {
    selectedCategory,
    productNameFilter,
    filterByCategory,
    filterByName,
    filteredItems,
  } = useUpdateProd(products);

  return (
    <section className=" bg-neutral-900 flex items-center justify-around flex-col  gap-10  w-full min-h-full overflow-hidden px-3 py-8">
      {/* FILTROS Y AGREGAR PRODUCTO */}
      <nav className="flex flex-col lg:flex-row items-end  justify-around  gap-5 ">
        <div className="flex items-start gap-1 flex-col">
          <label className="text-neutral-500" htmlFor="namesearch">
            Filtrar por nombre
          </label>

          <input
            type="text"
            id="namesearch"
            placeholder="Buscar"
            value={productNameFilter}
            onChange={filterByName}
            className="border border-slate-900 rounded-md px-3 py-2 w-[300px]"
          />
        </div>
        <div className="flex items-start gap-1 flex-col">
          <label htmlFor="selectaCategoria" className="text-neutral-500">
            Filtrar por categoria
          </label>

          <select
            name="cat"
            id="selectaCategoria"
            value={selectedCategory}
            onChange={filterByCategory}
            className="border border-slate-900 rounded-md px-3 py-2 w-[300px]"
          >
            <option value="">Todos</option>
            <option value="categoria 1">Categoría 1</option>
            <option value="categoria 2">Categoría 2</option>
            <option value="categoria 3">Categoría 3</option>
          </select>
        </div>
        <Link
          to={"/add"}
          className="flex items-centerjustify-center gap-3 bg-gray-800 text-slate-50 rounded-md px-3 py-2 "
        >
          Agregar Nuevo Producto
        </Link>
      </nav>
      {/* TABLA DE PRODUCTOS */}
      <article className="w-full max-w-screen-xl flex items-start justify-between flex-col border border-slate-900 rounded-xl mb-10  overflow-x-scroll mx-5 lg:overflow-x-hidden min-h-full">
        <header className="flex items-center justify-between  bg-slate-900 rounded-t-lg text-slate-50 lg:w-full">
          <span className="text-slate-150 pl-2 text-xl w-32 py-2 ">Id</span>
          <span className="text-slate-150 pl-2 text-xl w-32 py-2 ">Nombre</span>
          <span className="text-slate-150 pl-2 text-xl w-32 py-2 ">Precio</span>
          <span className="text-slate-150 pl-2 text-xl w-32 py-2 ">Stock</span>
          <span className="text-slate-150 pl-2 text-xl w-32 py-2 ">
            Categoria
          </span>
          <span className="text-slate-150 pl-2 text-xl w-32 py-2 ">
            Descripcion
          </span>
          <span className="text-slate-150 pl-2 text-xl w-32 py-2 ">
            Acciones
          </span>
        </header>

        {filteredItems.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between   text-slate-50 border-b border-slate-600 bg-neutral-900 lg:w-full"
          >
            <span className="text-slate-200 w-32 py-2  pl-2 break-words">
              {product.id}
            </span>
            <span className="text-slate-200 w-32 py-2  pl-2 break-words">
              {product.nombre}
            </span>
            <span className="text-slate-200 w-32 py-2  pl-2 break-words">
              ${product.precio}
            </span>
            <span className="text-slate-200 w-32 py-2  pl-2 break-words">
              {product.stock} Unidades
            </span>
            <span className="text-slate-200 w-32 py-2  pl-2 break-words">
              {product.categoria}
            </span>
            <span className="text-slate-200 w-32 py-2  pl-2 break-words">
              {product.descripcion}
            </span>
            <span className="text-slate-200 w-32 py-2  pl-2 flex items-center justify-center  break-words">
              <Link to={`/edit/${product.id}`}>
                <img
                  src={edit}
                  alt="edit"
                  className="h-8 w-8 bg-blue-500 rounded-sm p-1 cursor-pointer inline-block mr-1"
                />
              </Link>
              <img
                src={del}
                alt="delete"
                className="h-8 w-8 bg-red-600 rounded-sm p-1 cursor-pointer inline-block"
                onClick={() => deleteProduct(product.id)}
              />
            </span>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Admin;
