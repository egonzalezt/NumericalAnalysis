import Layout from '@theme/Layout';
import React, { useState, useEffect } from "react";
import ReactInputMatrix from "react-input-matrix"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios'
import Swal from 'sweetalert2'
export const Matrix= () =>{
  
    const [results,setResults] = useState([])

    var doubles = results.map(function(obj){
      return obj.map(function(number){
        let value_float=parseFloat(number.value)
        return value_float
      }
    )
    })
 
    return (
      <Layout title="Hello">
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>   <Formik 
        initialValues={{
         array: [],
      
          }}
         onSubmit={(values, { setSubmitting }) => {
           console.log("REGISTRE NEN")
            values.array = doubles
           console.log(values.array[0])
           console.log(values.array[1])

           if (doubles[0] == NaN){
              console.log("OUTO")
           }
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
            <button type="submit" className="style.button" disabled={isSubmitting}>
              Registrar
            </button>
            </Form>

        )}
      </Formik>
          <div className="container">
            
            <ReactInputMatrix maxWidth={1500} maxHeight={400} onMatrixChange={(data) => 
              setResults(data)
              
            } />
          </div>
         
        </div>
      </Layout>
    );
};

export default Matrix;