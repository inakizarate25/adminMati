import { useGetOrders } from "../../hooks/useGetOrders";

const Clientes = () => {
  const { orders } = useGetOrders();
  return (
    <section className=" bg-neutral-900 flex items-center justify-around flex-col  gap-10  w-full min-h-full overflow-hidden px-3 py-8">
      CLIENTES
    </section>
  );
};

export default Clientes;
