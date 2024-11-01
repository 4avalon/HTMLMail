 /*
==================================================================
Arquivo: loggingMiddleware.js
Descrição: Este arquivo contém middleware para registro (logging) de atividades e eventos no servidor. 
Captura e registra informações sobre requisições, respostas e erros, facilitando o monitoramento e a 
análise do comportamento da aplicação.
Importância: Centraliza o registro de atividades para manter um histórico das operações realizadas no 
servidor, ajudando na depuração de erros e na análise de desempenho.
Como Funciona:
  - Implementa um middleware para capturar informações sobre cada requisição recebida 
  (ex: método HTTP, URL, status da resposta).
  - Registra logs detalhados sobre erros e eventos críticos para análise posterior.
  - Utiliza níveis de severidade para classificar logs (ex: `info`, `warn`, `error`) e organiza 
  as informações conforme a importância.
Variáveis Definidas:
  - `logRequest`: Middleware que registra detalhes de cada requisição recebida pelo servidor.
  - `logError`: Função para registrar erros críticos e informações detalhadas de falhas.
  - `logger`: Objeto ou módulo que centraliza o sistema de logging (ex: `winston`).
Dependências:
  - **winston** (Opcional): Biblioteca de logging para registro organizado e eficiente de eventos e erros 
  no servidor.
  - **morgan** (Opcional): Middleware para registro simplificado de requisições HTTP, útil para 
  monitoramento em tempo real.
Recomendações:
  - Utilize níveis de severidade adequados (`debug`, `info`, `warn`, `error`) para diferenciar a 
  importância dos eventos registrados.
  - Configure logs separados para ambientes de desenvolvimento e produção, armazenando logs críticos 
  de produção de forma segura.
  - Revise periodicamente os logs para identificar padrões de falhas e oportunidades de otimização no sistema.
Observações:
  - Teste a captura de logs em diferentes cenários, garantindo que todos os eventos importantes 
  sejam registrados.
  - Considere o uso de ferramentas de monitoramento em tempo real para integração com o sistema 
  de logging, como Elastic Stack (ELK) ou Loki.
==================================================================
*/

