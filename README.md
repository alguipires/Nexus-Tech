# Nexus Tech
# Projeto da disciplina WEB II UTFPR - Guarapuava


GitHub Pages: https://utfpr-gp.github.io/vixe-quebrou-js/.

Qualidade do código

- [] Usar um Style Guide - apresentar o uso de pelo menos 10 regras do style escolhido (sugerido AirBnb)
- [] Usar um lint - mostrar a correção de pelo menos 5 problemas informados pelo lint (sugerido JSHint - usar o arquivo .jshintrc disponível no moodle)
- [] Usar strict mode
- [x] Usar Module Pattern
- [x] Usar pasta assets e subpastas resources e libraries para organizar o código
- [x] Usar let ao invés de var
- [x] Nomes de arquivos minúsculos e separados por hífen (dashed-case)

Caixas de Diálogo

- [] prompt
- [x] alert (final de cadastro)
- [] confirm

Temporizadores

- [x] setInterval (init.js)
- [x] setTimeout (curriculo.js linhas 47-57)

Funções

- [] Função anônima com argumento
- [x] Função anônima sem argumento (validaGenero curriculo.js)
- [x] Função anônima com retorno (validaGenero curriculo.js)
- [x] Função auto-executável (relatorio.js)
- [x] Função com nome
- [x] Função aninhada/local - declarar uma função dentro de outra (curriculo.js linhas 47-57)
- [] Passagem de uma função como parâmetro
- [x] Função Flecha - Arrow Function (curriculo.js linhas 47-57)

Eventos

- [x]  Evento de carregamento do documento - onload (curriculo.js linha 8)
- []  Evento de movimento do mouse
- []  Evento de teclado - usar charCode ou keyCode
- [x]  Eventos de formulário - onfocus e onblur (curriculo.js validação nome e cidade)
- [x]  Imprimir alguma propriedade do objeto event recebido como parâmetro  (curriculo.js l 17)
- []  Propagação de eventos no modelo bolha (usar target e currentTarget, ou seja, disparar o evento em um elemento filho e capturar em um elemento pai)

Acesso aos elementos DOM do HTML

- []  Via acesso direto pelo id do elemento HTML
- [x]  Via getElementByID()
- [x]  Via getElementsByName() (validaGenero)
- []  Via getElementsByTagName()
- [x]  Via seletores CSS usados na função querySelector() ou querySelectorAll() (checkbox)

Tratadores de Evento

- [x]  Especificar o tratador de evento inline
- [x]  Especificar o tratador de evento no carregamento da página HTML no modo tradicional - no onload
- [x]  Especificar o tratador de evento no carregamento da página HTML com a função addEventListener - no onload
- []  Usar o operador this em funções tratadoras de eventos.

Formulário

- []  Validação de formulário com onsubmit usando os métodos tradicionais
- [x]  Validação de formulário com HTML5 API
- [x]  Customizar as mensagens nos balões de mensagem
- [x]  Usar os atributos de validação dos inputs
- [x]  Usar expressões regulares
- [x]  Ler e escrever em elementos input com a propriedade value
- [x]  Alterar o conteúdo de elementos div ou p com a propriedade innerHTML ou textContent
- [x]  Manipulação de elemento de listagem, como checkbox, radio ou select
- []  Acesso aos elementos de um formulário via hierarquia (caminho) de objetos, ou seja, array forms e elements

Objetos Nativos

- []  Usar pelo menos 3 métodos de manipulação de array 
- [x]  Usar laço de repetição (for..in ou for..of ou forEach)
- []  Usar pelo menos 3 métodos para manipulação de string
- [x]  String Template (imprimindo relatorio)

Objetos

 (classe e construtor) []  Criar objeto usando função construtora ou notação literal
-[]  Usar herança prototipal

Canvas

- []  Desenho de caminho ou arco
- []  Desenho de texto ou imagem

Animação

-[]  Por meio da manipulação do vetor images
-[]  Por meio da manipulação do canvas

jQuery

- [x]  Uso de seletores CSS - id, classe e tag (init.js)
- []  Uso de seletores hierárquicos estáticos - ancestral/descendente, pai/filho, anterior/próximo
- [x]  Uso de seletores hierárquicos dinâmicos - parent/children/next (carousel)
- []  Efeitos fade ou slide
- []  Especificar o tratador de algum evento via jQuery
- [x]  Manipulação do CSS via função css() e addClass()/removeClass() (add classe ou remove class no botão submit do curriculo)
- [x]  Manipulação do conteúdo de um input e div usando jQuery (linha 50 relatorio.js)

Manipular componentes do HTML5 API

- []  map
- []  online ou visibilidade
- []  audio ou video

Web Storage

- [x]  LocalStorage ou SessionStorage
- []  Leitura e escrita de dados simples
- [x]  Leitura e escrita de JSON