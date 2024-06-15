import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.css';

function Card({ data }) {
  return (
    <div className="inside-card">
      <div className="in-card">
        {data?.map((d) => (
          <div key={d.id} className="id-card">
            <div className="image-card">
              <img src={d.imageurl} alt={d.name} />
            </div>
            <div className="container-card">
              <p className="name-card">{d.name}</p>
              <p className="cause-card">{d.cause}</p>
              <Link to={`/donate/${d.id}`}>
                <button className="button-card">Donate Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
Card.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageurl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      cause: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Card;
