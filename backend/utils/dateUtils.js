/*
==================================================================
Arquivo: dateUtils.js
Descrição: Este arquivo contém funções utilitárias para manipulação e formatação de datas e horários. 
Centraliza a lógica de datas para facilitar operações comuns, como cálculo de intervalos, formatação e 
comparação de datas.
Importância: Facilita a manipulação de datas, garantindo que todas as operações relacionadas sejam 
consistentes e precisas em toda a aplicação.
Como Funciona:
  - Define funções para formatação de datas em diferentes formatos.
  - Implementa métodos para calcular intervalos de datas e comparações.
  - Centraliza a lógica de manipulação de fusos horários, se necessário.
Variáveis Definidas:
  - `formatDate`: Função que formata datas para um formato específico (ex: `DD/MM/YYYY`).
  - `calculateDateDiff`: Função que calcula a diferença entre duas datas.
  - `addDaysToDate`: Função que adiciona um número específico de dias a uma data.
  - `isDateInRange`: Função que verifica se uma data está dentro de um intervalo.
Dependências:
  - **Day.js** (Opcional): Biblioteca para manipulação e formatação de datas, caso seja necessário maior 
  precisão.
Recomendações:
  - Utilize métodos consistentes para formatação de datas, garantindo que o formato seja uniforme em 
  toda a aplicação.
  - Teste as funções de data em diferentes cenários para garantir que os cálculos estejam corretos.
Observações:
  - Considere a manipulação de fusos horários, especialmente se a aplicação for usada em múltiplas regiões.
==================================================================
*/
