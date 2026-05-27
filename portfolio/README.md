# Portfolio Owess

Site personnel développé avec React + Vite.

## Description

Ce projet est un portfolio statique qui présente des sections de présentation, de compétences, de projets et de contact.

La section Contacts est maintenant simplifiée pour afficher les liens directs vers GitHub, LinkedIn et l'email, et pour proposer le téléchargement du fichier AKP Drivexa.

## Contenu important

- `public/CV_Salomon_Owess_Akpa.pdf` : CV actuel
- `public/app-release.apk` : APK mobile Drivexa disponible au téléchargement

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

## Hébergement

Ce projet est conçu pour être hébergé en tant que site statique.

### Options recommandées

- **Vercel** : branche principale du dépôt, déploiement automatique.
- **Netlify** : deployment depuis le dépôt Git.
- **GitHub Pages** : possible grâce à un workflow GitHub Actions.

## Déploiement sur GitHub Pages

Ce dépôt utilise un workflow GitHub Actions dans `.github/workflows/github-pages.yml`.

- Le site est construit avec `npm run build`
- Le dossier `dist/` est publié sur la branche `gh-pages`
- Le repository principal peut rester le dossier racine du dépôt

> Si ta branche principale n'est pas `main`, adapte la section `branches` dans le workflow.

### Points importants

- Il n'y a pas de formulaire de contact actif.
- Les messages ne sont pas gérés côté serveur.
- Le téléchargement AKP fonctionne tant que le fichier `public/akp-drivexa.akp` est présent.

## Notes

- Si tu veux modifier le CV, copie le nouveau fichier PDF dans `public/`.
- Si tu veux modifier l'application mobile Drivexa, remplace `public/app-release.apk` par le fichier APK réel.
