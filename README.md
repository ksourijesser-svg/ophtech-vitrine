# Ophtech — Site Vitrine

Site vitrine (marketing) pour **Ophtech**, la plateforme SaaS tout-en-un dédiée
aux cabinets d'ophtalmologie. Ce dépôt contient uniquement le site de
présentation — il est indépendant de l'application.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (configuration CSS-first)
- **lucide-react** (icônes)
- Palette de couleurs **LUNA** (`#A7EBF2 → #011C40`)
- **Mode clair / sombre** avec bascule (clair par défaut)

## Thème clair / sombre

Le site propose une bascule clair/sombre (bouton ☀️/🌙 dans la navbar).

- **Mode clair par défaut** — le site s'ouvre lumineux.
- Le choix est **mémorisé** dans `localStorage` (clé `theme`) et appliqué
  **avant le premier rendu** via un petit script dans `layout.tsx` (pas de flash).
- Le thème repose sur un **système de tokens sémantiques** (variables CSS dans
  `globals.css`) qui basculent selon la classe `.dark` sur `<html>` :

  | Token          | Clair              | Sombre             |
  | -------------- | ------------------ | ------------------ |
  | `background`   | `#e9f3f8`          | `#011c40`          |
  | `foreground`   | navy profond       | blanc nuage        |
  | `accent`       | `#1f6f96`          | `#a7ebf2`          |
  | `border`       | navy translucide   | cyan translucide   |

  Les composants utilisent ces tokens (`bg-background`, `text-foreground`,
  `text-accent`, `border-border`) plus des utilitaires (`glass`, `panel`,
  `btn-primary`, `btn-outline`, `text-gradient`, `grid-bg`, `section-alt`),
  ce qui garantit un bon contraste dans les deux modes.

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
```

Autres scripts :

```bash
npm run build    # build de production
npm run start    # sert le build de production
```

## Structure

```
public/
  dc.png                    # visuel du hero (ophtalmologiste)
src/
  app/
    layout.tsx              # polices (Outfit + Fraunces), métadonnées,
                            #   script anti-flash du thème
    page.tsx                # assemblage des sections
    globals.css            # tokens sémantiques clair/sombre + palette LUNA
                            #   + utilitaires (glass, panel, btn, reveal, etc.)
  components/
    Navbar.tsx              # navigation fixe (glassmorphism) + bascule de thème
    ThemeToggle.tsx         # bouton bascule clair/sombre (persistance localStorage)
    Hero.tsx                # bannière avec dc.png
    Stats.tsx               # bandeau de chiffres clés
    Features.tsx            # « Pourquoi Ophtech »
    Modules.tsx             # les 8 modules
    Workflow.tsx            # « Comment ça marche »
    Booking.tsx             # prise de rendez-vous en ligne (mockup)
    Security.tsx            # sécurité & confidentialité
    Pricing.tsx             # tarifs
    FAQ.tsx                 # questions fréquentes (accordéon)
    CTA.tsx                 # appel à l'action final
    Footer.tsx              # pied de page
    Reveal.tsx              # animation d'apparition au scroll
```

## Déploiement — Vercel

1. Poussez ce dépôt sur GitHub.
2. Sur [vercel.com](https://vercel.com) : **Add New → Project** et importez le dépôt.
3. Vercel détecte automatiquement Next.js — aucune configuration nécessaire.
4. Cliquez sur **Deploy**.

Aucune variable d'environnement n'est requise (site statique/marketing).

## Personnalisation

- **Palette LUNA** : variables `--color-luna-*` dans `src/app/globals.css`.
- **Couleurs par thème** : blocs `:root` (clair) et `.dark` (sombre) dans
  `globals.css` — modifiez `--background`, `--foreground`, `--accent`, etc.
- **Thème par défaut** : clair. Pour suivre la préférence système, adaptez le
  script anti-flash dans `src/app/layout.tsx`.
- **Textes** : directement dans les composants de `src/components/`.
- **Visuel du hero** : remplacez `public/dc.png`.
- **Contact / e-mail** : `contact@ophtech.fr` dans `CTA.tsx` et `Footer.tsx`.
