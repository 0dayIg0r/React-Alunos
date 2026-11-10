# Mini Pokédex — React Router + useParams

Projeto didático para praticar:

- React
- `useState`
- `useEffect`
- `fetch()`
- React Router DOM
- `BrowserRouter`
- `Routes`
- `Route`
- `Link`
- rota dinâmica
- `useParams()`

## Rotas

```text
/
→ lista de Pokémon

/pokemon/:nome
→ detalhes de um Pokémon
```

Exemplo:

```text
/pokemon/pikachu
```

## Fluxo do useParams

```text
Clique em "Ver detalhes"
        ↓
/pokemon/pikachu
        ↓
Route path="/pokemon/:nome"
        ↓
useParams()
        ↓
nome = "pikachu"
        ↓
fetch da PokéAPI
        ↓
detalhes do Pikachu
```

## Como executar

```bash
npm install
npm run dev
```
