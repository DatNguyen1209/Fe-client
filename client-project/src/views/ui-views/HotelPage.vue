<script setup>
import { computed, onMounted, ref } from "vue";
import router from "@/router";
import axios from "axios";
const desserts = ref([]);
const search_hotel = ref("");
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
const filterHotel = (desserts) => {
  return search_hotel.value
    ? desserts.value.filter((dessert) =>
        dessert.hotelName.toLowerCase().match(search_hotel.value.toLowerCase())
      )
    : desserts.value;
};
const getDataFilter = computed(() => {
  return filterHotel(desserts);
});
</script>
<template>
  <v-item-group style="margin: 0 auto" mandatory>
    <v-container>
      <v-row class="d-flex align-center">
        <v-col cols="11">
          <input
            class="w-100 input-search bg-yellow-lighten-4"
            v-model="search_hotel"
            type="text"
            placeholder="Nhập tên khách sạn"
          />
        </v-col>
        <v-col cols="1">
          <button>
            <v-icon class="pa-6 text-white color-icon"> mdi-magnify </v-icon>
          </button>
        </v-col>
      </v-row>
      <v-row>
        <template v-for="item in getDataFilter" :key="item.id">
          <v-col class="" cols="4">
            <div @click="router.push('/hotels/' + item.id)" class="hover-scale">
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
    </v-container>
  </v-item-group>
</template>
<style>
.input-search {
  outline: none;
  padding: 12px;
  border-radius: 12px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.color-icon {
  background-color: #ee8a6a;
  border-radius: 10px;
}
::placeholder {
  color: gray;
}
</style>
