
export default function TusDatosCard() {
  const label = "block text-sm sm:text-base font-medium text-black mb-2";
  const fieldWrap = "mt-6";
  const icon = "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none";
  const input =
    "w-full h-12 sm:h-12 pl-11 pr-4 rounded-xl border border-black/20 " +
    "focus:outline-none focus:ring-0 focus:border-black/70 bg-white";

  return (
    <div
      className="min-h-[100svh] flex justify-center items-center px-5 sm:px-8 py-10"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #e6f1ff 100%)",
      }}
    >
      {/* Tarjeta contenedora */}
      <form
        className="w-full max-w-[28rem] sm:max-w-lg bg-white shadow-xl rounded-2xl p-8 sm:p-10 border border-gray-100"
        aria-label="Formulario: Tus datos"
      >
        {/* Encabezado */}
        <header className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#260089]">
            Tus datos
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Completa tu información personal
          </p>
        </header>

        {/* Nombre */}
        <div className={fieldWrap}>
          <label htmlFor="nombre" className={label}>
            Nombre completo
          </label>
          <div className="relative">
            <span className={icon} aria-hidden>
              {/* icono persona */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 21a8 8 0 1 0-16 0"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <input id="nombre" type="text" className={input} />
          </div>
        </div>

        {/* Correo */}
        <div className={fieldWrap}>
          <label htmlFor="correo" className={label}>
            Correo electrónico
          </label>
          <div className="relative">
            <span className={icon} aria-hidden>
              {/* icono correo */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="m22 8-10 6L2 8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <input id="correo" type="email" className={input} />
          </div>
        </div>

        {/* Teléfono */}
        <div className={fieldWrap}>
          <label htmlFor="telefono" className={label}>
            Teléfono
          </label>
          <div className="relative">
            <span className={icon} aria-hidden>
              {/* icono teléfono */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.2 2 2 0 0 1 4.06 2h2a2 2 0 0 1 2 1.72c.12.9.31 1.78.57 2.63a2 2 0 0 1-.45 2.11L7.1 9.91a16 16 0 0 0 6 6l1.45-1.08a2 2 0 0 1 2.11-.45c.85.26 1.73.45 2.63.57A2 2 0 0 1 22 16.92Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <input id="telefono" type="tel" className={input} />
          </div>
        </div>

        {/* Botón */}
        <div className="mt-10">
          <button
            type="button"
            className="w-full h-12 rounded-xl text-white font-medium transition active:scale-[0.99]"
            style={{ backgroundColor: "#260089" }}
          >
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
}
