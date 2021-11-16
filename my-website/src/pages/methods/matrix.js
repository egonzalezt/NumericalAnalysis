import Layout from '@theme/Layout';
import React, { useState, useEffect } from "react";
import ReactInputMatrix from "react-input-matrix"

export const Matrix= () =>{
    const [results,setResults] = useState([])

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
          <div className="container">
            <ReactInputMatrix maxWidth={1500} maxHeight={400} onMatrixChange={(data) => console.log(data)} />
          </div>
        </div>
      </Layout>
    );
};

export default Matrix;