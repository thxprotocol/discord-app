export const apps = [
  {
    name: 'bot-discord',
    script: 'dist/server.js',
    instances: 'max',
    max_memory_restart: '250M',
    env_development: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }
];
