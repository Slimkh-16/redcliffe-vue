<template>
  <div class="wrapper">
    <div id="wrapper" class="wrapper-inner">
      <app-header></app-header>
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>
<style>
  .wrapper {
    width: 100%;
    height: 100%;
    min-width: 320px;
    display: table;
    table-layout: fixed;
    overflow-y: auto;
    overflow-x: hidden;
    min-height: 100%;
  }
  #footer {
    margin: 0;
    display: table-footer-group;
    position: relative;
    z-index: 15;
  }
  .butt-grey {
    line-height: 24px;
  }
</style>
