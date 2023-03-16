<template>
  <div>
   <router-link to="/"><p class = "back-button menu-link">Home</p></router-link>
   <h1>The Projects of one Domenic Betters</h1>


   <div id="book">
    <div class="my-page" data-density="soft">
        Page Cover
    </div>
    <div class="my-page">
        Page one
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
</template>



  <script>

import { PageFlip } from 'page-flip';



  
  export default {
    name: 'ProjectsPage',
    components: {
    
    },
async mounted() {

  const pageFlip = new PageFlip(document.getElementById('book'), {
width: 400, // required parameter - base page width
height: 400, // required parameter - base page height

});

  pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));
}
    
  }


  
  </script>
  
  <style scoped>

#book {
  margin: 80px;
  box-shadow: rgb(62, 62, 62) 5px 0px,  rgb(62, 62, 62) -5px 0px, rgb(106, 106, 106) 10px 0px,  rgb(106, 106, 106) -10px 0px, rgb(165, 165, 165) 15px 0px, rgb(165, 165, 165) -15px 0px, rgb(206, 206, 206) -20px 0px, rgb(206, 206, 206) 20px 0px, rgb(232, 232, 232) -25px 0px, rgb(232, 232, 232) 25px 0px,rgb(41, 19, 5) 35px 0px, rgb(41, 19, 5) -35px 0px;
  border-radius: 2px;
}

.my-page {
  background-color: rgb(255, 235, 157);
}

h1 {
    font-family: "nightside";
    font-size: 5em;
  }

  
/* 
  342424 is the color hash for the back */
  </style>