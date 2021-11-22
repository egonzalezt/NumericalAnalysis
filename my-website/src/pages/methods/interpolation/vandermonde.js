import Layout from '@theme/Layout';
import React,{useState,useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios'
import Swal from 'sweetalert2'
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

export const BusquedasI= () =>{
    let initialState={
      "Y":'i',
      "X":'i',
    }
    const [results,setResults] = useState(initialState)

    return (
      <Layout title="Hello">
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>        
        <Formik 
        initialValues={{
          "Y":0,
          "X":0,
        }}
            
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           axios.post('https://analisisapi.herokuapp.com/api/v1/methodsMatrix/vandermonde',JSON.stringify(values),{
            headers: {
              // Overwrite Axios's automatically set Content-Type
              'Content-Type': 'application/json'
            }
          })
            .then(function (response) {
                console.log(response);
                setResults(response.data);
                Swal.fire({
                  icon: 'success',
                  title: 'Exito!!',
                  text: response.data.MSG,
                  timer: 2000,
                  timerProgressBar: true,
                })
            })
            .catch(function (error) {
            console.log(error.response.data);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.response.data.err,
              })
            });
           setSubmitting(false);
         }, 400);
       }}
     > 
     
       {({ isSubmitting }) => (
           
         <Form className='formulario'>
           <Field className='style.form' placeholder='X' type="text" name="X" />
           <Field className='style.form' placeholder='Y' type="text" name="Y" />
           <button type="submit" className="style.button" disabled={isSubmitting}>
             Registrar
           </button>
         </Form>
       )}
     </Formik>

      </div>
      <div  className={style.contenedor_a}>
        <div className={style.contenedor_b}>
        <h2 className={style.buttons}>{results.X=='i'?'':"Results"}</h2>
        <h3 className={style.buttons}>{results.X=='i'?'':"Result Matrix "}</h3>
        <h3 className={style.buttons}>{results.X=='i'?'': Results(results.A)}</h3>
        <h2 className={style.buttons}>{results.X=='i'?'':"X"}</h2>
        <h3 className={style.buttons}>{results.X=='i'?'': Results2(results.X)}</h3>
         </div>
        </div>
      </Layout>
    );
};

export default BusquedasI;