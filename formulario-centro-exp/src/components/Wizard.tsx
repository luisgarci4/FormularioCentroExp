import { useState } from "react";
import TusDatosCard from "./TusDatos";
import ComoNosConociste from "./ComoNosConociste";
import CalificaTuExperiencia from "./CalificaTuExperiencia";
import RegistroExitoso from "./RegistroExitoso";
import ProgressBar from "./ProgressBar";

export default function Wizard() {
  const [step, setStep] = useState(0); // 0..3

  const next = () => setStep((s) => Math.min(3, s + 1));
  const prev = () => setStep((s) => Math.max(0, s - 1));
  const restart = () => setStep(0);

  return (
    <div
      className="min-h-[100svh] flex flex-col items-center justify-center gap-6 px-5 sm:px-8 py-10"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #e6f1ff 100%)" }}
    >
      {/* Progress bar arriba, siempre visible */}
      <div className="w-full max-w-5xl">
        <ProgressBar current={step} />
      </div>

      {/* Pantallas */}
      {step === 0 && <TusDatosCard onNext={next} />}
      {step === 1 && <ComoNosConociste onPrev={prev} onNext={next} />}
      {step === 2 && <CalificaTuExperiencia onPrev={prev} onNext={next} />}
      {step === 3 && <RegistroExitoso onRestart={restart} />}
    </div>
  );
}
