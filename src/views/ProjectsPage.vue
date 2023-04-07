<template>
  <div class = "project-body">
   <router-link to="/"><p class = "back-button menu-link">Home</p></router-link>
   <h1>The Projects of one Domenic Betters</h1>
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
        <div class="my-page">
            Page two
        </div>
        <div class="my-page">
            Page three
        </div>
        <div class="my-page">
            Page four
        </div>
        <div class="my-page" data-density="soft">
            Last page
        </div>
      </div>
    </div>
  </div>
</template>



  <script>

import { PageFlip } from 'page-flip';



  
  export default {
    name: 'ProjectsPage',
    components: {
    
    },
async mounted() {

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
  border: solid 5px pink;
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
img {
  width: 100%;
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




  
/* 
  342424 is the color hash for the back */
  </style>