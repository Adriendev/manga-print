import React from "react";

const Carrousel = ({ title, card }) => {
  return (
    <section className={title}>
      <h2>{title}</h2>
      <hr className="divider" />
    </section>
  );
};

export default Carrousel;
