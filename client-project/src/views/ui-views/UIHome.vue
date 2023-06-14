<script setup>
import { onMounted, ref } from "vue";
import router from "@/router";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

const desserts = ref([]);
onMounted(() => {
  getData();
});
const getData = async () => {
  try {
    const res = await axios.get("http://localhost:8080/api/v1/hotel/getall");
    desserts.value = res.data;
  } catch (e) {
    console.log(e);
  }
};
</script>
<template>
  <v-carousel style="position: relative" show-arrows="hover">
    <div style="width: 100%; height: 100%">
      <h1
        data-aos="fade-down"
        style="
          position: absolute;
          top: 38%;
          left: 28%;
          z-index: 10000;
          color: white;
          font-size: 50px;
          text-transform: uppercase;
        "
      >
        Top hotel in the Tam Dao
      </h1>
      <v-carousel-item
        style="
          background: linear-gradient(
              rgba(64, 6, 97, 0.4),
              rgba(64, 6, 97, 0.4)
            ),
            url('https://preview.colorlib.com/theme/marian/assets/img/hero/h1_hero.jpg')
              top center / cover no-repeat;
        "
      ></v-carousel-item>
    </div>

    <v-carousel-item
      src="https://preview.colorlib.com/theme/marian/assets/img/hero/h1_hero.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="https://preview.colorlib.com/theme/marian/assets/img/hero/h1_hero.jpg"
      cover
    ></v-carousel-item>
  </v-carousel>
  <div>
    <h1
      style="
        text-align: center;
        text-transform: uppercase;
        font-size: 40px;
        color: #ee8a6a;
      "
    >
      Khách sạn của chúng tôi
    </h1>
    <v-item-group style="margin: 0 auto" mandatory>
      <v-container>
        <v-row>
          <template v-for="(item, index) in desserts" :key="item.id">
            <v-col class="" v-if="index < 6" cols="4">
              <div
                @click="router.push('/hotels/' + item.id)"
                class="hover-scale"
              >
                <img
                  class="css-img"
                  style="width: 100%; height: 340px"
                  :src="`${item.image?.split(',')?.[0]}`"
                  alt=""
                />
                <h4 class="hotel-h1 text-h6 ml-3">{{ item.hotelName }}</h4>
                <div class="text-right">
                  <span class="text-right">từ </span>
                  <span class="text-h6 text-teal-lighten-1"
                    >{{ item.fromPrice }}
                  </span>
                  <span class="mr-3"> VNĐ</span>
                </div>
              </div>
            </v-col>
          </template>
        </v-row>
        <div class="text-center mt-16">
          <button
            @click="router.push('/hotel')"
            class="pa-3 bg-orange-lighten-2 text-white btn-see"
          >
            Xem thêm
          </button>
        </div>
      </v-container>
    </v-item-group>
    <swiper :watchSlidesProgress="true" :slidesPerView="3" class="mySwiper">
      <swiper-slide>
        <img
          class="img-object"
          src="https://preview.colorlib.com/theme/marian/assets/img/gallery/gallery2.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide
        ><img
          class="img-object"
          src="https://preview.colorlib.com/theme/marian/assets/img/gallery/gallery1.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="img-object"
          src="https://preview.colorlib.com/theme/marian/assets/img/gallery/gallery3.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="img-object"
          src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/431921434.jpg?k=675faabd40677f77b24e82ccdea85efcef7ce7b61d51fec37965738199243483&o="
          alt=""
        />
      </swiper-slide>
      <swiper-slide
        ><img
          class="img-object"
          src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/346698066.jpg?k=9ed06c2ecc1fd44d2fbc595acb1ff502f8b7cd8eda291fdcfc84b974b5557257&o="
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="img-object"
          src="https://pix8.agoda.net/hotelImages/31571574/-1/04228d5860d9c3314306b7e4cfa3a536.jpg?ce=0&s=1024x768"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="img-object"
          src="https://pix8.agoda.net/hotelImages/36122972/-1/b4faeb206170d19d6db8770a52afeb65.jpg?ce=0&s=1024x768"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="img-object"
          src="https://pix8.agoda.net/hotelImages/36122972/-1/59e1a5d258e08eb3e9233292a076107f.jpg?ce=0&s=1024x768"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="img-object"
          src="https://pix8.agoda.net/hotelImages/36122972/0/3abbec0a54a2384d30e081ef8891e48c.jpg?ce=0&s=1024x768"
          alt=""
      /></swiper-slide>
    </swiper>
  </div>
</template>
<style>
.hover-scale {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: relative;
  /* margin: 0 2px; */
  margin: 12px 1px;
  padding: 0;
}
.hover-scale:hover {
  box-sizing: border-box;
  border: 1px solid #c8c4c4;
  cursor: pointer;
}
.hover-scale:hover img {
  transform: rotate(0deg), scale(1.1);
}
.hover-scale:hover h1 {
  color: #ee8a6a;
}
.hotel-h1 {
  font-size: 26px;
  line-height: 46px;
}
.css-img {
  border-radius: 4px;
}
@keyframes zoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
.text-right {
  text-align: right;
}
.btn-see {
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: 800;
}
.swiper {
  width: 100%;
}
.swiper-slide {
  height: 300px;
  background: #882525;
  line-height: 300px;
  text-align: center;
}
.swiper-slide:nth-child(2) {
  background: #8acc7d;
}
.swiper-slide:nth-child(3) {
  background: #b7cc7d;
}
.swiper-slide:nth-child(4) {
  background: #9eb75c;
}
.swiper-slide:nth-child(5) {
  background: #7da8cc;
}
.swiper-slide:nth-child(6) {
  background: #96cc7d;
}
.swiper-slide:nth-child(7) {
  background: #cc7dae;
}
.img-object {
  width: 100%;
  object-fit: cover;
  height: 100%;
}
</style>
