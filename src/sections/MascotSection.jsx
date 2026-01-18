import sectionGradients from "../styles/sectionGradients";

export default function MascotSection() {
  return (
    <section
      className={`${sectionGradients.mascot} relative w-full py-20 flex justify-center overflow-hidden`}
    >
      {/* Radial glow behind mascot */}
      <div
        className="
          absolute
          top-1/3
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[600px]
          h-[600px]
          rounded-full
          bg-white
          opacity-40
          blur-3xl
          pointer-events-none
        "
      />

      <div className="relative w-full max-w-6xl px-4 flex flex-col items-center text-center">

        {/* Mascot */}
        <img
          src="/mascot.svg"
          alt="Ignus Mascot"
          className="w-64 sm:w-72 md:w-80 h-auto"
        />

        {/* Tagline */}
        <p className="mt-6 text-sm italic font-bold font-rosiana text-[#370068]">
          “Step In. Stay Awake. The Carnival Has Begun.”
        </p>

        {/* Register Button */}
        <button className="mt-4 px-8 py-2 rounded-full bg-black text-[#FFD966]">
          Register
        </button>

        
      </div>
    </section>
  );
}