import testConfig from './test.conf';
import prodConfig from './prod.conf';
import devConfig from './dev.conf';

const map = new Map([
    ['production', prodConfig],
    ['test', testConfig],
    ['development', devConfig]
])
// let config = process.env.NODE_ENV === 'production' ? prodConfig : testConfig;
let config = map.get(process.env.NODE_ENV);

export default config;