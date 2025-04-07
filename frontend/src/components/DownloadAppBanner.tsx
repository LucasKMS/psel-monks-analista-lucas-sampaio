"use client";
import Image from "next/image";
import Link from "next/link";
import appleBadge from "../../public/appleStore.png";
import googleBadge from "../../public/googlePlay.png";

export default function DownloadAppBanner() {
  return (
    <section id="app" className="w-full flex justify-center px-[24px] md:px-[64px] py-12 pt-0">
      <div className="w-full  bg-[#3c0c60] text-white rounded-xl p-6 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex flex-col text-left ">
          <h2 className="text-4xl font-semibold text-white">
            Planeje sua próxima viagem com nosso app exclusivo
          </h2>
          <p className="text-zinc-300 mt-2 md:text-xl sm:text-lg">
            Baixe nosso aplicativo e tenha acesso a promoções, roteiros
            personalizados, alertas de passagens e muito mais — tudo na palma da
            sua mão!
          </p>
        </div>

        <div className="flex gap-3 flex-col  md:ml-6">
          <Link
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={appleBadge}
              alt="Disponível na App Store"
              width={140}
              height={50}
              className="h-auto w-auto"
            />
          </Link>
          <Link
            href="https://play.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={googleBadge}
              alt="Disponível no Google Play"
              width={140}
              height={50}
              className="h-auto w-auto"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
