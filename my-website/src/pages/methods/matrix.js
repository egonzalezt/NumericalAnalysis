import Layout from '@theme/Layout';
import ReactInputMatrix from "react-input-matrix";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios'
import Swal from 'sweetalert2'

function HomepageHeader() {
  const [results,setResults] = useState([])
  return(
    <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
          margin:'0px',
          boxSizing:'border-box',
        }}>   <Formik 
        initialValues={{
          A: [],
        }}
         onSubmit={(values, { setSubmitting }) => {
          var doubles = results.map(function(obj){
            return obj.map(function(number){
              let value_float=parseFloat(number.value)
              return value_float
            })
          })
          values.A = doubles
          setTimeout(() => {
            axios.post('http://192.168.1.236:5000/api/v1/methodsMatrix/diosayudame',JSON.stringify(values),{
             headers: {
               // Overwrite Axios's automatically set Content-Type
               'Content-Type': 'application/json'
             }
           }).then(function (response) {
                 console.log(response);
                 setResults(response.data);
                 Swal.fire({
                   icon: 'success',
                   title: 'Exito!!',
                   text: response.data.res,
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
            <button type="submit" className="style.button" disabled={isSubmitting}>
              Registrar
            </button>
            </Form>

        )}
      </Formik>
          <div>
            <ReactInputMatrix maxWidth={500} maxHeight={220} onMatrixChange={(data) => 
              setResults(data)
            } />
          </div>
         
        </div>
  )
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