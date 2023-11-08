# Projeto Genius 

## Detalhes do projeto - sobre

### Objetivo
  Projeto criado a partir da disciplina de métodos de desenvolvimento
  A escolhe foi pelo projeto de Genius

### Especificações
  Projeto utilizando spring boot, Html, Css e JavaScript

### Como funciona?
  O Genius funciona basicamente em um jogo de memória e sequencia, ao clicar no botão start o jogo é iniciado
  A partir desse ponto, o jogo escolherá aleátoriamente uma cor, na qual será mostrada tanto visualmente quanto por som ao usuáriol, após o jogo escolher uma cor, o jogador deverá logo em seguida escolher a mesma cor, para dar sequencia ao jogo
  Caso o usuário acerte a cor, o jogo repetirá a cor e escolherá outra cor aleatóriamente e o jogador deverá manter a mesma sequencia
  Caso o jogador erre, o jogo é encerrado.
  O jogo finaliza quando o jogador errar uma cor da sequencia que a aplicação determinou!
  O jogo não possui um "ganhador", quanto maior a sequencia do usuário, maior será a sua pontuação

## Funcionamento do projeto - code 

### Estrutura
  O projeto está dividido em pastas e seperado 
  
  src - a pasta src está sendo resposável por armazenar todo o projeto, dentro dela, estão divididas as subcamadas da aplicação, dentro de src está a pasta main, que é dividia em duas sub-pastas: resources e java

  java - dentro de java está a camada do controller e inicializador do spring boot
   - o controller é responsável 