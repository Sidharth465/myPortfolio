import { FC } from "react";

/** Quiet midnight backdrop — one soft blue wash */
const AmbientBackground: FC = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#050a14]" />
      <div className="absolute inset-0 bg-grid-modern opacity-[0.25]" />
      <div className="absolute -top-[30%] right-[-10%] h-[55vmax] w-[55vmax] rounded-full bg-[#0066ff]/[0.09] blur-[140px]" />
      <div className="absolute bottom-[-20%] left-[-10%] h-[40vmax] w-[40vmax] rounded-full bg-slate-700/20 blur-[120px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050a14]/90" />
    </div>
  );
};

export default AmbientBackground;
