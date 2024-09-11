function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-700">
      <div
        className="relative flex flex-col m-6 space-y-8 bg-black shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
        <div className="flex flex-col justify-center p-8 md:p-14">
          <img className="h-6 w-12" src="/logo.webp" alt="Rossum Logo" />
        <span className="font-bold ml-2 text-lg hidden md:inline-block text-white">
          <span className="logo_name text-white">Rossum | </span>HomeBanking
        </span>
          <div className="py-4">
            <span className="mb-2 text-md text-white">Usuario</span>
            <input
              type="text"
              className="w-full p-2 border  border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="name"
              id="name"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md focus:borde
            r-red text-white">Contraseña</span>
            <input
              type="password"
              name="pass"
              id="pass"
              className="w-full p-2 border border-white rounded-md placeholder:font-light placeholder:text-primary"
            />
          </div>
          <div className="flex justify-between w-full py-4">
           
            <span className="font-bold text-md text-white hover:text-primary">Recuperar Contraseña</span>
          </div>
          <button
            className="w-full bg-white text-black p-2 rounded-lg mb-6 hover:bg-primary hover:text-black hover:border hover:border-gray-300"
          >
            iniciar sesión
          </button>
          <div className="text-center text-gray-400">
            Si es la primera vez que ingresa al Banco Rossum,
            <span className="font-bold  text-white hover:text-primary"> Registrate</span>
          </div>
        </div>

        <div className="relative">
          <img
            src="/src/assets/imagen de oficina.avif"
            alt="img"
            className="w-[600px] h-full hidden rounded-r-2xl md:block object-cover"
          />
        </div>
      </div>
    </div>
    );
}

export default LoginForm;