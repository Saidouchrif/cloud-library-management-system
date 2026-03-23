import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, BookMarked, UsersRound, Headset } from 'lucide-react';
import NavigationPublique from '../../composants/navigation/NavigationPublique';

export default function Accueil() {
  return (
    <div className="page-publique">
      <NavigationPublique />

      <section className="conteneur hero-accueil">
        <div className="hero-texte">
          <span className="etiquette-hero">
            <Sparkles size={16} /> Gestion moderne de bibliotheque
          </span>
          <h1>Organisez, empruntez et suivez vos livres avec fluidite.</h1>
          <p>
            Cloud Library centralise les livres, categories, emprunts et comptes utilisateurs dans une
            interface claire, rapide et entierement en francais.
          </p>

          <div className="hero-actions">
            <Link to="/inscription" className="btn btn-primaire">
              Commencer maintenant <ArrowRight size={16} />
            </Link>
            <Link to="/connexion" className="btn btn-secondaire">
              J'ai deja un compte
            </Link>
          </div>
        </div>

        <article className="hero-carte-flottante">
          <h3>Ce que vous pouvez faire</h3>
          <ul>
            <li>
              <BookMarked size={16} /> Ajouter et gerer les livres
            </li>
            <li>
              <UsersRound size={16} /> Controler les roles utilisateurs
            </li>
            <li>
              <ShieldCheck size={16} /> Securiser l'acces par permissions
            </li>
            <li>
              <Headset size={16} /> Beneficier d'un support rapide
            </li>
          </ul>
        </article>
      </section>

      <section className="conteneur section-cartes">
        <article>
          <h3>Catalogue vivant</h3>
          <p>
            Recherchez les livres en temps reel et consultez leur disponibilite sans changer de page.
          </p>
        </article>
        <article>
          <h3>Emprunts traces</h3>
          <p>Chaque emprunt est historise avec dates prevues, retours effectifs et statut clair.</p>
        </article>
        <article>
          <h3>Equipe connectee</h3>
          <p>Admins, bibliothecaires et membres disposent d'un espace adapte a leurs droits.</p>
        </article>
      </section>
    </div>
  );
}
