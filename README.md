# DevDonald Front-End

# Começamos o projeto com a estrutura Vite + React utilizando o Yarn
- yarn create vite

- E instalamos as dependências
    yarn

- Para rodar o projeto
    yarn dev

# 1º - Organizando Projeto
- Criar a estrutura de pastas
    'src'
        'containers', 'components', 'routes', 'hooks', 'services', 'styles', 'utils', 

# 2º - ESlint + Prettier no React
- Primeiro instalamos o eslint com prettier
    yarn add eslint-config-prettier eslint-plugin-prettier eslint-plugin-import-helpers prettier -D
        é preciso ter a extensão do Eslint instalado e não a do Prettier

- Depois mudamos o nome do arquivo .eslint para :
    .eslintrc.json
    e colocamos a configuração

- Agora vamos criar o arquivo de configuração do Prettier
    .prettierrc.json

# 3º - Estilos Globais com Styled-Components
- Instalando o styled-components
    yarn add styled-components

- E montamos nosso arquivo de Estilos Globais
    globalStyles.js

- E importamos no nosso 
    main.jsx

# 4º - Iniciando a tela de Login
- Adionar os elementos e estilizar

# 5º - Componente Button
- Como iremos utilizar o estilo do botão várias vezes, é prático criar um componente para ele