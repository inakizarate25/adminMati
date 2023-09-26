import { signOut } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        localStorage.removeItem("user");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <header className="h-20 w-full bg-slate-500 flex items-center justify-around fixed top-0 ">
      <h1>Admin</h1>
      <button onClick={signOutUser} className="bg-red-500 px-5 py-2 text-white">
        Cerrar sesion
      </button>
    </header>
  );
};

export default Header;
