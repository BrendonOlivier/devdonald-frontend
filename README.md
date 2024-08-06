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

# 12º - Navegando entre as rotas
- Para navegarmos com o React Router Dom utilizarei o Link e o Navigate

- Começando pelo Link no lugar dos (a)

- Para estilizar o Link do React Router Dom, eu importo ele no Style
    import { Link as ReactLink } from "react-router-dom"

- E estilizo ele dessa forma :
    export const Link = styled(ReactLink)``

- E para fazer navegar para uma rota, de login para o cadastro, exemplo :
    <Link to="/cadastro">Clique aqui.</Link>

- Agora o usuário fez login, e quero redirecionar ele para a HOME, ai uso o Navigate
    importamos ele no nosso Login
    import { useNavigate } from 'react-router-dom'

- Crio a função :
    const navigate = useNavigate()

- E coloco a config com o 'setTimeout' para depois de 1.2 segundos durante o feedback do Totify eu direcionar o usuário para a
    HOME

- E por fim fazemos o mesmo com o Cadastro.

# 13º - React Hook - useContext
- Criamos um arquivo nos nossos 'hooks'
    UserContext.js

- Importo as nossas configurações :
    import React, { createContext, useContext, useState  } from 'react'

- Monto a váriavel principal   
    const UserContext = createContext({})
        e faço todas a config

- Após configurar, tenho que passar pro nosso arquivo 'main.jsx' o UserProvider, e cubro ele por nossas rotas e estilos.
    import { UserProvider } from './hooks/UserContext'

- Feito isso, passo para as nossas páginas no caso por enquanto o Login :
    const { putUserData } = useUser();

- E caso dê certo o Login (status 200 || 201) gravo os dados do usuário no nosso Context
    putUserData(response.data)

# 14º - Salvando os dados no Local Storage (Navedaor)
- Para salvarmos os dados para caso eu reinicei a página e consiga recupear ou até não perder os dados, irei utilizar o :
    useEffect

- Importo ele no nosso 'UserContext.jsx' junto com as outras importações
    import React, { createContext, useContext, useState, useEffect } from 'react'

- Na nossa função 'putUserData' coloco para guardar os dados lo localStorage :
    await localStorage.setItem('devdonald:userData', JSON.stringify(userInfo))

- E monto o nosso 'useEffect' primeiro pegando os dados :
    const clientInfo = await localStorage.getItem('devdonald:userData')

- E por ultimo faço um 'IF' que se tiver algum dado eu coloco ele no nosso CONTEXT
    if (clientInfo) { setUserData(JSON.parse(clientInfo)) }

# 15º - Rotas Privadas utlizando o Navigate
- Como queremos deixar algumas rotas privadas pra só caso o usuário faça login para ter acesso, vamos configurar algumas rotas
    deixando elas Privadas.

- Na pasta 'routes' crio meu arquivo
    privateRoute.jsx

- Importo o Navigate
    import { Navigate } from 'react-router-dom'

- Crio uma função 'PrivateRoute' e configuro ela, depois só exporto para a aplicação

- Depois importo noso PrivateRoute nas nossas rotas 'routes' + 'index.jsx'
    import PrivateRoute from './privateRoute'

- E cubro nas rotas que quero deixar privada, por exemplo a HOME :
     path: "/home",
        element: (
            <PrivateRoute>
                <Home />
            </PrivateRoute>
        )

# 16º - Criando nossa tela de Home
- Vamos criar nossa tela de Home e junto começar o nosso carrossel

- Crio um novo componente pros carroseis
    'CategoryCarousel'
    e os seus arquivos

- Para pegarmos as nossas categorias da API precisamos usar método GET assim como é no backEnd

- Porém assim como o BackEnd precisar tratar com os Token...

# 17º - Adicionando Token JWT as chamadadas a API
- Vamos utilizar uma ferramenta do Axios para fazer essa busca do Token, a ferramenta é o 
    intercerptors

- No nosso 'services' no arquivo 'api.js' vamos fazer essa busca dentro do localStorage e pega apenas o Token :

# 18º - Criando Carrossel de Categorias e Ofertas
- Iremos utilizar uma Biblioteca de carrossel 
    Swiper

- Começamos instalando
    yarn add swiper

- Vamos armazenas as categorias usando o 
    useState

- Gravanos os dados que vem do 'response.data' no nosso Estado do useState
    setCategories(data)

- Importamos nossa config do carrossel
    e configuramos

# 19º - Formatando Valores monetários ( R$ 0 )
- Vamos criar uma função que vai formatar valores de 1 para R$ 1, usaremos a pasta 'utils' e o arquivo :
    'formatCurrency.jsx'

- E fazemos a configuração da formatação da Moeda

- Importamos onde queremos usar, no caso no carrossel de Ofertas
    import formatCurrency from '../../utils/formatCurrency'

- Colocamo um 'map' depois de fazermos o Filtro dos produtos em ofertar 'filter'

- E passamos a configuração onde pegamos o valor da API
    {product.formatPrice}

