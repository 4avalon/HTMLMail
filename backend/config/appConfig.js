/*
==================================================================
Arquivo: appConfig.js
Descrição: Este arquivo contém as configurações principais da aplicação back-end, incluindo parâmetros de 
conexão com banco de dados, definições de porta, configurações de ambiente, e outras opções globais que 
afetam o comportamento do servidor.
Importância: Centraliza as configurações globais do servidor, facilitando a manutenção e modificação sem 
precisar alterar múltiplos arquivos. Assegura que o ambiente esteja corretamente configurado para 
desenvolvimento, produção ou teste.
Como Funciona:
  - Define parâmetros de conexão com o banco de dados, como URLs, portas e credenciais.
  - Configura a porta padrão para execução do servidor.
  - Especifica variáveis de ambiente para gerenciar diferentes contextos (desenvolvimento, produção).
  - Armazena opções de configuração relacionadas a autenticação, segurança e limites de requisição.
Variáveis Definidas:
  - `dbConfig`: Objeto que contém as configurações de conexão com o banco de dados, incluindo host, porta, 
  usuário e senha (ex: `{ host: 'localhost', port: 5432, user: 'admin', password: 'senha' }`).
  - `serverPort`: Porta na qual o servidor será executado (ex: `3000` para desenvolvimento).
  - `env`: Variável que define o ambiente de execução da aplicação 
  (`'development'`, `'production'`, `'test'`).
  - `authConfig`: Configurações relacionadas à autenticação de usuários, incluindo chaves secretas e 
  tempos de expiração de tokens.
  - `rateLimitConfig`: Configurações de limite de requisições para evitar abuso, como número máximo de 
  requisições por minuto.
Recomendações:
  - Utilize variáveis de ambiente para armazenar informações sensíveis, como credenciais de banco de 
  dados e chaves de API, usando bibliotecas como dotenv.
  - Evite hard-code de configurações críticas; centralize todas as configurações aqui para facilitar 
  a manutenção.
Observações:
  - Certifique-se de definir corretamente as variáveis de ambiente antes de rodar o servidor em produção.
  - Para diferentes ambientes, considere utilizar arquivos de configuração separados 
  (ex: `appConfig.dev.js`, `appConfig.prod.js`) ou gerenciadores de ambiente.
==================================================================
*/
 
