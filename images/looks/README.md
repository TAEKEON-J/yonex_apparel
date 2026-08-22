# images/looks/ — naming convention

Model/editorial photography for the lookbook auto-matches by filename — drop a
file in here that matches a look's product codes and `lookbook.html` picks it
up automatically, no code change needed.

## Pattern

```
{TOP code}_{BOTTOM code}[_{other codes}]_{model|editorial}.jpg
```

- Codes are the full M/F/U-suffixed product code (e.g. `263TS001M`) — same
  case as the ghost cuts in `images/products/`. The site tries the codes
  uppercase first, then lowercase, so either works, but matching the ghost
  cut casing keeps things consistent.
- Order is always TOP → BOTTOM → other slots (e.g. BAG). A TOP-only look just
  omits the rest.
- `model` = 모델피팅컷 (plain fitting cut, used on the LOOK detail page)
- `editorial` = 화보컷 (campaign cut, used on the category grid / Worn With)
- `.jpg`, `.jpeg`, and `.png` all work — the site tries each in that order.
- Multiple photos of the same combo: append `_1`, `_2`, ... before the
  extension (e.g. `263TS001M_263PH001M_model_2.jpg`) — only the first
  (no-suffix) file is picked up automatically today; ask if you need the
  others wired in too.

## Examples

```
263TS001M_263PH001M_model.jpg       Match Point — model cut
263TS001M_263PH001M_editorial.jpg   Match Point — editorial cut
263TS002F_model.jpg                 Full Swing — TOP-only look, model cut
263TS002F_editorial.jpg             Full Swing — TOP-only look, editorial cut
```

Until a matching file exists, the look quietly falls back to its current
placeholder photo — nothing breaks if you upload photos gradually.

## Ghost cuts (front/back)

Product-only shots live in `images/products/` instead, one file per code —
this is the pattern already in use there:

```
images/products/{code}.jpg      front (default)
images/products/{code}_B.jpg    back
```

e.g. `263TS001M.jpg` / `263TS001M_B.jpg`. These aren't auto-matched by
filename yet (unlike `images/looks/` above) — tell Claude when you add a
batch and it'll wire each one into its product entry.

### Same code, different color

Some codes are sold in two (or more) colorways under one shared product
code. Keep the base code plain for the first color, then append `_1` for
the second, `_2` for the third, and so on — same front/back suffix rules
apply on top of that:

```
images/products/{code}.jpg         color 1, front
images/products/{code}_B.jpg       color 1, back
images/products/{code}_1.jpg       color 2, front
images/products/{code}_1_B.jpg     color 2, back
images/products/{code}_2.jpg       color 3, front (if there is one)
images/products/{code}_2_B.jpg     color 3, back
```

Don't add Korean descriptions or anything else in the filename (e.g. no
`{code}(설명).jpg`) — the site matches on the exact code + suffix pattern
above, so extra text breaks the match.
