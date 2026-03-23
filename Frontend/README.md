# Cloud Library Management System - Frontend

Frontend React (Vite) pour le système de gestion de bibliothèque Cloud Library. 
Ce projet est connecté au Backend existant en Node.js/Express.

## 🚀 Fonctionnalités Implémentées

- **Authentication / Autorisation** : Connexion, Inscription, Refresh Tokens (Zustand + Axios Interceptors), Rôles (ADMIN, BIBLIOTHECAIRE, MEMBRE).
- **Design System** : Tailwind CSS (via CDN) pour des interfaces modernes et responsives, Lucide Icons.
- **Tableau de Bord** : Indicateurs clés (KPIs) en fonction du rôle.
- **Gestion du Catalogue** : CRUD complet pour les catégories et les livres (réservé aux admins/bibliothécaires, lecture pour les membres).
- **Emprunts** : Les membres peuvent emprunter des livres ; Les administrateurs peuvent valider le retour.
- **Profil Utilisateur** : Mise à jour des infos personnelles et du mot de passe.
- **Administration** : Gestion des utilisateurs (modification des rôles) réservée aux `ADMIN`.

## 🛠️ Stack Technique

- React 19 + Vite
- React Router DOM v7 (Routing & Protected Routes)
- Tailwind CSS (CDN paramétré dans `index.html`)
- Zustand (Gestion d'état global + Persistance LocalStorage)
- Axios (Appels API)
- Lucide React (Icônes)

## 📦 Installation et Lancement

1. **Cloner ou ouvrir le projet** :
   ```bash
   cd Frontend
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Variables d'environnement** :
   Copiez `.env.example` en `.env` pour définir l'URL de l'API Backend :
   ```bash
   cp .env.example .env
   ```
   *Note : Par défaut, l'application pointe sur `http://localhost:5000/api` si la variable n'existe pas.*

4. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```

5. **Accéder à l'application** :  
   Ouvrez [http://localhost:5173/](http://localhost:5173/) dans votre navigateur (ou l'URL indiquée par Vite).

## 🧪 Tests fonctionnels (Rôles)

Pour tester, assurez-vous que votre backend tourne sur le port 5000.  
- Créez un compte "Nouveau" depuis la page d'inscription `/register` (Le backend donne le rôle `MEMBRE` par défaut).
- Connectez-vous avec ce rôle, vous ne pourrez voir que "Vos emprunts" et le catalogue en lecture seule.
- Utilisez un compte `ADMIN` (créé en BDD directement ou assigné via un script) pour modifier les rôles depuis le menu "Utilisateurs".

## 🛡️ Gestion d'Erreurs

- Les erreurs remontées par l'API Backend sont capturées (status 400, 401, 403, 404, 500).
- Le `message` du backend est systématiquement affiché sur l'UI (Alertes, Toasts, ou sous le composant).
- L'expiration du token d'accès (`accessToken`) déclenche automatiquement l'utilisation du `refreshToken` en tâche de fond pour une expérience fluide.
