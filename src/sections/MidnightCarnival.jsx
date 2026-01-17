export default function MidnightCarnival() {
  return (
    <section className="relative w-full overflow-hidden py-20 flex justify-center">
      
      <div className="relative w-full max-w-6xl px-4 flex flex-col items-center gap-6">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center relative z-20">
          The Midnight Carnival
        </h2>

        {/* Visual scene */}
        <div className="relative w-full">

          {/* BACKGROUND WHEEL */}
          {/* Fixes applied:
             1. Changed left-[-40%] to -left-4 (or left-0). 
                -40% pushes it way off-screen.
             2. Adjusted width to w-[25%] to match the visual proportion better.
             3. Added 'absolute' and 'bottom-0' to anchor it correctly.
          */}
          <div
            className="
              absolute
              bottom-0
              -left-4
              md:-left-12
              w-[25%]
              max-w-none
              opacity-25
              z-0
            "
          >
            <img
              src="/wheel_2.svg"
              alt="Ferris Wheel"
              className="w-full h-auto"
            />
          </div>

          {/* FOREGROUND SKYLINE */}
          <img
            src="/carnival_1.svg"
            alt="Carnival Skyline"
            className="relative z-10 w-full h-auto"
          />

        </div>

      </div>
    </section>
  );
}