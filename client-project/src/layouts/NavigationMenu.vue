<script setup lang="ts">
import { ref } from "vue";

import NavigatinItem from "./NavigationItem";
const navItem = ref(NavigatinItem);
</script>
<template>
  <div class="d-flex justify-center">
    <v-list class="d-flex justify-center">
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
.v-toolbar__content {
  display: flex;
  justify-content: space-between !important;
}
.v-list-item--active {
  background-color: #ee8a6a;
  color: white;
}
</style>
