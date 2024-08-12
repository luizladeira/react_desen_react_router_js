# Getting Started with Create React App
configuração dos absolute imports 

https://create-react-app.dev/docs/importing-a-component/#absolute-imports

# ReactComponent as NomeDoComponente 
A sintaxe import { ReactComponent as NomeDoComponente } from 'caminho_do_componente'; é possível devido ao pacote SVGR, que já vem por padrão em um projeto React. Esse pacote permite que utilizemos um SVG como um componente React, assim não precisamos utilizá-lo como uma tag img.

# Rotas Aninhadas
o recurso de rotas aninhadas, que são rotas filhas de uma mesma rota pai. Você pode ver sobre isso na [documentação](https://reactrouter.com/en/main/start/overview#nested-routes).

# Rotas Index
Documentação das [rotas index](https://reactrouter.com/en/main/start/concepts#index-routes)


# O que aprendemos até o momento 01
Identificar quando utilizar rotas aninhadas;

Colocamos as páginas Inicio e SobreMim como filhas de PaginaPadrao, para que apenas elas reaproveitassem a mesma estrutura. Não queríamos que o Banner aparecesse na página 404.
Utilizar o componente Outlet;

A rota que é pai de outras se responsabiliza por dizer onde elas serão renderizadas com o Outlet do react-router-dom.
Utilizar o atributo index do Route;

O index indica que o caminho da rota é igual ao da rota pai.
Diferenciar caminhos relativos e absolutos.

Caminhos absolutos iniciam com /, enquanto caminhos relativos iniciam sem a /, partindo do caminho da rota pai.

#  O que aprendemos até o momento 02

Identificar quando utilizar rotas dinâmicas;

Rotas dinâmicas são úteis quando queremos ter uma mesma estrutura de página e mudar seu conteúdo de acordo com alguma informação passada na URL. No nosso caso, passamos o id de um post pela URL, buscamos o post de acordo com o id e mostramos suas informações na tela.
Utilizar os seletores de rotas dinâmicas para criar uma rota dinâmica;

Utilizamos a sintaxe /caminho/:nomedoparametro no atributo path de uma Route.
Utilizar o hook useParams.

Com ele, obtemos os parâmetros passados para uma rota dinâmica.

# Controle de navegação no react-router-dom

Controle da navegação do react-router-dom utilizando o hook useNavigate. Você sempre pode consultar como realizar navegação na (documentação)[https://reactrouter.com/en/main/hooks/use-navigate].


# Scroll to TOP
Consulte a (documentação do Scroll To Top)[https://v5.reactrouter.com/web/guides/scroll-restoration/scroll-to-top]. Essa documentação é da versão 5 do react-router-dom, mas a solução continua válida para a versão 6 que estamos utilizando.

Para se aprofundar nos métodos JavaScript que usamos no Desafio, seguem os links da documentação da MDN:

(filter)[https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter]
(sort)[https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort]
(slice)[https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice]