import React from "react";
import { Link } from "react-router-dom";
import SvgIllustration from "./SvgIllustration";

const Presentation = () => {
  return (
    <main className="main-presentation">
      <div className="presentation">
        <h1>Présentation</h1>
        <p className="presentation-paragraph">
          Au travers de l'apprentissage de la musique, aider les jeunes à se
          découvrir, s'épanouir et s'intégrer à la vie de leur communauté, en
          participant à des concerts, auditions, fêtes du village, cérémonies.
        </p>
        <p className="presentation-paragraph">
          Initiation musicale sous forme d’ateliers (initiation musicale pour
          les 5 ans, éveil musical pour les CP/CE1, formation musicale,
          orchestre à vents et batterie, ensemble instrumentaux, chorale
          adultes).
        </p>
        <Link to="/lecons">
          <button>Leçons</button>
        </Link>
      </div>
      <SvgIllustration />
    </main>
  );
};

export default Presentation;
