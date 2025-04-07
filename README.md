# 🧭 psel-monks-analista-lucas-sampaio

Projeto desenvolvido como parte do processo seletivo para a vaga de **Analista** na **Monks**.

> Desenvolvido com React (frontend) e WordPress (backend via REST API).

---

## 📌 Sobre o Projeto

A proposta do case foi construir uma **página**, responsiva e dinâmica, com base em um mockup fornecido via Figma.

A integração com o WordPress permitiu centralizar o conteúdo dinâmico da página, incluindo textos, imagens, cards e leads cadastrados via formulário.

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)

### Backend

- [WordPress](https://wordpress.org/)
- [ACF (Advanced Custom Fields)](https://www.advancedcustomfields.com/)
- [Custom Post Type UI](https://pt.wordpress.org/plugins/custom-post-type-ui/)
- REST API nativa do WordPress

---

## 🔗 Acesso ao Projeto

- 📂 Repositório: [https://github.com/LucasKMS/psel-monks-analista-lucas-sampaio](https://github.com/LucasKMS/psel-monks-analista-lucas-sampaio)

---

## 📱 Funcionalidades

- **Hero banner dinâmico**
- **Cards de destinos turísticos** carregados via WordPress
- **Seção de app mobile** com links ativos para as lojas
- **Formulário de contato** com validação e envio para WordPress (`leads`)
- **Footer completo** com navegação e redes sociais

---

## 🧪 Como Rodar Localmente

### 🔧 Pré-requisitos

- Node.js (recomendado: ≥ 18.x)
- Ambiente WordPress local (LocalWP, XAMPP, WAMP, etc)

### 📂 Backend (WordPress)

1. Instale o WordPress localmente
2. Copie o tema personalizado do projeto para a pasta `wp-content/themes`
4. Ative o tema pelo painel do WordPress
5. Configure os campos personalizados e o Custom Post Type `leads`

### 💻 Frontend (React)

```bash
cd frontend
npm install
npm run dev
```


---

### 🌐 Configuração da URL no ambiente

Para acessar dinamicamente no projeto React, defina a URL base no arquivo `.env` que você irá criar:

```env
NEXT_PUBLIC_API_CARDS_POST=https://seudominio.com/wp-json
```

> Substitua `https://seudominio.com` pela URL onde seu WordPress está hospedado.



## 🔌 API - Endpoints do WordPress

O projeto utiliza a REST API do WordPress como backend para fornecer e cadastrar os dados exibidos na aplicação.

---

### 📥 Obter todos os cards

**Endpoint:**

```
GET /wp-json/api/cards
```

**Descrição:**

Retorna uma lista de cards cadastrados no WordPress com os seguintes campos:

```json
[
  {
    "id": 1,
    "title": "Seul, Coreia do Sul",
    "description": "Tecnologia e tradição em uma das metrópoles mais impressionantes da Ásia.",
    "imageUrl": "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSaSTh92qTWsA6uL7jageh97SpvRuGvgiOytwjfo9yeTkJbLsMGhWJRLlTPBIf2QW1bN7S_pS_ZDAYA68iRNAyZSjYplrsXoQGk2V_Qsg"
  }
]
```

---

### ➕ Cadastrar um novo card

**Endpoint:**

```
POST /wp-json/api/cards
```

**Descrição:**

Essa rota permite o cadastro de novos cards via requisição `POST`. Pode ser testada com ferramentas como **Postman**, **Insomnia** ou diretamente pelo frontend da aplicação.

**Body (Exemplo):**

```json
  {
    "id": 1,
    "title": "Seul, Coreia do Sul",
    "description": "Tecnologia e tradição em uma das metrópoles mais impressionantes da Ásia.",
    "imageUrl": "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSaSTh92qTWsA6uL7jageh97SpvRuGvgiOytwjfo9yeTkJbLsMGhWJRLlTPBIf2QW1bN7S_pS_ZDAYA68iRNAyZSjYplrsXoQGk2V_Qsg"
  }
```

**Retorno esperado:**

```json
{
  "success": true,
  "message": "Card cadastrado com sucesso."
}
```

---

## ✅ Checklist do Case

- [x] Página responsiva baseada no Figma
- [x] React como base do frontend
- [x] Tema WordPress personalizado
- [x] Integração com REST API
- [x] Formulário funcional com validação
- [x] Salvamento de leads no WordPress
- [x] Documentação do projeto

---

## 🧐 Considerações Finais

O projeto foi desenvolvido com foco em:

- Estruturação organizada e escalável
- Componentização no React
- Integração limpa entre frontend e backend via REST API
- Layout responsivo, fiel ao mockup

Estou à disposição para apresentar detalhes técnicos, justificar decisões de arquitetura e propor melhorias no decorrer da entrevista.

---

Feito com 💜 por **Lucas Sampaio**

