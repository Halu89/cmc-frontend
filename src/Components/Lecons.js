import React from "react";

const Lecons = () => {
  const ateliers = [
    {
      title: "Formation Musicale",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta ea vitae nihil, ipsum eaque eum corporis officiis sed, officia, repellat pariatur? Possimus hic odit cumque facere explicabo libero veniam.",
      imageUrl:
        "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      title: "Eveil",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta ea vitae nihil, ipsum eaque eum corporis officiis sed, officia, repellat pariatur? Possimus hic odit cumque facere explicabo libero veniam.",
      imageUrl:
        "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      title: "Chorale",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta ea vitae nihil, ipsum eaque eum corporis officiis sed, officia, repellat pariatur? Possimus hic odit cumque facere explicabo libero veniam.",
      imageUrl:
        "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      title: "Ensembles",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta ea vitae nihil, ipsum eaque eum corporis officiis sed, officia, repellat pariatur? Possimus hic odit cumque facere explicabo libero veniam.",
      imageUrl:
        "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
  ];

  const instruments = [
    {
      title: "Guitare",
      horaires: ["Lundi 18h - 20h30", "Samedi 10h - 12h","Lundi 18h - 20h30", "Samedi 10h - 12h"],
      profName: "Brigitte Thérias",
      imageUrl:
        "https://images.unsplash.com/photo-1546058256-47154de4046c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    },
    {
      title: "Piano",
      horaires: ["Lundi 18h - 20h30"],
      profName: "Brigitte Thérias",
      imageUrl:
        "https://images.unsplash.com/photo-1546058256-47154de4046c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    },
    {
      title: "Clarinette",
      horaires: ["Lundi 18h - 20h30", "Lundi 18h - 20h30", "Samedi 10h - 12h"],
      profName: "Brigitte Thérias",
      imageUrl:
        "https://images.unsplash.com/photo-1546058256-47154de4046c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    },
    {
      title: "Flute Traversière",
      horaires: ["Lundi 18h - 20h30"],
      profName: "Brigitte Thérias",
      imageUrl:
        "https://images.unsplash.com/photo-1546058256-47154de4046c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    },
    {
      title: "Saxo",
      horaires: ["Lundi 18h - 20h30"],
      profName: "Brigitte Thérias",
      imageUrl:
        "https://images.unsplash.com/photo-1546058256-47154de4046c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    },
    {
      title: "Batterie",
      horaires: ["Lundi 18h - 20h30"],
      profName: "Brigitte Thérias",
      imageUrl:
        "https://images.unsplash.com/photo-1546058256-47154de4046c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
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
