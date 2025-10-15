import React from "react";

type Step = { title: string; subtitle?: string };

type Props = {
  current: number; // 0..3
  steps?: Step[];
  primary?: string; // color morado
};

export default function ProgressBar({
  current,
  primary = "#260089",
  steps = [
    { title: "Información personal", subtitle: "Cuéntanos sobre ti" },
    { title: "ORIGEN", subtitle: "¿Cómo nos conociste?" },
    { title: "Satisfacción", subtitle: "Califica tu experiencia" },
    { title: "Gracias", subtitle: "Por tu respuesta" },
  ],
}: Props) {
  const isDone = (i: number) => i < current;
  const isActive = (i: number) => i === current;

  return (
    <nav aria-label="Progreso del formulario" className="w-full">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-center justify-center">
          {steps.map((s, i) => (
            <React.Fragment key={s.title}>
              <div className="flex flex-col items-center">
                <div
                  className={[
                    "rounded-full grid place-items-center text-white shadow-md",
                    "w-16 h-16 sm:w-20 sm:h-20 transition-all duration-300",
                  ].join(" ")}
                  style={{
                    background:
                      isDone(i) || isActive(i)
                        ? "linear-gradient(180deg, #3b1aa6 0%, #260089 100%)"
                        : "linear-gradient(180deg, #f2f2f7 0%, #e9e9f2 100%)",
                    color: isDone(i) || isActive(i) ? "#fff" : "#3a3a3a",
                    outline: isActive(i) ? `4px solid ${primary}22` : "none",
                  }}
                  aria-current={isActive(i) ? "step" : undefined}
                >
                  {isDone(i) ? (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <span className="text-xl sm:text-2xl font-semibold">
                      {i + 1}
                    </span>
                  )}
                </div>

                <div className="text-center mt-3 leading-tight">
                  <div className="font-extrabold text-sm sm:text-base">
                    {s.title}
                  </div>
                  {s.subtitle && (
                    <div className="text-[12px] sm:text-sm text-black/70 mt-1">
                      {s.subtitle}
                    </div>
                  )}
                </div>
              </div>

              {i < steps.length - 1 && (
                <div
                  className="h-1 rounded-full flex-1 mx-4 sm:mx-8 transition-colors duration-300 opacity-80"
                  style={{
                    background: isDone(i)
                      ? `linear-gradient(90deg, ${primary} 0%, ${primary}99 100%)`
                      : "linear-gradient(90deg, #c6b8ff 0%, #b7a7ff 100%)",
                  }}
                  aria-hidden
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
}
