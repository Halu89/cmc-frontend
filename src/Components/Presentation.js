import React from "react";
import { Link } from "react-router-dom";

const Presentation = () => {
  return (
    <main className="main-presentation">
      <div className="presentation">
        <h1>Présentation</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero
          totam exercitationem quidem? Praesentium similique incidunt
          reprehenderit magni accusamus voluptatem? Repellendus pariatur fuga,
          ut quas nostrum vero aperiam quod nesciunt accusamus magnam quae magni
          sequi sit perferendis consectetur reiciendis rem!
        </p>
        <Link to="/lecons">
          <button>Leçons</button>
        </Link>
      </div>
      <img
        src="https://images.unsplash.com/photo-1532009877282-3340270e0529?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        alt="Rocks"
      />
    </main>
  );
};

export default Presentation;
