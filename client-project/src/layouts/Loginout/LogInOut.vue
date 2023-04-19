<script setup lang="ts">
import { ref } from "vue";
import LogInOutItem from "./LogInOutItem";
const navItem = ref(LogInOutItem);
</script>
<template>
  <div class="d-flex justify-center float-right">
    <v-list class="pl-16 ml-16 d-flex justify-center">
      <template v-for="(item, i) in navItem" :key="i">
        <v-list-item :to="item.to" rounded="lg" class="mb-1 mr-2">
          <v-list-item-avatar start class="v-list-item-avatar--start">
          </v-list-item-avatar>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>
<style>
.v-list-item--active {
  background-color: #ee8a6a;
  color: white;
}
</style>
