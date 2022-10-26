import React from 'react';
import { GetPokemonByIdQuery } from '../../types';
import Card from '../Card';
import PokemonItem from '../PokemonItem';
import router from 'next/router';
import NotFoundView from '../NotFoundView';

export type EvolutionsContentProps = {
  evolutions: GetPokemonByIdQuery['pokemon']['evolutions'];
};

function EvolutionsContent({ evolutions }: EvolutionsContentProps) {
  function onClick(id: string) {
    router.push(`/pokemons/${id}`);
  }
  return (
    <>
      {evolutions &&
        evolutions.map((evo, index) => {
          return (
            <PokemonItem
              key={`${evo.id}-${evo.name}-${evo.number}-${index}`}
              data={evo}
              onClick={onClick}
            />
          );
        })}
      {!evolutions && <NotFoundView />}
    </>
  );
}

export default EvolutionsContent;
