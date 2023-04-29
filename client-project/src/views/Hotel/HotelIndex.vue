<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const desserts = ref([]);
const route = useRoute();

const images = [
  "https://sdl.xtel.vn/file/v1/download/hotel-product-cover-img/SDL_BKAV_1624326698771.jpg",
  "https://sdl.xtel.vn/file/v1/download/hotel-product-cover-img/SDL_BKAV_1624326699205.jpg",
  "https://sdl.xtel.vn/file/v1/download/hotel-product-cover-img/SDL_BKAV_1624326698771.jpg",
  "https://sdl.xtel.vn/file/v1/download/hotel-product-cover-img/SDL_BKAV_1624326698771.jpg",
  "https://sdl.xtel.vn/file/v1/download/hotel-product-cover-img/SDL_BKAV_1624326698771.jpg",
  "https://sdl.xtel.vn/file/v1/download/hotel-product-cover-img/SDL_BKAV_1624326698771.jpg",
  "https://sdl.xtel.vn/file/v1/download/hotel-product-cover-img/SDL_BKAV_1624326698771.jpg",
  "https://sdl.xtel.vn/file/v1/download/hotel-product-cover-img/SDL_BKAV_1624326698771.jpg",
  "https://sdl.xtel.vn/file/v1/download/hotel-product-cover-img/SDL_BKAV_1624326698771.jpg",
  "https://sdl.xtel.vn/file/v1/download/hotel-product-cover-img/SDL_BKAV_1624326698771.jpg",
  "https://sdl.xtel.vn/file/v1/download/hotel-product-cover-img/SDL_BKAV_1624326698771.jpg",
  "https://sdl.xtel.vn/file/v1/download/hotel-product-cover-img/SDL_BKAV_1624326698771.jpg",
  "https://sdl.xtel.vn/file/v1/download/hotel-product-cover-img/SDL_BKAV_1624326698771.jpg",
  "https://sdl.xtel.vn/file/v1/download/hotel-product-cover-img/SDL_BKAV_1624326698771.jpg",
];
onMounted(() => {
  getData();
});

const getData = async () => {
  try {
    const res = await axios.get(
      "http://localhost:8080/api/v1/hotel/getbyid/" + route.params.id
    );
    console.log(route.params.id);
    desserts.value = res.data;
  } catch (e) {
    console.error(e);
  }
};
</script>
<template>
  <v-car>
    <v-container>
      <v-row class="bg-yellow-lighten-5 pa-0 ma-0 mb-3">
        <v-col cols="4">
          <h2 style="width: 60%" class="header-hv">{{ desserts.hotelName }}</h2>
          <span>
            <v-icon>mdi-map-marker-outline</v-icon> {{ desserts.address }}</span
          >
        </v-col>

        <!-- day la anh anh Minh lam -->
        <div class="img__grid h-50">
          <div
            class="overview-img__grid-item"
            v-for="(img, index) in desserts.image?.split(',')"
            :key="index"
          >
            <img
              v-if="index < 6"
              class="w-100 h-100"
              style="object-fit: cover"
              :src="img"
              alt=""
            />
            <span v-if="index === 5" class="overview-img__grid-num"
              >+{{ images.length - 6 }}</span
            >
          </div>
        </div>
      </v-row>
      <v-toolbar class="mb-4 bg-yellow-lighten-4">
        <v-row>
          <v-col col="4">
            <span>Type: </span>
            <span style="color: #ee8a6a; font-weight: 600">{{
              desserts.hotelType
            }}</span>
          </v-col>
          <v-col col="4">
            <span> Rated: </span>
            <span style="color: #ee8a6a; font-weight: 600"
              >{{ desserts.rated }} stars</span
            >
          </v-col>
          <v-col col="4">
            <span> Phone number: </span>
            <span style="color: #ee8a6a; font-weight: 600">{{
              desserts.phone
            }}</span>
          </v-col>
          <v-col col="4">
            <span> Email: </span>
            <span style="color: #ee8a6a; font-weight: 600">{{
              desserts.email
            }}</span>
          </v-col>
        </v-row>
      </v-toolbar>
      <v-row class="bg-yellow-lighten-5 ma-0">
        <v-col cols="3">
          <div class="float-left">
            <h2>General introduction</h2>
            <span>{{ desserts.description }}</span>
          </div>
        </v-col>
      </v-row>
      <v-row
        class="bg-blue-grey-lighten-5 ma-0 mt-6 mb-6"
        v-for="item in desserts.rooms"
        :key="item.id"
      >
        <v-col cols="3">
          <img
            style="width: 100%; height: auto"
            :src="`${item.image}`"
            alt=""
          />
        </v-col>
        <v-col cols="9" class="col-10 pt-10 pb-10 d-flex justify-space-between">
          <div>
            <h3 class="pt-3 pb-3" style="color: #ee8a6a; font-size: 28px">
              Bed type: {{ item.bedType }}
            </h3>
            <span>Capactity: {{ item.capacity }}m²</span>
            <div>
              <span style="font-size: 28px; color: rgb(73 190 110)">{{
                item.price
              }}</span>
              <span> VND/night</span>
            </div>
          </div>
          <div>
            <v-btn :to="`/hotels/${route.params.id}/${item.id}`"
              >Book now</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-car>
</template>
<style>
.header-hv:hover {
  color: #ee8a6a;
  cursor: pointer;
}

.img__grid {
  display: grid;
  width: calc(100% - 2.4rem);
  grid-template: repeat(6, 1fr) / 40% repeat(3, 20%);
  grid-gap: 0.4rem;
  gap: 0.4rem;
}

.overview-img__grid-item:first-child {
  grid-row: 1 / span 3;
}

.overview-img__grid-item:nth-child(2) {
  grid-row: 4 / span 3;
}

.overview-img__grid-item:nth-child(3) {
  grid-column: 2 / span 3;
  grid-row: 1 / span 4;
}

.overview-img__grid-item:nth-child(1n + 4) {
  grid-row-end: span 2;
  grid-column-end: span 1;
}

.overview-img__grid-item {
  position: relative;
  cursor: pointer;
}

.overview-img__grid-num {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(36, 36, 36, 0.5);
  color: #fff;
  font-size: 1.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
