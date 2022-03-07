<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <h2 class="app-name__caption">Планировки</h2>
      </div>
      <Main />
    </div>
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
