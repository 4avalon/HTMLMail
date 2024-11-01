/*
==================================================================
Arquivo: cryptoHelper.js
Descrição: Este arquivo contém funções utilitárias para criptografia, hashing, geração de tokens e outras 
operações de segurança. Utiliza tanto o módulo nativo `crypto` do Node.js quanto a biblioteca `bcrypt` 
para fornecer uma camada robusta de segurança para dados sensíveis.
Importância: Assegura que informações sensíveis sejam tratadas e armazenadas de maneira segura, incluindo 
senhas, chaves, e tokens de autenticação.
Como Funciona:
  - Define funções para hashing de senhas utilizando `bcrypt`.
  - Implementa criptografia simétrica e assimétrica utilizando o módulo nativo `crypto`.
  - Fornece métodos para geração de tokens e chaves aleatórias para segurança.
  - Inclui funções para comparar dados criptografados e validar informações sensíveis.
Variáveis Definidas:
  - `hashPassword`: Função que gera um hash seguro para senhas utilizando `bcrypt`.
  - `comparePassword`: Função para comparar um hash gerado com uma senha de entrada 
  utilizando `bcrypt`.
  - `encryptData`: Função que criptografa dados utilizando um algoritmo de criptografia simétrica 
  do módulo `crypto`.
  - `decryptData`: Função que descriptografa dados criptografados utilizando o módulo `crypto`.
  - `generateToken`: Função que cria um token seguro utilizando `crypto` para geração de bytes aleatórios.
Dependências:
  - **bcrypt**: Para geração de hashes seguros e comparação de senhas.
  - **crypto** (Módulo Nativo do Node.js): Utilizado para criptografia simétrica, geração de tokens 
  aleatórios, e outras operações de segurança.
Recomendações:
  - Utilize algoritmos seguros, como `sha256` para hashing e `aes-256-cbc` para criptografia simétrica.
  - Armazene apenas hashes de senhas no banco de dados, nunca as senhas em texto puro.
Observações:
  - Teste todas as operações de criptografia para garantir a integridade e segurança dos dados.
  - Revise periodicamente as práticas de segurança para garantir a conformidade com os padrões modernos.
==================================================================
*/
