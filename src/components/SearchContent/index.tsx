import { useState } from 'react';
import { useGetPokemonListQuery } from '../../types';
import OverflowBox from '../OverflowBox';
import SearchTextBox from '../SearchTextBox';
import router from 'next/router';

export type SearchContentProps = {};

function SearchContent(props: SearchContentProps) {
  const [text, setText] = useState('');
  const { data, error, loading } = useGetPokemonListQuery({
    variables: {
      first: 200,
    },
  });
  function onClick(id: string) {
    router.push(`/pokemons/${id}`);
  }

  const filteredData =
    data?.pokemons?.filter((pokemon) => {
      const lowerCaseName = pokemon.name.toLocaleLowerCase();
      const lowerCaseKeyword = text.toLocaleLowerCase();
      return lowerCaseName.includes(lowerCaseKeyword);
    }) || [];

  return (
    <div className='w-full'>
      <SearchTextBox
        value={text}
        placeHolder={`A Pokemon's Name`}
        id={'search-content-textbox'}
        inputClassName='w-full'
        onChange={(e) => {
          setText(e.target.value);
        }}
        readOnly={false}
      />
      <div className='mt-6'>
        <p className='text-white text-xl font-semibold pb-2'>Pokemons</p>
        <OverflowBox>
          <div className='min-w-[300px] md:min-w-[500px] h-[350px] md:h-[600px]'>
            {loading &&
              Array(4)
                .fill(null)
                .map((_, index) => (
                  <FetchingSkeleton key={`skeleton-loading-${index}`} />
                ))}
            {error && <FetchingFailedView />}
            {filteredData.length > 0 && (
              <div>
                {filteredData.map((pokemon) => {
                  return <PokemonItem data={pokemon} onClick={onClick} />;
                })}
              </div>
            )}
          </div>
        </OverflowBox>
      </div>
    </div>
  );
}

import CenterBox from '../CenterBox';
import FetchingFailedView from '../FetchingFailedView';
import PokemonItem from '../PokemonItem';

function FetchingSkeleton() {
  return (
    <div className='pt-4 pb-4 w-full mx-auto'>
      <div className='animate-pulse'>
        <div className='grid grid-cols-7 grid-rows-1 grid-flow-col items-center gap-4 justify-between'>
          <div className='col-span-1'>
            <div className='flex flex-col gap-y-4'>
              <div className='rounded-md bg-zinc-700 h-6 w-full'></div>
            </div>
          </div>
          <div className='col-span-4'>
            <div className='flex flex-col gap-y-3'>
              <div className='rounded-md bg-zinc-700 h-6 w-full'></div>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='rounded-md bg-zinc-700 h-14 w-14 float-right'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchContent;
