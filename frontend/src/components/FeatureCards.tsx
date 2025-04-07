"use client";
import Image from "next/image";
import image1 from "../../public/image1.png";
import image2 from "../../public/image2.png";
import image3 from "../../public/image3.png";

export default function FeatureCards() {
  return (
    <section id="destinos" className="w-full p-4 flex flex-col lg:flex-row gap-4 lg:gap-0 min-h-[50vh] md:px-[64px] px-[24px]  py-12 pt-0">
      <div className="flex flex-col lg:w-1/2">
        <div className="w-full lg:h-1/4 mb-4">
          <h2 className="text-4xl font-bold text-gray-800">
            Roteiros sob medida para todos os estilos de viajante
          </h2>
          <p className="text-gray-600 mt-2 text-xl">
            Se você ama aventura, romance, cultura ou relaxamento, temos um
            pacote perfeito para você.
          </p>
        </div>

        <div className="w-full lg:h-3/4">
          <Image
            src={image1}
            alt="Cidade 1"
            width={800}
            height={600}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Coluna Direita */}
      <div className="flex flex-col lg:w-1/2 justify-between gap-4 lg:pl-4">
        <div className="w-full h-full">
          <Image
            src={image2}
            alt="Cidade 2"
            width={800}
            height={400}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={image3}
            alt="Cidade 3"
            width={800}
            height={400}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
