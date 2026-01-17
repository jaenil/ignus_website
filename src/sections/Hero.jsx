export default function Hero() {
  return (
    <section className="w-full py-12">
      <div className="w-full flex justify-center">
        <div className="flex flex-col items-center gap-6 w-full max-w-6xl px-4">

          {/* Hero Image */}
          <img
            src="/main_logo.svg"
            alt="Ignus 2026"
            className="w-full h-auto"
          />

          {/* Register Button */}
          <div className="relative flex items-center justify-center">
            <button className="px-8 py-3 border rounded">
              Register
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}