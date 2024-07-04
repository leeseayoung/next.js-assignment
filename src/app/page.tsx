import Image from "next/image";
import PokemonList from "./_components/PokemonList";
import { text } from "stream/consumers";

export default function Home() {
  return (
    <div>
      <div>
        <p className="text-center text-3xl mt-2">포켓몬 도감</p>
      </div>
      <PokemonList />
    </div>
  );
}
