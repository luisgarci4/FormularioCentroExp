import { useState } from "react";

type Props = { onPrev?: () => void; onNext?: () => void };

export default function ComoNosConociste({ onPrev, onNext }: Props) {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState<string | null>(null);

  const opciones = [
    { id: "redes-sociales", label: "Redes sociales", icon: "📱" },
    { id: "agente-ventas", label: "Agente de ventas", icon: "👨‍💼" },
    { id: "expo", label: "Expo", icon: "🖼️" },
    { id: "pagina-web", label: "Página web", icon: "🛜" },
    { id: "invitacion-personal", label: "Invitación personal", icon: "💌" },
    { id: "recomendacion", label: "Recomendación", icon: "👥" },
    { id: "otros", label: "Otros", icon: "💡" },
  ];

  const canContinue = Boolean(opcionSeleccionada);

  return (
    <div
      className="
        w-full
        max-w-[28rem] sm:max-w-lg md:max-w-xl lg:max-w-2xl
        bg-white shadow-xl rounded-2xl
        p-8 sm:p-10 md:p-12
        border border-gray-100
        flex flex-col min-h-[28rem]
      "
    >
      {/* Encabezado */}
      <div className="text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-extrabold tracking-tight text-[#260089]">
          ¿Cómo nos conociste?
        </h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">
          Cuéntanos cómo llegaste a nosotros
        </p>
      </div>

      {/* Opciones: 1 col (móvil) · 2 col (tablet) · 3 col (desktop grande) */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
        {opciones.map((op) => {
          const activa = opcionSeleccionada === op.id;
          return (
            <button
              key={op.id}
              type="button"
              onClick={() => setOpcionSeleccionada(op.id)}
              className={[
                "rounded-2xl border bg-white transition-all duration-200",
                // altura y padding aumentan en tablet
                "px-4 h-24 sm:h-28 md:h-32",
                "flex items-center justify-center text-center",
                activa
                  ? "border-transparent shadow-md"
                  : "border-black/10 hover:border-[#3e00b3]/30 hover:shadow-sm",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#260089]/30",
              ].join(" ")}
              style={
                activa
                  ? {
                      background: "linear-gradient(180deg, #ffffff 0%, #f7f7ff 100%)",
                      boxShadow:
                        "0 0 0 2px rgba(38,0,137,0.1), 0 10px 24px -12px rgba(0,0,0,0.18)",
                    }
                  : undefined
              }
            >
              <div className="flex flex-col items-center gap-2 md:gap-3">
                <span className="text-3xl sm:text-4xl md:text-5xl">{op.icon}</span>
                <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                  {op.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Botones inferiores */}
      <div className="mt-auto pt-8 grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={onPrev}
          className="h-12 md:h-14 rounded-xl border border-black/10 bg-white text-black font-medium transition active:scale-[0.98]"
        >
          Anterior
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={!canContinue}
          className={[
            "h-12 md:h-14 rounded-xl text-white font-semibold transition-all duration-500",
            "bg-gradient-to-r from-[#260089] via-[#3e00b3] to-[#6200ee] bg-[length:200%_auto]",
            "hover:bg-[position:100%_0] hover:shadow-lg active:scale-[0.98]",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
            "disabled:hover:bg-[position:0_0]"
          ].join(" ")}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
