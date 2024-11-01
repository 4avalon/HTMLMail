/*
==================================================================
Arquivo: emailService.js
Descrição: Este arquivo contém funções utilitárias para envio e gerenciamento de e-mails na aplicação. 
Centraliza a lógica de comunicação por e-mail, permitindo o envio de mensagens automáticas, notificações 
e e-mails de confirmação.
Importância: Simplifica o envio de e-mails ao centralizar a lógica em um único serviço, garantindo 
consistência nas mensagens e facilidade de manutenção.
Como Funciona:
  - Define métodos para envio de e-mails utilizando um serviço SMTP.
  - Permite o uso de templates personalizados para formatação de e-mails.
  - Implementa tratamento de erros para garantir a entrega confiável das mensagens.
Variáveis Definidas:
  - `sendEmail`: Função para envio de e-mails utilizando configuração SMTP.
  - `loadTemplate`: Função que carrega e personaliza templates de e-mail.
  - `sendBulkEmails`: Função para envio de e-mails em massa com base em uma lista de destinatários.
Dependências:
  - **Nodemailer**: Biblioteca para envio de e-mails via SMTP.
Recomendações:
  - Armazene credenciais de e-mail de forma segura, utilizando variáveis de ambiente.
  - Utilize templates centralizados para manter a consistência visual nas comunicações.
  - Implemente logs para rastrear falhas no envio de e-mails e facilitar a depuração.
Observações:
  - Teste o envio de e-mails em ambientes de desenvolvimento e produção para validar as configurações.
  - Utilize cabeçalhos e métodos seguros para evitar que os e-mails sejam identificados como spam.
==================================================================
*/
