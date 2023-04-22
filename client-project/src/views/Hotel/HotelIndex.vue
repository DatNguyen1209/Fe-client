<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const desserts = ref([]);
const route = useRoute();

const images = [
  "https://i.wifegeek.com/200426/f9459c52.jpg",
  "https://i.wifegeek.com/200426/5ce1e1c7.jpg",
  "https://i.wifegeek.com/200426/5fa51df3.jpg",
  "https://i.wifegeek.com/200426/663181fe.jpg",
  "https://i.wifegeek.com/200426/2d110780.jpg",
  "https://i.wifegeek.com/200426/e73cd3fa.jpg",
  "https://i.wifegeek.com/200426/15160d6e.jpg",
  "https://i.wifegeek.com/200426/d0c881ae.jpg",
  "https://i.wifegeek.com/200426/a154fc3d.jpg",
  "https://i.wifegeek.com/200426/71d3aa60.jpg",
  "https://i.wifegeek.com/200426/d17ce9a0.jpg",
  "https://i.wifegeek.com/200426/7c4deca9.jpg",
  "https://i.wifegeek.com/200426/64672676.jpg",
  "https://i.wifegeek.com/200426/de6ab9c6.jpg",
  "https://i.wifegeek.com/200426/d8bcb6a7.jpg",
  "https://i.wifegeek.com/200426/4085d03b.jpg",
  "https://i.wifegeek.com/200426/177ef44c.jpg",
  "https://i.wifegeek.com/200426/d74d9040.jpg",
  "https://i.wifegeek.com/200426/81e24a47.jpg",
  "https://i.wifegeek.com/200426/43e2e8bb.jpg",
];
onMounted(() => {
  getData();
});

const getData = async () => {
  try {
    const res = await axios.get(
      "http://localhost:8080/api/v1/hotel/getbyid/" + route.params.id
    );
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
          <lightbox :items="images"></lightbox>
        </v-col>
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
            <v-btn>Book now</v-btn>
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
</style>
