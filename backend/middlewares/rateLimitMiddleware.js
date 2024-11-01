/*
==================================================================
Arquivo: rateLimitMiddleware.js
Descrição: Este arquivo contém middleware para limitação de taxa de requisições (Rate Limiting) ao 
servidor. Garante que cada cliente respeite um limite de requisições em um intervalo de tempo definido, 
prevenindo abusos e ataques de negação de serviço (DDoS).
Importância: A implementação de rate limiting protege o servidor contra tráfego excessivo e acessos 
maliciosos, mantendo a estabilidade e a segurança da aplicação.
Como Funciona:
  - Define regras para limitar o número de requisições que um cliente pode fazer em um intervalo de tempo 
  especificado.
  - Bloqueia requisições que excedam o limite permitido, retornando respostas com códigos de erro apropriados.
  - Implementa um sistema de contagem de requisições por IP ou chave de API para controlar o acesso.
Variáveis Definidas:
  - `rateLimitOptions`: Configurações que definem o limite de requisições (ex: número máximo de requisições
   e intervalo de tempo).
  - `rateLimitMiddleware`: Middleware que verifica a quantidade de requisições e aplica restrições quando 
  o limite é excedido.
  - `retryAfter`: Tempo de espera sugerido ao cliente após exceder o limite de requisições, antes de 
  tentar novamente.
Dependências:
  - **express-rate-limit**: Biblioteca para implementação simples e eficiente de rate limiting no ambiente 
  Node.js.
  - **redis** (Opcional): Para armazenar dados de contagem de requisições em um sistema distribuído, 
  ideal para aplicações escaláveis.
Recomendações:
  - Defina limites adequados para cada rota, ajustando conforme a criticidade dos dados acessados.
  - Armazene contadores de requisições em um sistema de cache distribuído (ex: Redis) para ambientes 
  com múltiplos servidores.
  - Monitore os registros de requisições bloqueadas para identificar padrões de uso abusivo.
Observações:
  - Teste o comportamento do rate limiting em diferentes cenários, garantindo que ele seja eficiente 
  contra ataques de força bruta e DDoS.
  - Evite definir limites muito restritivos em rotas públicas, para não prejudicar a experiência dos 
  usuários legítimos.
==================================================================
*/
