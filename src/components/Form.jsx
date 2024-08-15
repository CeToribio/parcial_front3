import { useState } from "react";
import "/Users/cecitoribio/dev_cetoribio/parcial_front3/src/styles/form.css";
import Card from "./card";

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    musicaFavorita: "",
    nacionalidad: "",
  });

  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  console.log(user);
  console.log(error);
    console.log(show);

  const handleSubmit = (e) => {
    e.preventDefault;
    if (
      user.nombre.trim().length < 3 ||
      user.musicaFavorita.trim().length < 6
    ) {
      setError(true);
      setShow(false);
    } else {
      setError(false);
      setShow(true);
    }
  };

  const reset = () => {
    setUser({
      nombre: "",
      musicaFavorita: "",
      nacionalidad: "",
    });
  };

  const handleChangeNombre = (event) => {
    setUser({ ...user, nombre: event.target.value });
  };

  const handleChangeMusicaFavorita = (event) => {
    setUser({ ...user, musicaFavorita: event.target.value });
  };

  const handleNacionalidad = (event) => {
    setUser({ ...user, nacionalidad: event.target.value });
  };

  return (
    <div className="divForm">
      {show ? (
        <Card user={user}  />
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <input
              type="text"
              value={user.nombre}
              onChange={handleChangeNombre}
            />
            <label>Música Favorita: </label>
            <input
              type="text"
              value={user.musicaFavorita}
              onChange={handleChangeMusicaFavorita}
            />
            <label>Tu Nacionalidad: </label>
            <input
              type="text"
              value={user.nacionalidad}
              onChange={handleNacionalidad}
            />
            <button type="submit">Enviar</button>
          </form>
          {error && <p className="error">{error}</p>}
          <button onClick={reset}>Reset form</button>
        </>
      )}
      {error && (
        <h4 style={{ color: "red" }}>
          Por favor chequea que la información sea correcta
        </h4>
      )}
    </div>
  );
};

export default Form;
