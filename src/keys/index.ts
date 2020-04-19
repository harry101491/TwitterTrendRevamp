let config: any;
import devConfig from './config.dev';
import prodConfig from './config.prod';

if (process.env.NODE_ENV === 'production') {
    config = prodConfig;
} else {
    config = devConfig;
}

export default config;