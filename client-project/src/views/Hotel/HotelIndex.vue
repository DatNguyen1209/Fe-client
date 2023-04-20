<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const desserts = ref([]);
const route = useRoute();
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
