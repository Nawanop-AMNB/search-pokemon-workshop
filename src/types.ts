import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Represents a Pokémon's attack types */
export type Attack = {
  __typename?: 'Attack';
  /** The damage of this Pokémon attack */
  damage?: Maybe<Scalars['Int']>;
  /** The name of this Pokémon attack */
  name?: Maybe<Scalars['String']>;
  /** The type of this Pokémon attack */
  type?: Maybe<Scalars['String']>;
};

/** Represents a Pokémon */
export type Pokemon = {
  __typename?: 'Pokemon';
  /** The attacks of this Pokémon */
  attacks?: Maybe<PokemonAttack>;
  /** The classification of this Pokémon */
  classification?: Maybe<Scalars['String']>;
  /** The evolution requirements of this Pokémon */
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>;
  /** The evolutions of this Pokémon */
  evolutions?: Maybe<Array<Maybe<Pokemon>>>;
  fleeRate?: Maybe<Scalars['Float']>;
  /** The minimum and maximum weight of this Pokémon */
  height?: Maybe<PokemonDimension>;
  /** The ID of an object */
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  /** The maximum CP of this Pokémon */
  maxCP?: Maybe<Scalars['Int']>;
  /** The maximum HP of this Pokémon */
  maxHP?: Maybe<Scalars['Int']>;
  /** The name of this Pokémon */
  name?: Maybe<Scalars['String']>;
  /** The identifier of this Pokémon */
  number?: Maybe<Scalars['String']>;
  /** The type(s) of Pokémons that this Pokémon is resistant to */
  resistant?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The type(s) of this Pokémon */
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The type(s) of Pokémons that this Pokémon weak to */
  weaknesses?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The minimum and maximum weight of this Pokémon */
  weight?: Maybe<PokemonDimension>;
};

/** Represents a Pokémon's attack types */
export type PokemonAttack = {
  __typename?: 'PokemonAttack';
  /** The fast attacks of this Pokémon */
  fast?: Maybe<Array<Maybe<Attack>>>;
  /** The special attacks of this Pokémon */
  special?: Maybe<Array<Maybe<Attack>>>;
};

/** Represents a Pokémon's dimensions */
export type PokemonDimension = {
  __typename?: 'PokemonDimension';
  /** The maximum value of this dimension */
  maximum?: Maybe<Scalars['String']>;
  /** The minimum value of this dimension */
  minimum?: Maybe<Scalars['String']>;
};

/** Represents a Pokémon's requirement to evolve */
export type PokemonEvolutionRequirement = {
  __typename?: 'PokemonEvolutionRequirement';
  /** The amount of candy to evolve */
  amount?: Maybe<Scalars['Int']>;
  /** The name of the candy to evolve */
  name?: Maybe<Scalars['String']>;
};

/** Query any Pokémon by number or name */
export type Query = {
  __typename?: 'Query';
  pokemon?: Maybe<Pokemon>;
  pokemons?: Maybe<Array<Maybe<Pokemon>>>;
  query?: Maybe<Query>;
};


/** Query any Pokémon by number or name */
export type QueryPokemonArgs = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};


/** Query any Pokémon by number or name */
export type QueryPokemonsArgs = {
  first: Scalars['Int'];
};

export type GetPokemonByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type GetPokemonByIdQuery = { __typename?: 'Query', pokemon?: { __typename?: 'Pokemon', id: string, number?: string | null, name?: string | null, classification?: string | null, types?: Array<string | null> | null, resistant?: Array<string | null> | null, weaknesses?: Array<string | null> | null, fleeRate?: number | null, maxCP?: number | null, maxHP?: number | null, image?: string | null, weight?: { __typename?: 'PokemonDimension', minimum?: string | null, maximum?: string | null } | null, height?: { __typename?: 'PokemonDimension', minimum?: string | null, maximum?: string | null } | null, attacks?: { __typename?: 'PokemonAttack', fast?: Array<{ __typename?: 'Attack', name?: string | null, type?: string | null, damage?: number | null } | null> | null, special?: Array<{ __typename?: 'Attack', name?: string | null, type?: string | null, damage?: number | null } | null> | null } | null, evolutions?: Array<{ __typename?: 'Pokemon', name?: string | null, number?: string | null, id: string, image?: string | null } | null> | null } | null };

export type GetPokemonListQueryVariables = Exact<{
  first: Scalars['Int'];
}>;


export type GetPokemonListQuery = { __typename?: 'Query', pokemons?: Array<{ __typename?: 'Pokemon', id: string, number?: string | null, name?: string | null, image?: string | null } | null> | null };


export const GetPokemonByIdDocument = gql`
    query getPokemonById($id: String) {
  pokemon(id: $id) {
    id
    number
    name
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    classification
    types
    resistant
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
    weaknesses
    fleeRate
    maxCP
    evolutions {
      name
      number
      id
      image
    }
    maxHP
    image
  }
}
    `;

/**
 * __useGetPokemonByIdQuery__
 *
 * To run a query within a React component, call `useGetPokemonByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPokemonByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetPokemonByIdQuery, GetPokemonByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPokemonByIdQuery, GetPokemonByIdQueryVariables>(GetPokemonByIdDocument, options);
      }
export function useGetPokemonByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPokemonByIdQuery, GetPokemonByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPokemonByIdQuery, GetPokemonByIdQueryVariables>(GetPokemonByIdDocument, options);
        }
export type GetPokemonByIdQueryHookResult = ReturnType<typeof useGetPokemonByIdQuery>;
export type GetPokemonByIdLazyQueryHookResult = ReturnType<typeof useGetPokemonByIdLazyQuery>;
export type GetPokemonByIdQueryResult = Apollo.QueryResult<GetPokemonByIdQuery, GetPokemonByIdQueryVariables>;
export const GetPokemonListDocument = gql`
    query getPokemonList($first: Int!) {
  pokemons(first: $first) {
    id
    number
    name
    image
  }
}
    `;

/**
 * __useGetPokemonListQuery__
 *
 * To run a query within a React component, call `useGetPokemonListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonListQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetPokemonListQuery(baseOptions: Apollo.QueryHookOptions<GetPokemonListQuery, GetPokemonListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPokemonListQuery, GetPokemonListQueryVariables>(GetPokemonListDocument, options);
      }
export function useGetPokemonListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPokemonListQuery, GetPokemonListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPokemonListQuery, GetPokemonListQueryVariables>(GetPokemonListDocument, options);
        }
export type GetPokemonListQueryHookResult = ReturnType<typeof useGetPokemonListQuery>;
export type GetPokemonListLazyQueryHookResult = ReturnType<typeof useGetPokemonListLazyQuery>;
export type GetPokemonListQueryResult = Apollo.QueryResult<GetPokemonListQuery, GetPokemonListQueryVariables>;