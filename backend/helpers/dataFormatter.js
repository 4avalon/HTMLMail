/*
==================================================================
Arquivo: dataFormatter.js
Descrição: Este arquivo contém funções utilitárias para formatação de dados, como datas, números, e strings. Visa garantir que as informações sejam apresentadas de forma consistente e padronizada em toda a aplicação.
Importância: Centraliza a lógica de formatação para evitar duplicação de código e garantir a consistência de apresentação dos dados no front-end e back-end.
Como Funciona:
  - Define funções para formatação de datas e horários em diferentes formatos.
  - Implementa métodos para conversão e formatação de números (ex: valores monetários).
  - Manipula strings para ajustes de apresentação, como capitalização e truncamento.
Variáveis Definidas:
  - `formatDate`: Função que formata datas em um formato padrão (ex: `DD/MM/YYYY`).
  - `formatCurrency`: Função para formatar números em valores monetários.
  - `capitalizeText`: Função para capitalizar a primeira letra de uma string.
  - `truncateText`: Função para encurtar textos longos com base em um limite de caracteres.
Dependências:
  - **Day.js**: Para manipulação e formatação de datas.
Recomendações:
  - Utilize funções centralizadas para manter consistência na apresentação dos dados.
  - Adapte os métodos conforme necessário para atender às necessidades específicas do projeto.
Observações:
  - Teste a formatação em diferentes cenários para garantir consistência visual em todas as plataformas.
==================================================================
*/
