import NavigationPublique from '../../composants/navigation/NavigationPublique';

export default function APropos() {
  return (
    <div className="page-publique">
      <NavigationPublique />

      <section className="conteneur bloc-contenu-public">
        <h1>A propos de Cloud Library</h1>
        <p>
          Cette application facilite la gestion d'une bibliotheque: livres, categories, emprunts,
          utilisateurs et droits d'acces.
        </p>
        <p>
          Le backend expose des routes securisees par JWT et roles. Le frontend consomme ces routes
          et affiche directement les messages de validation et d'erreur renvoyes par l'API.
        </p>
        <p>
          L'objectif est de fournir une base solide pour connecter rapidement votre future interface
          web ou mobile.
        </p>
      </section>
    </div>
  );
}
