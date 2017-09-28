<template>
  <section class="sections">
    <div class="container">
      <div class="row">
        <div class="found-box">
          <img src="images/found.png" alt="">
          <span class="red">404</span>
          Sorry page does not exist
          <div class="clearfix text-center">
            <router-link :to="{ name: 'Home'}" data-text="На главную" class="butt-grey">
              <span>На главную</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
