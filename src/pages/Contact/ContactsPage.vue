<template>
  <!--contact section-->
  <div class="container">
    <div class="row">
      <div class="col-xs-12 breadcrumbs-box">
        <ul class="breadcrumbs">
          <li class="breadcrumbs__item"><a href="#">main</a></li>
          <li class="breadcrumbs__item"><span>contact us</span></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-sm-3 col-xs-12 pull-right">
        <div class="heading heading--sep">REDCLIFFE PARTNERS</div>
        <address>
          <ul class="contact-list">
            <li>Kyiv</li>
            <li>75 Zhylyanska Street</li>
            <li>01032</li>
            <li>Kyiv</li>
            <li>Ukraine</li>
            <li>Tel: +380443905885</li>
            <li>Fax: +380443905886</li>
            <li>Legal Entity: Clifford Chance LLC</li>
          </ul>
        </address>
      </div>
      <div class="col-md-9 col-sm-9 col-xs-12">
        <div class="map-box">
          <div id="map"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="form">
        <div class="col-xs-12">
          <div class="head-title-grey">
            General Enquiries
          </div>
        </div>
        <form action="#" class="js_validate">
          <div class="col-sm-6 col-xs-12">
            <div class="form-group">
              <input type="text" placeholder="name" required>
            </div>
            <div class="form-group">
              <input type="email" placeholder="email" required>
            </div>
          </div>
          <div class="col-sm-6 col-xs-12">
            <div class="form-group">
              <textarea placeholder="feedback note" required></textarea>
            </div>
          </div>
          <div class="col-xs-12">
            <button type="submit" data-toggle="modal" data-target="#complite" data-text="submit" class="butt-grey pull-right"><span>submit</span></button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapGetters, mapActions} from 'vuex'
// import ReviewForm from '../../components/ReviewForm'
// import SocialList from '../../components/SocialList'

export default {
//  components: {
//    'review-form': ReviewForm,
//    'social-list': SocialList
//  },
//  computed: {
//    ...mapGetters(['stores', 'settings']),
//    central_shop_lat () {
//      return this.settings ? this.settings.filter(o => o.key === 'central_shop_lat')[0].value : ''
//    },
//    central_shop_lng () {
//      return this.settings ? this.settings.filter(o => o.key === 'central_shop_lng')[0].value : ''
//    },
//    central_shop_address () {
//      return this.settings ? this.settings.filter(o => o.key === 'central_shop_address')[0].value : ''
//    },
//    central_shop_phone () {
//      return this.settings ? this.settings.filter(o => o.key === 'central_shop_phone')[0].value : ''
//    },
//    central_office_time () {
//      return this.settings ? this.settings.filter(o => o.key === 'central_office_time')[0].value : ''
//    },
//    hot_line_phone () {
//      return this.settings ? this.settings.filter(o => o.key === 'hot_line_phone')[0] : null
//    },
//    direct_phone () {
//      return this.settings ? this.settings.filter(o => o.key === 'direct_phone')[0] : null
//    },
//    partner_email () {
//      return this.settings ? this.settings.filter(o => o.key === 'partner_email')[0] : null
//    },
//    office_email () {
//      return this.settings ? this.settings.filter(o => o.key === 'office_email')[0] : null
//    }
//  },
//  methods: {
//    ...mapActions(['fetchAffiliates', 'sendContactForm']),
//    mapFunction () {
//      if (window.$('#map').length > 0 && this.central_shop_lat && this.central_shop_lng) {
//        var coords = window.$('#map').attr('data-coords').split(',')
//        var myLatlng = new window.google.maps.LatLng(coords[0], coords[1])
//        var myCenter = new window.google.maps.LatLng(coords[0], coords[1])
//        var mapOptions = {
//          zoom: 15,
//          center: myCenter,
//          scrollwheel: false,
//          disableDefaultUI: false,
//          mapTypeId: window.google.maps.MapTypeId.ROADMAP
//        }
//        var map = new window.google.maps.Map(document.getElementById('map'), mapOptions)
//        var marker = new window.google.maps.Marker({
//          position: myLatlng,
//          map: map,
//          icon: '../static/images/map.png'
//        })
//        return marker
//      } else {
//        setTimeout(() => this.mapFunction(), 1000)
//      }
//    },
//    phoneForHtml (phone) {
//      return phone.replace(/[+/.\s()-]/g, '')
//    },
//    send_ContactForm (data) {
//      this.sendContactForm(data)
//          .then((res) => {
//            res.status === 200 ? window.$('#modal-thank').modal('open') : console.log('ERROR')
//          })
//          .catch((error) => {
//            console.log('[sendReview error]: ', error.response)
//          })
//    }
//  },
//  mounted () {
//    this.mapFunction()
//    this.fetchAffiliates().then(() => console.log(this.stores))
//    window.$('#modal-thank').modal({
//      opacity: 1,
//      ready: function (el) {
//        window.$('.overlay').fadeIn(500)
//      },
//      complete: function () {
//        window.$('.overlay').fadeOut(500)
//      }
//    })
//  }
}
</script>
