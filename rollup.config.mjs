import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import alias from '@rollup/plugin-alias';

export default [
  {
    input: 'src/components/ui/index.tsx',
    output: [
      {
        file: 'dist/ui/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/ui/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      alias({
        entries: [
          { find: 'components', replacement: './src/components' }
        ]
      }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.ui.json'
      }),
      postcss({
        extensions: ['.css'],
      }),
    ],
    external: ['react', 'react-dom'],
    onwarn: (warning, warn) => {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
        return;
      }
      warn(warning);
    },
  },
  {
    input: 'src/components/form/index.tsx',
    output: [
      {
        file: 'dist/form/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/form/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      alias({
        entries: [
          { find: 'components', replacement: './src/components' }
        ]
      }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.form.json'
      }),
      postcss({
        extensions: ['.css'],
      }),
    ],
    external: ['react', 'react-dom'],
    onwarn: (warning, warn) => {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
        return;
      }
      warn(warning);
    },
  },
];