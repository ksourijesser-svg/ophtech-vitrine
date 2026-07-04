# Ophtech — Site Vitrine

Site vitrine (marketing) pour **Ophtech**, la plateforme SaaS tout-en-un dédiée
aux cabinets d'ophtalmologie. Ce dépôt contient uniquement le site de
présentation — il est indépendant de l'application.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (configuration CSS-first)
- **lucide-react** (icônes)
- Palette de couleurs **LUNA** (`#A7EBF2 → #011C40`)

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
    layout.tsx              # polices (Outfit + Fraunces), métadonnées
    page.tsx                # assemblage des sections
    globals.css            # thème LUNA + utilitaires (glass, reveal, etc.)
  components/
    Navbar.tsx              # navigation fixe (glassmorphism)
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

- **Couleurs** : variables `--color-luna-*` dans `src/app/globals.css`.
- **Textes** : directement dans les composants de `src/components/`.
- **Visuel du hero** : remplacez `public/dc.png`.
- **Contact / e-mail** : `contact@ophtech.fr` dans `CTA.tsx` et `Footer.tsx`.
