import { ApolloQueryResult } from '@apollo/client';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import AttackContent from '../../src/components/AttackContent';
import Card from '../../src/components/Card';
import Container from '../../src/components/Container';
import EvolutionsContent from '../../src/components/EvolutionsContent';
import LabelValue from '../../src/components/LabelValue';
import StrengthContent from '../../src/components/StrengthContent';
import GQLClient from '../../src/libs/GQLClient';
import {
  GetPokemonByIdDocument,
  GetPokemonByIdQuery,
  GetPokemonByIdQueryVariables,
  GetPokemonListDocument,
  GetPokemonListQuery,
  GetPokemonListQueryVariables,
} from '../../src/types';

function PokemonByIdPage({
  pokemon,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <div className='grid grid-cols-6 grid-rows-1 grid-flow-col gap-x-10 items-start h-full w-[1280px] mx-auto mt-4'>
        <div className='col-span-2'>
          <img
            className='w-full h-[400px] object-cover rounded-t-md'
            src={pokemon.image}
          />
          <Card className='rounded-t-none rounded-b-md text-white'>
            <p className='text-white text-3xl font-bold text-center'>
              {pokemon.name}
            </p>
            <LabelValue label={'Type: '} value={pokemon.types.join(', ')} />
            <LabelValue
              label={'Classification: '}
              value={pokemon.classification}
            />
            <LabelValue label={'Max HP: '} value={pokemon.maxHP.toString()} />
            <LabelValue
              label={'Height: '}
              value={`${pokemon.height.minimum} - ${pokemon.height.maximum}`}
            />
            <LabelValue
              label={'Weight: '}
              value={`${pokemon.weight.minimum} - ${pokemon.weight.maximum}`}
            />
          </Card>
        </div>
        <div className='col-span-4 text-white'>
          <div className='grid grid-cols-7 grid-rows-1 grid-flow-col gap-5 mb-5'>
            <div className='col-span-4'>
              <Card className='h-full'>
                <p className='text-lg font-bold'>Strength & Weakness</p>
                <StrengthContent
                  resistant={pokemon.resistant}
                  weaknesses={pokemon.weaknesses}
                />
              </Card>
            </div>
            <div className='col-span-3'>
              <Card className='h-full'>
                <p className='text-lg font-bold'>Evolutions</p>
                <EvolutionsContent evolutions={pokemon.evolutions} />
              </Card>
            </div>
          </div>
          <div className='grid grid-cols-2 grid-rows-1 grid-flow-col gap-x-5'>
            <div className='col-span-1'>
              <Card className='rounded-md mb-5'>
                <p className='text-xl font-semibold'>Fast Attack</p>
                {pokemon.attacks.fast.map((fa, index) => {
                  return (
                    <AttackContent
                      key={`${fa.name}-${fa.type}-${fa.damage}-${index}`}
                      attack={fa}
                    />
                  );
                })}
              </Card>
            </div>
            <div className='col-span-1'>
              <Card className='rounded-md mb-5'>
                <p className='text-xl font-semibold text-amber-400'>
                  Special Attack **
                </p>
                {pokemon.attacks.special.map((sa, index) => {
                  return (
                    <AttackContent
                      key={`${sa.name}-${sa.type}-${sa.damage}-${index}`}
                      attack={sa}
                    />
                  );
                })}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  let error: boolean = false;
  let result: ApolloQueryResult<GetPokemonListQuery>;
  try {
    result = await GQLClient.query<
      GetPokemonListQuery,
      GetPokemonListQueryVariables
    >({
      query: GetPokemonListDocument,
      variables: {
        first: 200,
      },
    });
  } catch (error) {
    console.error('Error while get pokenmon list', error);
    error = true;
  }
  const pokemons = result?.data?.pokemons;
  if (pokemons && !error)
    return {
      paths:
        pokemons.map((pokemon) => ({
          params: { id: pokemon.id },
        })) || [],
      fallback: false,
    };
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{
  pokemon: GetPokemonByIdQuery['pokemon'];
}> = async (context) => {
  let error: boolean = false;
  let result: ApolloQueryResult<GetPokemonByIdQuery>;

  try {
    result = await GQLClient.query<
      GetPokemonByIdQuery,
      GetPokemonByIdQueryVariables
    >({
      query: GetPokemonByIdDocument,
      variables: {
        id: context.params.id as string,
      },
    });
  } catch (error) {
    error = true;
    console.error('Error while get pokenmon by Id', error);
  }

  const pokemon = result?.data?.pokemon;
  if (pokemon && !error) {
    return {
      props: {
        pokemon,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default PokemonByIdPage;
