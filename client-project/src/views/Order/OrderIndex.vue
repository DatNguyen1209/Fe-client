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
const username = localStorage.getItem("username");
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
const picked_end = ref(new Date());

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
              <h2>{{ listData.hotelName }}</h2>
              <v-row>
                <v-col cols="4">Room name: </v-col>
                <v-col cols="8"
                  ><span class="float-right"
                    >{{ roomData.roomName }}
                  </span></v-col
                >
              </v-row>
              <v-row>
                <v-col cols="4">Bed type: </v-col>
                <v-col cols="8"
                  ><span class="float-right"
                    >{{ roomData.bedType }}
                  </span></v-col
                >
              </v-row>
              <v-row>
                <v-col cols="4">Capacity: </v-col>
                <v-col cols="8"
                  ><span class="float-right"
                    >{{ roomData.capacity }}
                  </span></v-col
                >
              </v-row>
              <v-row>
                <v-col cols="4">Price: </v-col>
                <v-col cols="8">
                  <div>
                    <h3 class="text-color float-right text-h5">
                      {{ roomData.price }}
                      <span
                        class="float-right text-blue-darken-1 text-subtitle-1"
                      >
                        VNĐ / night</span
                      >
                    </h3>
                  </div>
                </v-col>
              </v-row>
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
                  <VueDatePicker
                    :min-date="new Date()"
                    v-model="picked"
                    class="d-picked"
                    :enable-time-picker="false"
                  ></VueDatePicker>
                </v-col>
                <v-col cols="6">
                  <VueDatePicker
                    :min-date="new Date()"
                    v-model="picked_end"
                    class="d-picked"
                    placeholder="Select Date"
                    :enable-time-picker="false"
                  ></VueDatePicker>
                </v-col>
              </v-row>
            </div>
          </div>
          <div class="bg-white pa-5 mt-2">
            <h3>Contact Information</h3>
            <div>
              <span>Contact name:</span>
              <v-row>
                <v-col cols="12">
                  <input
                    class="input-text"
                    type="text"
                    placeholder="Input your full name as show your ID / Passport"
                    v-model="fullName"
                  />
                </v-col>
              </v-row>
            </div>
            <div>
              <v-row>
                <v-col cols="6">
                  <span> Username: </span>
                  <v-row>
                    <v-col cols="12">
                      <input
                        class="input-text"
                        type="text"
                        v-model="username"
                        placeholder="Username"
                      />
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <span> Phone number: </span>
                  <v-row>
                    <v-col cols="12">
                      <input
                        class="input-text"
                        type="text"
                        v-model="listData.phone"
                        placeholder="Username"
                      />
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </div>
            <div>
              <span>Email:</span>
              <v-row>
                <v-col cols="12">
                  <input
                    class="input-text"
                    type="text"
                    v-model="username"
                    placeholder="Username"
                  />
                </v-col>
              </v-row>
            </div>
            <div class="float-right mt-5">
              <v-btn>Book now</v-btn>
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
.text-color {
  color: rgb(73, 190, 110);
}
.input-text {
  width: 100%;
  /* outline: none; */
  outline-color: #ee8a6a;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
