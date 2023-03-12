import developmentConfig from './development';
import stagingConfig from './staging';
import productionConfig from './production';

interface Config {
  apiUrl:string,
  environment:string
}

let config: Config;

switch (process.env.REACT_APP_ENVIRONMENT) {
  case 'development':
    config = developmentConfig;
    break;
  case 'staging':
    config = stagingConfig;
    break;
  case 'production':
    config = productionConfig;
    break;
  default:
    config = developmentConfig;
}

export default config;
