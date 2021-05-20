import React from "react";
import {
  batterie,
  chorale,
  ensembles,
  eveil,
  flute_traversiere,
  flute_bec,
  formation,
  guitare,
  piano,
  saxo,
} from "../assets/images";

const Lecons = () => {
  const ateliers = [
    {
      title: "Formation Musicale",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta ea vitae nihil, ipsum eaque eum corporis officiis sed, officia, repellat pariatur? Possimus hic odit cumque facere explicabo libero veniam.",
      imageUrl: formation,
    },
    {
      title: "Eveil",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta ea vitae nihil, ipsum eaque eum corporis officiis sed, officia, repellat pariatur? Possimus hic odit cumque facere explicabo libero veniam.",
      imageUrl: eveil,
    },
    {
      title: "Chorale",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta ea vitae nihil, ipsum eaque eum corporis officiis sed, officia, repellat pariatur? Possimus hic odit cumque facere explicabo libero veniam.",
      imageUrl: chorale,
    },
    {
      title: "Ensembles",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta ea vitae nihil, ipsum eaque eum corporis officiis sed, officia, repellat pariatur? Possimus hic odit cumque facere explicabo libero veniam.",
      imageUrl: ensembles,
    },
  ];

  const instruments = [
    {
      title: "Guitare",
      horaires: [
        "Lundi 18h - 20h30",
        "Samedi 10h - 12h",
        "Lundi 18h - 20h30",
        "Samedi 10h - 12h",
      ],
      profName: "Brigitte Thérias",
      imageUrl: guitare,
    },
    {
      title: "Piano",
      horaires: ["Lundi 18h - 20h30"],
      profName: "Brigitte Thérias",
      imageUrl: piano,
    },
    {
      title: "Clarinette",
      horaires: ["Lundi 18h - 20h30", "Lundi 18h - 20h30", "Samedi 10h - 12h"],
      profName: "Brigitte Thérias",
      imageUrl: flute_bec,
    },
    {
      title: "Flute Traversière",
      horaires: ["Lundi 18h - 20h30"],
      profName: "Brigitte Thérias",
      imageUrl: flute_traversiere,
    },
    {
      title: "Saxo",
      horaires: ["Lundi 18h - 20h30"],
      profName: "Brigitte Thérias",
      imageUrl: saxo,
    },
    {
      title: "Batterie",
      horaires: ["Lundi 18h - 20h30"],
      profName: "Brigitte Thérias",
      imageUrl: batterie,
    },
  ];
  return (
    <main className="lecons">
      <div className="ateliers">
        <h1>Ateliers</h1>
        <div className="cards">
          {ateliers.map((atelier, idx) => (
            <div className="atelier" key={idx}>
              <img src={atelier.imageUrl} alt="" />
              <h2>{atelier.title}</h2>
              <p>{atelier.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="instruments">
        <h1>Instruments</h1>
        <div className="cards">
          {instruments.map((inst, idx) => (
            <div className="instrument" key={idx}>
              <img src={inst.imageUrl} alt={inst.title} title={inst.title} />
              <div className="horaires">
                <h2>Horaires : </h2>
                <ul>
                  {inst.horaires.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
              <h3 id="prof-name">
                Prof: <span id="name"> {inst.profName}</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Lecons;
