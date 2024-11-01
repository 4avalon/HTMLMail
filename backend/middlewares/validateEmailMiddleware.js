/*
==================================================================
Arquivo: validateEmailMiddleware.js
Descrição: Este arquivo contém middleware para validação de e-mails enviados pelo cliente. Garante que os 
endereços de e-mail fornecidos estejam no formato correto antes de serem processados ou armazenados, 
melhorando a integridade dos dados.
Importância: A validação de e-mails protege o sistema contra entradas inválidas, reduzindo a chance de 
erros durante o envio de e-mails e protegendo a aplicação contra dados malformados.
Como Funciona:
  - Implementa um middleware que verifica o formato dos endereços de e-mail recebidos nas requisições.
  - Utiliza expressões regulares ou bibliotecas de validação para garantir que os e-mails estejam 
  corretamente formatados.
  - Retorna uma resposta de erro apropriada caso o e-mail fornecido não seja válido.
Variáveis Definidas:
  - `validateEmail`: Middleware que valida o formato do e-mail enviado pelo cliente.
  - `emailRegex`: Expressão regular utilizada para verificar o formato do e-mail.
Dependências:
  - **Validator.js** (Opcional): Biblioteca que oferece validação robusta e confiável para endereços de 
  e-mail, facilitando a verificação.
Recomendações:
  - Evite validar e-mails apenas com expressões regulares muito simples, pois podem não cobrir todos os 
  casos.
  - Considere adicionar validações adicionais, como verificar domínios de e-mail proibidos ou não confiáveis.
  - Realize testes de validação com diferentes formatos de e-mail para garantir que o middleware cubra os 
  casos mais comuns e complexos.
Observações:
  - Este middleware é focado na validação de formato; validações adicionais, como existência real do e-mail, 
  devem ser tratadas em outra etapa.
  - Implemente a validação de e-mails em todas as rotas que recebem entradas de e-mail para consistência de 
  dados.
==================================================================
*/
