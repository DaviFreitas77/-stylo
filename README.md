# Stylo E-commerce


## Descrição

O **Stylo** é uma aplicação de e-commerce desenvolvida com o objetivo de explorar boas práticas de código, utilizando **Laravel** como backend e **React** para a interface do usuário. O projeto implementa **Redux** para um carrinho de compras dinâmico e **Context API** para gerenciamento eficiente de estados. As imagens dos produtos são armazenadas no **Firebase Storage**.

### Capturas de Tela

Aqui estão algumas capturas de tela da aplicação:

1. ![Tela Inicial](https://github.com/user-attachments/assets/83fc082f-89b9-4e07-b970-08e09ea7bbfa)
   
2. ![Página de Produtos](https://github.com/user-attachments/assets/497490e3-ea3e-4901-9419-f4c5f107ee8a)
   
3. ![Carrinho de Compras](https://github.com/user-attachments/assets/6d22769d-c8fa-4551-b777-bf3e2173fe9e)

4. ![Finalização de Compra](https://github.com/user-attachments/assets/ccfc9d2c-39d2-4249-be8f-ef82de2de3ee)

## Funcionalidades

- **Gerenciamento de Estado**: Utiliza Redux para gerenciar o estado do carrinho de compras de forma eficiente.
- **Context API**: Facilita o compartilhamento de estados entre componentes sem a necessidade de passar props manualmente.
- **UI Responsiva**: Design responsivo que adapta ao dispositivo do usuário.
- **Cadastro e Autenticação**: Funcionalidades de registro e login de usuários.
- **Integração com Stripe**: Aceita pagamentos com cartão de crédito através da integração da API do Stripe.
- **Armazenamento de Imagens**: As imagens dos produtos são armazenadas no Firebase Storage.
- **Experiência do Usuário Otimizada**: Interações rápidas e suaves com feedback instantâneo.

## Tecnologias Utilizadas

- **Backend**: Laravel
- **Frontend**: React
- **Gerenciamento de Estado**: Redux,Context API
- **Pagamento**: Stripe API
- **Armazenamento**: Firebase Storage


Antes de rodar o projeto, certifique-se de ter as seguintes ferramentas instaladas:

- **XAMPP**: [(PHP 8.2)](https://www.apachefriends.org/pt_br/index.html)
- **Node.js**: [(versão 14.x ou superior)](https://nodejs.org/pt)
- **Composer**: [(Download)](https://getcomposer.org/)

### Clonar o Repositório

1. Clone o repositório do projeto:
   git clone https://github.com/DaviFreitas77/-stylo.git

## instruções
   abra o xamp e inicie o apache  eo mySql,clique em admin para abrir o phpmyadmin e importe o banco com o nome bd_stylo
   após clonar o projeto  abra a pasta **api** no cmd e rode o comando composer install para instalar as dependencias
   crie um aquivo **.env** na raiz da api e copie o **.env.exemple** ,logo a´pos rode o comando **php artisan serve** para iniciar o server local

abra a pasta **front end** no cmd e rode o arquivo npm install para instalar as dependencias do front logo após rode o comando **npm run dev** para iniciar


