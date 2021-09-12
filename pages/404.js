import styles from '../styles/Sheep.module.css'

//asasasa
export default function pagenotfound() {
    return (
      <div class={styles.body}>
          <div class="container-fluid text-center">
   
          <h1 class={styles.h1} >404</h1>
        <br/>   
     <div class={styles.grid}>
 
 <img class={styles.img} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNGiJkwwLOlNv5x4fzxu5K-_NEBuGeHLoCHETuCFedJngoteSwxA"/>
 <img class={styles.kirby} src="http://media0.giphy.com/media/Vl15AaFeM9ZjW/giphy.gif"/>
 <br/>
 </div>

 <button class={styles.quotes} type="submit" id="newQuote">New Quote</button>
   <div class={styles.quotes}>
   <span class={styles.quote}>kek</span>
   <span class={styles.author}>-lol</span>
 </div>
      </div>
  
   
        </div>
            )
}