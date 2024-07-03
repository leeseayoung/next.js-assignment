"use client";
import React, { useEffect, useState } from "react";

const PokemonDetail = ({ id }: { id: string }) => {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`/api/pokemons/${id}`);
        const data = await response.json();
        setPokemon(data);
        console.log(data);
      } catch {}
    };
    fetchPokemon();
  }, []);

  return <div>{pokemon.korean_name}</div>;
};

export default PokemonDetail;
