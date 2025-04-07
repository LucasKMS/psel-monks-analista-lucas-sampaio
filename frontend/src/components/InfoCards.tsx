"use client";

export default function InfoCards() {
  return (
    <section className="w-full px-6 md:px-16 py-12">
      <div className=" mx-auto flex flex-col gap-6 lg:flex-row lg:gap-6">
        <div className="flex flex-col justify-between border border-purple-300 rounded-xl p-6 text-start w-full">
          <h3 className="text-xl font-bold text-gray-800">
            Monte sua viagem do seu jeito
          </h3>
          <p className="text-lg text-gray-600 mt-2 mb-4">
            scolha o destino, datas e preferências. A gente cuida de tudo para
            você viver a melhor experiência.
          </p>
          <button className="bg-purple-200 text-purple-800 font-semibold text-sm px-4 py-2 mx-12 rounded-md hover:bg-purple-300 transition">
            Personalize agora
          </button>
        </div>

        <div className="flex flex-col justify-between border border-purple-300 rounded-xl p-6 text-start w-full ">
          <h3 className="text-xl font-bold text-gray-800">
            Atendimento exclusivo e humanizado
          </h3>
          <p className="text-lg text-gray-600 mt-2 mb-4">
            Nossos especialistas estão prontos para te atender e montar um
            roteiro único, sob medida pra você.
          </p>
          <button className="bg-purple-200 text-purple-800 font-semibold text-sm px-4 py-2 rounded-md hover:bg-purple-300 transition mx-12 ">
            Fale com um agente
          </button>
        </div>

        <div className="flex flex-col justify-between border border-purple-300 rounded-xl p-6 text-start w-full ">
          <h3 className="text-xl font-bold text-gray-800">
            Viaje tranquilo com suporte 24h
          </h3>
          <p className="text-lg text-gray-600 mt-2 mb-4">
            Em qualquer lugar do mundo, você conta com a nossa assistência para
            emergências, dúvidas ou ajustes.
          </p>
          <button className="bg-purple-200 text-purple-800 font-semibold text-sm px-4 py-2 rounded-md hover:bg-purple-300 transition mx-12">
            Conheça os planos
          </button>
        </div>
      </div>
    </section>
  );
}
