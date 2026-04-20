# EvoluSkills – Direction Artistique & Design System

## Philosophie
- Tons naturels et organiques : vert olive, ocre/ambre, crème chaud
- Esthétique premium, élégante et chaleureuse
- Formes arrondies (border-radius 1.5rem), coins doux
- Animations subtiles : blobs, gradients animés, float, slide-up
- Vagues SVG décoratives entre les sections

## Palette de couleurs (HSL)
| Token | Light | Dark |
|-------|-------|------|
| background | 48 94% 94% (crème) | 75 39% 16% (vert foncé) |
| foreground | 75 39% 16% | 48 94% 94% |
| primary | 75 29% 32% (olive) | 75 29% 32% |
| secondary | 30 65% 44% (ambre) | 30 65% 44% |
| accent | 33 65% 61% (or chaud) | 33 65% 61% |
| muted | 48 50% 88% | 75 25% 25% |
| card | 0 0% 100% (blanc) | 75 30% 20% |

## Gradients
- `--gradient-smooth` : primary → accent → secondary (135deg)
- `--gradient-wave` : primary → foreground → secondary (110deg)
- `--gradient-glow` : radial accent doré
- `--gradient-mesh` : multi-radial organique
- `--blob-gradient` : accent/secondary translucide

## Typographie
- Police : Inter (sans-serif)
- Titres : bold, grands (5xl-7xl hero), dégradé text-transparent
- Corps : light/regular, muted-foreground

## Composants clés
- Cards : backdrop-blur, bg-card/50 ou /80, rounded-3xl, hover shadow + translate
- Boutons CTA : rounded-full, bg-accent, hover:scale-105, shadow
- Badges/tags : rounded-full, bg-accent/10, text-accent
- Sections : overflow-hidden, blobs animés en arrière-plan

## Animations
- `float` : oscillation verticale lente (6s)
- `blob` : déformation organique (7s)
- `gradient-shift` : mouvement de dégradé (8s)
- `slide-up` : entrée par le bas
- `scale-in` : zoom d'apparition

## Règles à respecter
1. Toujours utiliser les tokens sémantiques (jamais de couleurs en dur)
2. Conserver les coins arrondis (rounded-3xl pour cards, rounded-full pour boutons)
3. Maintenir les effets de profondeur (backdrop-blur, shadows, gradients)
4. Garder les transitions douces (cubic-bezier)
5. Utiliser les vagues SVG entre sections contrastées
