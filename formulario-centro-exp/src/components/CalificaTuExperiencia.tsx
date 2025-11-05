import { useState } from "react";

type Props = {
  onPrev?: () => void;
  onNext?: () => void;
};

export default function SatisfaccionFormCard({ onPrev, onNext }: Props) {
  type Opcion = { id: number; emoji: string; label: string };

  const opciones: Opcion[] = [
    { id: 0, emoji: "😔", label: "Muy insatisfecho" },
    { id: 1, emoji: "🙁", label: "Insatisfecho" },
    { id: 2, emoji: "😐", label: "Neutral" },
    { id: 3, emoji: "😊", label: "Satisfecho" },
    { id: 4, emoji: "😍", label: "Muy satisfecho" },
  ];

  const [selected, setSelected] = useState<number | null>(null);

  // Gradientes
  const softGradients = [
    "linear-gradient(90deg, #f6c1b9 0%, #f4a6a0 100%)",
    "linear-gradient(90deg, #f7d5a5 0%, #f3b673 100%)",
    "linear-gradient(90deg, #f9eab1 0%, #d7e9c4 100%)",
    "linear-gradient(90deg, #b4e1e6 0%, #9ad2f5 100%)",
    "linear-gradient(90deg, #c6e6c3 0%, #a4d6a0 100%)",
  ];
  const ringColors = ["#ee9e95", "#e8b070", "#d9e29f", "#99cf98", "#94cfe9"];

  const canContinue = selected !== null;

  return (
    <>
      {/* Tarjeta principal (mejorada para tablets) */}
      <div
        className="
          w-full
          max-w-[28rem] sm:max-w-lg md:max-w-xl lg:max-w-2xl
          bg-white shadow-xl rounded-2xl
          p-8 sm:p-10 md:p-12
          border border-gray-100
        "
      >
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-extrabold tracking-tight text-[#260089]">
            Tu experiencia
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">
            Califica tu experiencia en Tlapps City
          </p>
        </div>

        {/* Opciones de satisfacción (más grandes en md) */}
        <div className="mt-6 space-y-4 md:space-y-5">
          {opciones.map((op, i) => {
            const isActive = selected === i;
            return (
              <label
                key={op.id}
                onClick={() => setSelected(i)}
                className={[
                  "group relative w-full rounded-2xl cursor-pointer select-none overflow-hidden",
                  "flex items-center gap-3 sm:gap-4 px-4 sm:px-5 md:px-6",
                  "h-14 sm:h-16 md:h-20 border transition-all duration-300 ease-out will-change-transform",
                  isActive
                    ? "shadow-md"
                    : "border-gray-200 hover:border-[#3e00b3]/30 hover:shadow-sm",
                  !isActive
                    ? "motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.005]"
                    : "",
                ].join(" ")}
                style={
                  isActive
                    ? {
                        backgroundImage: softGradients[i],
                        backgroundSize: "200% auto",
                        animation:
                          "softShift 6s ease-in-out infinite, selectPop 200ms ease-out 1",
                        borderColor: "transparent",
                        boxShadow: `0 0 0 2px ${ringColors[i]}44, 0 8px 20px -8px rgba(0,0,0,0.18)`,
                        transform: "translateY(-1px) scale(1.01)",
                      }
                    : { backgroundColor: "white" }
                }
              >
                <input
                  type="radio"
                  name="satisfaccion"
                  value={op.label}
                  className="sr-only"
                  checked={isActive}
                  onChange={() => setSelected(i)}
                />
                <span
                  className={[
                    "text-2xl sm:text-3xl md:text-4xl transition-transform duration-300 ease-out",
                    isActive ? "motion-safe:scale-110" : "group-hover:motion-safe:scale-105",
                  ].join(" ")}
                  aria-hidden
                >
                  {op.emoji}
                </span>
                <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                  {op.label}
                </span>
              </label>
            );
          })}
        </div>

        {/* Botones inferiores */}
        <div className="mt-8 grid grid-cols-2 gap-4">
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
              "h-12 md:h-14 rounded-xl text-white font-semibold",
              "bg-gradient-to-r from-[#260089] via-[#3e00b3] to-[#6200ee]",
              "bg-[length:200%_auto] transition-all duration-500",
              "hover:bg-[position:100%_0] hover:shadow-lg active:scale-[0.98]",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
              "disabled:hover:bg-[position:0_0]"
            ].join(" ")}
          >
            Siguiente
          </button>
        </div>
      </div>

      {/* Animaciones */}
      <style>{`
        @keyframes softShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes selectPop {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-1px) scale(1.02); }
          100% { transform: translateY(-1px) scale(1.01); }
        }
      `}</style>
    </>
  );
}
