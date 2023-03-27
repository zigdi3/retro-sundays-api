import components from './components'

export default {
  openapi: '3.0.3',
  info: {
    title: 'API-Multi',
    description: '',
    contact: {
      name: 'Sistema jogosantigosmulti.com.br',
      url: 'https://www.jogosantigosmulti.com.br.com.br',
      email: 'suportes@jogosantigosmulti.com.br.com.br'
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
