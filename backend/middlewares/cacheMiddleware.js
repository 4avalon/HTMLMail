 /*
==================================================================
Arquivo: cacheMiddleware.js
Descrição: Este arquivo contém middleware para gerenciamento de cache no servidor, visando melhorar a 
performance da aplicação ao armazenar e reutilizar respostas frequentemente solicitadas. Reduz a carga no 
servidor e acelera a entrega de dados para o cliente.
Importância: A implementação de cache ajuda a otimizar o desempenho do sistema, minimizando a necessidade 
de consultas repetidas ao banco de dados e processamento de dados desnecessário.
Como Funciona:
  - Implementa um middleware para armazenar respostas de requisições frequentes em memória ou em um sistema 
  de cache dedicado.
  - Verifica se a resposta de uma requisição já está em cache antes de processá-la novamente.
  - Define políticas de expiração e invalidação de cache para manter os dados atualizados.
Variáveis Definidas:
  - `cacheStore`: Objeto ou módulo que armazena os dados em cache (ex: `Redis`, `Memcached`, ou cache local 
  em memória).
  - `cacheMiddleware`: Middleware que verifica a existência de dados em cache antes de processar a requisição.
  - `setCache`: Função que armazena dados no cache com base em uma chave identificadora e um tempo de 
  expiração.
  - `invalidateCache`: Função que remove ou invalida dados no cache com base em uma chave específica.
Dependências:
  - **Redis** (Opcional): Para um cache distribuído em memória, ideal para aplicações escaláveis.
  - **Node.js Memory Cache** (Opcional): Cache local em memória para projetos menores ou protótipos.
Recomendações:
  - Utilize cache para rotas que retornam dados estáticos ou que mudam com pouca frequência.
  - Defina tempos de expiração adequados para cada tipo de dado, evitando que informações desatualizadas 
  sejam entregues.
  - Para ambientes de produção, prefira um sistema de cache robusto, como **Redis**.
Observações:
  - Teste a validade e consistência dos dados armazenados em cache, especialmente em ambientes de produção.
  - Garanta que dados sensíveis ou críticos não sejam armazenados em cache por longos períodos.
==================================================================
*/

