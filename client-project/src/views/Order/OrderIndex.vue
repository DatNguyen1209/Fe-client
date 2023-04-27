<script setup>
import { ref, onMounted, defineProps, watch } from "vue";
import axios from "axios";
import Datepicker from "vue3-datepicker";
import { useRoute } from "vue-router";

const props = defineProps({
  isOpen: Boolean,
  data: Object,
});
const route = useRoute();

const desserts = ref([]);
const hotelName = ref("");
const hotelType = ref("");
const phone = ref("");
const address = ref("");
const images = ref("");
const imgUrls = ref([]);
const imgUrlsPreview = ref([]);
const price = ref("");
const rated = ref();
const description = ref("");
const picked = ref(new Date());

const listData = ref([]);
const roomData = ref([]);

onMounted(() => {
  getData();
  getDataRoom();
});

const getData = async () => {
  try {
    const res = await axios.get(
      "http://localhost:8080/api/v1/hotel/getbyid/" + route.params.id
    );
    console.log(route.params.id);
    listData.value = res.data;
  } catch (e) {
    console.error(e);
  }
};

const getDataRoom = async () => {
  try {
    const res = await axios.get(
      "http://localhost:8080/api/v1/room/getbyid/" + route.params.roomId
    );
    console.log(route.params.id);
    roomData.value = res.data;
  } catch (e) {
    console.error(e);
  }
};
</script>

<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="4">
          <div class="bg-white">
            <img
              class="w-100"
              src="https://sdl.xtel.vn/file/v1/download/hotel-product-cover-img/SDL_BKAV_1620116502681.jfif"
              alt=""
            />
            <div class="bg-white pa-3">
              {{ roomData }}
              <h3>HotelName</h3>
              <span>roomName </span> <br />
              <span>bedType</span> <br />
              <span>capacity</span> <br />
              <span>price</span>
            </div>
          </div>
        </v-col>
        <v-col cols="8">
          <div class="bg-white pa-5">
            <h3>Booking Information</h3>
            <div>
              <span>Time of booking</span>
              <v-row class="d-flex justify-space-between">
                <v-col cols="6">
                  <!-- icon="mdi-calendar" -->
                  <!-- class="d-picked" -->
                  <!-- <Datepicker :min-date="new Date()" v-model="picked" /> -->

                  <VueDatePicker
                    :min-date="new Date()"
                    v-model="picked"
                    class="d-picked"
                    :enable-time-picker="false"
                  ></VueDatePicker>
                  <!-- upperLimit -->
                </v-col>
                <!-- <v-col cols="6">
                  -->
                <!-- upperLimit -->
                <!-- </v-col> -->
              </v-row>
            </div>
          </div>
          <div class="bg-white pa-5 mt-2">
            <h3>Contact Information</h3>
            <div>
              <span>Contact name</span>
              <input type="text" placeholder="Username" />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
.d-picked {
  width: 100%;
  padding: 4px;
  color: #ee8a6a;
  outline: none;
}
</style>
