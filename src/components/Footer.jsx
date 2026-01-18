import sectionGradients from "../styles/sectionGradients";

export default function Footer() {
  return (
    <footer className={`${sectionGradients.hero} w-full flex justify-center`}>
      <div className="text-center text-xs leading-relaxed text-[#BFBFBF]" >
        <p>
          IIT Jodhpur | February 05–08, 2026
        </p>

        <p>
          © 2026 IGNUS. All rights reserved.
        </p>

      </div>
    </footer>
  );
}