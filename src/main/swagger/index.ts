import components from './components'

export default {
  openapi: '3.0.3',
  info: {
    title: 'API-Retro',
    description: '',
    contact: {
      name: 'Sistema RetroGames',
      url: 'https://www.retrogames.com.br',
      email: 'suportes@retrogames.com.br'
    },
    version: '1.0.0'
  },
  servers: [
    {
      url: 'http://localhost:8085/api',
      description: 'Local Server'
    },
  ],
  components
}
