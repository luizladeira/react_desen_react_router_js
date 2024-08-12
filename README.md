# Curso de React: desenvolvendo em React Router com JavaScript
Conheça a biblioteca react-router-dom e utilize seus principais recursos

Aprenda o que é e por que utilizar uma SPA (Single Page Application)

Resolva problemas utilizando rotas aninhadas e rotas dinâmicas

Explore os hooks do react-router-dom, como useLocation e useParams

Implemente desafios práticos

Personalize seu projeto e publique na Vercel


# Getting Started with Create React App
configuração dos absolute imports 

https://create-react-app.dev/docs/importing-a-component/#absolute-imports

# ReactComponent as NomeDoComponente 
A sintaxe import { ReactComponent as NomeDoComponente } from 'caminho_do_componente'; é possível devido ao pacote SVGR, que já vem por padrão em um projeto React. Esse pacote permite que utilizemos um SVG como um componente React, assim não precisamos utilizá-lo como uma tag img.

# Rotas Aninhadas
o recurso de rotas aninhadas, que são rotas filhas de uma mesma rota pai. Você pode ver sobre isso na [documentação](https://reactrouter.com/en/main/start/overview#nested-routes).

# Rotas Index
Documentação das [rotas index](https://reactrouter.com/en/main/start/concepts#index-routes)


# O que aprendemos até o momento
Identificar quando utilizar rotas aninhadas;

Colocamos as páginas Inicio e SobreMim como filhas de PaginaPadrao, para que apenas elas reaproveitassem a mesma estrutura. Não queríamos que o Banner aparecesse na página 404.
Utilizar o componente Outlet;

A rota que é pai de outras se responsabiliza por dizer onde elas serão renderizadas com o Outlet do react-router-dom.
Utilizar o atributo index do Route;

O index indica que o caminho da rota é igual ao da rota pai.
Diferenciar caminhos relativos e absolutos.

Caminhos absolutos iniciam com /, enquanto caminhos relativos iniciam sem a /, partindo do caminho da rota pai.


# LINK DO PROJETO NO VERCEL
[https://react-desen-react-router-js.vercel.app/](https://react-desen-react-router-js.vercel.app/)
