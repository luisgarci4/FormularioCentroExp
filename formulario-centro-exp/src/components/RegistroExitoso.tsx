// RegistroExitoso.tsx

export default function RegistroExitoso() {
  return (
    <div
      className="
        w-full max-w-[28rem] sm:max-w-lg bg-white shadow-xl rounded-2xl
        p-8 sm:p-10 border border-gray-100
        flex flex-col min-h-[28rem]
      "
      aria-label="Pantalla: Registro exitoso"
    >
      {/* Contenido centrado vertical y horizontalmente dentro de la tarjeta */}
      <div className="flex-1 grid place-items-center">
        <div className="text-center space-y-4">
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 text-green-600 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4"
            />
          </svg>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#260089]">
            ¡Gracias por tu visita!
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Te esperamos en Tlapps City
          </p>
        </div>
      </div>
    </div>
  );
}
