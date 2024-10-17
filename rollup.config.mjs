import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import alias from '@rollup/plugin-alias';
import del from 'rollup-plugin-delete';
import tsconfigPaths from 'rollup-plugin-tsconfig-paths';

export default [
  {
    input: {
      index: 'src/index.tsx',
      ui: 'src/components/ui/index.tsx',
      form: 'src/components/form/index.tsx',
    },
    output: [
      {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
        entryFileNames: '[name]/index.esm.js',
      },
      {
        dir: 'dist',
        format: 'cjs',
        sourcemap: true,
        entryFileNames: '[name]/index.js',
      }
    ],
    plugins: [
      alias({
        entries: [
          { find: 'eco-unp', replacement: 'src/components' },
          { find: 'eco-unp/ui', replacement: 'src/components/ui' },
          { find: 'eco-unp/form', replacement: 'src/components/form' }
        ]
      }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        outDir: './dist',
        declaration: true,
        declarationDir: './dist/types',
        jsx: 'react',
        allowSyntheticDefaultImports: true,
      }),
      postcss({
        extensions: ['.css'],
      }),
      del({ targets: 'dist/*', runOnce: true }),
      tsconfigPaths()
    ],
    external: ['react', 'react-dom'],
    onwarn: (warning, warn) => {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
        return;
      }
      warn(warning);
    },
  }
];