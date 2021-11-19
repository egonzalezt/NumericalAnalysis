import Layout from '@theme/Layout';
import React,{useState,useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios'
import Swal from 'sweetalert2'
import style from '../../pages/index.module.css';

export const Secante= () =>{
    let initialState={
      "x":'i',
      "Iteraciones":'i',
      "Error":'i',
    }
    const [results,setResults] = useState(initialState)

    return (
      <Layout title="Hello">
        <p>Welcome to method secante</p>

        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>        <Formik 
        initialValues={{
            func: '',
            x0: 0,
            x1: 0,
            tol: 0,
            iter: 0,
            }}
            
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           axios.post('https://analisisapi.herokuapp.com/api/v1/methods/Secant',JSON.stringify(values),{
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
                  text: response.data.txt,
                  timer: 2000,
                  timerProgressBar: true,
                })
            })
            .catch(function (error) {
            console.log(error.response.data);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.response.data,
              })
            });
           setSubmitting(false);
         }, 400);
       }}
     > 
     
       {({ isSubmitting }) => (
           
         <Form className='formulario'>
           <Field className='style.form' placeholder='func' type="text" name="func" />
           <Field className='style.form' placeholder='x0' type="number" name="x0" />
           <Field className='style.form' placeholder='x1' type="number" name="x1" />
           <Field className='style.form' placeholder='tol' type="number" name="tol" />
           <Field className='style.form' placeholder='iter' type="number" name="iter" />
           <button type="submit" className="style.button" disabled={isSubmitting}>
             Registrar
           </button>
         </Form>
       )}
     </Formik>

      </div>
      <div >
        <h1 className={style.buttons}>{results.x=='i'?'':"Resultados"}</h1>
        <h3 className={style.buttons}>{results.x=='i'?'': "x: "+results.x}</h3>
        <h3 className={style.buttons}>{results.Iteraciones=='i'?'': "Iteraciones: "+results.Iteraciones}</h3>
        <h3 className={style.buttons}>{results.Error=='i'?'':"Error: "+results.Error}</h3>
        </div>
      </Layout>
    );
};

export default Secante;