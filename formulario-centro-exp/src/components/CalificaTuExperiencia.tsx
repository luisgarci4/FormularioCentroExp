import { useState } from "react";

export default function SatisfaccionFormCard() {
  type Opcion = { id: number; emoji: string; label: string };

  const opciones: Opcion[] = [
    { id: 0, emoji: "😔", label: "Muy insatisfecho" },
    { id: 1, emoji: "🙁", label: "Insatisfecho" },
    { id: 2, emoji: "😐", label: "Neutral" },
    { id: 3, emoji: "😊", label: "Satisfecho" },
    { id: 4, emoji: "😍", label: "Muy satisfecho" },
  ];

  const [selected, setSelected] = useState<number | null>(3);

  // De rojo (0°) a verde (120°)
  const colorForIndex = (i: number) =>
    `hsl(${(i / (opciones.length - 1)) * 120} 80% 45%)`;

  return (
    <div
      className="min-h-[100svh] flex justify-center items-center px-5 sm:px-8 py-10"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #e6f1ff 100%)",
      }}
    >
      {/* Tarjeta principal */}
      <form
        className="w-full max-w-[28rem] sm:max-w-lg bg-white shadow-xl rounded-2xl p-8 sm:p-10 border border-gray-100"
        aria-label="Formulario de satisfacción"
      >
        {/* Encabezado */}
        <header className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#260089]">
            Tu experiencia
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Califica tu experiencia en Tlapps City
          </p>
        </header>

        {/* Opciones de caritas */}
        <div className="mt-6 space-y-4">
          {opciones.map((op, i) => {
            const isActive = selected === i;
            return (
              <label
                key={op.id}
                className={[
                  "relative w-full h-14 sm:h-16 rounded-2xl cursor-pointer select-none",
                  "flex items-center gap-3 px-4 sm:px-5",
                  "border transition-[box-shadow,background-color,color,border-color] duration-150",
                  isActive ? "shadow-sm" : "border-black/10",
                ].join(" ")}
                style={
                  isActive
                    ? {
                        backgroundColor: colorForIndex(i),
                        color: "white",
                        borderColor: "transparent",
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
                <span className="text-2xl" aria-hidden>
                  {op.emoji}
                </span>
                <span className="text-base sm:text-lg font-bold">
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
            className="h-12 rounded-xl border border-black/10 bg-white text-black font-medium"
          >
            Anterior
          </button>
          <button
            type="button"
            className="h-12 rounded-xl text-white font-medium"
            style={{ backgroundColor: "#260089" }}
          >
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
}
