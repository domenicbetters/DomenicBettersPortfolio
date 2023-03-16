<template>
    <div>
        <div class="main-page">
            <div class="main-page-left">
                <h1 class=" fade-in">The Portfolio of One Domenic Betters</h1>
                <div class="menu-box fourk  fade-in-delay-5 ">
                    <router-link to="/dbettersport/projects"><p class = " slide-bottom-delay-5 menu-link">Projects</p></router-link>
                    <router-link to="/dbettersport/resume"><p class = " slide-bottom-delay-1 menu-link">Resume</p></router-link>
                    <router-link to="/"><p class = " slide-bottom-delay-15 menu-link">About</p></router-link>
                    <router-link to="/"><p class = " slide-bottom-delay-2 menu-link">Contact</p></router-link>
                </div>
            </div>
            <div class="main-page-right fade-in-delay-2s">
              <div class="menu-box menu-mobile ten80  fade-in-delay-5t ">
                    <router-link to="/"><p class = " slide-bottom-delay-5t menu-link">Projects</p></router-link>
                    <router-link to="/dbettersport/resume"><p class = " slide-bottom-delay-1t menu-link">Resume</p></router-link>
                    <router-link to="/"><p class = " slide-bottom-delay-15t menu-link">About</p></router-link>
                    <router-link to="/"><p class = " slide-bottom-delay-2t menu-link">Contact</p></router-link>
                </div>
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
    border-bottom: 4px solid  rgb(57, 3, 63);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  margin: 60px;

  }
  </style>
  