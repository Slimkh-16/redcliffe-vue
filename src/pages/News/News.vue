<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9 col-sm-9 col-xs-12">
        <div class="breadcrumbs-box">
          <ul class="breadcrumbs">
            <li class="breadcrumbs__item"><a href="#">main</a></li>
            <li class="breadcrumbs__item"><span>all publications</span></li>
          </ul>
        </div>
        <div class="filter-box">
          <form action="#">
            <div class="select-box select-box--2">
              <div class="name-select">By practice</div>
              <label class="select-custom">
                <select name="author">
                  <option value="" disabled selected>-Any-</option>
                  <option value="author1">author1</option>
                  <option value="author2">author2</option>
                  <option value="author3">author3</option>
                  <option value="author4">author4</option>
                </select>
              </label>
            </div>
            <div class="select-box select-box--3">
              <div class="name-select">Arhive</div>
              <label class="select-custom">
                <select name="author">
                  <option value="" disabled selected>-Year-</option>
                  <option value="2012">2012</option>
                  <option value="2013">2013</option>
                  <option value="2014">2014</option>
                </select>
              </label>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-3 col-sm-3 col-xs-12">
        <ul class="list-menu">
          <li class="list-menu__item active"><span>practices</span></li>
          <li class="list-menu__item"><a href="#">Project</a></li>
          <li class="list-menu__item"><a href="#">publications</a></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-9 col-sm-9 col-xs-12">
        <div class="publication-item publication-item--news">
          <a href="#">Lawyer specification</a>
          <div class="publication__separ"></div>
          <div class="publication__date publication__date--news">7 February 2015</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>
          <a href="#" class="more pull-right">Read more</a>
        </div>
        <div class="publication-item publication-item--news">
          <a href="#">Lawyer specification</a>
          <div class="publication__separ"></div>
          <div class="publication__date publication__date--news">7 February 2015</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>
          <a href="#" class="more pull-right">Read more</a>
        </div>
        <div class="publication-item publication-item--news">
          <a href="#">Lawyer specification</a>
          <div class="publication__separ"></div>
          <div class="publication__date publication__date--news">7 February 2015</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>
          <a href="#" class="more pull-right">Read more</a>
        </div>
        <div class="pagination-box">
          <ul class="pagination-list">
            <li class="pagination__item"><a href="#">1</a></li>
            <li class="pagination__item"><a href="#">2</a></li>
            <li class="pagination__item"><a href="#">3</a></li>
            <li class="pagination__item"><a href="#">4</a></li>
            <li class="pagination__item active"><span>5</span></li>
            <li class="pagination__item"><span>...</span></li>
            <li class="pagination__item"><a href="#">11</a></li>
            <li class="pagination__item"><a href="#">12</a></li>
          </ul>
        </div>
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
