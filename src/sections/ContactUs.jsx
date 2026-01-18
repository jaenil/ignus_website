import sectionGradients from "../styles/sectionGradients"

export default function contactUs () {
    return (
        <section className={`${sectionGradients.initiativePrakriti}`}>
            <div className="mt-16 w-full flex flex-col md:flex-row items-center justify-between gap-8">

            <h2 className="text-2xl font-bold text-[#370068] font-rosiana">
                CONTACT US
            </h2>

            <div className="flex gap-6">
                <img src="/qr1.svg" alt="QR 1" className="w-20 h-20" />
                <img src="/qr2.svg" alt="QR 2" className="w-20 h-20" />
                <img src="/qr3.svg" alt="QR 3" className="w-20 h-20" />
            </div>
            </div>
        </section>
    )
}