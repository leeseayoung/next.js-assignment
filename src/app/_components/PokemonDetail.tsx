"use client";
import { Krona_One } from "next/font/google";
import React, { useEffect, useState } from "react";
import { Pokemon } from "../_types/pokemons";
import Link from "next/link";

const PokemonDetail = ({ id }: { id: string }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
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

  if (!pokemon) {
    return <div>로딩 ...</div>;
  }
  return (
    <div>
      <header className="bg-slate-300 pt-3 pb-3">
        <div className="text-center text-3xl">{pokemon.korean_name}</div>
        <div className="text-center">{`No. 00${pokemon.id}`}</div>
      </header>
      <main>
        <img
          className="mx-auto"
          src={pokemon.sprites.front_default}
          alt={pokemon.korean_name}
          style={{ width: "80px", height: "80px" }}
        />
        <div className="text-center mt-4 text-3xl  ">
          이름: {pokemon.korean_name}
        </div>
        <div className="text-center mt-4">
          키: {pokemon.height / 10} m 무게: {pokemon.weight / 10} kg
        </div>
        <div className="flex justify-center">
          {/* -------------타입----------------------------*/}
          <div className="text-center font-bold">
            타입:
            {pokemon.types.map((type) => {
              return (
                <div className="border-solid  rounded-md bg-orange-400  text-white inline-block ml-2 p-0.5">
                  {type.type.korean_name}
                </div>
              );
            })}
          </div>
          {/* -------------특성----------------------------*/}
          <div className="text-center ml-2 font-bold">
            특성:
            {pokemon.abilities.map((ability) => {
              return (
                <div className="border-solid  rounded-md bg-green-400  text-white inline-block ml-2 p-0.5">
                  {ability.ability.korean_name}
                </div>
              );
            })}
          </div>
        </div>
        {/* ------------------기술------------------- */}
        <p className="text-center mt-1 font-bold">기술 : </p>
        <div className="grid grid-cols-6 mt-3 gap-1">
          {pokemon.moves.map((move) => {
            return (
              <div className="text-center border-solid  rounded-md bg-blue-400  text-white inline-block ml-2">
                {move.move.korean_name}
              </div>
            );
          })}
        </div>
      </main>
      <div className="flex justify-center items-center">
        {/* 링크 해보기 밑에  */}

        <Link
          href={"/"}
          className=" mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          뒤로가기
        </Link>
      </div>
    </div>
  );
};

export default PokemonDetail;
