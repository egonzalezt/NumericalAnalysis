import React, { useState, useEffect } from "react";
import { useFormik } from 'formik';
import style from '../../../styles/Form.module.css'
import axios from "axios";

export const SignupForm = (props) => {

    const formik = useFormik({
        initialValues: {
            function: '',
            x0: '',
            delta: '',
            iter: '',
        },
        onSubmit: values => {
           axios.get('localhost:2000/',{
              params:{
                  funtion: values.function,
                  x0: values.x0,
                  delta: values.delta,
                  iter: values.iter,
              }
          }).then((res )=> {
              console.log(res.data)
              console.log(res.status)

          }
          ).catch(err => {
              console.log(err)
          })
    }
        });
    return (

        <div>
         
            <div className={style.grid}>     
            <form onSubmit={formik.handleSubmit}>
                <div className={style.form}>
                    <input
                        id="function"
                        name="function"
                        type="function"
                        className={style.input}
                        placeholder="function"
                        onChange={formik.handleChange}
                        value={formik.values.function}
                    />
                </div>
                <div className={style.form}>
                    <input
                        id="x0"
                        name="x0"
                        type="number"
                        className={style.input}
                        placeholder="x0"
                        onChange={formik.handleChange}
                        value={formik.values.x0}
                    />
                </div>
                <div className={style.form}>
                    <input
                        id="delta"
                        name="delta"
                        type="number"
                        className={style.input}
                        placeholder="delta"
                        onChange={formik.handleChange}
                        value={formik.values.delta}
                    />
                </div>
                <div className={style.form}>

                    <input
                        id="iter"
                        name="iter"
                        type="number"
                        className={style.input}
                        placeholder="iter"
                        onChange={formik.handleChange}
                        value={formik.values.iter}
                    />
                </div>
              
                <div className={style.form}>
                    <button className={style.button} type="submit">Submit</button>
                </div>
            </form>
            </div>
                

        </div>
    );
};