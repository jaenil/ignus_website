export default function Stats() {
  return (
    <section className="w-full py-12 flex justify-center">
      <div className="grid grid-cols-3 gap-y-10 gap-x-8 max-w-5xl px-6">

        <Stat value="200+" label="COLLEGES" />
        <Stat value="200k+" label="EYEBALLS" />
        <Stat value="30+" label="OUTREACHES" />

        <Stat value="80k+" label="FOOTFALLS" />
        <Stat value="75+" label="CORPORATES" />
        <Stat value="50+" label="EVENTS" />

      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="flex items-center gap-3">

      {/* Icon */}
      <img
        src="/placeholder_icon.svg"
        alt=""
        className="w-6 h-6"
      />

      {/* Text */}
      <div className="flex flex-col">
        <span className="text-lg font-bold">
          {value}
        </span>
        <span className="text-xs tracking-wide">
          {label}
        </span>
      </div>

    </div>
  );
}