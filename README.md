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

# 6º - Formulário com React Hook Form
- Para produzir nosso Formulário iremos utilizar a biblioteca React Hook Form
    yarn add react-hook-form

- Para a validação dos dados iremos utilizar assim como no Back-End o YUP
    yarn add @hookform/resolvers yup

- Importamos a configuração onde iremos utilizar, no caso no Login
    import { useForm } from "react-hook-form"
    import { yupResolver } from "@hookform/resolvers/yup"
    import * as yup from "yup"

- E vamos agora criar a validação dos campos que queremos validar

- Agora vamos tratar erros, caso um email não seja válido, não envie senha, etc...
    Podemos fazer isso direto na validação dos dados no Yup com mensagens dentro do ()

- E para mostrar isso na tela pro usuário adiciono embaixo do input em (p)
    <{errors?.email?.message}>
    <{errors?.password?.message}>

# 7º - Conectando API com o Frontend
- Para conectar nosso Front com o Back-End Dev Donald iremos utilizar a biblioteca Axios
    yarn add axios

- Nossa pasta 'services' que ficará encarregada das nossas conexões com o Back-End
    criamos o arquivo 'api.js'

- Importamos nossa conexão onde iremos usar, no caso no Login
    import { api } from '../../services/api';

- E enviar os dados para o Back-End, mas para enviar precisaremos da próxima etapa...

# 8º - Resolvendo erro de conexão com CORS - BACK END
- Confgurar o nosso Back-End com o CORS quem vai poder ter acesso ou alterar os dados - NO BACK END
    yarn add cors
    
- Importamos no nosso arquivo 'app.js'
    import cors from 'cors'

- E liberamos no nosso contructor
    this.app.use(cors())
    aqui no caso estamos liberados para todos

- E assim já temos acesso as dados do BackEnd