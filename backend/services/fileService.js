/*
==================================================================
Arquivo: fileService.js
Descrição: Este arquivo contém funções utilitárias para manipulação de arquivos no servidor. Centraliza 
operações de upload, download, leitura e remoção de arquivos, facilitando a gestão de dados armazenados 
no sistema de arquivos.
Importância: Organiza a manipulação de arquivos de forma padronizada, garantindo segurança e eficiência 
nas operações de I/O.
Como Funciona:
  - Define métodos para upload de arquivos enviados pelo usuário.
  - Implementa funções para leitura e remoção de arquivos no sistema.
  - Gerencia downloads de arquivos armazenados no servidor, aplicando validações de segurança.
Variáveis Definidas:
  - `uploadFile`: Função que gerencia o upload de arquivos re0cebidos.
  - `readFile`: Função que lê o conteúdo de um arquivo específico.
  - `deleteFile`: Função que remove um arquivo do sistema.
  - `downloadFile`: Função para preparar e enviar um arquivo para download.
Dependências:
  - **fs** (File System): Módulo nativo do Node.js para manipulação de arquivos.
  - **multer** (Opcional): Middleware para upload de arquivos em Node.js.
Recomendações:
  - Implemente validações para garantir que apenas arquivos permitidos sejam aceitos durante o upload.
  - Utilize diretórios temporários para armazenamento temporário de arquivos.
  - Revise permissões de arquivos para garantir que apenas usuários autorizados possam acessar informações 
  sensíveis.
Observações:
  - Teste a manipulação de arquivos em diferentes cenários para garantir consistência e segurança.
  - Considere o uso de armazenamento externo (ex: Amazon S3) para arquivos grandes ou para ambientes de 
  produção.
==================================================================
*/
