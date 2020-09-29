import React, { Fragment } from "react";
import Layout from "../components/layouts/Layout";

const CrearCuenta = () => {
  return (
    <div>
      <Layout>
        <Fragment>
          <h1>Crear Cuenta</h1>
          <form action="">
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Tu Nombre"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Tu Email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Tu Password"
              />
            </div>
            <input type="submit" value="Crear Cuenta"/>
          </form>
        </Fragment>
      </Layout>
    </div>
  );
};

export default CrearCuenta;
