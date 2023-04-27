<script setup>
import { onMounted, ref } from "vue";
import router from "@/router";
import axios from "axios";

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
      Our Hotel
    </h1>
    <v-item-group style="margin: 0 auto" mandatory>
      <v-container>
        <v-row>
          <template v-for="(item, index) in desserts" :key="item.id">
            <v-col v-if="index < 6" cols="4">
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
                <h1 class="hotel-h1 ml-3">{{ item.hotelName }}</h1>
                <span class="ml-3">{{ item.description }}</span>
              </div>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-item-group>
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
</style>
