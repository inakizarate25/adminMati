import { useGetOrders } from "../../hooks/useGetOrders";
import { useState } from "react";
import arrow from "../../assets/step-forward.svg";

const Ordenes = () => {
  const { orders } = useGetOrders();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Número de productos por página
  // Verifica si se están aplicando filtros

  // Si se están aplicando filtros, muestra los elementos filtrados sin paginación
  // Si no, muestra los elementos paginados

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section className=" bg-neutral-900 flex items-center justify-around flex-col  gap-10  w-full min-h-full overflow-hidden px-3 py-8">
      <h2 className="text-4xl text-white font-medium  px-5">Administrador</h2>
      <h3 className="text-2xl text-white font-medium self-start px-5">
        Ordenes de compra
      </h3>
      <article className="w-full max-w-screen-xl flex items-start justify-between flex-col border border-slate-900 rounded-xl mb-10  overflow-x-scroll mx-5 lg:overflow-x-hidden ">
        <header className="flex items-center justify-between  bg-slate-900 rounded-t-lg text-slate-50 lg:w-full">
          <span className="text-slate-150 pl-2 text-xl w-64 py-2 ">
            Id Orden
          </span>
          <span className="text-slate-150 pl-2 text-xl w-64 py-2 ">
            Comprador
          </span>
          <span className="text-slate-150 pl-2 text-xl w-64 py-2 ">
            Productos
          </span>
          <span className="text-slate-150 pl-2 text-xl w-64 py-2 ">Total</span>
        </header>

        {currentItems.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between   text-slate-50 border-b border-slate-600 bg-neutral-900 lg:w-full"
          >
            <span className="text-slate-200 w-64 py-2  pl-2 break-words text-[14px]">
              {order.id}
            </span>
            <span className="text-slate-200 w-64 py-2  pl-2 break-words text-[14px]">
              <ul>
                <li>{order.buyer.nombre}</li>
                <li>{order.buyer.email}</li>
                <li>{order.buyer.direccion}</li>
              </ul>
            </span>
            <span className="text-slate-200 w-64 py-2  pl-2 break-words text-[14px] h-24 overflow-x-auto">
              {order.items.map((item) => (
                <ul
                  key={item.id}
                  className="border border-slate-400 flex flex-col px-2"
                >
                  <li>{item.title}</li>
                  <li>${item.price}</li>
                  <li>{item.quantity} Unidades</li>
                </ul>
              ))}
            </span>
            <span className="text-slate-200 w-64 py-2  pl-2 break-words text-[14px]">
              ${order.total}
            </span>
          </div>
        ))}
      </article>
      <div className="flex items-center justify-center gap-4">
        <button
          className=" h-10 w-10 rounded-md cursor-pointer rotate-180"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src={arrow} alt="prev" />
        </button>
        <p className="text-slate-200 text-xl font-semibold">{currentPage}</p>
        <button
          className=" h-10 w-10 rounded-md cursor-pointer "
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <img src={arrow} alt="next" />
        </button>
      </div>
    </section>
  );
};

export default Ordenes;
