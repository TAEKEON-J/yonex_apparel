# images/looks/ — naming convention

Model/editorial photography for the lookbook auto-matches by filename — drop a
file in here that matches a look's product codes and `lookbook.html` picks it
up automatically, no code change needed.

## Pattern

```
{TOP code}_{BOTTOM code}[_{other codes}]_{model|editorial}.jpg
```

- Codes are the full M/F/U-suffixed product code, lowercase (e.g. `263ts001m`).
- Order is always TOP → BOTTOM → other slots (e.g. BAG). A TOP-only look just
  omits the rest.
- `model` = 모델피팅컷 (plain fitting cut, used on the LOOK detail page)
- `editorial` = 화보컷 (campaign cut, used on the category grid / Worn With)
- `.jpg`, `.jpeg`, and `.png` all work — the site tries each in that order.
- Multiple photos of the same combo: append `_1`, `_2`, ... before the
  extension (e.g. `263ts001m_263ph001m_model_2.jpg`) — only the first
  (no-suffix) file is picked up automatically today; ask if you need the
  others wired in too.

## Examples

```
263ts001m_263ph001m_model.jpg       Match Point — model cut
263ts001m_263ph001m_editorial.jpg   Match Point — editorial cut
263ts002f_model.jpg                 Full Swing — TOP-only look, model cut
263ts002f_editorial.jpg             Full Swing — TOP-only look, editorial cut
```

Until a matching file exists, the look quietly falls back to its current
placeholder photo — nothing breaks if you upload photos gradually.

## Ghost cuts (front/back)

Product-only shots live in `images/products/` instead, one file per code:

```
images/products/{code}.jpg        front (default)
images/products/{code}_back.jpg   back
```

These aren't auto-matched yet — tell Claude when you add one and it'll wire
it into that product's entry.
