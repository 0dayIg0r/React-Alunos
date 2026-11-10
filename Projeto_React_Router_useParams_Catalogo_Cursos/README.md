# Projeto simples — React Router DOM + useParams

Projeto didático para introduzir rotas dinâmicas e `useParams()`.

## O que o projeto faz

A página inicial mostra três cursos.

Ao clicar em um curso, a URL muda:

```text
/curso/1
/curso/2
/curso/3
```

A rota é definida assim:

```jsx
<Route
  path="/curso/:id"
  element={<DetalhesCurso cursos={cursos} />}
/>
```

Na página `DetalhesCurso.jsx`:

```jsx
const { id } = useParams();
```

O `useParams()` pega o valor que está no lugar de `:id`.

Depois:

```jsx
const cursoEncontrado = cursos.find(
  (curso) => curso.id === Number(id)
);
```

O `find()` procura no array o curso que possui aquele ID.

## Fluxo

```text
Clique em "Ver curso"
        ↓
/curso/2
        ↓
Route path="/curso/:id"
        ↓
useParams()
        ↓
id = "2"
        ↓
find()
        ↓
curso de id 2
        ↓
detalhes aparecem na tela
```

## Como executar

```bash
npm install
npm run dev
```

## Estrutura

```text
src/
├── components/
│   └── Menu.jsx
├── pages/
│   ├── Inicio.jsx
│   └── DetalhesCurso.jsx
├── App.jsx
└── main.jsx
```

## Conteúdos praticados

- `BrowserRouter`
- `Routes`
- `Route`
- `Link`
- rota dinâmica com `:id`
- `useParams()`
- `find()`
- props

## Observação

O valor retornado pelo `useParams()` vem como texto.

Por isso o projeto usa:

```jsx
Number(id)
```

para comparar com os IDs numéricos dos cursos.
