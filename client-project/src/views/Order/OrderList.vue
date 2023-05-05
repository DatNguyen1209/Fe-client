<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const orderList = ref([]);
const dialog = ref(false);
onMounted(() => {
  getData();
});
const userId = localStorage.getItem("id");
const getData = async () => {
  try {
    const res = await axios.get(
      "http://localhost:8080/api/v1/user/getUserById/" + userId
    );
    console.log(res.data.orderHotelDetails);
    orderList.value = res.data.orderHotelDetails;
  } catch (e) {
    console.log(e);
  }
};
// const dialogDelete = async () => {
//   try{
//    const deleteOrder = await axios.delete("")
//   }
// }
const openDelete = (data) => {
  dialog.value = true;
};
</script>
<template>
  <v-container>
    <v-row class="bg-white mt-4">
      <v-col cols="6">
        <span class="pl-3">Information</span>
      </v-col>
      <v-col cols="6">
        <v-row class="pr-3">
          <v-col cols="3">
            <span>Price</span>
          </v-col>
          <v-col cols="3">
            <span>Day</span>
          </v-col>
          <v-col cols="3">
            <span>Total Money</span>
          </v-col>
          <v-col class="text-center" cols="3">
            <span>Operation</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <div>
      <v-row v-for="item in orderList" :key="item.id" class="mt-5 bg-white">
        <v-col cols="6">
          <button>
            <h3 class="pl-3 pr-3">{{ item.hotelName }}</h3>
          </button>
        </v-col>
        <v-col class="text-center" cols="6">
          <button class="btn-acction text-center float-right mr-10">
            Trả phòng
          </button>
        </v-col>
        <v-divider class="pr-3"></v-divider>
        <v-col cols="12">
          <v-row class="pr-3 pl-3">
            <v-col cols="6">
              <v-row>
                <v-col cols="3">
                  <img class="w-100" :src="`${item.image}`" alt="" />
                </v-col>
                <v-col cols="4">
                  <span>{{ item.roomName }}</span>
                </v-col>
                <v-col cols="3">
                  <span>{{ item.bedType }}</span>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-col cols="3">
                  <span class="color-pri mt-6">{{ item.price }} đ</span>
                </v-col>
                <v-col cols="3">
                  <span>Day</span>
                </v-col>
                <v-col cols="3">
                  <span>Total Money</span>
                </v-col>
                <v-col class="text-center" cols="3">
                  <v-row>
                    <v-col cols="12">
                      <button class="text-underline">Sửa</button>
                    </v-col>
                    <v-col cols="12">
                      <button @click="openDelete(item)" class="text-underline">
                        Hủy
                      </button>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <template>
      <v-row justify="space-around">
        <v-dialog
          v-model="dialog"
          transition="dialog-top-transition"
          persistent
          width="auto"
        >
          <v-card>
            <v-card-title class="text-h5">
              This action will be permanently deleted!
            </v-card-title>
            <v-card-text
              >Are you sure you want to cancel your booking?</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red-darken-1"
                variant="text"
                @click="dialog = false"
              >
                Disagree
              </v-btn>
              <v-btn
                color="green-darken-1"
                variant="text"
                @click="dialogDelete"
              >
                Agree
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </v-container>
</template>
<style>
.text-underline {
  text-decoration: underline;
}
.text-underline:hover {
  color: #ee8a6a;
}
.color-pri {
  color: #ee8a6a;
}
.btn-acction {
  background-color: #ee8a6a;
  padding: 4px;
  border-radius: 4px;
  color: white;
}
</style>
