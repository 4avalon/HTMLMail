/*
==================================================================
Arquivo: fileHelper.js
Descrição: Este arquivo contém funções utilitárias para manipulação de arquivos, incluindo upload, 
download, leitura, e remoção de arquivos no sistema. Facilita a gestão de arquivos enviados e recebidos 
pela aplicação, centralizando operações de I/O (entrada e saída).
Importância: Centraliza operações de arquivos, garantindo uma manipulação segura e eficiente de dados 
no sistema de arquivos.
Como Funciona:
  - Define funções para upload de arquivos recebidos pelo usuário.
  - Implementa métodos para leitura e remoção de arquivos no sistema.
  - Gerencia downloads de arquivos armazenados no servidor.
Variáveis Definidas:
  - `uploadFile`: Função que gerencia o upload de arquivos.
  - `readFile`: Função que lê o conteúdo de um arquivo específico.
  - `deleteFile`: Função que remove um arquivo do sistema.
  - `downloadFile`: Função para preparar e enviar um arquivo para download.
Dependências:
  - **fs** (File System): Módulo nativo do Node.js para manipulação de arquivos.
Recomendações:
  - Implemente validações nos uploads para garantir que apenas arquivos seguros sejam aceitos.
  - Utilize diretórios temporários para arquivos que não precisam ser armazenados permanentemente.
Observações:
  - Revise permissões de arquivo e mantenha o sistema de arquivos seguro contra acessos não autorizados.
==================================================================
*/
