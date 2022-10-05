import React from "react";
import PropTypes from "prop-types";

import "./card.css";

function Card({ imageSource, nameC, text, url }) {
  return (
    <div className="card">
      <div class="head">
        <div class="circle"></div>
        <div class="img">
          <img src={imageSource} alt="" />
        </div>
      </div>

      <div class="description">
        <h4 className="card-title">{nameC}</h4>
        <p className="card-text text-secondary">
          {text
            ? "Calificación: " + text
            : "Sin calificación"}
        </p>
      </div>

      <div class="contact">
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn"
          rel="noreferrer"
        >
          Contactar con {nameC}
        </a>
      </div>
      
    </div>
  );
}

Card.propTypes = {
  nameC: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;
