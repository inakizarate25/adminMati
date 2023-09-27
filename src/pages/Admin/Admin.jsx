import { useGetProducts } from "../../hooks/useGetProducts";
import { useDeleteProduct } from "../../hooks/useDeleteProduct";
import Header from "../../components/Header/Header";
import edit from "../../assets/pen.svg";
import del from "../../assets/trash-alt (1).svg";
import { Link } from "react-router-dom";
const Admin = () => {
  const { products, getProducts } = useGetProducts();
  const { deleteProduct } = useDeleteProduct();

  return (
    <section className="h-full w-full bg-slate-200 flex items-center justify-center flex-col px-10 gap-16">
      <Header />

      <Link
        to={"/add"}
        className="flex items-center justify-center bg-blue-700 px-5 py-2 rounded-md text-white mt-5 self-end "
      >
        Agregar Producto
      </Link>

      <table className="rounded-xl w-full">
        <thead className="rounded-xl">
          <tr className="bg-slate-700 text-white rounded-xl">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Admin;
