/*
==================================================================
Arquivo: logger.js
Descrição: Este arquivo contém funções utilitárias para registro (logging) de eventos e atividades no 
servidor. Centraliza a lógica de logs, facilitando a depuração e análise de comportamento do sistema.
Importância: Permite o registro consistente de informações importantes, melhorando a depuração e 
monitoramento do sistema durante a execução.
Como Funciona:
  - Implementa funções para registro de logs em diferentes níveis de severidade 
  (ex: `info`, `warn`, `error`).
  - Centraliza a configuração de armazenamento de logs, seja local ou em um serviço externo.
  - Permite a customização de formatos de logs para facilitar a leitura e análise.
Variáveis Definidas:
  - `logInfo`: Função para registrar informações gerais do sistema.
  - `logWarning`: Função para registrar alertas e situações que precisam de atenção.
  - `logError`: Função para registrar erros críticos no sistema.
  - `configureLogger`: Função para configuração inicial do sistema de logs.
Dependências:
  - **Winston** (Opcional): Biblioteca de logging que facilita o registro de logs de forma organizada e 
  escalável.
Recomendações:
  - Utilize logs em diferentes níveis de severidade para facilitar a análise e priorização de problemas.
  - Armazene logs críticos de produção de forma segura e acessível para análise posterior.
Observações:
  - Revise periodicamente os logs para identificar padrões de erro e otimizar o sistema.
  - Considere o uso de ferramentas de visualização de logs, como ELK Stack ou Grafana.
==================================================================
*/
