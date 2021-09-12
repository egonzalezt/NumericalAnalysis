import styles from '../styles/Sheep.module.css'
import React,{useState,useEffect} from 'react';
//asasasa+

export default function pagenotfound() {

 
  let initialState={
    quote:"",
    name:""
  }

  const [quote, setquote] = useState(initialState)
  let quotes=[
    {
        "quote": "It’s dangerous to go alone, take this!",
        "name": "Old Man, The Legend of Zelda"
    },
    {
        "quote": "War. War never changes.",
        "name": "Narrator, Fallout"
    },
    {
        "quote": "Death is inevitable. Our fear of it makes us play safe, blocks out emotion. It's a losing game. Without passion, you are already dead.",
        "name": "Max Payne, Max Payne 2: The Fall of Max Payne"
    },
    {
        "quote": "Thank you Mario! But our Princess is in another castle!",
        "name": "\u2013Audrey Hepburn"
    },
    {
        "quote": "Snake? Snake? SNAAAAAAAAKE!!!",
        "name": "The Colonel, Metal Gear Solid 2"
    },
    {
        "quote": "I used to be an adventurer like you, until I took an arrow to the knee.",
        "name": "Town Guard, Elder Scrolls V: Skyrim"
    },
    {
        "quote": "It’s super effective!",
        "name": "Pokemon series"
    },
    {
        "quote": "Space. Space. I'm in space. SPAAAAAAACE!",
        "name": "Space Core, Portal 2"
    },
    {
        "quote": "Do a barrel roll!",
        "name": "Star Fox 64"
    },
    {
        "quote": "Praise the sun!",
        "name": "Solaire of Astora, Dark Souls"
    },
    {
        "quote": "Do you like hurting other people?",
        "name": "Richard, Hotline Miami"
    }
    ]
let generateQuote=()=>{
  console.log(quotes.length);
  var random = Math.floor(Math.random() * (quotes.length - 0) ) + 0;
  console.log(random);
  setquote(quotes[random])

}
  useEffect(() => {
      generateQuote();
  }, [])

    return (
      <div class={styles.body}>
          <div class="container-fluid text-center">
   
          <h1 class={styles.h1} >404</h1>
   
         <div class="container">
         <marquee behavior="alternate" direction="up" width="100%" height="100%">
    <marquee behavior="alternate" direction="left" width="100%">
        <svg class={styles.svg} xmlns="http://www.w3.org/2000/svg" width="210" height="130" version="1">
            <path d="M33.594 118.8l-4.992-9.12-3.718-6.795.918-.016c.505-.01 1.776 0 2.823.03l1.904.05 2.97 5.84c1.63 3.21 2.99 5.84 3.02 5.84.02 0 1.37-2.64 2.98-5.86l2.93-5.86h2.66c1.46 0 2.66.01 2.66.02s-2.26 4.1-5.01 9.08l-5.01 9.06-1.44.02-1.45.01-1.28-2.33zm118.2 2.283c-.092-.013-.438-.056-.77-.097-2.648-.32-5.278-1.366-7.19-2.86-1.79-1.397-2.94-3.136-3.32-5.025-.174-.85-.112-2.37.13-3.18.408-1.37 1.152-2.55 2.345-3.7 1.9-1.84 4.64-3.1 7.86-3.6 1.09-.17 3.99-.17 5.09 0 6.49 1.01 10.89 5.14 10.44 9.82-.09.91-.29 1.6-.7 2.45-1.59 3.26-5.48 5.61-10.21 6.16-.76.09-3.21.13-3.69.06zm3.08-3.546c1.628-.264 3.223-1.02 4.325-2.05 1.03-.965 1.59-2.01 1.77-3.284.35-2.502-1.59-5.02-4.65-6.037-1.2-.398-1.67-.47-3.13-.47-1.13 0-1.41.022-2.01.157-1.68.374-2.97 1.038-4.05 2.08-1.22 1.17-1.78 2.49-1.7 3.983.15 2.923 3.01 5.322 6.84 5.73.67.07 1.75.025 2.58-.11zm-74.218 3.07l-3.832-.018v-17.76l4.836.04c5.155.05 5.634.07 7.233.41 1.528.32 2.737.73 3.996 1.36 1.33.66 2.26 1.33 3.18 2.28 1.54 1.6 2.25 3.35 2.15 5.3-.09 1.72-.78 3.14-2.22 4.57-1.77 1.75-4.32 2.96-7.68 3.64-.96.19-1.08.2-2.43.18-.79-.01-3.15-.03-5.26-.04zm7.447-3.287c1.336-.45 2.2-.966 3.045-1.817.635-.64 1.02-1.256 1.318-2.108.172-.494.187-.614.187-1.54 0-.96-.01-1.03-.217-1.63-.296-.85-.672-1.467-1.28-2.103-.832-.872-1.765-1.45-2.928-1.813-1.078-.34-1.484-.38-4.158-.4l-2.494-.02v11.68l2.93-.02 2.927-.02.67-.23zm-28.817-5.565v-8.836h4.82v17.67h-4.82v-8.84zm50.74 0v-8.836H128.7v2.94l-6.24.01-6.243.01-.018 1.96-.02 1.96h11.85v2.94l-5.91.01-5.91.02v4.82l6.24.01 6.24.01v2.94h-18.67v-8.84zm-20.15-16.71c-4.69-.094-8.13-.18-10.676-.262-37.362-1.228-65.74-5.62-71.056-11-.673-.682-.884-1.085-.923-1.766-.02-.5-.01-.548.23-1.037 2.46-4.972 24.57-9.335 57.07-11.26 9.85-.584 23.51-1.003 32.76-1.006 1.41 0 1.79-.02 1.77-.084L90.5 45.252c-4.69-12.812-8.54-23.31-8.56-23.328-.02-.02-.016.026.012.1.137.366.715 2.794.868 3.648 1.055 5.884.17 10.937-2.666 15.262-1.433 2.192-3.6 4.366-6.123 6.16-6.29 4.46-16.08 7.603-28.65 9.2-4.27.54-8.36.873-13.79 1.12-3.85.177-17.48.075-18.68-.138l-.24-.043 3.95-16.783 3.95-16.787h19.38l-.04.15-2.89 11.497-2.86 11.347.2.024c.11.02 1.89-.01 3.95-.05 3.37-.07 3.87-.09 4.92-.24 4.41-.62 8.36-1.93 11.51-3.8 4.27-2.53 6.98-5.96 7.83-9.88.17-.79.18-2.94.01-3.72-1.07-4.94-5.54-8.18-12.27-8.89-.82-.08-3.27-.12-14.71-.19-7.54-.05-13.73-.1-13.74-.12-.01-.01.53-2.46 1.2-5.44l1.23-5.42 36-.02 36.01-.02 4.82 15.76c2.65 8.67 4.83 15.79 4.86 15.82.02.03 5.687-7.01 12.59-15.66L131.1 9.1l23.23.018 23.226.02 1.04.15c4.99.734 8.54 1.77 12.01 3.507 1.29.647 1.86.97 2.964 1.7 6.11 4.034 9.47 10.037 9.23 16.528-.25 6.93-4.41 13.44-11.63 18.21-.68.45-1.57 1.01-1.98 1.24-6 3.44-13.38 5.64-21.99 6.55-2.665.29-2.656.29-18.78.27l-15.54-.02 3.95-16.78 3.956-16.784h9.59c5.275 0 9.59.01 9.59.03s-1.22 5.16-2.71 11.42-2.702 11.39-2.692 11.4c.01.01 2.203-.028 4.87-.08 5.477-.106 5.45-.1 8.006-.73 6.254-1.54 11.124-4.59 13.843-8.66.864-1.296 1.606-3.09 1.886-4.56.18-.94.16-2.556-.03-3.46-.38-1.76-1.14-3.22-2.36-4.52-2.24-2.39-5.48-3.848-10.14-4.547l-1.01-.15-13.53-.02-13.53-.026-21.73 24.45-21.73 24.45 4.83.04c13.22.12 24.25.51 34.99 1.226 25.25 1.69 43.79 4.87 50.74 8.706 1.27.704 2.26 1.58 2.64 2.34.16.337.19.487.2.91 0 .44-.03.56-.22.952-2.61 5.3-27.63 9.88-63.37 11.59-3.87.18-7.71.32-14.33.51-2.23.06-22.37.13-24.73.08zm12.752-7.79c6.19-.252 11.385-.905 15.53-1.95 2.306-.582 4.57-1.463 5.663-2.204 1.2-.8 1.69-1.74 1.38-2.58-.89-2.43-7.91-4.54-17.85-5.37-3.17-.26-4.35-.3-8.87-.3-5.05 0-7 .09-11.01.51-7.59.79-13.49 2.5-15.21 4.41-.39.43-.54.75-.57 1.22-.1 1.34 1.6 2.6 4.97 3.71 4.16 1.37 10.35 2.28 17.41 2.57 1.89.08 6.74.08 8.57.01zm76.98 7.414c.056-.48.166-1.82.166-2.01 0-.18-.016-.19-.308-.19-.288 0-.307-.01-.27-.15.023-.09.042-.27.042-.4v-.25h2.294l-.042.21c-.023.11-.042.29-.042.4 0 .18-.015.19-.296.19-.356 0-.333-.07-.446 1.42l-.08 1.05h-1.05l.034-.29zm1.868.1c.02-.11.13-.76.242-1.46.11-.7.22-1.36.24-1.46l.036-.19h1.18l.038.28c.022.15.06.5.084.77.024.27.066.46.092.43.025-.03.13-.38.233-.78l.19-.72H185v3.28h-.884l.04-1.09c.022-.6.026-1.06.01-1.02-.028.05-.184.62-.502 1.82l-.074.28h-.706l-.084-.82c-.1-.99-.154-1.4-.178-1.37-.01.01-.067.44-.127.95-.157 1.36-.097 1.24-.613 1.24h-.44l.04-.19z"
            />
        </svg>
    </marquee>
</marquee>
        <h1 class={styles.grid} >MASTER LLEGASTE MUY LEJOS 404</h1>
        <div class="wrapper" id="quote-box">
          <h2  class={styles.grid} id="text">{quote.quote}</h2>
          <br />
          <div>
          <h3  class={styles.grid} id="author">{quote.name}</h3>
          </div>
        <div class={styles.grid}>
        <button class={styles.button} onClick={generateQuote}>Next Quote</button>
        </div>
        </div>
      </div>  
     <div class={styles.grid}>
 <div>
 <img class={styles.kirby} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNGiJkwwLOlNv5x4fzxu5K-_NEBuGeHLoCHETuCFedJngoteSwxA"/>
 </div>
 <div>
 <img class={styles.kirby} src="http://media0.giphy.com/media/Vl15AaFeM9ZjW/giphy.gif"/>
 </div>
 <div>
 <img class={styles.kirby} src="https://media.discordapp.net/attachments/685689405167763456/886414930813780028/tenor.gif"/>
 </div>

 <br/>
 </div>


 </div>
      </div>
  
   
            )
    }
  
