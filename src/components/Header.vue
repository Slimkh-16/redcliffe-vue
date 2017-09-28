<template>
  <header id="header">
      <div class="container">
        <div class="logo-header">
          <router-link :to="{ name: 'Home'}">
            <img src="/static/images/logo.png" alt="">
          </router-link>
        </div>
        <div class="search-box">
          <form action="#">
            <input class="search-box__input" placeholder="Search" type="text">
            <button type="submit" class="search-box__button"></button>
          </form>
        </div>
        <div class="header-contact">
          <span class="header-mail">info@redcliffe-partners.com</span>
          <span class="header-phone">+38 (044) 389-38-37</span>
        </div>
        <div class="navigation">
          <a href="#" class="toggle-navigation">
            <span></span>
            <span></span>
            <span></span>
          </a>
          <ul class="navigation-menu">
            <li class="navigation-menu__item">
              <router-link :to="{ name: 'About'}" class="navigation-menu__item--about">
                About us
              </router-link>
            </li>
            <li class="navigation-menu__item">
              <router-link :to="{ name: 'Practices'}">
                Practices
              </router-link>
            </li>
            <li class="navigation-menu__item">
              <router-link :to="{ name: 'Layers'}">
                lawyers
              </router-link>
            </li>
            <li class="navigation-menu__item">
              <router-link :to="{ name: 'News'}">
                News
              </router-link>
            </li>
            <li class="navigation-menu__item">
              <router-link :to="{ name: 'Contact'}">
                contact us
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
</template>
<script>
// import { mapActions, mapGetters } from 'vuex'
// import SocialHelper from '../helpers/SocialHelper'
// import ImageHelper from '../helpers/ImageHelper'

export default {
//  name: 'app-header',
//  data () {
//    return {
//      isMobile: false,
//      subString: ''
//    }
//  },
//  mixins: [SocialHelper, ImageHelper],
//  props: ['menu', 'count'],
//  computed: {
//    ...mapGetters(['settings', 'searchProductList', 'contentPages'])
//  },
//  methods: {
//    ...mapActions(['fetchBreadcrumbs', 'searchByString']),
//    runScroll () {
//      let scrollTopPosition
//      window.addEventListener('scroll', function () {
//        scrollTopPosition = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop)
//        if (scrollTopPosition > 50) {
//          document.querySelector('.header').classList.add('fix')
//        } else {
//          document.querySelector('.header').classList.remove('fix')
//        }
//      })
//    },
//    dropdown () {
//      let browserYou = this.getBrowser()
//      if (browserYou.platform === 'mobile') {
//        this.isMobile = true
//      }
//      if (!this.isMobile) {
//        window.$('.dropdown-head-nav').dropdown({
//          hover: true,
//          outDuration: 500
//        })
//      }
//    },
//    getBrowser: function () {
//      var ua = navigator.userAgent
//      var bName = (function () {
//        if (ua.search(/Edge/) > -1) return 'edge'
//        if (ua.search(/MSIE/) > -1) return 'ie'
//        if (ua.search(/Trident/) > -1) return 'ie11'
//        if (ua.search(/Firefox/) > -1) return 'firefox'
//        if (ua.search(/Opera/) > -1) return 'opera'
//        if (ua.search(/OPR/) > -1) return 'operaWebkit'
//        if (ua.search(/YaBrowser/) > -1) return 'yabrowser'
//        if (ua.search(/Chrome/) > -1) return 'chrome'
//        if (ua.search(/Safari/) > -1) return 'safari'
//        if (ua.search(/maxHhon/) > -1) return 'maxHhon'
//      })()
//
//      var version
//      switch (bName) {
//        case 'edge':
//          version = (ua.split('Edge')[1]).split('/')[1]
//          break
//        case 'ie':
//          version = (ua.split('MSIE ')[1]).split(';')[0]
//          break
//        case 'ie11':
//          bName = 'ie'
//          version = (ua.split('; rv:')[1]).split(')')[0]
//          break
//        case 'firefox':
//          version = ua.split('Firefox/')[1]
//          break
//        case 'opera':
//          version = ua.split('Version/')[1]
//          break
//        case 'operaWebkit':
//          bName = 'opera'
//          version = ua.split('OPR/')[1]
//          break
//        case 'yabrowser':
//          version = (ua.split('YaBrowser/')[1]).split(' ')[0]
//          break
//        case 'chrome':
//          version = (ua.split('Chrome/')[1]).split(' ')[0]
//          break
//        case 'safari':
//          version = ua.split('Safari/')[1].split('')[0]
//          break
//        case 'maxHhon':
//          version = ua.split('maxHhon/')[1]
//          break
//      }
//      var platform = 'desktop'
//      if (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) platform = 'mobile'
//      var browsrObj
//      try {
//        browsrObj = {
//          platform: platform,
//          browser: bName,
//          versionFull: version,
//          versionShort: version.split('.')[0]
//        }
//      } catch (err) {
//        browsrObj = {
//          platform: platform,
//          browser: 'unknown',
//          versionFull: 'unknown',
//          versionShort: 'unknown'
//        }
//      }
//      return browsrObj
//    },
//    checkCart () {
//      if (this.count) {
//        this.$router.push('/cart')
//      } else {
//        window.$('#cartIsEmptyIndex').modal('open')
//      }
//    },
//    searchFunction () {
//      /* this.searchByString(this.subString) */
//      this.$router.push({name: 'SearchPage', query: { search: this.subString }})
//      this.subString = ''
//    },
//    inputSearch () {
//      this.subString.length > 3 && this.searchByString([this.subString, {limit: 5}])
//    },
//    imgUrl (productId, imgName) {
//      return this.url() + `/assets/images/products/${productId}/${imgName}`
//    },
//    getImgSrc (product) {
//      let cover = this.coverImg(product)
//      return cover ? this.imgUrl(product.id, cover.name) : ''
//    }
//  },
//  mounted () {
//    this.runScroll()
//    window.$('.menu-button-general').sideNav({
//      menuWidth: 280,
//      edge: 'left',
//      closeOnClick: true,
//      draggable: true
//    })
//    window.$(document).on('click', (e) => {
//      if (!window.$(e.target).closest('.fast-search').length) {
//        window.$('.fast-search').fadeOut(500, setTimeout(() => this.subString = ''), 500)
//      }
//    })
//  },
//  watch: {
//    menu: function () {
//      this.$nextTick(() => {
//        this.dropdown()
//        this.fetchBreadcrumbs()
//      })
//    }
//  }
}

</script>
