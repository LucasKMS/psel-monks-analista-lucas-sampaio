import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-8 border-t border-purple-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
        <div className="flex gap-6 text-white text-2xl">
          <Instagram className="hover:text-purple-300 transition cursor-pointer" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="hover:text-purple-300 transition cursor-pointer"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.672-1.612-.921-2.205-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.064 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.85 9.85 0 0 1 6.985 2.898 9.825 9.825 0 0 1 2.893 6.991c-.003 5.45-4.437 9.884-9.887 9.884m8.413-18.297a11.815 11.815 0 0 0-8.414-3.488c-6.555 0-11.888 5.332-11.89 11.886a11.82 11.82 0 0 0 1.61 5.951L.001 24l5.305-1.395a11.84 11.84 0 0 0 5.724 1.458h.005c6.553 0 11.886-5.332 11.889-11.885a11.82 11.82 0 0 0-3.488-8.413" />
          </svg>
          <Twitter className="hover:text-purple-300 transition cursor-pointer" />
          <Facebook className="hover:text-purple-300 transition cursor-pointer" />
        </div>

        <p className="text-sm font-semibold mt-2">Explore o mundo com a MonksTour</p>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-300 mt-2">
          <a href="#">Home</a>
          <a href="#">Locais</a>
          <a href="#">Baixe o App</a>
          <a href="#">Contato</a>
        </div>
      </div>
    </footer>
  );
}