# 20º - Criando o Menu de seleção de Categorias
- Criamos nossa página de 
    Products

- E começamos a estilizar...

# 21º - Criando Cards de Produtos
- Crio um component de 'Card' para estilizar nossos cards de produtos

# 22º - Criando filtro por categorias
- Na nossa page de Produtos, temos as categorias
    Todas, Hambúrgueres, Bebidas, Sobremesas e Entradas

- Pois quando clicarmos em umas das categorias, quero filtar os produtos de acordo com a categoria escolhida
    Para isso irei usar o 'useEffect'

# 23º - Alterando exportações e importações de componentes e páginas
- Conforme nossa aplicação vai crescendo, para não ficar várias linhas de importações irei utilizar um só arquivo
    que se encarrega de liberar as nossas exportações...

- Na pasta 'components' crio um arquivo
    'index.jsx'

- E altero as importações somente para
    ../components
        pois o código sempre procura como padrão um arquvo 'index'

- E caso queira, faço a mesma coisa com os containers

# 24º - Alterando importação dos Hooks
- Também como os componentes e páginas iremos reduzir as importações do Hooks criando um arquivo
    'index.jsx'
        e colocando todos Context futuros que iremos criar.

# 25º - Criando a Lógica do Carrinho
- Criamos um outro Hook agora das nossas informações do Carrinho
    'CartContext.jsx'
        e configuramos...

- Importo o arquivo no nosso 'index.jsx' das pasta 'hooks'
    import { UserProvider } from './UserContext'

- E configuro o 'CartContext' para criar a lógica de adicionar um produto e se for adicionado um produto repetido
    apenas vou aumentar a quantidade do mesmo.

# 26º - Criando a Estrutura do Carrinho e Estilizando
- Crio nossa Página de Cart e crio nossa rota

- Criamos um Component de para melhorar a estilização
    'CartItems' 

- Usamos nosso 'index.jsx' para exportar o componente

- E estilizamos...

# 27º - Estilizando so botões de adicionar e dimunuir os produtos
- Crio uma 'div' envolta da nossa 'quantidade' e crio 2 botoões de Menos e Mais
    e estilizo

# 28º - Adicionando e Deletando itens do carrinho
-  Vou adiconar a lógica de pra alterar itens do carrinho no nosso Hook de Cart
    'CartContext.jsx'

- Crio as funções e exporto para a aplicação

- Para Deletar de vez o item do carrinho vou adicionar um Icone de lixeira pra quando clicar eu excluo de uma vez o produto

- O icone vou usar a biblioteca de Icones do React, o 'React-Icons'
    yarn add react-icons

- Importo o ícone escolhido na página que quero usar
    import { NOME DO ICONE } from "react-icons/fc"

- E adiciono a função de deletar ao clicar na lixeira

# 29º - Criando o Resumo do Carrinho
- Vamos criar nosso component de Resumo
    'CartResume'

- E fazemos a estilização

# 30º - Criando a Lógica do resumo do Carrinho
- Para criarmos a lógica do resumo, usarei o 
    useState

# 31º - Enviando pedido para a API
- Para fazermos o Pedido temos que mandar o 'ID' e a 'Quantidade' do produto e bater na rota '/orders' da API

- No nosso 'CartResume' vamos fazer um mapeamento para mandar apenas as informações necessárias
    .map( id e quantidade)

-  Mando o pedido para a API

- E coloco uma resposta para o usuário

- Como complemento coloco uma confirmação pra se o usuário quer mesmo excluir o Produto
    e caso o carrinho esteja vazio e clique em 'Finalizar Pedido' vou mostrar uma mensagem de erro

# 32º - Criando nosso Header da aplicação
- Vamos criar nosso componente de Header
    estilizar e importar na Home

# 33º - Finalizando o Header
- Iremos colocar a navegação para as páginas ao clicar no Link usando o 
    useNavigate

- E o location para saber em qual página estamos para alterar os estilos

- E como nosso Header só vai aparecer para o usuário logado, irei colocar de forma global para todas as rotas Privadas o 
    Header

# 34º - Deslogando o Usuário
- Vou criar essa lógica de deslogar o usuário no nosso Hook de
    'UserContext'

- Passo pro meu Header a função criada no meu 'UserContext'
    logout

- Importo o logout dentro do nosso 'useUser'
    import { useUser } from '../../hooks/UserContext'

- Crio uma função para deslogar e coloco um 'onClick' no botão de Sair
    e pronto, caso eu cliquei em sair, apago os dados no localStorage e ele é redirecionado para o Login.

# 35º - Colocando links nos nossos botões da Home
- Quando clicarmos em uma categorias, iremos direcionar o usuário para ver os produtos

- E quando clicarmos em adicionar um produto em oferta, iremos direcionar o usuário para o carrinho

- Usando o NAVIGATE E LINK

# 36º - Adicionando nome do usuário ao Header
- Iremos adicionar no Header a informação do nome do usuário

- Iremos pegar a informação no nosso HOOK
    UserContext
        userData

