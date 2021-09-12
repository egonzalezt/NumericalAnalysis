$(document).ready(function() {
    var randomQuote;
    var randomNum;
    var author;
    var randomAuthor;
    getQuote();
    function getQuote() {
      var quotes = ["It’s dangerous to go alone, take this!", "War. War never changes.", "Death is inevitable. Our fear of it makes us play safe, blocks out emotion. It's a losing game. Without passion, you are already dead.", "Thank you Mario! But our Princess is in another castle!", "Snake? Snake? SNAAAAAAAAKE!!!", "I used to be an adventurer like you, until I took an arrow to the knee.", "It’s super effective!", "Space. Space. I'm in space. SPAAAAAAACE!", "Do a barrel roll!", "Praise the sun!", "Do you like hurting other people?"];
      var author = ["- Old Man, The Legend of Zelda", "- Narrator, Fallout", "- Max Payne, Max Payne 2: The Fall of Max Payne", "- Toad, Super Mario Bros.", "- The Colonel, Metal Gear Solid 2", "- Town Guard, Elder Scrolls V: Skyrim", "- Pokemon series", "- Space Core, Portal 2", "- Star Fox 64", "- Solaire of Astora, Dark Souls", "- Richard, Hotline Miami"];
      randomNum = (Math.floor(Math.random()*quotes.length));
      randomQuote = quotes[randomNum];
      randomAuthor = author[randomNum];
    
      $('.quote').text(randomQuote);
      $('.author').text(randomAuthor);
    
    };
  $('#newQuote').on('click', function() {
   getQuote();
  });
  
  $('#tweetOut').on('click', function() {
   window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " " + randomAuthor); 
  
  });
  });