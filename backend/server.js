/*
==================================================================
Arquivo: server.js
Descrição: Este arquivo é o ponto de entrada principal da aplicação, responsável por iniciar o servidor 
Node.js, configurar as rotas, middlewares e definir as conexões com o banco de dados. Centraliza toda a 
inicialização do back-end, garantindo que todos os serviços necessários estejam configurados e prontos para
 uso.
Importância: Gerencia a inicialização do servidor, garantindo que todas as dependências e serviços estejam 
configurados corretamente antes de processar as requisições. Serve como ponto central de configuração do
 ambiente e das rotas da aplicação.
Como Funciona:
  - Configura o servidor usando o framework Express.
  - Define middlewares globais, como parsing de JSON, autenticação e logging.
  - Configura a conexão com o banco de dados, caso necessário.
  - Importa e define as rotas da aplicação.
  - Inicia o servidor e escuta requisições na porta especificada.
Variáveis Definidas:
  - `app`: Instância do Express que gerencia o servidor.
  - `PORT`: Número da porta em que o servidor escutará as requisições.
  - `connectDB`: Função que inicializa a conexão com o banco de dados.
  - `routes`: Função que importa e define todas as rotas da aplicação.
Dependências:
  - **Express**: Framework para construção do servidor e gerenciamento de rotas.
  - **dotenv**: Para carregar variáveis de ambiente de um arquivo `.env`.
  - **morgan** (Opcional): Middleware para logging de requisições HTTP.
  - **cors**: Middleware para configuração de CORS (Cross-Origin Resource Sharing).
  - **mongoose** ou **Sequelize** (Opcional): Para conexão com bancos de dados NoSQL (MongoDB) ou 
  SQL (MySQL, PostgreSQL).
Recomendações:
  - Carregue configurações sensíveis, como chaves de API e credenciais, de arquivos `.env` usando 
  o `dotenv`.
  - Implemente tratamento de erros global no servidor para capturar falhas inesperadas.
  - Utilize middlewares adequados para parsing de JSON, CORS, e segurança.
Observações:
  - Revise periodicamente as configurações do servidor para garantir que estejam de acordo com os padrões 
  de segurança recomendados.
  - Teste a inicialização do servidor em ambientes de desenvolvimento e produção para garantir a 
  estabilidade.
==================================================================
*/
