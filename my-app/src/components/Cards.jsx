import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

import OneCard from "./OneCard";

function IconCards() {
  return (
    <section id="cards-menu">
      <OneCard
        image={icon1}
        title="Declarative"
        description="React makes it painless to create interactive UIs."
      />
      <OneCard
        image={icon2}
        title="Components"
        description="Build encapsulated components that manage their state."
      />
      <OneCard
        image={icon3}
        title="Single-Way"
        description="A set of immutable values are passed to the component's."
      />
      <OneCard
        image={icon4}
        title="JSX"
        description="Statically-typed, designed to run on modern browsers."
      />
    </section>
  );
}

export default IconCards;
