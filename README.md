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

# 9º - Personalizando notificações com React Toastfy
- Para um melhor feedback para o usuário iremos usar a biblioteca React Toastify
    yarn add react-toastify

- Importamos a config de estilo do Toastfy de forma global
    import 'react-toastify/dist/ReactToastify.css'

- Importamos o 'toast' no nosso Login
    import { toast } from 'react-toastify'

- E agora precisamos importar o ToastContainer no nosso 'main.jsx'
    import { ToastContainer } from 'react-toastify'

- E aplicamos no nosso 'root'
    >ToastContainer<

# 10º - Navegando entre rotas com React-Router-Dom
- Para navegarmos entre rotas, no react utilizamos a biblioteca React-Router-Dom
    yarn add react-router-dom

- Vamos criar o nosso arquivo de ROTAS
    'index.jsx'

- Irei utilizar o :
    import { createBrowserRouter } from 'react-router-dom';

- No nosso 'main.jsx' irei fazer as mudanças, importando os :
    import { RouterProvider } from 'react-router-dom'
    import { router } from './routes'

- Excluo o Login, e utilizo o :
    RouterProvider router={router}

# 11º - Criando a tela de Registro de Usuário
- Vamos criar nossa tela de cadastro de usuário

- Vamos tratar erros pro usuário no nosso cadastro utilizando o
    try + catch