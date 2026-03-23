import NavigationPublique from '../../composants/navigation/NavigationPublique';

export default function Support() {
  return (
    <div className="page-publique">
      <NavigationPublique />

      <section className="conteneur bloc-contenu-public support-grid">
        <article>
          <h1>Support</h1>
          <p>
            Besoin d'aide? Voici les informations utiles pour comprendre les erreurs et accelerer le
            diagnostic.
          </p>
          <ul className="liste-support">
            <li>Verifiez que votre backend tourne et que `VITE_API_URL` est correcte.</li>
            <li>Les messages affiches viennent directement de l'API.</li>
            <li>Le token expire? Le frontend tente automatiquement un refresh.</li>
          </ul>
        </article>

        <article>
          <h3>Contact</h3>
          <p>Email: support@cloud-library.local</p>
          <p>Disponibilite: Lundi au Vendredi, 09:00 - 18:00</p>
          <p>
            Pensez a joindre la route utilisee, le statut HTTP et le message exact recu pour une
            resolution plus rapide.
          </p>
        </article>
      </section>
    </div>
  );
}
