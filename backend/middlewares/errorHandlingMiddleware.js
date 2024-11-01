 /*
==================================================================
Arquivo: errorHandlingMiddleware.js
Descrição: Este arquivo contém middleware para tratamento global de erros na aplicação. Garante que todos 
os erros sejam capturados, logados e retornados de maneira padronizada para o cliente, melhorando a 
experiência do usuário e a manutenção do sistema.
Importância: Centraliza o tratamento de erros, garantindo que o servidor lide com exceções de forma 
consistente e forneça feedback claro ao cliente sobre falhas.
Como Funciona:
  - Implementa um middleware para capturar erros que ocorram durante o processamento das requisições.
  - Retorna respostas padronizadas com status HTTP apropriados e mensagens de erro claras.
  - Registra erros críticos para posterior análise e correção.
Variáveis Definidas:
  - `logError`: Função para registrar erros críticos em um sistema de log.
  - `handleError`: Middleware que captura erros e envia uma resposta padronizada para o cliente.
  - `errorResponse`: Função auxiliar para formatar e enviar respostas de erro.
Dependências:
  - **express**: Framework para construção de APIs em Node.js, que facilita o uso de middlewares.
  - **winston** (Opcional): Biblioteca para registro de logs, facilitando o monitoramento e análise de erros.
Recomendações:
  - Padronize as mensagens de erro para facilitar a interpretação pelos desenvolvedores e usuários.
  - Utilize níveis de severidade nos logs (ex: `info`, `warn`, `error`) para priorizar a análise de falhas.
  - Evite retornar detalhes técnicos sensíveis dos erros no ambiente de produção para não comprometer 
  a segurança.
Observações:
  - Teste o tratamento de erros em diferentes cenários para garantir que todos os casos sejam adequadamente 
  capturados.
  - Considere usar ferramentas de monitoramento de erros em produção, como Sentry, para capturar e analisar 
  exceções em tempo real.
==================================================================
*/

