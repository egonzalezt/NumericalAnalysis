import Layout from "@theme/Layout";
import ReactInputMatrix from "react-input-matrix";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import Swal from "sweetalert2";
import style from "../../../pages/index.module.css"

function Results(result) {
  return (
    <ol>
      {result.map((vals) => (
        <li>{JSON.stringify(vals)}</li>
      ))}
    </ol>
  );
}

function Results2(result) {
  return (
    <div>
      {result.map((vals) => (
        <p>{JSON.stringify(vals)}</p>
      ))}
    </div>
  );
}

function HomepageHeader() {
  const [results, setResults] = useState([]);
  const [results2, setResults2] = useState([]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        fontSize: "20px",
        margin: "0px",
        boxSizing: "border-box",
      }}
    >
      {" "}
      <Formik
        initialValues={{
          A: [],
        }}
        onSubmit={(values, { setSubmitting }) => {
          var doubles = results.map(function (obj) {
            return obj.map(function (number) {
              let value_float = parseFloat(number.value);
              return value_float;
            });
          });
          values.A = doubles;
          console.log(values);

          setTimeout(() => {
            axios
              .post(
                "https://analisisapi.herokuapp.com/api/v1/methodsMatrix/gaussLU",
                JSON.stringify(values),
                {
                  headers: {
                    // Overwrite Axios's automatically set Content-Type
                    "Content-Type": "application/json",
                  },
                }
              )
              .then(function (response) {
                console.log(response);
                setResults2(response.data);
                Swal.fire({
                  icon: "success",
                  title: "Exito!!",
                  text: response.data,
                  timer: 2000,
                  timerProgressBar: true,
                });
              })
              .catch(function (error) {
                console.log(error.response.data);
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: error.response.data.err,
                });
              });
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="formulario">
            <button
              type="submit"
              className="style.button"
              disabled={isSubmitting}
            >
              Registrar
            </button>
          </Form>
        )}
      </Formik>
      <div className={style.wrapper}>
          <a href="../../../blog/Methods02/simplegauss">
            <button  className ={style.AYUDADIOS} type="submit">HELP</button>
          </a>
      </div>
      <div>
        
        <ReactInputMatrix
          maxWidth={500}
          maxHeight={220}
          onMatrixChange={(data) => setResults(data)}
        />

      </div>
      <div className={style.contenedor_a}>
      <div className={style.contenedor_b}>

      <h1 className={style.buttons}>
              {results2.L == null ? "" : "Resultados"}
            </h1>
            <h3 className={style.buttons}>
              {results2.L == null ? "" :"Matrix L"}
            </h3>
            <h3 className={style.buttons}>
              {results2.L == null ? "" :Results2(results2.L) }
            </h3>
            <h3 className={style.buttons}>
              {results2.L == null ? "" :"Matrix U"}
            </h3>
            <h3 className={style.buttons}>
              {results2.U == null ? "" :Results2(results2.L) }
            </h3>
            <h3 className={style.buttons}>
              {results2.X == null ? "" : "X: " + JSON.stringify(results2.X)}
            </h3>
            <h3 className={style.buttons}>
              {results2.Z == null ? "" : "Z: " +JSON.stringify(results2.Z)}
            </h3>
            </div>
            </div>

    </div>
  );
}

export default function Matrix() {
  return (
    <Layout>
      <main>
        <HomepageHeader />
      </main>
    </Layout>
  );
}
