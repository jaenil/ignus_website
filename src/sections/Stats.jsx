import sectionGradients from "../styles/sectionGradients";

export default function Stats() {
  return (
    <section className={`${sectionGradients.stats} w-full py-12 flex justify-center`}>
      <div className="grid grid-cols-3 gap-y-10 gap-x-8 max-w-5xl px-6">

        <Stat value="200+" label="COLLEGES" img={"../icon_college.svg"}/>
        <Stat value="200k+" label="EYEBALLS" img={"../icon_eyeball.svg"}/>
        <Stat value="30+" label="GOVT. ORG" img={"../icon_govt.svg"}/>

        <Stat value="80k+" label="FOOTFALLS" img={"../icon_footfall.svg"}/>
        <Stat value="75+" label="CORPORATES" img={"../icon_corporate.svg"}/>
        <Stat value="50+" label="EVENTS" img={"../icon_events.svg"}/>

      </div>
    </section>
  );
}

function Stat({ value, label,img }) {
  return (
    <div className="flex items-center gap-3">

      {/* Icon */}
      <img
        src={img}
        alt=""
        className="w-6 h-6"
      />

      {/* Text */}
      <div className="flex flex-col text-[#DAB8FF]">
        <span className="text-lg font-bold font-white">
          {value}
        </span>
        <span className="text-xs tracking-wide">
          {label}
        </span>
      </div>

    </div>
  );
}