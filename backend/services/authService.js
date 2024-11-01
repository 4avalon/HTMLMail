/*
==================================================================
Arquivo: authService.js
Descrição: Este arquivo contém funções utilitárias para autenticação e autorização de usuários. Centraliza
 a lógica de geração de tokens, verificação de credenciais e gestão de sessões, facilitando a autenticação 
 segura no sistema.
Importância: Assegura que a lógica de autenticação esteja centralizada, garantindo a segurança e 
consistência nas operações de login e gerenciamento de usuários autenticados.
Como Funciona:
  - Implementa a lógica de geração, verificação e renovação de tokens JWT.
  - Define métodos para autenticação de usuários com base em e-mail e senha.
  - Gerencia a verificação de permissões para acessar recursos protegidos.
Variáveis Definidas:
  - `generateToken`: Função para criar um token JWT com base nas credenciais do usuário.
  - `verifyToken`: Função para verificar a validade de um token JWT.
  - `refreshToken`: Função para renovar tokens expirados, garantindo sessões seguras.
Dependências:
  - **jsonwebtoken (JWT)**: Para geração e verificação de tokens JWT.
  - **bcrypt**: Para validação de senhas criptografadas.
Recomendações:
  - Utilize tokens de curta duração e implemente mecanismos de renovação para aumentar a segurança.
  - Armazene chaves secretas e informações sensíveis de forma segura em variáveis de ambiente.
  - Implemente proteção contra ataques de força bruta utilizando medidas de limitação de tentativas.
Observações:
  - Teste os métodos de autenticação em diferentes cenários para garantir robustez e segurança.
  - Considere a utilização de refresh tokens para sessões de longa duração.
==================================================================
*/
