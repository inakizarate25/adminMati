import { signOut } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import control from "../../assets/control.png";
import user from "../../assets/User.png";
import search from "../../assets/Search.png";
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
  const Menus = [{ title: "Cerrar Sesion", src: user, gap: true }];
  return (
    <div className="flex fixed -left-20 top-0">
      <div
        className={` ${
          open ? "w-72 bg-neutral-700 left-20" : "w-20 "
        } bg-neutral-700 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180 -right-8"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={chart}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />

          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Admin Repuestos
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
              onClick={signOutUser}
            >
              <img src={Menu.src} />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 bg-slate-800 p-2 rounded-md`}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    // <header className="h-full w-38 bg-slate-500 flex flex-col  items-center justify-around fixed top-0 left-0 px-3">
    //   <p>X</p>
    //   <h1>Admin</h1>
    //   <button onClick={signOutUser} className="bg-red-500 px-5 py-2 text-white">
    //     Cerrar sesion
    //   </button>
    // </header>
  );
};

export default Header;
