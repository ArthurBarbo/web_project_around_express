# Projeto 15 - Mini API Express - Around Us

## 📖 Descrição do Projeto

Este projeto consiste em criar uma **API simples** utilizando **Node.js** e **Express**.  
A API disponibiliza dados de usuários e cards, que podem ser consumidos por um front-end, semelhante ao projeto "EUA Afora" do curso.  
Inclui rotas para listar todos os usuários, listar todos os cards e buscar por ID, além de tratamento de erros 404 para rotas inexistentes ou IDs não encontrados.

---

## 🛠 Tecnologias e Técnicas Utilizadas

- **Node.js** – Ambiente de execução JavaScript no servidor.
- **Express** – Framework para criação de APIs REST.
- **JavaScript (ES Modules)** – Uso de `import/export`.
- **JSON** – Armazenamento temporário de dados de usuários e cards.
- **fs + path** – Leitura de arquivos JSON no servidor.
- **Nodemon** – Reinício automático do servidor durante o desenvolvimento.
- **Tratamento de erros 404** – Para rotas e IDs não encontrados.

---

## ✅ Funcionalidades

- `GET /users` → Lista todos os usuários.
- `GET /users/:id` → Retorna um usuário específico pelo ID.
- `GET /cards` → Lista todos os cards.
- `GET /cards/:id` → Retorna um card específico pelo ID.
- Rotas não existentes retornam JSON `{ "message": "A solicitação não foi encontrada" }`.

## ⚡ Instruções para Rodar o Projeto

1. Clone o repositório.
2. Instale as dependências:
   ```bash
   npm install
   Inicie o servidor:
   ```

- bash
- Copiar código
- npm run start


**Teste os endpoints no Postman ou navegador:**

http://localhost:3000/users

http://localhost:3000/users/:id

http://localhost:3000/cards

http://localhost:3000/cards/:id
