# 🌐 Gustavo Rebelo — Developer Portfolio

**Developer Portfolio** é um projeto pessoal que apresenta meus principais trabalhos, habilidades técnicas, experiências e trajetória profissional no universo do desenvolvimento de software.

---

## Índice

- [Sobre](#sobre)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Tecnologias](#tecnologias)
- [Arquitetura](#arquitetura)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Segurança](#segurança)
- [Screenshots](#screenshots)
- [Contribuição](#contribuição)

---

## Sobre

Este portfólio foi desenvolvido com o objetivo de concentrar minha atuação como desenvolvedor, destacando projetos reais, tecnologias utilizadas, e diferenciais que agrego às soluções que construo. Além disso, funciona como um repositório central para me apresentar profissionalmente de forma visual, moderna e interativa.

---

## Funcionalidades Principais

- **Página Inicial Dinâmica:** Apresentação animada com scroll suave e transições modernas.
- **Seção de Projetos:** Cards interativos com informações técnicas, tecnologias e links de demonstração.
- **Skills Técnicas:** Painel visual com ícones de stacks, ferramentas e plataformas que domino.
- **Contato e Redes:** Formulário funcional e botões integrados às principais redes profissionais.
- **Design Responsivo:** Totalmente adaptado para desktop, tablet e dispositivos móveis.
- **Acessibilidade e Performance:** Boas práticas de UI/UX, Lighthouse e Core Web Vitals aplicadas.

---

## Tecnologias

- **Frontend:** Next.js + React + TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion, Locomotive Scroll
- **Backend opcional:** (API REST/Node.js — se conectado a outros sistemas)
- **Deploy:** Vercel

---

## Arquitetura

- **Modularização por Seção:** Componentes organizados por contexto funcional (Home, Projetos, Skills, Contato).
- **Boas Práticas de Acessibilidade:** Uso de landmarks, contraste adequado e navegação por teclado.
- **Animações desacopladas:** Separação lógica entre UI e interações.
- **Performance otimizada:** SSR do Next.js com lazy loading de imagens e códigos divididos em bundles.
- **Escalável:** Estrutura de código pronta para integração com CMS, backend próprio ou APIs externas.

---

## Configuração do Ambiente

Crie um arquivo `.env.local` na raiz com as configurações do ambiente, caso o projeto evolua para consumir APIs externas:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.seuservidor.com
EMAIL_SERVICE_KEY=xxxxxx
```

--- 

## Instalação

## Clone o repositório
* git clone https://github.com/gustavomrebelo/developer-portfolio.git
* Acesse o diretório
* cd developer-portfolio
## Instale as dependências
* npm install
### ou
* pnpm install

---

## Uso

# Inicie o servidor de desenvolvimento
* npm run dev
### ou
* pnpm dev

---

## Estrutura do Projeto

📦 portfolio/
├── 📁 public/
├── 📁 src/
│   ├── 📁 components/
│   ├── 📁 pages/
│   └── 📄 App.tsx
├── 📄 .env.example
├── 📄 .eslintrc.cjs
├── 📄 .gitignore
├── 📄 LICENSE.md
├── 📄 README.md
├── 📄 components.json
├── 📄 next.config.js
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 pnpm-lock.yaml
├── 📄 postcss.config.cjs
├── 📄 prettier.config.js
├── 📄 tailwind.config.ts
└── 📄 tsconfig.json

---

## Segurança

* Variáveis sensíveis e chaves de API são armazenadas em arquivos .env.local.
* O projeto está preparado para autenticação e integração segura com serviços externos.
* Não são expostas credenciais sensíveis no repositório.

---

## Screenshots

### EM BREVE!

---

## Contribuição

### Contribuições são bem-vindas!

1. Faça um fork do repositório
2. Crie uma branch para sua feature (git checkout -b feature/nova-feature)
3. Commit suas alterações (git commit -m 'feat: adiciona nova feature')
4. Envie para o seu repositório (git push origin feature/nova-feature)
5. Abra um Pull Request

---

# Desenvolvido por Gustavo Rebelo
🔗 LinkedIn
✉️ Email
