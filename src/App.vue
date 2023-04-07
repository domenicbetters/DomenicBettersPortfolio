<template>
  <div id="app">
    <router-view :key="componentKey" />
    <FooterBar class = "footer" />
  </div>
</template>

<script>
import FooterBar from './components/FooterBar.vue'




export default {
  data() {
    return {
      componentKey: 0,
    };
  },
  methods: {
    forceRerender() {
      this.componentKey += 1
    }
  },
  name: 'App',
  components: {
    FooterBar,
  },
  async mounted () {
    window.addEventListener('resize', () => {
   this.forceRerender();
});
  },
}
</script>


