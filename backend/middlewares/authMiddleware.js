/*
==================================================================
Arquivo: authMiddleware.js
Descrição: Este arquivo contém middleware de autenticação e autorização, garantindo que apenas usuários autenticados tenham acesso a certas rotas e recursos da aplicação. Centraliza a lógica de verificação de tokens e permissões de usuário.
Importância: Assegura que apenas usuários autorizados possam acessar áreas protegidas do sistema, aumentando a segurança da aplicação e protegendo informações sensíveis.
Como Funciona:
  - Implementa um middleware para verificar a presença e validade de tokens de autenticação.
  - Decodifica tokens JWT (JSON Web Tokens) para identificar usuários.
  - Inclui lógica de autorização para verificar permissões específicas com base no papel do usuário (role-based access).
Variáveis Definidas:
  - `verifyToken`: Middleware que verifica a validade de um token JWT presente no cabeçalho da requisição.
  - `checkUserRole`: Middleware que valida se o usuário possui as permissões necessárias para acessar determinada rota.
  - `decodeToken`: Função auxiliar que decodifica e valida um token JWT, retornando informações do usuário.
Dependências:
  - **jsonwebtoken (JWT)**: Biblioteca para geração e verificação de tokens de autenticação.
  - **crypto** (Opcional): Pode ser utilizado para geração de tokens personalizados ou chaves de segurança adicionais.
Recomendações:
  - Armazene chaves secretas de forma segura, utilizando variáveis de ambiente.
  - Utilize algoritmos seguros, como `HS256` ou `RS256`, para assinatura de tokens JWT.
  - Implemente um tempo de expiração para os tokens JWT para aumentar a segurança.
Observações:
  - Teste as rotas protegidas para garantir que apenas usuários autorizados tenham acesso.
  - Considere utilizar tokens de atualização (refresh tokens) para sessões mais longas e seguras.
==================================================================
*/
