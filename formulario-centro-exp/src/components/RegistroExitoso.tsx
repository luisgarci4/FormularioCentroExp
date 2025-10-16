type Props = { onRestart?: () => void };

export default function RegistroExitoso({ onRestart }: Props) {
  return (
    <div
      className="
        w-full max-w-[28rem] sm:max-w-lg bg-white shadow-xl rounded-2xl
        p-8 sm:p-10 border border-gray-100
        flex flex-col items-center min-h-[28rem]
      "
      aria-label="Registro exitoso"
    >
      {/* Contenido centrado */}
      <div className="mt-2 flex flex-col items-center text-center gap-4">
        <div>
          <svg
            className="w-20 h-20 text-green-600 mx-auto"
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
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#260089]">
          ¡Gracias por tu visita!
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Te esperamos en Tlapps City
        </p>
      </div>

      {/* Botón anclado abajo para igualar alturas */}
      <div className="mt-auto w-full pt-8">
        <button
          type="button"
          onClick={onRestart}
          className="
            w-full h-12 rounded-xl text-white font-semibold
            bg-gradient-to-r from-[#260089] via-[#3e00b3] to-[#6200ee]
            bg-[length:200%_auto] transition-all duration-500
            hover:bg-[position:100%_0] hover:shadow-lg active:scale-[0.98]
          "
        >
          Comenzar de nuevo
        </button>
      </div>
    </div>
  );
}
