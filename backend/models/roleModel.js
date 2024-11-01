/*
==================================================================
Arquivo: roleModel.js
Descrição: Este arquivo contém a definição do modelo para funções de usuário (roles) no banco de dados. 
Centraliza a lógica para manipulação de diferentes níveis de acesso e permissões dentro da aplicação, 
garantindo um sistema de controle de acesso robusto.
Importância: Assegura que diferentes funções de usuário tenham permissões específicas, facilitando o 
gerenciamento de acesso a recursos protegidos da aplicação.
Como Funciona:
  - Define um esquema para representar as funções de usuário no banco de dados 
  (ex: Admin, Usuário, Moderador).
  - Implementa métodos para criação, leitura, atualização e remoção de funções.
  - Permite a associação de permissões específicas a cada função de usuário.
Variáveis Definidas:
  - `roleSchema`: Esquema que define a estrutura dos dados de uma função de usuário no banco.
  - `Role`: Modelo que representa uma função de usuário, utilizado para interações com o banco de dados.
  - `findRoleByName`: Função que busca uma função específica pelo nome.
Dependências:
  - **Mongoose**: Biblioteca de modelagem de objetos para MongoDB, utilizada para definir e manipular 
  esquemas no banco de dados.
  - **Sequelize (Opcional)**: Caso o projeto utilize um banco de dados SQL, a definição de funções pode 
  ser feita com este ORM.
Recomendações:
  - Mantenha a estrutura de funções simples e clara, definindo permissões de forma explícita.
  - Realize validações ao criar ou editar funções para evitar conflitos de permissões.
Observações:
  - Teste as permissões de cada função para garantir que o controle de acesso funcione conforme esperado.
  - Utilize o `roleModel` como base para implementar sistemas de autenticação e autorização mais complexos.
==================================================================
*/
