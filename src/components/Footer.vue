<template>
  <footer id="footer">
    <div class="container">
      <ul class="foot-nav">
        <li class="foot-nav__item">
          <router-link :to="{ name: 'Notfound'}">
            Sitemap
          </router-link>
        </li>
        <li class="foot-nav__item">
          <router-link :to="{ name: 'News'}">
            News
          </router-link>
        </li>
        <li class="foot-nav__item">
          <router-link :to="{ name: 'Contact'}">
            contact us
          </router-link>
        </li>
      </ul>
      <!--<ul class="social">-->
        <!--<li class="social__item"><a href="#" class="social__icon social__item&#45;&#45;fb" target="_blank"></a></li>-->
        <!--<li class="social__item"><a href="#" class="social__icon social__item&#45;&#45;in" target="_blank"></a></li>-->
        <!--<li class="social__item"><a href="#" class="social__icon social__item&#45;&#45;goog" target="_blank"></a></li>-->
        <!--<li class="social__item"><a href="#" class="social__icon social__item&#45;&#45;pan" target="_blank"></a></li>-->
      <!--</ul>-->
    </div>
    <div class="footer-holder">
      <div class="container">
        <div class="copy-right">Redcliffe partners © 2017</div>
      </div>
    </div>
  </footer>
</template>
<script>
// import SocialList from './SocialList'
// import SocialHelper from '../helpers/SocialHelper'
// import { mapGetters } from 'vuex'

export default {
//  props: ['menu'],
//  mixins: [SocialHelper],
//  computed: {
//    ...mapGetters(['settings', 'contentPages'])
//  },
//  components: {
//    'social-list': SocialList
//  }
}

</script>
<style>
</style>
