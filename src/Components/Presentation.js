import React from "react";
import { Link } from "react-router-dom";
import SvgIllustration from './SvgIllustration'

const Presentation = () => {
  return (
    <main className="main-presentation">
      <div className="presentation">
        <h1>Présentation</h1>
        <p className="presentation-paragraph">
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
      <SvgIllustration />
    </main>
  );
};

export default Presentation;
