import { useState } from "react";

export default function RegistroExitoso() {
  const [mostrarComentario, setMostrarComentario] = useState(false);
  const [comentario, setComentario] = useState("");

  const handleEnviar = () => {
    if (comentario.trim()) {
      alert("¡Gracias por tu comentario!");
      setComentario("");
      setMostrarComentario(false);
    }
  };

  return (
    <div
      className="
        w-full max-w-[28rem] sm:max-w-lg bg-white shadow-xl rounded-2xl
        p-8 sm:p-10 border border-gray-100 flex flex-col min-h-[28rem]
      "
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-5">
        <svg
          className="w-16 h-16 sm:w-20 sm:h-20 text-green-600 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
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
        <p className="text-sm sm:text-2xl text-gray-600">
          Te esperamos en Tlapps City
        </p>

        {/* Pregunta convertida en boton */}
        {!mostrarComentario ? (
          <button
            onClick={() => setMostrarComentario(true)}
            className="
              mt-4 px-5 py-2 rounded-xl border border-[#260089]/20
              text-[#260089] font-semibold text-sm sm:text-2xl
              bg-[#f6f3ff] hover:bg-[#ede7ff]
              transition-all duration-300 shadow-sm
              hover:shadow-md active:scale-[0.98]
              cursor-pointer select-none
            "
          >
            ¿Deseas dejar un comentario?
          </button>
        ) : (
          <div className="w-full mt-6 text-left animate-fadeIn">
            <label
              htmlFor="comentario"
              className="block text-sm sm:text-base font-medium text-black mb-2"
            >
              Comentario <span className="text-gray-500 font-normal">(opcional)</span>
            </label>
            <textarea
              id="comentario"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              placeholder="Escribe aquí tus comentarios o sugerencias..."
              className="
                w-full h-28 sm:h-32 resize-none p-4 rounded-xl border border-black/20
                focus:outline-none focus:border-[#260089] bg-white text-gray-800
                placeholder:text-gray-400 transition-all duration-200
              "
            />

            {/* Boton enviar visible solo si hay texto */}
            {comentario.trim() && (
              <button
                type="button"
                onClick={handleEnviar}
                className="
                  mt-4 w-full h-11 rounded-xl text-white font-semibold
                  bg-gradient-to-r from-[#260089] via-[#3e00b3] to-[#6200ee]
                  bg-[length:200%_auto] transition-all duration-500
                  hover:bg-[position:100%_0] hover:shadow-lg active:scale-[0.98]
                "
              >
                Enviar comentario
              </button>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
