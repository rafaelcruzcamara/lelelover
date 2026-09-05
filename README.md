# Fã Clube do Lelê

Blog do fã clube do professor de matemática, mobile-first, visual retrô anos 90.

## Stack

- **Next.js** (App Router) — framework React, gera as páginas e cuida do roteamento
- **Tailwind CSS** — estilização por classes utilitárias
- **Markdown** (`content/posts/*.md` + gray-matter + remark) — cada post é um arquivo `.md`, sem precisar de banco de dados
- **Supabase** — banco de dados de verdade só pra enquete e pro mural de recados (as duas únicas coisas do site que precisam ser compartilhadas entre todo mundo, não só salvas no seu navegador)

## Rodar localmente

```
npm install
npm run dev
```

Precisa do arquivo `.env.local` com as credenciais do Supabase (veja `.env.example`). Já está criado no projeto — se for rodar em outra máquina, copia o `.env.local` também (ele não vai pro Git, por segurança de hábito, embora essa chave seja "publicável" e protegida por regras no banco).

Abre `http://localhost:3000` — de preferência com o DevTools em modo mobile.

## Estrutura

```
app/                 páginas (rotas) do site
  page.js               Início (feed)
  posts/[slug]/page.js  página de um post
  dicas/                lista só os posts de matemática
  galeria/              grade de fotos (placeholder por enquanto)
  sobre/                texto sobre o Lelê e o fã-clube
  comunidade/           enquete + link do grupo
components/          peças reutilizáveis (nav, cartão de post, tag, enquete)
content/posts/       cada arquivo .md é um post
lib/posts.js         lê os arquivos .md e organiza os dados pras páginas
```

## Adicionar um post novo

Cria um arquivo `.md` em `content/posts/`, seguindo o modelo:

```md
---
title: "Título do post"
date: "2026-09-10"
pillar: "memes"
pillarLabel: "Memes"
excerpt: "Resumo de uma linha pro cartão do feed."
---

Corpo do post em markdown normal.
```

`pillar` tem que ser um de: `perfil`, `memes`, `dicas`, `mural`.

## Trocar a imagem de um post (card, destaque e banner)

Por padrão, cada post usa a ilustração do seu pilar (desenhada em `components/PillarArt.js`). Pra usar uma foto de verdade nesse post específico:

1. Coloca o arquivo em `public/images/` (ex: `public/images/minha-foto.jpg`)
2. No frontmatter do post, adiciona a linha `image: "/images/minha-foto.jpg"`

Isso troca a imagem em três lugares de uma vez: cartão do feed, card de destaque (se for o post em destaque) e banner da página do post. Sem a linha `image`, continua usando a ilustração automática.

Exemplo de uso real: `content/posts/giz-quebrado.md` usa `image: "/images/giz-doodle.svg"`.

## Colocar imagem dentro do texto do post (opcional)

Em qualquer post `.md`, dá pra inserir uma imagem no meio do texto com a sintaxe normal de markdown, numa linha sozinha:

```md
![Descrição da imagem](/images/minha-foto.jpg)
```

Não é obrigatório — só aparece nos posts onde você adicionar essa linha. Tem um exemplo funcionando em `content/posts/giz-quebrado.md`.

## Colocar fotos na Galeria

A Galeria lê a lista em `content/gallery.json`. Cada item pode ser uma foto real ou um placeholder:

```json
{ "image": "/images/minha-foto.jpg", "caption": "legenda que aparece embaixo" }
```

Sem a chave `"image"`, o item vira um quadradinho placeholder só com a legenda (útil pra deixar marcado o que ainda falta mandar). Coloca o arquivo de imagem em `public/images/` antes de referenciar.

## Enquete da semana (votos de verdade)

Os votos ficam guardados no banco (Supabase), não só no navegador — então todo mundo que vota vê o resultado real de todo mundo. O que ainda fica salvo no navegador é só "essa pessoa já votou", pra não deixar votar duas vezes na mesma enquete.

A pergunta e as opções continuam vindo de `content/poll.json`:

```json
{
  "id": "identificador-unico-da-enquete",
  "question": "Pergunta da enquete",
  "options": [
    { "id": "opcao-a", "label": "Texto da opção A" },
    { "id": "opcao-b", "label": "Texto da opção B" }
  ]
}
```

Pra trocar a enquete da semana: troca o `id` (isso começa uma contagem de votos nova) e edita a pergunta/opções — depois roda o SQL abaixo no painel do Supabase (SQL Editor) pra cadastrar as novas opções, trocando os valores:

```sql
insert into poll_options (poll_id, option_id, label, votes) values
  ('novo-id-da-enquete', 'opcao-a', 'Texto da opção A', 0),
  ('novo-id-da-enquete', 'opcao-b', 'Texto da opção B', 0);
```

## Mural de recados

Página nova em `/recados` (aba "Recados" na navegação) — um livro de visitas: qualquer um escreve o nome e uma mensagem, e ela aparece na hora pra todo mundo que visitar a página depois. Também guardado no Supabase, na tabela `guestbook_entries`.

## Contador de visitas

Aquele contadorzinho retrô "Visitante Nº..." que aparece em todas as páginas, acima do menu — é real, conta visita de verdade (uma por pessoa por sessão de navegador, guardado no Supabase na tabela `site_stats`). Clássico de site dos anos 90.

## Sobre o banco de dados (Supabase)

Criei um projeto Supabase novo, só pra esse site (separado de qualquer outro projeto seu). Duas tabelas:

- `poll_options` — as opções da enquete e a contagem de votos de cada uma
- `guestbook_entries` — os recados do mural
- `site_stats` — o contador de visitas

Pra ver ou mexer direto no banco, acessa [supabase.com/dashboard](https://supabase.com/dashboard), projeto **fa-clube-do-lele**.

## Próximos passos técnicos

- Trocar as fotos placeholder da Galeria por imagens reais (pasta `public/`)
- Colocar o link real do grupo em `app/comunidade/page.js`
- Deploy no Vercel (conecta o repositório e publica sozinho a cada push)
- Depois: PWA (instalável) e, se crescer, empacotar com Capacitor pra virar app
