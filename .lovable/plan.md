

## Plano de Refinamento do Site Chérie Luxe

### Problemas Identificados

1. **Logo no navbar com filtros que prejudicam a nitidez** -- `brightness(0.95) contrast(1.1)` e `imageRendering: '-webkit-optimize-contrast'` podem causar artefatos em algumas telas
2. **index.html com tags duplicadas** -- dois `<title>` e dois `<meta name="description">`, além de metadados genéricos do Lovable
3. **StickyHeader não é utilizado na Index** -- o componente existe mas não é renderizado na página principal
4. **Página Index sem o StickyHeader** -- falta a navbar fixa no topo
5. **CSS legado em App.css** -- estilos genéricos do template Vite que não são usados

### Mudanças Planejadas

#### 1. Logo do Navbar -- Máxima Nitidez
- Remover todos os filtros CSS (`filter`, `imageRendering`) do logo em `StickyHeader.tsx`
- Aumentar o tamanho para `h-20 sm:h-24` para aproveitar melhor os pixels da imagem original
- Adicionar apenas um drop-shadow sutil para destaque sem interferir na cor

#### 2. Incluir StickyHeader na Página Principal
- Adicionar `<StickyHeader />` em `Index.tsx` acima do `<main>`
- Adicionar `pt-20` ao container principal para compensar o header fixo

#### 3. Limpar index.html
- Remover as tags `<title>` e `<meta>` duplicadas
- Manter apenas as tags corretas do Chérie Luxe
- Atualizar Open Graph com dados do site

#### 4. Remover App.css Legado
- Limpar `src/App.css` removendo estilos do template Vite que não são utilizados

#### 5. Pequenos Refinamentos Visuais
- Garantir que o hero tenha `pt-20` para não ficar escondido atrás do header fixo
- Verificar consistência visual geral

### Arquivos Afetados
- `src/components/StickyHeader.tsx` -- logo sem filtros, mais nítida
- `src/pages/Index.tsx` -- incluir StickyHeader + padding top
- `index.html` -- limpar duplicatas
- `src/App.css` -- remover estilos não utilizados

