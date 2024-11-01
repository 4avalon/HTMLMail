/*
==================================================================
Arquivo: userRoutes.js
Descrição: Este arquivo contém a definição das rotas relacionadas à gestão de usuários na aplicação. 
Centraliza operações como cadastro, autenticação, atualização de perfil e gerenciamento de permissões, 
garantindo que as interações com os dados de usuários sejam seguras e consistentes.
Importância: Organiza as rotas de usuários de forma clara e centralizada, facilitando a manutenção do 
sistema de autenticação e a gestão de perfis e permissões.
Como Funciona:
  - Define rotas HTTP para operações CRUD de usuários (criação, leitura, atualização e remoção).
  - Utiliza controladores para processar a lógica associada às rotas.
  - Implementa middleware de autenticação para proteger rotas que exigem login.
Variáveis Definidas:
  - `router`: Objeto de roteamento do Express que gerencia as rotas de usuário.
  - `userController`: Controlador que contém a lógica de criação, atualização, e autenticação de usuários.
  - `authMiddleware`: Middleware de autenticação que protege rotas sensíveis.
Dependências:
  - **Express**: Framework de servidor para Node.js, usado para definir e gerenciar rotas.
  - **userController**: Controlador que manipula as operações de usuários.
  - **authMiddleware**: Middleware para autenticação de usuários e proteção de rotas.
  - **validateEmailMiddleware**: Middleware opcional para validar e-mails ao criar ou atualizar perfis.
Recomendações:
  - Utilize autenticação robusta para proteger rotas sensíveis e garantir a segurança dos dados de usuários.
  - Centralize o tratamento de erros e respostas de sucesso para manter a consistência na comunicação 
  com o cliente.
  - Implemente logs para rastrear operações críticas, como criação de usuários e tentativas de login.
Observações:
  - Teste todas as rotas de usuário em diferentes cenários (com e sem autenticação) para garantir a segurança.
  - Considere adicionar proteção contra ataques de força bruta em rotas de login e autenticação.
==================================================================
*/
