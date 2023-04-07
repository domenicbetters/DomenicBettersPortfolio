<template>
  <div class = "project-body">
   <router-link to="/"><p class = "back-button menu-link">Home</p></router-link>
   <h1>The Projects of one Domenic Betters</h1>
   <p class = "page-buttons"><i class="fa fa-angle-double-left" aria-hidden="true"></i>    |    <i  class="fa fa-angle-double-right" aria-hidden="true"></i></p>
    <div class="book-box">
      <div id="book">
        <div class="my-page" data-density="soft">
            <h2>Gluttony of Gore</h2>
            <div class = "project-img" >
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/uBbYOAs8s50?autoplay=1&mute=1&controls=0&loop=1&playlist=uBbYOAs8s50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; loop; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        <div class="my-page info-page">
            <h3>Gluttony of Gore (continued...)</h3>
            <h4>What is it?</h4>
            <p>Glutton of Gore is a ruby project using the ruby2d gem.  This gem allows for basic graphic interfaces and sprite animations.  Using this as a base, "Gluttony of Gore" was written from the ground up.  Everything from gravity and jump phsyics to hit-box detection was coded from scratch.  The artwork in the finished project will all be original work by myself as well.  Placeholders from the game "Splatterhouse" are being used in the mean time.  </p>

            <h4>What did I learn?</h4>
            <p>Given that ruby 2d is a simple graphical framework with no bells or whistles, I had to learn a surprising amount about physics and game mechanics.  Not only did I need to write the code for things like hitbox detection and scoring, I had to read up on the equations for gravity and how to impliment those mathematical breadkdowns into ruby.  I still have more to learn, like adding a the means to log and track high scores using databases.</p>

            <h4>Links</h4>
            <a href="https://github.com/domenicbetters/Gluttony-of-Gore"><p>Git Hub Repo</p></a>
            <a href="https://www.artstation.com/domenicbetters/albums/6208842"><p>Art Portfolio</p></a>
        </div>
        <div class="my-page" data-density="soft">
            <h2>Antonios Pizzeria Website</h2>
            <div class = "project-img" >
              <iframe width="100%" height="100%" src="https://domenicbetters.github.io/AntoniosPizza" title="description" style="-webkit-transform:scale(1);-moz-transform-scale(1);"></iframe>
             </div>
        </div>
        <div class="my-page info-page">
            <h3>Antonios Pizzeria Website (continued...)</h3>
            <h4>What is it?</h4>
            <p>This is the website for our pizza shop, Antonio’s Pizzeria.  The site was built as a single page app using Vue.js along with several plug-ins such as bootstrap.  In addition to providing basic info about our shop, the menu is also configured to display full or vegan only items with the click of a button.  The menu is populated using SQL queries run directly against our POS database to make sure the info is always up to date and make life easier for me when it comes to site updates.   The SQL queries put the data into JSON format so Vue can display the info properly.  </p>

            <h4>What did I learn?</h4>
            <p>A lot.  This project helped me further my understanding of the Vue.js framework, including proper use of routers and configurations that make the app function more as a traditional website for internet deployment.  I was also able to learn a good deal about writing SQL queries that pull info from a SQL database and how to use that info in a dynamic rendering with in our menu.  I also got to dabble more in web animation techniques, which I would then carry over in a more advanced way to my next project...</p>

            <h4>Links</h4>
            <a href="https://github.com/domenicbetters/AntoniosPizza"><p>Git Hub Repo</p></a>
            <a href="https://domenicbetters.github.io/AntoniosPizza/"><p>Full Site Link</p></a>
            <a href="https://antoniospizzeria.hungerrush.com/"><p>Order here if you are hungry!</p></a>
        </div>
      </div>
    </div>
  </div>
</template>



  <script>

import { PageFlip } from 'page-flip';

var lengthy = window.innerWidth

window.addEventListener('resize', () => {
    lengthy = window.innerWidth
    console.log(lengthy)
});



  
  export default {
    name: 'ProjectsPage',
    components: {
    
    },
async mounted() {


  if (lengthy >= 532) {

  const pageFlip = new PageFlip(document.getElementById('book'), {
width: 600, // required parameter - base page width
height: 800, // required parameter - base page height
size: "stretch",
minWidth: 200,
maxWidth: 1200,
minHeight: 266.666,
maxHeight: 1600,
disableFlipByClick: true,
});
  

  pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));

  document.querySelector(".fa-angle-double-left").addEventListener("click", () => {
        pageFlip.flipPrev(); // Turn to the previous page (with animation)
    });

    document.querySelector(".fa-angle-double-right").addEventListener("click", () => {
        pageFlip.flipNext(); // Turn to the next page (with animation)
    });

}
else {
  const pageFlip = new PageFlip(document.getElementById('book'), {
width: 600, // required parameter - base page width
height: 800, // required parameter - base page height
size: "stretch",
minWidth: 200,
maxWidth: 1200,
minHeight: 266.666,
maxHeight: 1600,
disableFlipByClick: true,
useMouseEvents: false,
});
  

  pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));

  document.querySelector(".fa-angle-double-left").addEventListener("click", () => {
        pageFlip.turnToPrevPage(); // Turn to the previous page (with animation)
    });

    document.querySelector(".fa-angle-double-right").addEventListener("click", () => {
        pageFlip.flipNext(); // Turn to the next page (with animation)
    });
}


}
    
  }


  
  </script>
  
  <style scoped>

  .project-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

#book {
  box-shadow: #494029 5px 0px,  #494029 -5px 0px, #6f6446 10px 0px,  #6f6446 -10px 0px, #988c6c 15px 0px, #988c6c -15px 0px, #b4a98b -20px 0px, #b4a98b 20px 0px, #dbd2ba -25px 0px, #dbd2ba 25px 0px,#1d170a 30px 0px, #1d170a -30px 0px;
  border-radius: 1px;
  overflow: hidden;
}


.my-page {
  background-image: url('@/assets/images/pageback.jpg');
  background-size:100% 100%;
  border: solid 1px rgba(0, 0, 0, 0.069);
  border-radius: 1px;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

}

a {
    text-decoration: none;
  }

  .book-box {
    width:100%; 
    max-width: 75vw; 
    margin:50px;
    padding-left:30px;
    padding-right:30px;
    box-shadow: 0 6px 15px 7px rgba(0, 0, 0, 0.664);
  }

.project-img {
  width: 75%;
  height: 415px;
  max-height: 70%;
  overflow: hidden;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
}

.project-img iframe {
  transform: scale(2);
}

.page-buttons {
  font-size: 2em;
  color: #1d170aa4;
  margin: 0;
}
.fa:hover{
  color: #1d170a41
}

.fa:active {
  color: #1d170a
}



img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1 {
    font-family: "nightside";
    font-size: 5em;
  }

  h2 {
    font-family: "nightside";
    font-size:2em;
  }
  .info-page {
    align-items: start;
    justify-content: start;
    padding-left: 15px;
    width: fit-content !important;
    overflow-y: scroll;
  }

  @media (max-width: 532.5px) {
    .info-page {
      width: 100%;
    }
  }

::-webkit-scrollbar {
  background: #1d170a4d;
  width: 10px;
  border-left: 1px solid #1d170a85;
}

::-webkit-scrollbar-thumb {
    background: #1d170a85;
    border-radius: 20px;
;
}






  
/* 
  342424 is the color hash for the back */
  </style>