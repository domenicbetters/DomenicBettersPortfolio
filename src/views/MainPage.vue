<template>
    <div>
        <div class="main-page">
            <div class="main-page-left">
                <h1>The Portfolio of One Domenic Betters</h1>
                <div class="menu-box">
                    <router-link to="/"><p>Projects</p></router-link>
                    <router-link to="/"><p>Resume</p></router-link>
                    <router-link to="/"><p>About</p></router-link>
                    <router-link to="/"><p>Contact</p></router-link>
                </div>
            </div>
            <div class="main-page-right">
                
            </div>
        </div>   
    </div>
</template>
  
  <script>
  
  
  
  export default {
    name: 'MainPage',
    components: {
    }
  }
  </script>
  
  <style scoped>
  h1 {
    font-family: "nightside";
    font-size: 7em;
  }
  
  a {
    text-decoration: none;
  }

  p {
    border-bottom: 4px solid  rgb(57, 3, 63);;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  margin: 60px;

  }
  </style>
  