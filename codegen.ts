import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://graphql-pokemon2.vercel.app/',
  documents: 'src/operations/*.{gql,graphql}',
  generates: {
    'src/types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
