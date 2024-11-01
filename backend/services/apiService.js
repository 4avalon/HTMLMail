/*
==================================================================
Arquivo: apiService.js
Descrição: Este arquivo contém funções utilitárias para comunicação com APIs externas e internas. Facilita 
a centralização das chamadas de API, gerenciando requisições, respostas e tratamento de erros de forma 
padronizada.
Importância: Centraliza a lógica de comunicação com APIs, permitindo uma gestão consistente de requisições 
e respostas, e facilitando a manutenção e expansão do projeto.
Como Funciona:
  - Define métodos para realizar requisições HTTP (GET, POST, PUT, DELETE) para APIs externas e internas.
  - Implementa lógica para tratamento de erros e gestão de respostas das APIs.
  - Centraliza a configuração de headers, tokens de autenticação e parâmetros de requisição.
Variáveis Definidas:
  - `get`: Função para realizar requisições HTTP GET.
  - `post`: Função para realizar requisições HTTP POST.
  - `put`: Função para realizar requisições HTTP PUT.
  - `delete`: Função para realizar requisições HTTP DELETE.
Dependências:
  - **axios** (Opcional): Biblioteca para facilitar as requisições HTTP e tratamento de respostas de APIs.
Recomendações:
  - Utilize tratamento de erros consistente para capturar falhas de requisições e melhorar a depuração.
  - Armazene chaves API e tokens de autenticação em variáveis de ambiente para segurança.
  - Revise periodicamente a documentação das APIs externas utilizadas para adaptar o código conforme 
  necessário.
Observações:
  - Teste as funções de requisição em diferentes cenários para garantir compatibilidade e segurança.
  - Implemente mecanismos de retry para lidar com falhas temporárias nas APIs externas.
==================================================================
*/
