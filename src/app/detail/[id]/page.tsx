import React from "react";
import PokemonDetail from "@/app/_components/PokemonDetail";

const DetailPage = ({ params }: { params: { id: string } }) => {
  return <PokemonDetail id={params.id} />;
};

export default DetailPage;
