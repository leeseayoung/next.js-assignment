"use client";

import React, { use, useEffect, useState } from "react";
import { Pokemon } from "../_types/pokemons";
import Link from "next/link";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("/api/pokemons");
        const data = await response.json();
        setPokemons(data);
        setLoding(false);
      } catch {}
    };
    fetchPokemons();
  }, []);

  if (loding) {
    return <div>로딩...</div>;
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "8px",
      }}
    >
      {pokemons.map((pokemon) => {
        return (
          <Link href={`/detail/${pokemon.id}`} key={pokemon.id}>
            <div className="border p-2 m-1 text-center rounded-lg">
              <img
                className="mx-auto"
                src={pokemon.sprites.front_default}
                alt={pokemon.korean_name}
                style={{ width: "60px", height: "70px" }}
              />
              <br />
              이름: {pokemon.korean_name}
              <br />
              도감번호: {pokemon.id} 번
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PokemonList;