- Passamos junto com a variavel do useUser
    const { logout, userData } = useUser();

- Pegando só a informação do NAME
    userData.name

- E passo para nosso código

# 37º - Validando se o usuário é Admin
- Daremos andamento agora para a parte de adminstração, primeiro vamos validar se o usuário que está logando é um administrador
    pois se ele for, irá cair direto para a tela de administração

- Criamos uma nova page
    'Admin'    

- Criamos nossa pagina, exportamos no nosso 'index.jsx' e criamos a ROTA

- No nosso LOGIN coloco um if para saber se o usuário é um admin
    caso for, mando ele direto para a rota de 
        /pedidos

- Nas nossas páginas de administração não vou querer o HEADER, então vou fazer essa validação para tirar o Header
    para um parâmetro nas nossas rotas
        isAdmin

- No nosso arquivo 'privateRoute.jsx' pego o parâmetro 'isAdmin' e passo para o Header
    {!isAdmin && <Header />}
        assim nossas páginas que colocarmos o 'isAdmin' não mostrará o HEADER

- No momento um usuário logado que não é adminstrador pode ter acesso a rota de 'pedidos' então vou por uma trava
    no nosso 'privateRoute.jsx'

- Se a tela for de administrador, e o usuário não for admin e tentar acessar a rota, vou redirecionar ele para HOME

# 38º - Instando o MUI na nossa aplicação
- Para agilizar nossa estilização das páginas irei utilizar uma Biblioteca de Componentes

- Primeiro criamos uma pasta dentro de 'Admin' chamada
    'Orders'

- Instalamos a base da biblioteca - Material
    yarn add @mui/material @emotion/react @emotion/styled
        caso queiramos usar com styled components instalamos também
            yarn add @mui/material @mui/styled-engine-sc styled-components

- Iremos utilizar uma tabela da biblioteca e para usar os componentes de tabela precisamos instalar o  
    DataGridcomponente 
        yarn add @mui/x-data-grid

# 39º - Começando a construir nossa tabela com MUI
- Instalamos a biblioteca do MUI
    yarn add @mui/icons-material

- Importamos todas dependências da TABELA

- Criamos nossa função que cria nossa organização da tabela
    createData

- E criamos nosso useEffect para alterar o 'row'

# 40º - Continuando a criação da nossa tabela com MUI
- Copiamos lá da biblioteca o Header da tabela e alteramos as informações
    TableContainer

- Agora vamos pegar o CORPO da Tabela, como o componente é muito código, crio um outro arquivo para colocar a config
    'row.jsx'

- Faço toda a configuração da tabela copiando o 
    row

# 41º - Formatando a Data que foi feito o pedido
- Criamos na nossa pasta 'utils' o arquivo
    formateDate.jsx

- Lá configuramos como queremos mostrar a data

- Importamos no nosso index, e passamos na nossa função raiz createData
    date: formatDate(order.createdAt)

# 42º - Atualizando status do pedido
- Começeo criando no meu 'row' a função para alterar o Status do pedido

- Usaremos outra biblioteca de componentes, dessa vez de SELECTS, e a biblioteca é o '' REACT SELECT ''
    yarn add react-select

- Depois importamos a biblioteca no nosso 'row.jsx'
    import ReactSelect from 'react-select'

- E passamos no lugar de 'row.status' o nosso
    <ReactSelect />
        feito isso já vai criar um Input Select para nós pronto na tabela

- Criamos um novo arquivo chamado 
    orderStatus.jsx
        lá colocaremos os Status que queremos que apareça no SELECT, e exportamos

- Importamos no nosso row a config do 'ordersStatus.jsx'
    import status from './orderStatus'

- Depois no nosso <ReactSelect /> passamos a config
    options={status}
        e para não ter o problmea dos Selects ficar cortados, colocamos tambem essa config
    menuPortalTarget={document.body}
        tambem podemos alterar o placeholder
    placeholder='Status'
        podemos por um valor padrão
    defaultValue={status.find( options => options.value === row.status) || null}

- Agora iremos colocar para mudar o Status e tambem alterar na API, no mesmo componente <ReactSelect /> coloco a config
    onChange={ newStatus => { setNewStatus(row.orderId, newStatus.value) }}
        estarei mandando o ID do produto e o value que é o status que foi alterado

- Vamos Estilizar nosso React-Select, na documentação vamos em 'Custom Style' onde ensina como estilizar,
    mas como estamos utilizando o styled-components, temos outra forma de estilizar :

- Vamos no nosso 'styles.js', e importamos o 
    import ReactSelect from "react-select"

- E podemos estilizar :
    export const ReactSelectStyle = styled(ReactSelect)``

- Mas para os estilos serem aplicados, precisamos passar o 'ReactSelectStyle' para nosso row dos Styles
    import { ..., ..., ReactSelectStyle } from './styles';

- E no lugar de <ReactSelect /> Colocamos o ReactSelectStyle
    feito isso podemos pagar nossa importação do ReactSelect

#
