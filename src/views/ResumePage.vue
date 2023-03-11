<template>
  <div class = "resume-back scroll-block">
    <div class = "cover-img skin-pull"></div>
    <div class = "resume-box">
      <h1>The resume of one Domenic Betters</h1> 
    </div>
    <div class="resume-box">
      <h3>Objective</h3>
      <p>Seeking a challenging software developer position with a strong interest in front-end and graphical implementation. I’m hoping to blend my years of leadership, problem-solving and my ability to quickly learn new concepts with my software development skills to secure a position that will offer the ability to contribute and grow with the organization.</p>
    </div>
    <div class="resume-box">
      <h3>Developer Experience</h3>
      <div class ="section-box">
        <div class = "section-info">
          <router-link class="project-link" to="/"><h4>Developed “Gluttony of Gore” indie game</h4></router-link>
          <ul>
            <li>Wrote entire code in Ruby, establishing everything from collision detection to  gravity physics.</li>
            <li>Using the Ruby2d gem as a framework to provide the ability to add graphics and animation</li>
            <li>Created all the art and animation.</li>
          </ul>
        </div>
        <div class = "section-img">
          <router-link to="/"><img class = "image" src="@/assets/images/eyeballguy.jpg"/></router-link>
        </div>
      </div>
      <div class ="section-box">
        <div class = "section-info">
          <h4>Texture artist for “Godzilla: Save the Earth Melee” indie game</h4>
          <ul>
            <li>Creating new 4k textures from scratch to replace existing textures in the original game.</li>
            <li>Wrote and maintained YAML files to tell the texture replacement script which textures needed to be swapped with new files.</li>
          </ul>
        </div>
        <div class = "section-img">
          <router-link to="/dbettersport"><img class = "image" src="@/assets/images/megs.png"/></router-link>
        </div>
      </div>
      <div class ="section-box">
        <div class = "section-info">
          <h4>Commercial Signage Customization</h4>
          <ul>
            <li>Modified scripts running on Linux-os to create simple slideshow program that ran through various images uploaded to a remote server folder.</li>
            <li>Setup server folders which eliminate the need for staff to make any manual changes.</li>
            <li>Utilized digital illustration software to create new menu designs and images. </li>
          </ul>
        </div>
        <div class = "section-img">
          <router-link to="/dbettersport"><img class = "image" src="@/assets/images/antonios.jpg"/></router-link>
        </div>
      </div>
    </div>
    <div class="resume-box">
      <h3>Work Experience</h3>
      <h4>Owner of Antonio’s Pizzeria -  Pittsburgh, PA - 2019 - Present</h4>
          <ul class="work-job-values">
            <li>Handled daily production and management along with delegating various tasks to employees to best utilize labor.</li>
            <li>Developed website for basic info and link to online ordering platform.</li>
            <li>Developed digital menu boards and physical menu copies.</li>
            <li>Maintain POS system and handle any technical issues that arise.</li>
            <li>Created Daily Timelines and plans to ensure all catering orders were prepared and ready when needed.</li>
            <li>Developed new recipes and menu items to satisfy customer needs.</li>
          </ul>
      <h4>Owner of Black Market Deli, Catering, and Beef Jerky -  Pittsburgh, PA - 2016 - 2019</h4>
          <ul class="work-job-values">
            <li>Planned daily work load to best use time and space in shared kitchen environment. </li>
            <li>Developed website for deli info and jerky orders.</li>
            <li>Created production timelines and plans to ensure all prep and catering orders were prepared and ready when needed.</li>
            <li>Followed strict USDA guidelines for safe food production of various products.</li>
          </ul>
      <h4>Assistant Meat Dept. Manager - Whole Foods Market - Pittsburgh, PA - 2012 - 2016</h4>
          <ul class="work-job-values">
            <li>Delegated tasks to team based on skill sets to make sure demands were met as efficiently as possible and within given labor budget.</li>
            <li>Developed website for deli info and jerky orders.</li>
            <li>Logged and tracked production and waste amounts to better understand and control inventory and profit loss.</li>
            <li>Set up spread sheets and check lists to make sure daily operations went smoothly in regards to production and communication.</li>
          </ul>
    </div>
    <div class="resume-box">
      <h3>Education</h3>
      <h4>Academy Pittsburgh - 2022</h4>
      <p>Diploma-based software development boot camp that prepares students to enter the technology workforce.</p>
          <ul class="work-job-values">
            <li>Languages: C#, Ruby, Python, SQL, HTML, CSS, JavaScript</li>
            <li>Frameworks: Ruby on Rails, Microsoft ASP.NET Core MVC, React</li>
            <li>Practices: Git, Agile, Object Oriented Programming, Test Driven Development</li>
          </ul>
      <h4>Art Institute of Pittsburgh - 2004 - 2008</h4>
      <p>Bachelors of Science  - Culinary Management</p>
          <ul class="work-job-values">
            <li>Planned daily work load to best use time and space in shared kitchen environment. </li>
            <li>Developed website for deli info and jerky orders.</li>
            <li>Created production timelines and plans to ensure all prep and catering orders were prepared and ready when needed.</li>
            <li>Followed strict USDA guidelines for safe food production of various products.</li>
          </ul>
      <h4>Art Institute of Pittsburgh - 2004 - 2008</h4>
      <p>Bachelors of Science  - Culinary Management</p>
          <ul class="work-job-values">
            <li>Key focus on various areas of business management, including human resources, finances, and labor and inventory management.</li>
          </ul>
    </div>
  </div>
</template>
  
  <script>
  
  
  
  export default {
    name: 'ResumePage',
    components: {
    }
  }


  
  </script>
  
  <style scoped>

  
  .resume-back {
    background-image: url(../assets/images/ripback.png) !important;
    background-size: contain;
    background-position: center;
    background-repeat: repeat-y;
    width: 98vw;
    max-width: 75ch;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFF7ED
  }
  .resume-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%
  }

  .section-box {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
  .section-info {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  .section-img {
    width:15%;
    object-fit: scale-down;
    overflow: hidden;
    border: 2px #FFF7ED solid;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  }
  .image{
    width:100%;
  }

  .project-link {
    color: #FFF7ED;
    text-decoration: none;
  }
 
  h1 {
    font-family: "nightside";
    font-size: 5em;
  }

  h3 {
    border-bottom: solid 2px #FFF7ED;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  }
  li {
    margin-top: .75ch;
    margin-bottom: .75ch;
  }

  .work-job-values {
    align-self: start;
  }

  .cover-img {
    background-image: url(../assets/images/inplaceback.png) !important;
    background-size: contain;
    background-position: center;
    background-repeat: repeat-y;
    width: 98vw;
    height:100%;
    max-width: 75ch;
    position: absolute;
  }

  
/* 
  342424 is the color hash for the back */
  </style>
  