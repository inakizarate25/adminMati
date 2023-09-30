import { useAuth } from "../../hooks/useGetUserInfo";
const Auth = () => {
  const { signIn, error } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signIn(email, password);
  };

  return (
    <section className="h-full w-full bg-slate-500 flex items-center justify-center">
      <form
        className="flex flex-col gap-5 items-center justify-center w-[300px] h-80 shadow-2xl rounded-md p-5"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl">Inicia Sesion</h2>

        <div className="flex flex-col items-start justify-center gap-2 w-full">
          <input
            type="email"
            id="email"
            className="h-10 w-full bg-transparent outline-none border-b-2 placeholder:text-slate-400 text-slate-800 text-ml pl-2"
            placeholder="Email"
          />
        </div>

        <div className="flex flex-col items-start justify-center gap-2 w-full">
          <input
            type="password"
            id="password"
            className="h-10 w-full bg-transparent outline-none border-b-2 placeholder:text-slate-400 text-slate-800 text-lg pl-2"
            placeholder="Contraseña"
          />
        </div>
        <button type="submit" className="px-5 py-3 bg-slate-800 text-white ">
          Iniciar Sesion
        </button>
      </form>
    </section>
  );
};

export default Auth;
