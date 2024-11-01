/*
==================================================================
Arquivo: corsMiddleware.js
Descrição: Este arquivo contém middleware para configuração de CORS (Cross-Origin Resource Sharing), que 
controla e permite requisições de diferentes origens ao servidor. Garante que apenas origens autorizadas 
possam acessar os recursos protegidos da aplicação.
Importância: O CORS é essencial para proteger a aplicação contra requisições não autorizadas, garantindo 
que apenas domínios confiáveis tenham acesso aos dados do servidor.
Como Funciona:
  - Implementa um middleware que define as permissões de CORS para requisições HTTP.
  - Configura cabeçalhos específicos que indicam quais métodos, origens e cabeçalhos são permitidos nas 
  requisições.
  - Inclui suporte para configurações avançadas de CORS, como credenciais e métodos específicos.
Variáveis Definidas:
  - `allowedOrigins`: Lista de domínios autorizados a acessar os recursos do servidor.
  - `corsOptions`: Objeto que define as configurações de CORS, incluindo métodos e cabeçalhos permitidos.
  - `corsMiddleware`: Middleware principal que aplica as regras de CORS nas requisições.
Dependências:
  - **cors**: Biblioteca para configuração simplificada de CORS no Node.js.
Recomendações:
  - Defina uma lista restrita de domínios permitidos para aumentar a segurança da aplicação.
  - Evite permitir `*` como origem, pois isso pode expor a aplicação a riscos de segurança.
  - Revise as configurações de CORS para garantir compatibilidade com os requisitos da aplicação e 
  proteger dados sensíveis.
Observações:
  - Teste o comportamento do CORS em diferentes navegadores e ambientes para validar o acesso correto.
  - Utilize cabeçalhos adequados para métodos específicos, como `GET`, `POST`, `PUT`, e `DELETE`.
==================================================================
*/
 
