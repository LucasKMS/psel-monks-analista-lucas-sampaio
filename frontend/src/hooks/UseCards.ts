"use client"
import { useEffect, useState } from "react";

const API = `${process.env.NEXT_PUBLIC_API_URL}/api/cards`;

type Cards = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const useCards = () => {
  const [cards, setCards] = useState<Cards[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const result = await fetch(API);
        if (!result.ok) {
          throw new Error("Erro ao buscar cards");
        }        
        const response = await result.json();
        setCards(response);
      } catch (error) {
        setError("Erro ao buscar cards");
        throw new Error("Erro ao buscar cards");
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return { cards, loading, error };
};

export default useCards;
