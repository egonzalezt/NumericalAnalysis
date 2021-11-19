import Layout from '@theme/Layout';
import React,{useState,useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios'
import Swal from 'sweetalert2'
import style from '../../pages/index.module.css';
let a;
export const BusquedasI= () =>{
    let initialState={
      "fx0":'i',
      "fx1":'i',
      "fx":'i',
      "idpic":'i',
      "x":'i',
      "x0":'i',
      "x1":'i',


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
            }}
            
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           axios.post('https://analisisapi.herokuapp.com/api/v1/methods/Biseccion',JSON.stringify(values),{
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
           <Field className='style.form' placeholder='Función' type="text" name="func" />
           <Field className='style.form' placeholder='x0' type="number" name="x0" />
           <Field className='style.form' placeholder='x1' type="number" name="x1" />
           <Field className='style.form' placeholder='Tolerancia' type="number" name="tol" />
           <button type="submit" className="style.button" disabled={isSubmitting}>
             Registrar
           </button>
         </Form>
       )}
     </Formik>

      </div>
      <div  className={style.contenedor_a}>
        <div className={style.contenedor_b}>
        <h1 className={style.buttons}>{results.fx0=='i'?'':"Resultados"}</h1>
        <h3 className={style.buttons}>{results.fx0=='i'?'': "fx0: "+results.fx0}</h3>
        <h3 className={style.buttons}>{results.fx1=='i'?'': "fx1: "+results.fx1}</h3>
        <h3 className={style.buttons}>{results.fx=='i'?'': "x: "+results.fx}</h3>
        <h3 className={style.buttons}>{results.x=='i'?'': "x: "+results.x}</h3>
        <h3 className={style.buttons}>{results.x0=='i'?'': "x0: "+results.x0}</h3>
        <h3 className={style.buttons}>{results.x1=='i'?'': "x1: "+results.x1}</h3>
         </div>
        <p style={{display: 'none'}}>{results.idpic=='i'?'': a="https://analisisapi.herokuapp.com/static/"+results.idpic +".png" } </p>
        <img className="img_grafic" src={a}></img>
        </div>
      </Layout>
    );
};

export default BusquedasI;