const path = require('path');
const fs = require('fs');
const rollup = require('rollup');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const resolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel').default;
const { DEFAULT_EXTENSIONS } = require('@babel/core');

// This will be the package.json for the specific package where the build script was executed from
const cwd = process.cwd();
const packagePath = path.join(cwd, './package.json');
const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx'];

const plugins = [
  // Automatically externalise peerDependencies in a rollup bundle
  peerDepsExternal(),

  // Allows node_modules resolution
  resolve({ extensions }),

  // Allow bundling cjs modules. Rollup doesn't understand cjs
  commonjs(),

  // Compile TypeScript/JavaScript files
  babel({
    extensions,
    babelHelpers: 'bundled',
    rootMode: 'upward',
  }),
];

const inputOptions = {
  input: './src/index.ts',

  plugins,
};

const outputOptions = [
  {
    file: pkg.main,
    format: 'cjs',
    sourcemap: true,
  },
  {
    file: pkg.module,
    format: 'es',
    sourcemap: true,
  },
];

async function build() {
  // Create bundle
  const bundle = await rollup.rollup(inputOptions);

  // Write to disk
  const promises = [];
  outputOptions.forEach((outputOption) => {
    promises.push(bundle.write(outputOption));
  });
  await Promise.all(promises);
}

build();
