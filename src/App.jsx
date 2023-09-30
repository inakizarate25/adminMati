import Auth from "./pages/Auth/Auth";
import Admin from "./pages/Admin/Admin";
import Clientes from "./pages/Clientes/Clientes";
import Header from "./components/Header/Header";
import EditForm from "./components/EditForm/EditFrom";
import AddProductForm from "./components/addProductForm/AddProductForm";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <main className="h-screen w-full font-mono">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/add" element={<AddProductForm />} />
          <Route path="/edit/:id" element={<EditForm />} />
          <Route path="/clientes" element={<Clientes />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
