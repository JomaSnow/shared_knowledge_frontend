# Shared Knowledge

Shared Knowledge é um pequeno projeto para praticar desenvolvimento full-stack com tecnologias e ferramentas atuais. Resolvi dividir o pojeto em 2 repositórios, um para o back-end e outro para o front-end. Você está vendo o repositório **front-end**. [Clique aqui para ver o repositório back-end](https://github.com/JomaSnow/shared_knowledge_backend).

## Sobre o projeto

A ideia do projeto é construir uma página web na qual a cada alguns segundos uma mensagem inspiradora, conhecimento, ditado, ou algum outro pequeno texto apareçam na tela para serem compartilhados com o mundo. O site deve ter uma página inicial para exibir as mensagens, uma página para falar sobre o projeto e linkar para o github, uma página para fazer login ou criar conta, uma página para editar informações da conta e uma página para criar, editar, deletar e visualizar suas mensagens. Existe, ainda, uma página para administradores gerenciarem todas as mensagens e usuários cadastrados.

Qualquer visitante da página pode acessar e ler as mensagens do site, mas apenas Usuários autenticados podem postar mensagens. Usuários comuns podem criar novas mensagens, deletar e atualizar apenas as suas próprias e visualizar todas; eles não podem ver, criar, editar nem deletar outros usuários, além deles mesmos. Usuários administradores podem criar, visualizar, editar e apagar quaisquer mensagens; e podem também visualizar, editar e apagar qualquer usuário.

### Objetivos do front-end

Os objetivos maiores do projeto por parte do front-end são:
  - Criar sistema de autenticação com JWT;
    - Restringir rotas com base no usuário
  - UI Impressionante;
    - Responsivo
    - Animações smooth
    - Microinterações
    - Transições de páginas
    - Entre outros
  - Utilizar react-query;
    - Fetch de dados
    - Loadings (inclusive nas imagens com *onLoad*)
  - Utilizar react-hook-form;
  - Utilizar design e identidade visual própria;
    - Definir Paleta de cores
    - Criar Logo própria
    - Definir Tipografia 
  - Utilizar JDP (Jesus Design Pattern);
    - Modularizar ao máximo de componentes possível
    - Cada componente e página dividido em business, styles e Display
    - Não passar mil props para os children, quando apenas uma função com argumentos funciona bem  
    
### Recursos utilizados

Alguns vídeos e guias que ajudaram no desenvolvimento deste projeto:

### Aprendizados

O que aprendi, técnicas e comandos, durante esse projeto (para o João do futuro consultar, de nada futuro eu):

### Como executar o projeto localmente

Pré-requisito ter instalado Docker, NPM e Yarn.

1. Rodar o backend
2. Clonar repositório
3. Rodar *yarn* para instalar dependências
4. Rodar *yarn start*

