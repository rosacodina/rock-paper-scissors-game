import createDefaultConfig from '@open-wc/building-rollup/modern-config';
import copy from 'rollup-plugin-copy';

// Static assets will vary depending on the application
const copyConfig = {
  targets: [
    { src: 'src/assets', dest: 'dist/src' }
  ],
};

const config = createDefaultConfig({
  input: 'index.html'
});

config.plugins.push(copy(copyConfig));

export default config;