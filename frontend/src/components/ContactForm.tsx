"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import illustration from "../../public/form.svg";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const random1 = Math.floor(Math.random() * 90) + 10;
    const random2 = Math.floor(Math.random() * 90) + 10;
    setNum1(random1);
    setNum2(random2);
  }, []);

  const correctAnswer = num1 + num2;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (parseInt(result) !== correctAnswer) {
      setError("Resposta incorreta. Tente novamente.");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/wp-json/api/leads`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome,
            sobrenome,
            telefone,
            email,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Erro ao enviar lead");

      alert("Lead enviado com sucesso!");
      setNome("");
      setSobrenome("");
      setTelefone("");
      setEmail("");
      setResult("");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);

    if (!match) return value;

    let formatted = "";
    if (match[1]) formatted += `(${match[1]}`;
    if (match[1] && match[1].length === 2) formatted += ") ";
    if (match[2]) formatted += match[2];
    if (match[3]) formatted += `-${match[3]}`;
    return formatted;
  };

  return (
    <section id="contato" className="w-full bg-zinc-900 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
        <div className="w-full lg:w-1/4 flex justify-center items-center">
          <Image
            src={illustration}
            alt="Ilustração"
            className="max-w-full h-auto lg:mt-12"
          />
        </div>

        <div className="bg-zinc-100 p-6 rounded-xl w-full lg:w-3/4">
          <h2 className="text-xl font-semibold text-zinc-900">
          Fale com um especialista e comece a planejar a sua viagem
          </h2>
          <p className="text-sm text-zinc-700 mt-1">
          Preencha os dados e nossa equipe entrará em contato com você para montar o roteiro ideal.
          </p>
          <p className="text-xs text-zinc-500 mt-4">
            *Dados Obrigatórios
          </p>

          <form onSubmit={handleSubmit} className="mt-4 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nome*"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="p-2 rounded-md border w-full"
              />
              <input
                type="text"
                placeholder="Sobrenome*"
                required
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
                className="p-2 rounded-md border w-full"
              />
              <input
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(formatPhone(e.target.value))}
                placeholder="Telefone*"
                required
                className="p-2 rounded-md border w-full"
              />

              <input
                type="email"
                placeholder="Email*"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 rounded-md border w-full"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="flex flex-wrap justify-around items-center gap-2 sm:gap-3 text-lg">
                <label className="font-semibold text-xl text-zinc-900 md:mr-29 mr-15">
                  Verificação de segurança
                </label>
                <span className="bg-purple-200 px-4 py-2 rounded-md font-bold text-purple-800 text-lg ">
                  {num1}
                </span>
                <span className="text-2xl font-bold text-zinc-800">+</span>
                <span className="bg-purple-200 px-4 py-2 rounded-md font-bold text-purple-800 text-lg">
                  {num2}
                </span>
                <span className="text-2xl font-bold text-zinc-800">=</span>
                <input
                  type="text"
                  required
                  value={result}
                  onChange={(e) => setResult(e.target.value)}
                  placeholder="Resultado*"
                  className="p-2 rounded-md border w-24 sm:w-32 text-center text-lg"
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-purple-200 text-purple-800 font-semibold px-6 py-2 rounded-md hover:bg-purple-300 transition"
              >
                Quero viajar!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
