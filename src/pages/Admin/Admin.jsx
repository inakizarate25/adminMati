import { useGetProducts } from "../../hooks/useGetProducts";
import { useDeleteProduct } from "../../hooks/useDeleteProduct";
import { useUpdateProd } from "../../hooks/useUpdateProd";
import Header from "../../components/Header/Header";
import AddProductForm from "../addProductForm/AddProductForm";
import edit from "../../assets/pen.svg";
import del from "../../assets/trash-alt (1).svg";
import { useState, useEffect } from "react";
const Admin = () => {
  const { products, getProducts } = useGetProducts();
  const { deleteProduct } = useDeleteProduct();
  const { updateProduct } = useUpdateProd();

  return (
    <section className="h-full w-full bg-slate-200 flex items-center justify-center flex-col">
      <Header />
      <span>Agregar Producto</span>
      <AddProductForm />

      <table className="rounded-md">
        <thead>
          <tr className="bg-slate-700 text-white ">
            <th className="border border-slate-500 px-5 py-2">Id</th>
            <th className="border border-slate-500 px-5 py-2">Nombre</th>
            <th className="border border-slate-500 px-5 py-2">Precio</th>
            <th className="border border-slate-500 px-5 py-2">Stock</th>
            <th className="border border-slate-500 px-5 py-2">Categoria</th>
            <th className="border border-slate-500 px-5 py-2">Descripcion</th>
            <th className="border border-slate-500 px-5 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="bg-slate-200">
              <td className="border border-slate-600 px-5 py-1">
                {product.id}
              </td>
              <td className="border border-slate-600 px-5 py-1">
                {product.nombre}
              </td>
              <td className="border border-slate-600 px-5 py-1">
                ${product.precio}
              </td>
              <td className="border border-slate-600 px-5 py-1">
                {product.stock} Unidades
              </td>
              <td className="border border-slate-600 px-5 py-1">
                {product.categoria}
              </td>
              <td className="border border-slate-600 px-5 py-1 max-w-sm break-words">
                {product.descripcion}
              </td>
              <td className="border border-slate-600 px-5 py-1 ">
                <img
                  src={edit}
                  alt="edit"
                  className="h-8 w-8 bg-blue-500 rounded-sm p-1 cursor-pointer inline-block mr-1"
                />
                <img
                  src={del}
                  alt="delete"
                  className="h-8 w-8 bg-red-600 rounded-sm p-1 cursor-pointer inline-block"
                  onClick={() => deleteProduct(product.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Admin;
