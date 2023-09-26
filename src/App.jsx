import Auth from "./pages/Auth/Auth";
import Admin from "./pages/Admin/Admin";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <main className="h-screen w-screen font-mono">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
