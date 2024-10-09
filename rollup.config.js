import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
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
};