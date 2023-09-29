import { signOut } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import control from "../../assets/control.png";
import user from "../../assets/User.png";
import chart from "../../assets/Chart.png";

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
  const [open, setOpen] = useState(false);
  const Menus = [{ title: "Cerrar Sesion", src: user }];
  return (
    <div className="flex fixed -left-20 top-0 h-full">
      <div
        className={` ${
          open ? "w-72 bg-neutral-700 left-20" : "w-20 "
        } bg-neutral-700 h-full p-5  pt-8 relative duration-300 flex flex-col`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180 -right-8"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img src={chart} className="cursor-pointer duration-500" />

          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Admin Repuestos
          </h1>
        </div>
        <ul className="pt-6"></ul>
        <div className="flex items-center gap-3 cursor-pointer mt-auto">
          <img src={user} alt="" />
          <button
            onClick={signOutUser}
            className={`${
              !open && "hidden"
            } origin-left duration-200 bg-slate-800 p-2 rounded-md text-white `}
          >
            Cerrar Sesion
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
