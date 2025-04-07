"use client";

export default function CategoryTags() {
  const categories = [
    "Praias", "Montanhas", "Ecoturismo", "Roteiros culturais", "Aventura",
    "Lua de mel", "Destinos exóticos", "Família", "Históricos", "Gastronômicos", "Mochilão",
    "Resorts", "All inclusive", "Momentos", "Cruzeiros",
  ];

  return (
    <section className="w-full px-6 md:px-16 py-12 pt-0">
      <div className=" mx-auto flex flex-col gap-6">
        <h2 className="text-4xl font-semibold text-gray-800">
          Trabalhamos com todos os estilos de viagem
        </h2>

        <div className="flex flex-wrap gap-3 align-center justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className="md:px-18 px-7 mb-2 py-2 border border-purple-600 text-[#7d26c9] rounded-full sm:text-md md:text-2xl font-bold bg-[#dfdcd5] hover:bg-[#3c0c60] hover:text-white transition duration-300 ease-in-out md:mx-2"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
