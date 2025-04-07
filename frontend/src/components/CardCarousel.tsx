"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type CardProps = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

type CardCarouselProps = {
  cards: CardProps[];
};

export default function CardCarousel({ cards }: CardCarouselProps) {
  return (
    <section className="min-h-[50vh] md:px-[64px] px-[24px] flex flex-col justify-center py-12">
      <div className="max-w-full w-full text-start ">
        <h2 className="text-4xl font-bold text-gray-800">
          Descubra destinos incríveis ao redor do mundo
        </h2>
        <p className="text-gray-600 mt-2 text-xl">
          Conheça os lugares mais desejados para viajar em 2025. Escolha seu
          próximo destino com a gente!
        </p>
      </div>

      <div className="mt-8 relative w-full h-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="h-full w-full relative"
        >
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />

          <CarouselContent className="h-full">
            {cards.map((card) => (
              <CarouselItem
                key={card.id}
                className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/4 flex justify-center "
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm flex flex-col">
                  {card.imageUrl && (
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover border-t-[12px] border-l-[12px] border-r-[12px] border-white rounded-t-3xl"
                    />
                  )}

                  <div className="p-4 text-center flex-1 flex flex-col justify-between min-h-[120px]">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{card.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
