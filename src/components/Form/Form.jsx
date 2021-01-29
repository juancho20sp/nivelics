import React, { useContext } from "react";
import "./Form.css";

import AppContext from "../../context/AppContext";

import { useForm } from "react-hook-form";
import { Table } from "../";

const Form = () => {
  // Contexto global
  const { setName, setAge, setEmail, state } = useContext(AppContext);

  // Validación del formulario
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log("Submit clicked");
    console.log(data);

    // Agregamos el nombre al contexto global
    if (!state.name) {
      setName(data.name);
    }

    // Agregamos la edad al contexto global
    if (!state.age) {
      setAge(data.age);
    }

    // Agregamos el email al contexto global
    if (!state.email) {
      setEmail(data.email);
    }
  };

  return (
    <>
      <div className="Form__container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            ref={register({
              required: true,
              pattern: /^[A-Za-z ]+$/,
              minLength: 2
            })}
            placeholder="Nombre"
          />

          <span className="form__error">
            {errors.name && errors.name.type === "required" && (
              <p>Este campo es obligatorio</p>
            )}
            {errors.name && errors.name.type === "pattern" && (
              <p>
                El valor ingresado no puede contener carácteres especiales ni
                números
              </p>
            )}
          </span>

          <label htmlFor="age">Edad:</label>
          <input
            type="number"
            name="age"
            ref={register({
              required: true,
              pattern: /^[0-9]+$/,
              minLength: 1
            })}
            placeholder="Edad"
          />

          <span className="form__error">
            {errors.age && errors.age.type === "required" && (
              <p>Este campo es obligatorio</p>
            )}
            {errors.age && errors.age.type === "pattern" && (
              <p>El valor ingresado debe ser numérico</p>
            )}
          </span>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            ref={register({
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$$/,
              minLength: 1
            })}
            placeholder="correo@mail.com"
          />

          <span className="form__error">
            {errors.email && errors.email.type === "required" && (
              <p>Este campo es obligatorio</p>
            )}
          </span>

          <input type="submit" />
        </form>

        {state && <Table data={state}></Table>}
      </div>
    </>
  );
};

export default Form;
