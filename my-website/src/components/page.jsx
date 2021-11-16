import React,{useState,useEffect} from 'react';
//asasasa+
import styles from '../pages/index.module.css';
import quotes from './quotes.json'
export default function pagenotfound() {

 
  let initialState={
    quote:"",
    name:""
  }

  const [quote, setquote] = useState(initialState)

let generateQuote=()=>{
  var random = Math.floor(Math.random() * (quotes.length - 0) ) + 0;
  setquote(quotes[random])
}
  useEffect(() => {
      generateQuote();
  }, [])

    return (
        
    <div className="container">

        <div id="quote-box">
            <h2 style={quote.quote=='Colormatic'?{
                backgroundImage: "linear-gradient(to left, violet, indigo, green, blue, yellow, orange, red)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor:'transparent',
                backgroundSize: '600px',
                filter: 'brightness(1.7)',
                fontfamiliy:"Maincra"
            }:{}} className={styles.buttons} id="text">{quote.quote}</h2>
            <br />
            <div>
                <h3 className={styles.buttons} id="author">{quote.name}</h3>
            </div>
            <div className={styles.buttons}>
                <button className="button button--secondary button--lg" onClick={generateQuote}>Next Quote</button>
            </div>
        </div>
    </div>

    )
}