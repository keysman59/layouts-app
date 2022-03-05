<template>
  <div id="app">
    <h2 class="app-name__caption">Планировки</h2>
    <Main />
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style lang="scss">

.app-name__caption {
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 60px;
  text-align: center;
  text-transform: uppercase;
  color: #2C323A;
}

</style>
