import React from "react";

type Props = {
  current: number; // para el numero dentro de los circulos
  primary?: string; // color morado
};

export default function ProgressBar({
  current,
  primary = "#260089",
}: Props) {
  // Solo 3 pasos
  const steps = [1, 2, 3];

  const isDone = (i: number) => i < current;
  const isActive = (i: number) => i === current;

  return (
    <div className="w-full">
      <div className="mx-auto max-w-[28rem] sm:max-w-lg px-2 sm:px-4">
        <div className="flex items-center justify-center">
          {steps.map((_, i) => (
            <React.Fragment key={i}>
              {/* Circulo */}
              <div
                className={[
                  "rounded-full grid place-items-center text-white shadow-md",
                  "w-12 h-12 sm:w-14 sm:h-14 transition-all duration-300",
                ].join(" ")}
                style={{
                  background:
                    isDone(i) || isActive(i)
                      ? "linear-gradient(180deg, #3b1aa6 0%, #260089 100%)"
                      : "linear-gradient(180deg, #f2f2f7 0%, #e9e9f2 100%)",
                  color: isDone(i) || isActive(i) ? "#fff" : "#3a3a3a",
                  outline: isActive(i) ? `3px solid ${primary}22` : "none",
                }}
              >
                {isDone(i) ? (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                ) : (
                  <span className="text-base sm:text-lg font-semibold">
                    {i + 1}
                  </span>
                )}
              </div>

              {/* Linea entre circulos */}
              {i < steps.length - 1 && (
                <div
                  className="h-[3px] rounded-full flex-1 mx-2 sm:mx-4 transition-colors duration-300 opacity-80"
                  style={{
                    background: isDone(i)
                      ? `linear-gradient(90deg, ${primary} 0%, ${primary}99 100%)`
                      : "linear-gradient(90deg, #c6b8ff 0%, #b7a7ff 100%)",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
