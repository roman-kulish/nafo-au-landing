import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import litcss from 'rollup-plugin-postcss-lit';
import esbuild from 'rollup-plugin-esbuild';

export default {
    input: 'src/index.ts',
    output: [
        {
            dir: 'dist',
            format: 'es',
            sourcemap: true,
        }
    ],
    plugins: [
        resolve({
            browser: true,
        }),
        esbuild(),
        postcss({
            minimize: false,
            inject: false
        }),
        litcss(),
    ],
};