import develop from '../env/develop';
import production from '../env/production';
import staging from '../env/staging';
import EnvConfig from '../modules/EnvConfig';


let config;
switch (EnvConfig.ENV) {
  case 'debug': {
    config = develop;
    break;
  }
  case 'production': {
    config = production;
    break;
  }
  case 'staging': {
    config = staging;
    break;
  }
  default: {
    config = develop;
  }
}

export default config;
