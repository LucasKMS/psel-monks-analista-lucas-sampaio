import Image from "next/image";
import Navbar from "./NavBar";
import heroImg from "../../public/hero-monks.png";

export default function HeroBanner() {
  return (
    <section id="hero" className="relative bg-[#2d2d2d] text-white w-full flex flex-col md:flex-row min-h-[60vh]">
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${heroImg.src})`,
        }}
      />

      <div className="relative w-full md:w-3/5 flex flex-col z-10">
        <Navbar />
        <div className="flex flex-col justify-center px-6 md:px-16 py-6 flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-6">
            Descubra destinos incríveis com quem entende de viagem
          </h1>
          <p className="text-gray-300 mt-4">
            Roteiros personalizados, experiências únicas e toda a assistência
            que você precisa para explorar o mundo sem preocupações.
          </p>
        </div>
      </div>

      <div className="hidden md:flex w-2/5">
        <Image
          src={heroImg}
          alt="Hero Monks"
          width={600}
          height={600}
          className="object-cover w-full"
          priority
        />
      </div>
    </section>
  );
}
