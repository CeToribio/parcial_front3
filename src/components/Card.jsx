
import PropTypes from 'prop-types';
import "/Users/cecitoribio/dev_cetoribio/parcial_front3/src/styles/card.css";

const Card = ({ user }) => {
  return (
    <div className="card">
      <h2>Gracias por enviar tu información</h2>
      <p><strong>Nombre:</strong> {user.nombre}</p>
      <p><strong>Música Favorita:</strong> {user.musicaFavorita}</p>
      <p><strong>Nacionalidad:</strong> {user.nacionalidad}</p>
    </div>
  );
};

Card.propTypes = {
  user: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    musicaFavorita: PropTypes.string.isRequired,
    nacionalidad: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;