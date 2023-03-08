
<template>
    <div class="footer-bar">
        <div class ="name">
            <p>DOMENIC BETTERS</p>
        </div>
        <div class = "links">
            <a href="mailto:domenicbetters@yahoo.com"><p><i class="fa-sharp fa-regular fa-envelope"></i>domenicbetters@yahoo.com</p></a>
            <a href="https://github.com/domenicbetters"><p>github.com/domenicbetters</p></a>
            <a href="https://www.artstation.com/domenicbetters"><p>artstation.com/domenicbetters</p></a>
         </div>
    </div>
    </template>
    
    <style scoped>
    .footer-bar {
        display: flex;
        justify-content: space-between;
        width: 95vw;
        height: fit-content;
        min-width: fit-content;
        border: 8px double black;
        padding: 0;
        padding-left: 2px;
        padding-right: 2px;
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        box-shadow: 0 5px 25px 5px rgba(0,0,0,.5);
        box-sizing: content-box
    }

    @media (max-width: 1053.5px) {
        .name {
            display:none;
        }
        .links {
            width: 100%;
            flex-wrap: wrap;
        }
    }  
    
    @media (max-width: 335.5px) {
       
        .links {
            font-size: .55em;
        }
    }

    p {
        margin: 5px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .links {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    </style>
    
    <script>
    export default {
      name: 'FooterBar',
      data(){
        return {
        }
      },
     
      }
    
      
    </script>
    
    
    
    