# Projeto Genius 

# Detalhes do projeto - sobre o projeto

## Objetivo
  Projeto criado a partir da disciplina de métodos de desenvolvimento
  A escolhe foi pelo projeto de Genius

## Especificações
  Projeto utilizando spring boot, Html, Css e JavaScript

## Como funciona o Genius?
  O Genius funciona basicamente em um jogo de memória e sequencia, ao clicar no botão start o jogo é iniciado
  A partir desse ponto, o jogo escolherá aleátoriamente uma cor, na qual será mostrada tanto visualmente quanto por som ao usuáriol, após o jogo escolher uma cor, o jogador deverá logo em seguida escolher a mesma cor, para dar sequencia ao jogo
  Caso o usuário acerte a cor, o jogo repetirá a cor e escolherá outra cor aleatóriamente e o jogador deverá manter a mesma sequencia
  Caso o jogador erre, o jogo é encerrado.
  O jogo finaliza quando o jogador errar uma cor da sequencia que a aplicação determinou!
  O jogo não possui um "ganhador", quanto maior a sequencia do usuário, maior será a sua pontuação

# Funcionamento do projeto - sobre o código

## Iniciar projeto
  Para iniciar o projeto com spring boot basta clicar no botão Run Code na sua IDE e abrir uma guia no navegador com a url: http://localhost:8080/

## Estrutura
  O projeto está dividido em pastas e seperado 
  
### src
  A pasta src está sendo resposável por armazenar todo o projeto, dentro dela, estão divididas as subcamadas da aplicação, dentro de src está a pasta main, que é dividia em duas sub-pastas: resources e java

### java
  Dentro de java está a camada do controller e inicializador do spring boot:
    - o controller é responsável pelo roteamento da página do spring boot 
    - o inicializador do spring é responsavel por subir o código e coloca-lo no ar

### resources
  Está dentro de src e ela está dividida em duas subpastas: static e templates

### static
  É responsável por armezenar e organizar os arquivos estáticosm como arquivos CSS, JS, audios, imagens, etc, esses recursos não requerem processamento do java ou do servidor. Nesse projeto ela possui as seguintes subpastas:
  - audio: Onde estão todos os arquivos de áudio que serão utilizados nesse projeto
  - css: Onde está todo a estilização da aplicação, todos or arquivos de estilização do html estão dentro dessa pasta
  - fonts: Onde está a fonte que será utilizada nesse projeto
  - js: Onde está a lógica da aplicação, onde é responsável pelas ações do projeto

### templates
  Essa pasta é responsável para armazenar as paginas web na quais vão ser processador pelo Spring Boot (geralmente o Thymeleaf). Nesse projeto ela possui uma subpasta:
  html: É onde está a página dessa aplicação, ela possui um unico arquivo html

## O código

### HTML
  O html possui a estrutura de arquivos com um container geral, dentro dele estão separados em 3 div's principais:
    - A que armazena o jogo em si, onde está toda a construção do jogo, botões e contador
    - A div que armazena a caixa de resultados anteriores com uma ul
    - a div na qual armazena os áudios para ser usado no JS

### CSS
  O CSS do projeto foi dividido em 4 arquivos, com o objetivo de diminuir o tamanho do código e melhorar na manutenção e entendimento do código, os arquivos são:
   - styles: o arquivo pai dos demais (considerado o main), dentro dele vou importar os outros 3 arquivos, esse arquivo possui a estilização do container e de uma das 3 div's principais (já que as outras duas não possuem estilização).
   - gameOptions: neste arquivo está a estilização de um subcomponente da div game, aqui vai estar a estlização dos botões start, contador, entre outros.
   - buttonGameContainer: Aqui está a estilização dos botões na qual o usuário realiza todo o procedimento do jogo
   - toggleButton: aqui está o CSS do botão de ativar e desativar audio, como ele tem estilização própria e não é um simples botão que importa diretamente do html, foi criado um arquivo separado, que pode ser até reutilizado caso precisse criar um botão com a mesma estrutura

### JavaScript
  O JS da aplicação possui no seu topo uma função DOMContentLoaded, na qual é acionado simento quando o HTML está completamente carregado, ele será acionado apenas quando a estrutra da página está 100% carregada e assim o JS pode ser utilizado. 
  Logo abaixo estão todos os let's e const's, respectivamente, que serão utilizados no projeto e que podem estar em mais de uma função
  A partir disso começa as funções na qual executam toda a lógica do jogo, funções como iniciar jogo, reiniciar jogo, tocar o audio, gerar a proxima cor. Todos buscando a melhor nomenclatura possivel, para se tornar de fácil entendimento.

### Java Inicializador
  O arquivo está unicamente responsável por inicializar o projeto spring boot, ele é o main do projeto.

### Java Controller
  Arquivo responsável pelo roteamento da página html com o servidor
