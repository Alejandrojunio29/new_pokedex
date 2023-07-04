import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState<any>({});
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((res) => setPokemon(res));
  }, [name]);

  return (
    <section className="grid grid-cols-2 ">
      <figure className="pr-12">
        <img
          src={pokemon?.sprites?.other["official-artwork"]?.front_default}
          alt=""
        />
      <h1 className="flex justify-center bg-gradient-to-r from-red-600 from-40% to-blue-800  hover:text-black text-neutral-100 to-60% rounded-2xl p-4">{name}</h1>
      </figure>
      <section className="bg-contain bg-center bg-[url('https://pbs.twimg.com/media/Dzvhv7MUwAEpXAJ.jpg')] ">
            <h1 className="font-mono hover:underline text-2xl text-blue-600 pl-4 pt-5">Abilities</h1>
        <div className="grid grid-flow-row justify-center  gap-4 ">
            <div className="flex justify-center bg-yellow-400 text-neutral-100  rounded-2xl p-4">
            {pokemon?.abilities[0]?.ability?.name}
            </div>
            <div className="flex justify-center bg-blue-600 text-neutral-100  rounded-2xl p-4">
            {pokemon?.abilities[1]?.ability?.name}
            </div>
        </div>


      </section>
    </section>
  );
}
