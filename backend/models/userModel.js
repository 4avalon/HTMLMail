/*
==================================================================
Arquivo: userModel.js
Descrição: Este arquivo contém a definição do modelo para usuários no banco de dados. Centraliza a lógica 
de manipulação de dados de usuários, incluindo autenticação, cadastro, atualização de perfis e associação 
a funções (roles).
Importância: Facilita a gestão dos dados de usuários, garantindo que todas as operações relacionadas sejam 
realizadas de forma consistente e segura.
Como Funciona:
  - Define um esquema para representar um usuário no banco de dados, incluindo dados pessoais e credenciais.
  - Implementa métodos para criação, leitura, atualização e remoção de usuários.
  - Associa cada usuário a uma função (role) para controle de permissões.
Variáveis Definidas:
  - `userSchema`: Esquema que define a estrutura dos dados de um usuário no banco, incluindo nome, e-mail,
   senha e função.
  - `User`: Modelo que representa um usuário, utilizado para interações com o banco de dados.
  - `findUserByEmail`: Função que busca um usuário específico pelo e-mail.
  - `hashPassword`: Função que utiliza `bcrypt` para hashear senhas antes de armazená-las.
  - `comparePassword`: Função que compara uma senha fornecida com o hash armazenado no banco.
Dependências:
  - **Mongoose**: Biblioteca de modelagem de objetos para MongoDB, utilizada para definir e manipular
   esquemas no banco de dados.
  - **bcrypt**: Para criptografar senhas de forma segura antes de armazená-las.
  - **Sequelize (Opcional)**: Caso o projeto utilize um banco de dados SQL, a definição de usuários pode
   ser feita com este ORM.
Recomendações:
  - Utilize criptografia forte para senhas e armazene apenas hashes no banco de dados.
  - Implemente validações no cadastro de usuários para garantir que os dados estejam corretos.
  - Realize verificações de permissões associadas ao usuário antes de conceder acesso a recursos protegidos.
Observações:
  - Teste as operações de CRUD para garantir a consistência e segurança dos dados de usuários.
  - Implemente medidas de segurança adicionais, como limitação de tentativas de login e recuperação 
  segura de senha.
==================================================================
*/
