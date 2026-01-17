export default function MascotSection() {
  return (
    <section className="w-full py-12 flex justify-center">
      <div className="w-full max-w-6xl px-4 flex flex-col items-center text-center">

        {/* Mascot (LARGER, DOMINANT) */}
        <img
          src="/mascot.svg"
          alt="Ignus Mascot"
          className="w-72 sm:w-80 md:w-[250rem] h-auto"
        />

        {/* Tagline */}
        <p className="mt-6 text-sm italic">
          “Step In. Stay Awake. The Carnival Has Begun.”
        </p>

        {/* Register Button */}
        <button className="mt-4 px-8 py-2 rounded-full border">
          Register
        </button>

        {/* CONTACT + QR WRAPPER (SINGLE DIV) */}
        <div className="mt-20 w-full flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Contact Us */}
          <h2 className="text-2xl font-bold">
            CONTACT US
          </h2>

          {/* QR Codes */}
          <div className="flex gap-6">
            <img src="/qr1.svg" alt="QR 1" className="w-20 h-20" />
            <img src="/qr2.svg" alt="QR 2" className="w-20 h-20" />
            <img src="/qr3.svg" alt="QR 3" className="w-20 h-20" />
          </div>

        </div>

      </div>
    </section>
  );
}