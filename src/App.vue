<template>
  <div id="app">
    <router-view />
    <FooterBar class = "footer" />
  </div>
</template>

<script>
import FooterBar from './components/FooterBar.vue'




export default {
  name: 'App',
  components: {
    FooterBar,
  }
}
</script>


