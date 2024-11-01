/*
==================================================================
Arquivo: baseController.js
Descrição: Este arquivo contém funções utilitárias e controladoras base que são usadas por múltiplos 
endpoints na aplicação. Ele serve como uma camada genérica de operações comuns, como tratamento de erros, 
envio de respostas padronizadas, validações de dados e manipulação básica de dados.
Importância: Centraliza operações comuns para evitar duplicação de código, simplificar a manutenção e 
garantir consistência nas respostas do servidor.
Como Funciona:
  - Define funções de CRUD (create, read, update, delete) genéricas que podem ser estendidas por outros controladores específicos.
  - Implementa lógica de validação e tratamento de erros centralizado.
  - Fornece funções para formatação e manipulação de dados antes de enviar ao cliente.
Variáveis Definidas:
  - `successResponse`: Função para enviar respostas de sucesso padronizadas 
  (ex: `successResponse(res, data, message)`).
  - `errorResponse`: Função para enviar respostas de erro padronizadas 
  (ex: `errorResponse(res, errorCode, message)`).
  - `validateRequest`: Função para validar dados de entrada antes de processar as requisições 
  (ex: `validateRequest(schema, requestData)`).
  - `handleDatabaseError`: Função que centraliza o tratamento de erros relacionados ao banco de dados.
  - `logger`: Função utilitária para registrar logs de operações importantes, como erros ou eventos de 
  sucesso.
Dependências:
  - **Validator.js**: Biblioteca opcional para validação de dados de entrada, garantindo que os dados 
  recebidos estejam no formato esperado.
  - **Mongoose (opcional)**: Caso o projeto use MongoDB, `baseController` pode incluir operações básicas 
  de banco de dados utilizando Mongoose para CRUD genérico.
Recomendações:
  - Utilize funções centralizadas de resposta (`successResponse`, `errorResponse`) para manter a 
  padronização das respostas da API.
  - Sempre valide os dados recebidos para evitar entradas malformadas ou perigosas, protegendo a 
  aplicação de falhas.
Observações:
  - Caso precise de funções específicas para um endpoint, crie um controlador específico que herde 
  as funcionalidades do `baseController`.
  - Mantenha este arquivo modularizado para facilitar a extensão e reutilização em outros controladores.
==================================================================
*/
 
