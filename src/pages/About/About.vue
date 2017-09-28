<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="breadcrumbs-box">
          <ul class="breadcrumbs">
            <li class="breadcrumbs__item"><a href="#">main</a></li>
            <li class="breadcrumbs__item"><span>about us</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="clearfix">
        <div class="head-title-grey text-center">
          How we are different
        </div>
        <div class="time-upd time-upd--about">
          <div class="col-xs-3 time-upd__item">
            <a href="#" class="first">
              <span class="time-upd__title">'Born and bred' at top international law firm</span>
              <p>Each of our founding partners worked more than a decade at top international law firms.</p>
            </a>
          </div>
          <div class="col-xs-3 time-upd__item">
            <a href="#">
              <span class="time-upd__title">Educated abroad</span>
              <p>Almost all of our lawyers have advanced degrees from top Western law schools</p>
            </a>
          </div>
          <div class="col-xs-3 time-upd__item">
            <a href="#">
              <span class="time-upd__title"> Magic Circle standards</span>
              <p>Since becoming independent from Clifford Chance, we adhere to the same quality standards.</p>
            </a>
          </div>
          <div class="col-xs-3 time-upd__item">
            <a href="#" class="last">
              <span class="time-upd__title">Training at Clifford Chance Academy.</span>
              <p>All of our lawyers undergo regular trainings at the Clifford Chance Academy on a wide range of legal and commercial topics.</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="row reputation">
      <div class="head-title-grey text-center">
        our reputation
      </div>
      <div class="col-md-3 col-sm-6 col-xs-6 reputation__item">
        <div class="reputation__head">
          <div class="dt-c">
            Banking and<br> Finance practice
          </div>
        </div>
        <div class="reputation__info">
          <b>Ranked Tier 1 by  Legal 500 2015 edition and Chambers Global 2015 edition.</b>
          <p>"Olexiy Soshenko and Dmytro Fedoruk are recommended"</p>
        </div>
        <a href="#" class="view-all">View other quotes</a>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-6 reputation__item">
        <div class="reputation__head">
          <div class="dt-c">
            Corporate and M&A
          </div>
        </div>
        <div class="reputation__info">
          <b>Ranked Tier 2 by Legal 500 2015.</b>
          <p>"According to sources, Dmytro Fedoruk is "tough and can adapt to clients' needs. He has very good international experience." Others note: "He is great at explaining dry legal issues.""</p>
        </div>
        <a href="#" class="view-all">View other quotes</a>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-6 reputation__item">
        <div class="reputation__head">
          <div class="dt-c">
            Debt restructuring
          </div>
        </div>
        <div class="reputation__info">
          <b>Ranked Tier 1 by Chambers Europe 2015 edition.</b>
          <p> "Leading restructuring practice advising international banks on high-value debt restructuring."</p>
        </div>
        <a href="#" class="view-all">View other quotes</a>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-6 reputation__item">
        <div class="reputation__head">
          <div class="dt-c">
            Debt restructuring
          </div>
        </div>
        <div class="reputation__info">
          <b>Ranked Tier 1 by Legal 500 2015.</b>
          <p>  "Sizeable team focused on oil and gas and renewable energy, including particular knowledge of wind power mandates."</p>
        </div>
        <a href="#" class="view-all">View other quotes</a>
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
