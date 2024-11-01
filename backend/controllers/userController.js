/*
==================================================================
Arquivo: userController.js
Descrição: Este arquivo contém funções relacionadas à gestão de usuários na aplicação, incluindo cadastro, 
autenticação, atualização de dados e outras operações associadas ao gerenciamento de contas de usuário. 
Centraliza a lógica de manipulação de dados de usuários, garantindo operações seguras e consistentes.
Importância: Garante que a manipulação de dados de usuário seja feita de maneira segura e eficiente, 
centralizando operações de autenticação, criação e atualização de perfis.
Como Funciona:
  - Define funções para operações de CRUD (Create, Read, Update, Delete) para usuários.
  - Implementa lógica de autenticação e gerenciamento de tokens para segurança.
  - Valida dados de entrada para cadastro e atualização de perfis.
  - Gerencia interações com o banco de dados para armazenar e recuperar informações de usuários.
Variáveis Definidas:
  - `userModel`: Modelo de banco de dados utilizado para operações relacionadas a usuários 
  (ex: `userModel.create(userData)`).
  - `hashPassword`: Função para hashear (criptografar) senhas antes de armazená-las no banco de dados.
  - `generateToken`: Função para criar tokens de autenticação (ex: JWT) para sessões seguras.
  - `validateUser`: Função para validar os dados recebidos no cadastro e atualização de perfil.
  - `logger`: Função para registrar logs de operações críticas envolvendo usuários, como login e 
  mudanças de senha.
Dependências:
  - **bcrypt**: Biblioteca usada para hashear senhas de forma segura.
  - **jsonwebtoken** (JWT): Biblioteca para gerar e verificar tokens de autenticação, garantindo sessões 
  seguras.
Recomendações:
  - Utilize funções assíncronas (async/await) para operações de banco de dados e autenticação para 
  garantir que erros sejam tratados corretamente.
  - Armazene informações sensíveis, como chaves secretas de tokens e senhas, em variáveis de ambiente.
Observações:
  - Teste a lógica de autenticação e operações de usuário em diferentes cenários para garantir segurança.
  - Utilize mecanismos de validação para evitar dados inconsistentes ou perigosos.
==================================================================
*/
 
