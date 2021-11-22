import Layout from "@theme/Layout";
import ReactInputMatrix from "react-input-matrix";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import Swal from "sweetalert2";
import style from "../../../pages/index.module.css"

function Results(result) {
  return (
    <div>
      {result.map((vals) => (
        <p>{JSON.stringify(vals)}</p>
      ))}
    </div>
  );
}

function Results2(result) {
  return (
    <ol>
      {result.map((vals) => (
        <li>{JSON.stringify(vals)}</li>
      ))}
    </ol>
  );
}

function HomepageHeader() {
  const [results, setResults] = useState([]);
  const [results2, setResults2] = useState([]);

  return (
    <div>
      <center style={{fontSize:'30px',fontWeight:'bold'}}>Gaussian partial pivoting Method</center>
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
                "https://analisisapi.herokuapp.com/api/v1/methodsMatrix/gaussPipo",
                JSON.stringify(values),
                {
                  headers: {
                    // Overwrite Axios's automatically set Content-Type
                    "Content-Type": "application/json",
                  },
                }
              )
              .then(function (response) {
                setResults2(response.data);
                Swal.fire({
                  icon: "success",
                  title: "Exito!!",
                  text: response.data.MSG,
                  timer: 2000,
                  timerProgressBar: true,
                });
              })
              .catch(function (error) {
                console.log(error.response.data)
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
              Send
            </button>
          </Form>
        )}
      </Formik>
      <div className={style.wrapper}>
          <a href="../../../blog/Methods02/gausspivparcial">
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
              {results2.A == null ? "" : "Resultados"}
        </h1>
        <h3 className={style.buttons}>
          {results2.A == null ? "" :"Matrix A"}
        </h3>
        <h3 className={style.buttons}>
          {results2.A == null ? "" :Results(results2.A) }
        </h3>
        <h3 className={style.buttons}>
          {results2.A == null ? "" :"X"}
        </h3>
        <h3 className={style.buttons}>
          {results2.X == null ? "" :Results2(results2.X)}
        </h3>
        </div>
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
