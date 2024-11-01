/*
==================================================================
Arquivo: baseController.js
Descrição: Este arquivo contém funções controladoras básicas e utilitárias que são usadas por múltiplos 
endpoints na aplicação. Centraliza operações comuns, como tratamento de erros, validações de dados e 
respostas padronizadas, para manter o código consistente e reutilizável.
Importância: Facilita a manutenção e padroniza a forma como as requisições são tratadas no servidor, 
evitando duplicação de código e reduzindo o risco de erros.
Como Funciona:
  - Define funções controladoras comuns para operações de CRUD (Create, Read, Update, Delete).
  - Inclui funções para tratamento de erros e envio de respostas padronizadas (sucesso, erro, etc.).
  - Centraliza validações de dados para garantir que as entradas estejam corretas antes de processar as 
  requisições.
Variáveis Definidas:
  - `successResponse`: Função para enviar respostas de sucesso padronizadas 
  (ex: `successResponse(res, data, message)`).
  - `errorResponse`: Função para enviar respostas de erro padronizadas 
  (ex: `errorResponse(res, errorCode, message)`).
  - `validateData`: Função que valida dados recebidos na requisição conforme as regras definidas 
  (ex: `validateData(schema, requestData)`).
  - `dbModel`: Modelo genérico de banco de dados que pode ser utilizado para operações comuns de CRUD 
  (ex: `dbModel.create(data)`).
  - `logger`: Função utilitária para registrar logs de operações, erros ou informações importantes no 
  servidor.
Recomendações:
  - Reutilize as funções definidas neste arquivo para manter um padrão nas respostas da API, reduzindo 
  a duplicação de código.
  - Utilize funções assíncronas (async/await) para garantir que as operações de banco de dados e 
  APIs externas sejam tratadas corretamente.
Observações:
  - Caso precise de funcionalidades específicas para um endpoint, crie controladores adicionais ou herde 
  funcionalidades do `baseController`.
  - Para validações complexas, considere utilizar bibliotecas de validação (ex: Joi, Yup) para garantir 
  que os dados recebidos estejam corretos.
==================================================================
*/
