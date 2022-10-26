import { GetPokemonListQuery } from '../../types';
export type PokemonItemProps = {
  data: GetPokemonListQuery['pokemons'][number];
  onClick: (id: string) => void;
};

function PokemonItem(props: PokemonItemProps) {
  return (
    <div
      onClick={() => {
        props.onClick(props.data.id);
      }}
      className='cursor-pointer hover:border-purple-500 mt-3 hover:bg-zinc-800 rounded-md'
    >
      <button className='w-full'>
        <div className='grid grid-cols-7 grid-rows-1 grid-flow-col items-center justify-between'>
          <div className='col-span-1'>
            <h3 className='text-zinc-600 pl-2 text-left'>
              {props.data.number}
            </h3>
          </div>
          <div className='col-span-4'>
            <h3 className='text-zinc-300 pt-4 pb-4 pl-3 pr-2 text-left hover:text-purple-400'>
              {props.data.name}
            </h3>
          </div>
          <div className='col-span-2'>
            <div className='float-right p-2'>
              <img
                src={props.data.image}
                className={'h-16 w-16 object-cover rounded-lg brightness-75'}
              />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default PokemonItem;
