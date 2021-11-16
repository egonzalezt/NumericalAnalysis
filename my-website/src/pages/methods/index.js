import Layout from '@theme/Layout';
import React,{useState,useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios'
import Swal from 'sweetalert2'
import style from '../../pages/index.module.css';

export const SignupForm= () =>{
    let initialState={
      "fx0":'i',
      "fx1":'i',
      "iter":'i',
      "txt":'i',
      "x0":'i',
      "x1":'i',
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
        }}>        <Formik 
       initialValues={{
        func: '',
        x0: 0,
        delta: 0,
        iter: 0,}}
       
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           axios.post('http://192.168.1.236:5000/api/v1/methods/BI',JSON.stringify(values),{
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
           <Field className='style.form' placeholder='delta' type="number" name="delta" />
           <Field className='style.form' placeholder='iter' type="number" name="iter" />
           <button type="submit" className="style.button" disabled={isSubmitting}>
             Registrar
           </button>
         </Form>
       )}
     </Formik>

      </div>
      <div >
        <h1 className={style.buttons}>{results.fx0=='i'?'':"Resultados"}</h1>
        <h3 className={style.buttons}>{results.fx0=='i'?'': "Fx0: "+results.fx0}</h3>
        <h3 className={style.buttons}>{results.fx1=='i'?'': "Fx1: "+results.fx1}</h3>
        <h3 className={style.buttons}>{results.iter=='i'?'':"Iteraciones: "+results.iter}</h3>
        <h3 className={style.buttons}>{results.txt=='i'?'':"Descripcion: "+results.txt}</h3>
        <h3 className={style.buttons}>{results.x0=='i'?'':"X0: "+results.x0}</h3>
        <h3 className={style.buttons}>{results.x1=='i'?'':"X1: "+results.x1}</h3>
      </div>
      </Layout>
    );
};

export default SignupForm;