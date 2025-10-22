import { useState } from "react";

type Props = { onNext?: () => void };

export default function TusDatosCard({ onNext }: Props) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [errores, setErrores] = useState<{ nombre?: string; correo?: string; telefono?: string }>({});

  // Reglas (las mismas que usas en validarCampos) para el estado del botón
  const nombreOk = /^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(nombre.trim());
  const correoOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.trim());
  const telOk = /^\d{10}$/.test(telefono.trim());
  const isValid = nombreOk && correoOk && telOk;

  const validarCampos = () => {
    const nuevosErrores: typeof errores = {};

    if (!nombreOk) nuevosErrores.nombre = "El nombre solo puede contener letras y espacios (mínimo 3 caracteres).";
    if (!correoOk) nuevosErrores.correo = "Ingresa un correo electrónico válido.";
    if (!telOk) nuevosErrores.telefono = "El teléfono debe tener exactamente 10 dígitos numéricos.";

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleNext = () => {
    if (validarCampos() && onNext) onNext();
  };

  return (
    <form
      className="w-full max-w-[28rem] sm:max-w-lg bg-white shadow-xl rounded-2xl p-8 sm:p-10 border border-gray-100"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Formulario: Tus datos"
    >
      <header className="text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#260089]">
          Tus datos
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
          Completa tu información personal
        </p>
      </header>

      {/* Nombre */}
      <div className="mt-6">
        <label htmlFor="nombre" className="block text-sm sm:text-base font-medium text-black mb-2">
          Nombre completo
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" stroke="currentColor" strokeWidth="1.6" />
              <path d="M20 21a8 8 0 1 0-16 0" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""))}
            placeholder="Ej. Juan Pérez"
            required
            className="w-full h-12 pl-11 pr-4 rounded-xl border border-black/20 focus:outline-none focus:border-[#260089] bg-white"
            aria-invalid={!nombreOk}
          />
        </div>
        {errores.nombre && <p className="text-red-500 text-sm mt-1">{errores.nombre}</p>}
      </div>

      {/* Correo */}
      <div className="mt-6">
        <label htmlFor="correo" className="block text-sm sm:text-base font-medium text-black mb-2">
          Correo electrónico
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6" />
              <path d="m22 8-10 6L2 8" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
          <input
            id="correo"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Ej. usuario@correo.com"
            required
            className="w-full h-12 pl-11 pr-4 rounded-xl border border-black/20 focus:outline-none focus:border-[#260089] bg-white"
            aria-invalid={!correoOk}
          />
        </div>
        {errores.correo && <p className="text-red-500 text-sm mt-1">{errores.correo}</p>}
      </div>

      {/* Teléfono */}
      <div className="mt-6">
        <label htmlFor="telefono" className="block text-sm sm:text-base font-medium text-black mb-2">
          Teléfono
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.2 2 2 0 0 1 4.06 2h2a2 2 0 0 1 2 1.72c.12.9.31 1.78.57 2.63a2 2 0 0 1-.45 2.11L7.1 9.91a16 16 0 0 0 6 6l1.45-1.08a2 2 0 0 1 2.11-.45c.85.26 1.73.45 2.63.57A2 2 0 0 1 22 16.92Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
          </span>
          <input
            id="telefono"
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value.replace(/\D/g, "").slice(0, 10))}
            placeholder="Ej. 6181234567"
            required
            maxLength={10}
            className="w-full h-12 pl-11 pr-4 rounded-xl border border-black/20 focus:outline-none focus:border-[#260089] bg-white"
            aria-invalid={!telOk}
          />
        </div>
        {errores.telefono && <p className="text-red-500 text-sm mt-1">{errores.telefono}</p>}
      </div>

      {/* Botón */}
      <div className="mt-10">
        <button
          type="button"
          onClick={handleNext}
          disabled={!isValid}
          aria-disabled={!isValid}
          className={[
            "w-full h-12 rounded-xl text-white font-bold transition-all duration-500 active:scale-[0.98]",
            "bg-gradient-to-r from-[#260089] via-[#3e00b3] to-[#6200ee] bg-[length:200%_auto]",
            "hover:bg-[position:100%_0] hover:shadow-lg",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
            "disabled:hover:bg-[position:0_0]" // anula la animación de hover si está deshabilitado
          ].join(" ")}
        >
          Siguiente
        </button>
      </div>
    </form>
  );
}
