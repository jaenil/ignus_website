export default function AboutUs() {
  return (
    <section className="relative w-full py-16 flex justify-center overflow-hidden">

      {/* Clouds layer (decorative only) */}
      <div className="absolute inset-0 pointer-events-none">

        <img
          src="/cloud_PNG112207.png"
          alt=""
          className="absolute top-6 left-1/4 w-1/2 opacity-80 blur-sm"
        />

        <img
          src="/cloud_PNG112207.png"
          alt=""
          className="absolute top-20 right-1/4 w-1/2 opacity-80 blur-sm"
        />

        <img
          src="/cloud_PNG112207.png"
          alt=""
          className="absolute bottom-10 left-1/3 w-1/2 opacity-80 blur-sm"
        />

      </div>

      {/* Content layer */}
      <div className="relative flex flex-col items-center gap-4 max-w-3xl px-4 text-center">

        <img
          src="/moon.svg"
          alt="Moon"
          className="w-20 h-auto"
        />

        <h2 className="text-xl font-bold">
          ABOUT US
        </h2>

        <p className="text-sm leading-relaxed">
          IGNUS, the much anticipated annual socio-cultural fest of IIT Jodhpur, is now back, after three years.
          IGNUS celebrates art, culture and pluralism. It provides a stage for the creative and intellectual minds
          from across the country to showcase their incredible talent and creativity through art and culture.
        </p>

      </div>
    </section>
  );
}