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
  <v-item-group style="margin: 0 auto" mandatory>
    <v-container>
      <v-row>
        <template v-for="item in desserts" :key="item.id">
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
